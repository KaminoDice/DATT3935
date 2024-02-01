![ref1]

**Evaluation Only. Created with Aspose.Words. Copyright 2003-2024 Aspose Pty Ltd.**

Data, Pt. 2:                Handling and Understanding Data

DATT3935 Week 3

January 24, 2024

Sihwa Park

Assistant Professor Computational Arts

York University

**Created with an evaluation copy of Aspose.Words. To discover the full versions of our APIs please visit: https://products.aspose.com/words/**
![ref2]

Outline

Handling Data

- Data Formats
- Data Preprocessing
- Tools

Understanding Data

- Analysis and Statistics
- Variability
- Uncertainty
- Context

Assignment

Data Visualization Pipeline

**Data Collection ![](W3_Lecture_Handling%20and%20Understanding%20Data.003.png)![](W3_Lecture_Handling%20and%20Understanding%20Data.004.jpeg)**

S. K. Card et al., *Readings in Information Visualization: Using Vision to Think.* Morgan Kaufmann Publishers, 1999.

**Created with an evaluation copy of Aspose.Words. To discover the full versions of our APIs please visit: https://products.aspose.com/words/**

DATT3935 Winter 2024 Sihwa Park
![ref3]

Handling Data

**Created with an evaluation copy of Aspose.Words. To discover the full versions of our APIs please visit: https://products.aspose.com/words/**

![ref4]

Data File Formats (Structured Data)

●

||[Delimiter-separated values](https://en.wikipedia.org/wiki/Delimiter-separated_values)|
| :- | - |

` `(DSV) formats

- [CSV](https://en.wikipedia.org/wiki/Comma-separated_values): Comma-separated values (e.g., 1**,**2023/01/24**,**”this is a string”)
- [TSV](https://en.wikipedia.org/wiki/Tab-separated_values): Tab-separated values (e.g., 1 2023/01/24 ”this is a string”)
- PSV: Pipe-separated values (e.g., 1**|**2023/01/24**|**”this is a string”)
- [JSON:](https://en.wikipedia.org/wiki/JSON) JavaScript Object Notation
- An open standard file format and data interchange format consisting of 

  *attribute*–*value* pairs and arrays

e.g., { “id”: 1, “date”: “2023/01/24”, “info”: “this is a string” }

- Markup languages
- [HTML](https://en.wikipedia.org/wiki/HTML): HyperText Markup Language
- [XML](https://en.wikipedia.org/wiki/XML): Extensible Markup Language

Data Preprocessing

Data preprocessing can refer to manipulation, filtration or augmentation of data before it is analyzed. For example:

- Selecting data ranges of interest (variables/columns, rows)
- Changing value formats (dates, text, numbers, etc.)
- Finding/fixing anomalies (missing/redundant/out-of-range values, typos, etc.)
- Combining multiple datasets (according to shared variables such as IDs, dates, location, etc)

Data Preprocessing (Advanced)

![](W3_Lecture_Handling%20and%20Understanding%20Data.007.png)

Image: <https://www.geeksforgeeks.org/data-preprocessing-in-data-mining/>

Data Example

What kind of issues does this data have?

![](W3_Lecture_Handling%20and%20Understanding%20Data.008.png)

**Created with an evaluation copy of Aspose.Words. To discover the full versions of our APIs please visit: https://products.aspose.com/words/**

DATT3935 Winter 2024 Sihwa Park
![ref5]Tools 

Text Editor  ![](W3_Lecture_Handling%20and%20Understanding%20Data.010.png)(Sublime Text) 

Google Sheets,  ![](W3_Lecture_Handling%20and%20Understanding%20Data.011.png)Microsoft Excel,  and Apple Numbers 

[OpenRefine ](https://openrefine.org/)![](W3_Lecture_Handling%20and%20Understanding%20Data.012.png)

a free, open source  tool for working  with messy data  

Python ![](W3_Lecture_Handling%20and%20Understanding%20Data.013.png)

with a Jupyter  Notebook  environment such  as [Google Colab, ](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjz7ubakvaDAxXIHzQIHRHnBK8QFnoECBMQAQ&url=https%3A%2F%2Fcolab.research.google.com%2F&usg=AOvVaw3A5aPK2kLFzKOzb6sOckVw&opi=89978449) and libraries for  data analysis and  visualization such  as [pandas ](https://pandas.pydata.org/)

**Created with an evaluation copy of Aspose.Words. To discover the full versions of our APIs please visit: https://products.aspose.com/words/**

DATT3935 Winter 2024 Sihwa Park 
![ref6]

Understanding Data

**Created with an evaluation copy of Aspose.Words. To discover the full versions of our APIs please visit: https://products.aspose.com/words/**

![ref7]

Analysis and Statistics

John Tukey, one of the first  ![](W3_Lecture_Handling%20and%20Understanding%20Data.016.png)data scientists who use a  computer to analyze data in  1977.  

He developed a programming  language *Prim-9* that allows  the analyst to visualize the  data in 9 different dimensions. 

<https://www.youtube.com/watch?v=B7XoW2qiFUA>

Analysis and Statistics: Terms

Measures of *Central Tendency*:

- **Mean (μ)**: the average of a dataset(values)
- **Median**: the middle of an ordered dataset
- **Mode**: the most common value in a dataset

Measures of *Variability*:

- **Range**: difference between the highest and lowest value in a dataset
- **Variance (σ2)**: measures dispersion around the mean
- **Standard Deviation (σ)**: the square root of variance

Measures of *Relationships between Variables*:

- **Covariance**: measures the variance between two or more variables
- **Correlation**: measures the strength of a relationship between two variables and ranges from -1 to 1 (Find more details [here or](https://terenceshin.medium.com/week-2-52-stats-cheat-sheet-ae38a2e5cdc6) [here)](https://web.mit.edu/~csvoss/Public/usabo/stats_handout.pdf)

**Created with an evaluation copy of Aspose.Words. To discover the full versions of our APIs please visit: https://products.aspose.com/words/**

DATT3935 Winter 2024 Sihwa Park
![ref8]Calculating mean and standard deviation

A class of eight students’ scores (out of 10) on a test:

2, 4, 4, 5, 5, 7, 9

The mean is the average: 5.

![](W3_Lecture_Handling%20and%20Understanding%20Data.018.png)

**Created with an evaluation copy of Aspose.Words. To discover the full versions of our APIs please visit: https://products.aspose.com/words/**

DATT3935 Winter 2024 Sihwa Park
![ref9]Calculating mean and standard deviation

A class of eight students’ scores (out of 10) on a test:

2, 4, 4, 5, 5, 7, 9

For the standard deviation, 1) calculate the deviations of each data point from the mena, and square the result of each:

\3) and the standard deviation is equal to the square root of the variance:![](W3_Lecture_Handling%20and%20Understanding%20Data.020.jpeg)

\2) The variance is the mean of these values: ![](W3_Lecture_Handling%20and%20Understanding%20Data.021.png)

**Created with an evaluation copy of Aspose.Words. To discover the full versions of our APIs please visit: https://products.aspose.com/words/**

DATT3935 Winter 2024 Sihwa Park ![](W3_Lecture_Handling%20and%20Understanding%20Data.022.png)
![ref10]

Analysis and Statistics *“Never trust summary statistics alone.” - [Albert Cairo*](http://www.thefunctionalart.com/2016/08/download-datasaurus-never-trust-summary.html)![](W3_Lecture_Handling%20and%20Understanding%20Data.024.jpeg)*

Pitfall: [Same Stats, Different Graphs](https://www.research.autodesk.com/publications/same-stats-different-graphs/)

J. Matejka and G. Fitzmaurice, *Same Stats, Different Graphs: Generating Datasets with Varied Appearance and Identical Statistics through Simulated Annealing*, in Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems, pp. 1290–1294. 2017.![ref11]![ref12]

**Created with an evaluation copy of Aspose.Words. To discover the full versions of our APIs please visit: https://products.aspose.com/words/**

DATT3935 Winter 2024 Sihwa Park
![ref13]

Variability

Looking at data is finding patterns, trends, and cycles, or measuring total counts, means, and other aggregate measurements…

- But, the ***fluctuations*** in the data might be the most interesting and important part.

**Created with an evaluation copy of Aspose.Words. To discover the full versions of our APIs please visit: https://products.aspose.com/words/**

DATT3935 Winter 2024 Sihwa Park
![ref14]Automobile Crashes in the US between 2001 and 2010![](W3_Lecture_Handling%20and%20Understanding%20Data.029.jpeg)

363,839

Source: National Highway Traffic Safety Administration

![](W3_Lecture_Handling%20and%20Understanding%20Data.030.png)

![](W3_Lecture_Handling%20and%20Understanding%20Data.031.jpeg)

![](W3_Lecture_Handling%20and%20Understanding%20Data.032.jpeg)

**Created with an evaluation copy of Aspose.Words. To discover the full versions of our APIs please visit: https://products.aspose.com/words/**

Image: N. Yau, *Data Points: Visualization That Means Something*. 2013.

DATT3935 Winter 2024 Sihwa Park
![ref15]

Variability

Looking at data is finding patterns, trends, and cycles, or measuring total counts, means, and other aggregate measurements…

- But, the ***fluctuations*** in the data might be the most interesting and important part.
- The mean, median, and total tell you only a small part of the story.
- Looking at the data beyond those measurements** could show the interesting details that you should focus on for both decision making and storytelling. e.g. an outlier that stands out from the crowd, the changes over time, cycles or regular occurrences

**Created with an evaluation copy of Aspose.Words. To discover the full versions of our APIs please visit: https://products.aspose.com/words/**

DATT3935 Winter 2024 Sihwa Park
![ref8]Uncertainty ![](W3_Lecture_Handling%20and%20Understanding%20Data.034.jpeg)

When data is a collection  estimates (i.e., a sample), data  is **an educated guess** about a  full population that has  **uncertainty** attached to it. 

**A margin of error** means the  actual count or percentage is  likely within a given range. 

Source: 2010 American Community Survey 

**Created with an evaluation copy of Aspose.Words. To discover the full versions of our APIs please visit: https://products.aspose.com/words/**

DATT3935 Winter 2024 Sihwa Park 
![ref8]Uncertainty

x![](W3_Lecture_Handling%20and%20Understanding%20Data.035.jpeg)

Image: N. Yau, *Data Points: Visualization That Means Something*. 2013.

**Created with an evaluation copy of Aspose.Words. To discover the full versions of our APIs please visit: https://products.aspose.com/words/**

DATT3935 Winter 2024 Sihwa Park
![ref16]

Context

Understanding the context of data helps you decide what the numbers represent, how to interpret them, and find the fascinating bits, which leads to worthwhile visualization. To this end, you have to know the **metadata**:

- **Who** collected the data? Who is the data about?
- **How** was the data collected?
- **What** surrounds the numbers? What does the data represent?
- **When** was the data collected?
- **Where** did the data come from? Is it from the physical or digital world?
- **Why** is the data measured/collected?

**Created with an evaluation copy of Aspose.Words. To discover the full versions of our APIs please visit: https://products.aspose.com/words/**

DATT3935 Winter 2024 Sihwa Park
![ref17]

To Sum Up

- Data is an abstraction of real life, and it is complicated to make sense of it.
- To visualize data, you must understand what it is, what it represents in the real world, and in what context you should interpret it in.
- Data comes in different shapes and sizes, at various granularities, and with uncertainty attached.
- Measurements such as totals, averages, and medians are only a small part of what a data point is about.
- Data twists, turns, and fluctuates. Data can be personal, and even poetic.
- As a result, you can find visualization in many forms.

**Created with an evaluation copy of Aspose.Words. To discover the full versions of our APIs please visit: https://products.aspose.com/words/**

DATT3935 Winter 2024 Sihwa Park
![ref18]Data Report Assignment

Write a report to understand the data you have collected. To do this, you should:

- First, data preprocessing. Clean up your data using any tools. Explain what you have done for it in the report, such as missing values, duplicates, errors, etc. Provide screenshots or code snippets to show your data preprocessing steps.



|●|Describe the context of the data.||
| - | - | :- |
|●|Using any tools such as Google Sh||
||eets or Python, visualize your data with basic charts (e.g.,||
||bar/pie/line charts, scatterplot, histogram, etc.), at various granularities or scales. For example,||

**This document was truncated here because it was created in the Evaluation Mode.**
**Created with an evaluation copy of Aspose.Words. To discover the full versions of our APIs please visit: https://products.aspose.com/words/**

DATT3935 Winter 2024 Sihwa Park

[ref1]: <W3_Lecture_Handling and Understanding Data.001.png>
[ref2]: <W3_Lecture_Handling and Understanding Data.002.png>
[ref3]: <W3_Lecture_Handling and Understanding Data.005.png>
[ref4]: <W3_Lecture_Handling and Understanding Data.006.png>
[ref5]: <W3_Lecture_Handling and Understanding Data.009.png>
[ref6]: <W3_Lecture_Handling and Understanding Data.014.png>
[ref7]: <W3_Lecture_Handling and Understanding Data.015.png>
[ref8]: <W3_Lecture_Handling and Understanding Data.017.png>
[ref9]: <W3_Lecture_Handling and Understanding Data.019.png>
[ref10]: <W3_Lecture_Handling and Understanding Data.023.png>
[ref11]: <W3_Lecture_Handling and Understanding Data.025.jpeg>
[ref12]: <W3_Lecture_Handling and Understanding Data.026.jpeg>
[ref13]: <W3_Lecture_Handling and Understanding Data.027.png>
[ref14]: <W3_Lecture_Handling and Understanding Data.028.png>
[ref15]: <W3_Lecture_Handling and Understanding Data.033.png>
[ref16]: <W3_Lecture_Handling and Understanding Data.036.png>
[ref17]: <W3_Lecture_Handling and Understanding Data.037.png>
[ref18]: <W3_Lecture_Handling and Understanding Data.038.png>
