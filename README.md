# Code-Review-Assistant

# 🤖 AI Code Review Assistant

This project is a web application that uses an AI to review source code for readability, modularity, and potential bugs. A user can upload a code file, and the application will provide a detailed review with suggestions for improvement.

This was built as a placement assignment for Unthinkable Solutions.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Frontend:** HTML, CSS, JavaScript (no frameworks)
- **AI:** Groq API with the Llama 3.1 model
- **File Handling:** Multer.js

---

## 🚀 How to Run This Project

### Prerequisites

- You must have [Node.js](https://nodejs.org/) and npm installed on your machine.

### Step-by-Step Guide

1.  **Clone the Repository**
    ```bash
    git clone <your-github-repo-url>
    cd code-review-assistant
    ```

2.  **Install Dependencies**
    Run this command in the project's root directory:
    ```bash
    npm install
    ```

3.  **Set Up Environment Variables**
    Create a file named `.env` in the root of the project and add your Groq API key:
    ```
    GROQ_API_KEY=your_api_key_here
    ```

4.  **Run the Backend Server**
    Open a terminal and run the following command. The API server will start on `http://localhost:3000`.
    ```bash
    node index.js
    ```

5.  **Run the Frontend Server**
    Open a **second, new terminal** and run the following command. This will serve the frontend files.
    ```bash
    npx serve
    ```
    The command will give you a URL, usually `http://localhost:3001`.

6.  **Use the Application**
    Open the URL from the `serve` command (e.g., `http://localhost:3001`) in your web browser. Upload a file and get your code review!

---

## 🎥 Demo Video

https://drive.google.com/file/d/17K_xAXjP4dNqRJ0PY-YzLCGlrNtC0MJ-/view?usp=drivesdk

--------------******--------------
