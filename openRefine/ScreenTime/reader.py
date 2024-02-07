import sqlite3
import pandas as pd
from datetime import datetime
from os.path import expanduser

def query_database():
    # Connect to the SQLite database
    knowledge_db = expanduser("~/Library/Application Support/Knowledge/knowledgeC.db")
    with sqlite3.connect(knowledge_db) as con:
        cur = con.cursor()

        # Execute the SQL query to fetch data
        # Modified from https://rud.is/b/2019/10/28/spelunking-macos-screentime-app-usage-with-r/
        query = """
        SELECT
            ZOBJECT.ZVALUESTRING AS "app",
            (ZOBJECT.ZENDDATE - ZOBJECT.ZSTARTDATE) AS "usage",
            (ZOBJECT.ZSTARTDATE + 978307200) as "start_time",
            (ZOBJECT.ZENDDATE + 978307200) as "end_time",
            (ZOBJECT.ZCREATIONDATE + 978307200) as "created_at",
            ZOBJECT.ZSECONDSFROMGMT AS "tz",
            ZSOURCE.ZDEVICEID AS "device_id",
            ZMODEL AS "device_model"
        FROM
            ZOBJECT
            LEFT JOIN
            ZSTRUCTUREDMETADATA
            ON ZOBJECT.ZSTRUCTUREDMETADATA = ZSTRUCTUREDMETADATA.Z_PK
            LEFT JOIN
            ZSOURCE
            ON ZOBJECT.ZSOURCE = ZSOURCE.Z_PK
            LEFT JOIN
            ZSYNCPEER
            ON ZSOURCE.ZDEVICEID = ZSYNCPEER.ZDEVICEID
        WHERE
            ZSTREAMNAME = "/app/usage"
        ORDER BY
            ZSTARTDATE DESC
        """
        cur.execute(query)

        # Fetch all rows from the result set
        return cur.fetchall()

def transform_data(rows):
    data = []

    for r in rows:
        app = r[0]
        usage = r[1]
        time = r[3]
        device_id = r[6]
        device_model = r[7]

        # Transform the data into the desired format for InfluxDB
        data.append({
            "measurement": "usage",
            "tags": {
                "app": app,
                "device_id": device_id or "Unknown",
                "device_model": device_model or "Unknown"
            },
            "fields": {
                "usage": usage
            },
            "time": datetime.utcfromtimestamp(time)
        })

    return data

def main():
    # Query the database and fetch the rows
    rows = query_database()

    # Transform the data into InfluxDB format
    data = transform_data(rows)

    # Write the transformed data to InfluxDB
    df=pd.DataFrame(data)

    df.to_csv('st.csv')
if __name__ == "__main__":
    main()
