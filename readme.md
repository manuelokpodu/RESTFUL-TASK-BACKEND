# CREATE, GET, UPDATE, DELETE Operations for Book Management

This project provides a basic example of Create, Get, Update, Delete operations for managing book data via an API.

This is the link for my documentation - https://api.postman.com/collections/37798414-ae54b0ee-958d-400c-8f45-6666cff09e7a?access_key=PMAT-01JDHK9XSK1D6CJE7Q9VHHN77M

## Base API URL

The base URL for the API is:

```


```

## Available Endpoints

### 1. Create a New Book (POST)

- **Endpoint**: `/`
- **Description**: This endpoint allows you to create a new book by sending a POST request with user details.
- **Method**: `POST`

```json
{
  "title": "Pride and Prejudice",
  "author": "Jane Austen",
  "genre": "Romace"
}
```

- **Response**: The newly created book object.

---

### 2. Get All Books (GET)

- **Endpoint**: `/`
- **Description**: This endpoint returns a list of all books.
- **Method**: `GET`

- **Response** (example):

```json
{
  "books": [
    {
      "_id": "67445d04b9d611285771e58a",
      "title": "Be a man",
      "author": "Neil Gaiman",
      "genre": "Comedy",
      "__v": 0
    },
    {
      "_id": "67445d51b9d611285771e58c",
      "title": "Power of Love",
      "author": "Bill Graham",
      "genre": "Tragedy",
      "__v": 0
    },
    {
      "_id": "67445d7db9d611285771e58e",
      "title": "Stay with me",
      "author": "Sam Smith",
      "genre": "Romance",
      "__v": 0
    }
  ]
}
```

---

### 3. Get a Single Book by ID (GET)

- **Endpoint**: `/:bookId`
- **Description**: This endpoint retrieves a single book by their unique `bookId`.
- **Method**: `GET`

- **Route Parameter**:

  - `bookId`: The unique ID of the book you want to retrieve (replace `:bookId` with the actual book ID).

- **Example Request**:

```


```

- **Response** (example):

```json
{
  "_id": "67445d7db9d611285771e58e",
  "title": "Stay with me",
  "author": "Sam Smith",
  "genre": "Romance",
  "__v": 0
}
```

---

### 4. Update a Book by ID (PATCH)

- **Endpoint**: `/:id`
- **Description**: This endpoint updates an existing book by their `:id`.
- **Method**: `PATCH`

- **Route Parameter**:

  - `id`: The unique ID of the book you want to update (replace `:id` with the actual id).

- **Payload** (example):

```json
{
  "title": "Draculer",
  "author": "Bram Stoker",
  "genre": "Horror"
}
```

### 5. Delete a Book by ID (DELETE)

- **Endpoint**: `/:bookId`
- **Description**: This endpoint deletes a book by their `bookId`.
- **Method**: `DELETE`

- **Route Parameter**:

  - `userId`: The unique ID of the book you want to delete (replace `:bookId` with the actual book ID).

- **Example Request**:

```

- **Response**: Book deleted Successfully.

---
```
