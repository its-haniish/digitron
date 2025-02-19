# Event API Documentation

### 1. Create an Event
**Endpoint:**
```
POST /event
```
**Description:**
Creates a new event record.

**Request Body:**
```json
{
    "title": "Tech Conference",
    "date": "2024-08-01",
    "location": "New York",
    "description": "A conference for tech enthusiasts."
}
```

**Response:**
```json
{
    "message": "Event created successfully",
    "event": { ... }
}
```

---

### 2. Update an Event
**Endpoint:**
```
PUT /event/:id
```
**Description:**
Updates event details by ID.

**Request Body:**
```json
{
    "title": "Updated Tech Conference",
    "date": "2024-08-05"
}
```
**Response:**
```json
{
    "message": "Event updated successfully",
    "event": { ... }
}
```

---

### 3. Delete an Event
**Endpoint:**
```
DELETE /event/:id
```
**Description:**
Deletes an event record by ID.

**Response:**
```json
{
    "message": "Event deleted successfully"
}
```

---

### 4. Get All Events
**Endpoint:**
```
GET /events
```
**Description:**
Retrieves all events.

**Response:**
```json
{
    "events": [ { ... } ]
}
```

---

### 5. Get Event by ID
**Endpoint:**
```
GET /event/:id
```
**Description:**
Retrieves an event by ID.

**Response:**
```json
{
    "event": { ... }
}
```


# Student API Documentation

### 1. Create a Student
**Endpoint:**
```
POST /student
```
**Description:**
Creates a new student record.

**Request Body:**
```json
{
    "name": "John Doe",
    "phone": 9876543210,
    "rollNo": 101,
    "branch": "CSE",
    "semester": 3,
    "competitionsParticipated": [
        {
            "competitionName": "Hackathon",
            "isPaid": true,
            "teamName": "CodeWarriors"
        }
    ]
}
```

**Response:**
```json
{
    "message": "Student created successfully",
    "student": { ... }
}
```

---

### 2. Update a Student
**Endpoint:**
```
PUT /student/:id
```
**Description:**
Updates student details by ID.

**Request Body:**
```json
{
    "name": "John Smith",
    "semester": 4
}
```
**Response:**
```json
{
    "message": "Student updated successfully",
    "student": { ... }
}
```

---

### 3. Delete a Student
**Endpoint:**
```
DELETE /student/:id
```
**Description:**
Deletes a student record by ID.

**Response:**
```json
{
    "message": "Student deleted successfully"
}
```

---

### 4. Get a Single Student
**Endpoint:**
```
GET /student/:id
```
**Description:**
Retrieves a student record by ID.

**Response:**
```json
{
    "student": { ... }
}
```

---

### 5. Get Teams
**Endpoint:**
```
GET /teams?teamName=CodeWarriors
```
**Description:**
Retrieves teams based on a query parameter `teamName`.

**Response:**
```json
{
    "teams": [ { ... } ]
}
```

---

### 6. Get Participants
**Endpoint:**
```
GET /participants
```
**Description:**
Retrieves all participants from the database.

**Response:**
```json
{
    "participants": [ { ... } ]
}
```

