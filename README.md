# Express REST API for User Management

 REST API built using Express.js for managing users. It supports basic CRUD operations (Create, Read, Update, Delete) and stores data in a JSON file (MOCK_DATA.json).

## Features
- Get all users: Retrieve a list of all users.
- Get a single user: Retrieve details of a specific user by ID.
- Create a new user: Add a new user.
- Delete a user: Remove a user from the database by ID.
- Update a user: Modify details of an existing user by ID.

## Technologies Used
Node.js: Runtime environment.

Express.js: Web framework for building the API.

JSON: Data storage format.

## API Endpoints
### Method: GET
Get All Users
```
URL: /api/users
```
Get a Single User
```
/api/users/:id
```
### Screenshots
<img width="1440" alt="nodemon_started" src="https://github.com/user-attachments/assets/54e19d25-b4a2-4f62-bf31-9d3877b6741f" />
<img width="1440" alt="GET" src="https://github.com/user-attachments/assets/6926f494-2c41-48c7-94d9-7b5f02b7cf88" />
<img width="1440" alt="GET user by id" src="https://github.com/user-attachments/assets/88848b7f-4522-4d64-a2b0-1dd7997115e0" />

### Method: POST
Create a New User
```
/api/users
```
### Screenshots
<img width="1440" alt="POST" src="https://github.com/user-attachments/assets/51f0c40c-40ea-423d-858d-bffb7d3b2539" />
<img width="1440" alt="POST_Updated" src="https://github.com/user-attachments/assets/70548342-539c-4cd3-963a-e5cfcb63284d" />

### Method: DELETE
```
URL: /api/users/:id
```
### Screenshots
<img width="1440" alt="DELETE" src="https://github.com/user-attachments/assets/09d086af-94cf-4b97-8fec-837a353e4598" />
<img width="1440" alt="1002_deleted" src="https://github.com/user-attachments/assets/24c97638-531c-4b7f-b8a2-277abbf30841" />

### Method: PATCH (Update a User)
```
URL: /api/users/:id
```
### Screenshots
<img width="1440" alt="PATCH" src="https://github.com/user-attachments/assets/947541b6-3d91-4c83-9a80-1069221b3c59" />
<img width="1440" alt="1003_updated" src="https://github.com/user-attachments/assets/865027e5-765d-4bbf-9b3f-fd540778cc4b" />

## Contributing
If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. 
