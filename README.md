# Idea Management API

This repository hosts a Node.js application that offers a RESTful API for managing creative ideas. Users can perform CRUD operations (Create, Read, Update, Delete) on ideas stored in-memory.

## Features

- Retrieve a list of all ideas or fetch a specific idea by its ID.
- Create new ideas with unique IDs.
- Update existing ideas based on their ID.
- Delete ideas by their ID.

## Technologies Used

- Node.js
- Express

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your local machine.

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd <repository-name>
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Running the Application

To start the server, run:
```
npm start
```

The server will run at `http://localhost:8000`.

## API Endpoints

- **GET /ideaApp/api/v1/ideas**: Retrieve all ideas.
- **GET /ideaApp/api/v1/ideas/:id**: Retrieve an idea by its ID.
- **POST /ideaApp/api/v1/ideas**: Create a new idea.
- **PUT /ideaApp/api/v1/ideas/:id**: Update an existing idea by its ID.
- **DELETE /ideaApp/api/v1/ideas/:id**: Delete an idea by its ID.

## Usage Examples

### Retrieve all ideas

GET http://localhost:8000/ideaApp/api/v1/ideas

### Retrieve an idea by ID

GET http://localhost:8000/ideaApp/api/v1/ideas/1

### Create a new idea

POST http://localhost:8000/ideaApp/api/v1/ideas

Content-Type: application/json

{
  "idea_name": "New Idea",
  "author_name": "John Doe",
  "idea_description": "A brilliant new concept"
}

### Update an idea by ID

PUT http://localhost:8000/ideaApp/api/v1/ideas/2

Content-Type: application/json

{
  "idea_name": "Updated Idea",
  "author_name": "Jane Smith",
  "idea_description": "An updated version of the idea"
}

### Delete an idea by ID

DELETE http://localhost:8000/ideaApp/api/v1/ideas/1

## Contributing

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.

---
