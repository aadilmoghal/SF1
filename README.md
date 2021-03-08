# SF1


## Index

1. [Introduction](#Introduction)
2. [Technologies](#Technologies)
3. [Scope](#Scope)
4. [General Approach](#General_Approach)  
5. [ERD](#ERD)
6. [Project Tracking](#Project_Tracking)
7. [Front End](#Front_End)
8. [Risk Assessment](#Risk_Assessment)
9. [Testing](#Testing)
10. [Improvements](#Improvements)
11. [Bibliography](#Bibliography)



# Introduction

To create a CRUD application with utilisation of supporting tools, methodologies and technologies that encapsulate all core modules covered during training.


# Technologies

The technologies I will be using to create my CRUD application are: 

- Kanban Board: Jira

- Database: GCP Managed SQL Server

- Programming Language: Java

- Front-End: HTML, CSS, JavaScript

- Unit Tests: JUnit and Mockito

- Version Control: Git

- Cloud Server: GCP Virtual Machine



# Scope

A Jira board with full expansion on user stories, use cases and tasks needed to complete the project.

Clear Documentation from a design phase describing the architecture you will use for your project.

A detailed Risk Assessment created at the beginning of your project.

A relational database used to store data persistently for the project.

A functional application created in the OOP language, following best practices and design principles, which you have covered during training, this application needs to meet the requirements set on your Kanban Board

The application must have a functioning front-end website and integrated API.

Fully designed test suites for the application you are creating, as well as automated tests for validation of the application.

You must meet an acceptable level of test coverage in your backend and provide consistent reports and evidence that you have done so.

Code fully integrated into a Version Control System (Git).

Application deployed to a cloud-based virtual machine.

# General Approach<a name="General_Approach"></a> 

My approach is to create a food basket that allows users to insert the name of their favourite food to their basket and find out how much the total of the entire basket will be. The application will allow users to add delete and edit their basket if they decide to change a few items.

# ERD
Below is an Entity Relationship Diagram (ERD) showing the structure of the database. The reason why it is in green is because it has been implemented into my project


![](https://i.imgur.com/31p6ppE.png)

# Project Tracking<a name="Project_Tracking"></a> 

Jira was used to track the progress on my work and it was designed as a Agile Scrum Board.

![](https://i.imgur.com/jnL6h4P.jpg)
The board has been designed in order for users to make posts of tasks needed for completion. The board allows users to move tasks from left to right from 'To do' to 'Completion'.

# Front End<a name="Front_End"></a> 
Below is my final front end for the CRUD Application. 

![](https://i.imgur.com/ruTqESQ.png)
![](https://i.imgur.com/ZIcMZ1E.png)
![](https://i.imgur.com/1LVRbvw.png)

The imagine above show that the front end allow the user to Create, Read, Update and Delete food items in their basket.


# Testing
Testing was done by using JUnit for integration testing and Mockito for unit testing, as seen below.

![](https://i.imgur.com/3efR3dR.png))

The integration testing used HTTP requests to mock the repo created to see if there would be a response. The request was handled by the controlled and passed through the service. 

Mockito testing was used to make a fake repo that is not really accessible. It allows us to see if various methods work well together with each other.

# Risk Assessment<a name="Risk_Assessment"></a> 

The risk assessment of the project can be below.

![](https://i.imgur.com/NPZgJGl.png)


# Improvements

There are many different improvements that could have been made to take this Food basket idea to the next level. Some of the improvements would have been

- A login page for users to store their basket for personal use.

- A second database in order for users to access more foods.

- A search bar filter to browse different foods that they may be interested in.

- A Navbar in order for users to navigate through the page better.


# Bibliography

I would like to thank and acknowledge the QA Trainers and my friends that helped my with obstacles I came across during the development of this application.

Project by Aadil Moghal

