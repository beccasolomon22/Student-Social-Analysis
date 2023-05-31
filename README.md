# Social Impacts on College Students: 

Collaborators: Sabrina Fernandez, Brennan Copp, Rebecca Solomon

  This project aims to investigate the social impacts on college students by analyzing graduation and withdrawal rates based on gender and ethnicity in universities across the United States of America. The data used for this analysis is gathered from the US Department of Education's API, supplemented with additional research.

## With Special Focus on:
1. Graduation and Withdrawal Rates by Gender and Ethnicity
2. Faculty Demographics
3. Financial Aid

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

### Graduation Rates:
We found variations in graduation rates across different gender and ethnic groups. These differences provide insights into the challenges and successes experienced by various student populations.

First, we took at the overall graduation rates on average for all universities. What we found is that despite university population being majority students of white(non-hispanic) ethnicity, students of asian or hawaiian/pacific islander ethnicity have the highest graduation rates.

![avg grad rates](https://github.com/beccasolomon22/Student-Social-Analysis/blob/main/images/avg_compl_rate.png) 


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

### Withdrawal Rates: 
The analysis also highlighted variations in withdrawal rates among different gender and ethnic groups, which can indicate barriers or difficulties faced by specific demographics.


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
[The Impact of White Teachers on the Academic Achievement of Black Students](https://files.eric.ed.gov/fulltext/EJ839497.pdf)
[More student or faculty diversity on campus leads to lower racial gaps in graduation rates](https://theconversation.com/more-student-or-faculty-diversity-on-campus-leads-to-lower-racial-gaps-in-graduation-rates-181924)
[Demographic trends and economic well-being](https://www.pewresearch.org/social-trends/2016/06/27/1-demographic-trends-and-economic-well-being/)
[Income and Wealth in the United States: An Overview of Recent Data](https://www.pgpf.org/blog/2023/02/income-and-wealth-in-the-united-states-an-overview-of-recent-data)
[The importance of a diverse teaching force](https://www.brookings.edu/research/the-importance-of-a-diverse-teaching-force/)
[Race/ethnicity of college faculty](https://nces.ed.gov/fastfacts/display.asp?id=61)
[Consider Faculty Diversity When Applying to College](https://www.usnews.com/education/best-colleges/articles/consider-faculty-diversity-when-applying-to-college#:~:text=The%20majority%20of%20full%2Dtime,time%20U.S.%20faculty%20were%20white.)
[College Dropout Rates: 2023 Statistics by Race, Gender & Income](https://research.com/universities-colleges/college-dropout-rates)
[The Significant Gender Gap in College Graduation Rates](https://www.wiareport.com/2022/11/the-significant-gender-gap-in-college-graduation-rates/#:~:text=Some%2066.4%20percent%20of%20all,for%2Dprofit%20colleges%20and%20universities)
[Status and Trends in the Education of Racial and Ethnic Groups](https://nces.ed.gov/programs/raceindicators/indicator_red.asp)
[Diversity in Higher Education: Facts and Statistics](https://www.bestcolleges.com/research/diversity-in-higher-education-facts-statistics/#fn-1)
[Visualizing the U.S. Population by Race](https://www.visualcapitalist.com/visualizing-u-s-population-by-race/)
