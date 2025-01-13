# Typescript Task Manager Project

Author: Byron Smith

Date: 1/12/2025

Welcome to the React Typescript Task Manager Project!

### Table of Contents
1. Login Page
2. Task Dashboard
3. Create and Update Tasks

## 1. Login Page
![home](https://github.com/user-attachments/assets/0a432caa-d8a2-4280-b25c-71c1d0d135b8)

The first page you will reach is the Login page. It's very simple - just three buttons for logging in, changing your password, and registering an account. 
All three operations are handled with the Auth0 service.

![auth0login](https://github.com/user-attachments/assets/5255617f-24a7-489b-b318-70353c2bb90a)
![auth0register](https://github.com/user-attachments/assets/fafceed4-e82c-4f54-b263-4ce5bcdf0f9b)

## 2. Task Dashboard
![EmptyTaskDash](https://github.com/user-attachments/assets/a25a5577-5282-4ba7-8938-d1aee041e200)

Above is what the Task Dashboard will look like upon application startup. There are three cards that explain some of the functions in detail, and a button for 
adding a task just beneath.  After you've added some tasks, the page will look like this: 

![FullTaskDash](https://github.com/user-attachments/assets/537af37b-bc97-4883-8df4-17d0ce3f5679)

Each task will have three buttons: One to update task details, one to remove a task from the list, and one to view more task details, including the due date of
the task (this can be a goal for completion, or can be left empty), and the completion status.

![ShowDetails](https://github.com/user-attachments/assets/d9249e36-5db4-48ed-81e7-b415c45c8017)

## 3. Create and Update Tasks
![AddTask](https://github.com/user-attachments/assets/4e8122ea-2391-4fca-bcf9-5eec1604a042)

The Create and Update Tasks pages are very alike - in both forms, you will fill out only two things: the name of the task, and (optional) when you wish to have
the task completed by (Due Date).  The difference is, in the Update Tasks page, you will also have a checkbox to mark a task as complete. It is reccomended that 
you do this rather than delete tasks, unless your list of tasks is becoming cluttered.  The list will reset once you close the application as well.

![EditTask](https://github.com/user-attachments/assets/4555cb76-41b4-46bb-9275-331a4e5a4b20)
