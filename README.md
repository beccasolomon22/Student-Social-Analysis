# Social Impacts on College Students: 

Collaborators: Sabrina Fernandez, Brennan Copp, Rebecca Solomon

  This project aims to investigate the social impacts on college students by analyzing graduation and withdrawal rates based on gender and ethnicity in universities across the United States of America. The data used for this analysis is gathered from the US Department of Education's API, supplemented with additional research.

## With Special Focus on:
1. Graduation and Withdrawal Rates by Gender and Ethnicity
2. Faculty Demographics
3. Financial Aid

## Table of Contents
1. Motivation
2. Tools Used
3. Methodology
4. Findings
5. Conclusion
6. Acknowledgements
7. Future Work
8. Data Sources

## Motivation
Higher education plays a crucial role in shaping individuals' lives and can have far-reaching social implications. By examining graduation and withdrawal rates, we aim to shed light on the disparities and challenges faced by different gender and ethnic groups in college settings. Understanding these social impacts is essential for promoting equity and inclusivity in higher education.

## Tools Used
1. Jupyter Notebook:
    - Python/Pandas/Matplotlib
    - API calls
    - Data Cleaning
    - Some visualizations

2. Javascript/HTML/CSS
    - Interactive visualizations
    - Webpage design
    - Styling

3. PGAdmin 4
    - Build Database
    - Store data tables
    - Query from the Database



## Methodology
### Our analysis involved the following steps:

1. Data Retrieval: We obtained relevant data from the US Department of Education's API, focusing on graduation rates, withdrawal rates, gender, and ethnicity.
2. Data Preprocessing: The retrieved data was cleaned, standardized, and processed to ensure consistency and accuracy.
3. Exploratory Data Analysis: We conducted exploratory analysis to gain insights into the overall trends and patterns in graduation and withdrawal rates among different gender and ethnic groups.
4. Statistical Analysis: We performed statistical tests and calculations to determine significant differences in graduation rates by student demographic and overall faculty diversity as well as withdrawal rates and average debt between gender groups.
5. Visualization: The results were visualized using appropriate graphs, charts, and statistical visualizations to enhance understanding and interpretation.



## Findings
Our analysis revealed several significant findings:

### Graduation Rates/Faculty Demographics:
We found variations in graduation rates across different gender and ethnic groups. These differences provide insights into the challenges and successes experienced by various student populations.

First, we took at the overall graduation rates on average for all universities. What we found is that despite university population being majority students of white(non-hispanic) ethnicity, students of asian or hawaiian/pacific islander ethnicity have the highest graduation rates.

![avg grad rates](https://github.com/beccasolomon22/Student-Social-Analysis/blob/main/images/avg_compl_rate.png) 

The first comparisons we did were on the graduation rates of students compared to the representation of the same ethnicity in each school. The results we got were surprising. In every case there was not a significant correlation between the two values with all the r squared values being below .4. Along with this, the slopes of the linear regression lines vary between positive and negative across the board. However, despite these finding we did notice a trend. When it came to faculty demographics, white faculty demographics seem to be farther to the right (between 50-100% representation) whereas every other faculty demographic was far to the left (0-20% respresentation). 

From this discovery, we then took a look at comparing all student demographic graduation rates to just the percentage of white faculty. Immediately we saw a change in the overall results. Even though there was not a significant statistical correlation, there was a more obvious downward trend in almost all the graphs. In almost every student demographic we see that the less white faculty the higher the graduation rates. The only cases where we don't see this trend are the student demographic groups that have much lower numbers.

#### Graduation Rate Per Ethnicity VS Faculty Demographic
Same Ethnicity for Both Students and Faculty          |   Students of all Ethnities with Just White Faculty Demographic
:-----------------------------------------------------------------:|:-----------------------------------------------------------------:
![stu_fac_white](https://github.com/beccasolomon22/Student-Social-Analysis/blob/main/images/stud_fac_white.png) | ![stu_white fac_white](https://github.com/beccasolomon22/Student-Social-Analysis/blob/main/images/stud_white_fac_white.png)
:-----------------------------------------------------------------:|:-----------------------------------------------------------------:
![stu_fac_2](https://github.com/beccasolomon22/Student-Social-Analysis/blob/main/images/stud_fac_2.png)  | ![stu_2 fac_white](https://github.com/beccasolomon22/Student-Social-Analysis/blob/main/images/stud_2_fac_white.png)
:-----------------------------------------------------------------:|:-----------------------------------------------------------------:
![stu_fac_hapac](https://github.com/beccasolomon22/Student-Social-Analysis/blob/main/images/stud_fac_hp.png) | ![stu hapac fac_white](https://github.com/beccasolomon22/Student-Social-Analysis/blob/main/images/stud_hapac_fac_white.png)
:-----------------------------------------------------------------:|:-----------------------------------------------------------------:
![stu_fac_his](https://github.com/beccasolomon22/Student-Social-Analysis/blob/main/images/stud_fac_his.png)  | ![stu his fac_white](https://github.com/beccasolomon22/Student-Social-Analysis/blob/main/images/stud_his_fac_white.png)
:-----------------------------------------------------------------:|:-----------------------------------------------------------------:
![stu_fac_black](https://github.com/beccasolomon22/Student-Social-Analysis/blob/main/images/stud_fac_black.png) |  ![stu black fac_white](https://github.com/beccasolomon22/Student-Social-Analysis/blob/main/images/stud_black_fac_white.png)
:-----------------------------------------------------------------:|:-----------------------------------------------------------------:
![stu_fac_asian](https://github.com/beccasolomon22/Student-Social-Analysis/blob/main/images/stud_fac_asian.png) |  ![stu asian fac_white](https://github.com/beccasolomon22/Student-Social-Analysis/blob/main/images/stud_asian_fac_white.png)
:-----------------------------------------------------------------:|:-----------------------------------------------------------------:
![stu_fac_ai](https://github.com/beccasolomon22/Student-Social-Analysis/blob/main/images/stud_fac_ai.png) |  ![stu ai fac_white](https://github.com/beccasolomon22/Student-Social-Analysis/blob/main/images/stud_ai_fac_white.png) 

These two discoveries then led us to looking further into Faculty Demographics because we wanted to understand why the first set of graphs leaned so far to either side. 

When we take a look at the average faculty demographics across all school in the dataset, we see that white faculty members make up about 67% of all school faculty, leaving just 33% from all other demographics (the highest being less than than 12% representation). While these numbers didn't necessarily surprise us, seeing the vast difference between them brought a whole new understanding, as well as more questions. 

![avg faculty demo bar](https://github.com/beccasolomon22/Student-Social-Analysis/blob/main/images/avg_fac_demo.png)

The main question we wanted to answer after seeing this result was: How does the respresentations of different demographics in schools compare to that of the US population as a whole?

#### Faculty Demographics   VS   US Population
![faculty vs us](https://github.com/beccasolomon22/Student-Social-Analysis/blob/main/images/faculty_vs_us_pop.png)

The representation of faculty members of white ethnicity is currently about 7% higher than that of the US Population. So while the US Population is made up of about 40% all other Demographics we only see about 33% representation of those Demographics in the College Education System. With the predicted trend of that 40% rising over the course of the next years to over 50%, it will be interesting to see if the representation in our colleges also follows that trend. 

Remaining questions:
1. Will the trend in our population's demographic growth result is a similar change in our faculty demographic representation?
2. If so, will we see higher graduation rates for all demographics at a higher statistical significance?


### Withdrawal Rates: 
The analysis also highlighted variations in withdrawal rates among female vs male students, which can indicate barriers or difficulties faced by specific demographics. With 57% of our college students being female and 43% male, we wanted to see if this difference in attendance would have a similar difference in withdrawal rates. Since females are higher population in schools, would they also have a higher withdrawal rate. However our findings indicated the opposite. 

Withdrawal Rates after 2 years:
![Withdrawal Rates 2 years](https://github.com/beccasolomon22/Student-Social-Analysis/blob/main/images/withdrawal_2years.png)

Withdrawal Rates after 3 years:
![Withdrawal Rates 2 years](https://github.com/beccasolomon22/Student-Social-Analysis/blob/main/images/withdrawal_3years.png)



## Conclusion
By investigating graduation and withdrawal rates by gender and ethnicity, this project offers valuable insights into the social impacts on college students in the United States. These findings can contribute to ongoing efforts to address disparities and promote inclusive practices within higher education institutions. It is our hope that this research will inform policymakers, educators, and researchers in their endeavors to create a more equitable educational landscape.

## Acknowledgements
We would like to express our gratitude to the US Department of Education for providing access to their API and the valuable data used in this analysis. Additionally, we would like to thank the research community for their contributions to understanding the social impacts on college students and promoting equity in education.

## Future Work
This project serves as a starting point for investigating social impacts on college students. Future work could include:

1. Deepening the analysis by considering additional factors such as socioeconomic status, first-generation status, and academic majors.
2. Exploring the impact of institutional characteristics, such as funding, resources, and support systems, on graduation and withdrawal rates.
3. Investigating the long-term outcomes and career trajectories of college students based on gender and ethnicity.

We welcome contributions and collaborations to expand the scope of this project and further our understanding of the social impacts on college students. Feel free to reach out and join us in making a positive difference in higher education.

## Data Sources:
We utilized the US Department of Education's API to access a comprehensive dataset on college students' outcomes. This API provides detailed information on graduation rates, withdrawal rates, as well as demographic data for students across various universities in the United States. Additional research was gathered from other sources.

### Links
1. [US Department of Education College Scoreboard](https://collegescorecard.ed.gov/data/)
2. [The Impact of White Teachers on the Academic Achievement of Black Students](https://files.eric.ed.gov/fulltext/EJ839497.pdf)
3. [More student or faculty diversity on campus leads to lower racial gaps in graduation rates](https://theconversation.com/more-student-or-faculty-diversity-on-campus-leads-to-lower-racial-gaps-in-graduation-rates-181924)
4. [Demographic trends and economic well-being](https://www.pewresearch.org/social-trends/2016/06/27/1-demographic-trends-and-economic-well-being/)
5. [Income and Wealth in the United States: An Overview of Recent Data](https://www.pgpf.org/blog/2023/02/income-and-wealth-in-the-united-states-an-overview-of-recent-data)
6. [The importance of a diverse teaching force](https://www.brookings.edu/research/the-importance-of-a-diverse-teaching-force/)
7. [Race/ethnicity of college faculty](https://nces.ed.gov/fastfacts/display.asp?id=61)
8. [Consider Faculty Diversity When Applying to College](https://www.usnews.com/education/best-colleges/articles/consider-faculty-diversity-when-applying-to-college#:~:text=The%20majority%20of%20full%2Dtime,time%20U.S.%20faculty%20were%20white.)
9. [College Dropout Rates: 2023 Statistics by Race, Gender & Income](https://research.com/universities-colleges/college-dropout-rates)
10. [The Significant Gender Gap in College Graduation Rates](https://www.wiareport.com/2022/11/the-significant-gender-gap-in-college-graduation-rates/#:~:text=Some%2066.4%20percent%20of%20all,for%2Dprofit%20colleges%20and%20universities)
11. [Status and Trends in the Education of Racial and Ethnic Groups](https://nces.ed.gov/programs/raceindicators/indicator_red.asp)
12. [Diversity in Higher Education: Facts and Statistics](https://www.bestcolleges.com/research/diversity-in-higher-education-facts-statistics/#fn-1)
13. [Visualizing the U.S. Population by Race](https://www.visualcapitalist.com/visualizing-u-s-population-by-race/)

