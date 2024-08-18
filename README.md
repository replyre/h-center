# Help Center API Assignment

- The Front-end Theory Questions are answered in `frontend-answer.md`.

## Project Overview

This project is a Help Center application, consisting of a frontend and a backend. The frontend is built using React and Tailwind CSS, while the backend is built using Node.js, Express.js, MongoDB, and Mongoose. The application allows users to manage "Help Center" cards that represent different sections of a help center, such as "Branches," "Manage Your Account," "Manage Billing," etc.

### Project Structure:

- **Frontend**: Located in the `Frontend` folder
- **Backend**: Located in the `Backend` folder

---

## Getting Started

### Prerequisites

Before you begin ensure you have **Node.js** (v14.x or higher) installed.

### Cloning the Repository

```bash
git clone https://github.com/replyre/h-center.git
cd h-center
```

---

## Backend Setup

### 1. Navigate to the `Backend` folder

```bash
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env` file in the `backend` directory with the following content:

```
MONGO_URL= **your MongoDB setup URL (I have used Compass one)**
PORT=5000
```

- **`MONGO_URL`**: The connection string for your MongoDB instance.
- **`PORT`**: The port on which the backend server will run. (Default: 5000)
- **NOTE**: If you change port here (other than 5000), please change the API URL in front-end as well `FrontEnd\src\components\MainContainer`
### 4. Start the Backend Server

```bash
npm start
```

The backend server will start on `http://localhost:5000`. You can check its status by visiting `http://localhost:5000/ping`.

### API Endpoints

- **POST /api/cards**: Add a new card
- **GET /api/cards**: Retrieve all cards
- **GET /api/cards/:title**: Retrieve a specific card by its title

---

## Frontend Setup

### 1. Navigate to the `frontend` folder

```bash
cd Frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 4. Start the Frontend Development Server

```bash
npm start
```

The frontend will start on `http://localhost:3000`.

---

## Running the Application

1. **Start MongoDB**: Ensure your MongoDB instance is running.
2. **Start the Backend**: Follow the backend setup instructions to start the server.
3. **Start the Frontend**: Follow the frontend setup instructions to start the development server.

Once both servers are running, you can open your browser and navigate to `http://localhost:3000` to interact with the Help Center application.

---

## Troubleshooting

- **CORS Errors**: Ensure that CORS is correctly configured in the backend to allow requests from the frontend.
- **MongoDB Connection Issues**: Verify that the `MONGO_URL` in the `.env` file is correct and that MongoDB is running.

---

## Contact

For any questions or feedback, please reach out to Rahul Gupta at replyrgupta@gmail.com.

---
