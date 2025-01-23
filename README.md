FULL STACK TASK MANAGEMENT SYSTEM

OVERVIEW:
- This is a web application that is designed to streamline task management. It follows the MERN stack (Mongo DB, Express.js, React and Node.js). It is user friendly and helps users to track their tasks. The application caters for both administrators and users, offering comprehensive features to enhance productivity and organization.

Background:
- With the rise of remote work and dispersed teams, there is a growing need for tools that facilitate effective communication and task coordination. The Cloud-Based Task Manager addresses this need by leveraging modern web technologies to create an intuitive and responsive task management solution. The MERN stack ensures scalability, while the integration of Redux Toolkit, Headless UI, and Tailwind CSS enhances user experience and performance.

Admin Features:
1) User Management:
- Create admin accounts.
- Add and manage team members.

2) Task Assignment:
- Assign tasks to individual or multiple users.
- Update task details and status.

3) Task Properties:
- Label tasks as todo, in progress, or completed.
- Assign priority levels (high, medium, normal, low).
- Add and manage sub-tasks.

4) Asset Management:
- Upload task assets, such as images.

5) User Account Control:
- Disable or activate user accounts.
- Permanently delete or trash tasks.

User Features:
1) Task Interaction:
- Change task status (in progress, to do, completed).
- View detailed task information.

2) Communication:
- Add comments etc.

General Features:
1) Authentication and Authorization:
- User login and signup.
- Role-based access control.

2) Profile Management:
- Update user profiles.

3) Password Management:
- Change passwords securely.

4) Dashboard
- Provide a summary of user activities.
- Filter tasks into todo, in progress and completed.

Technologies Used:
- Backend;
* Node.js with Express.js

- Frontend;
* React (Vite)
* Redux Toolkit for State Managemnent
* Headless UI
* Tailwind CSS

- Database
* MongoDB for efficient and scalable data storage

SETUP INSTRUCTIONS
SERVER SETUP
* Environment Variables *
These are inside the .env file in the server folder. Here is what my .env file looks like;
    MONGODB_URI = mongodb+srv://nathanbaraka:natebaraka777@cluster0.n4lnl.mongodb.net/taskDB?retryWrites=true&w=majority&appName=Cluster0
    JWT_SECRET = syuhghjbvhjcvjvcxh
    PORT = 8801
    NODE_ENV = development     

1) Setting up Mongo
- Visit Mongo DB Atlas Website
- Create an account
- Login to MongoDB Atlas Account
- Create a  new Cluster
- Choose a Cloud provider and Region
- Configure Cluster settings
- Create Cluster
- Wait for Cluster to Deploy
- Create a Database User
- Set up IP Whitelist
- Connect to Cluster
- Configure Application
- Test the Connection
2) Create a new Database and configure the .env file with the MongoDB connection URL.

Steps To Run Server:
1. Open the project directory (i.e; cd SMART_TASK_MANAGEMENT_SYSTEM {in my case})
2. Navigate to the server directory (cd server)
3. Run 'npm i' or 'npm install' to install all the necessary packages
4. Run 'npm start' to start the server
If configuration is successful, you should see a 'Database Connecteion Established' message on the terminal.

CLIENT SIDE SETUP
Enviroment Variables
First, create the environment variables file '.env' in the client directory. Here is how mine lloks;
    VITE_APP_BASE_URL = http://localhost:8801
    VITE_APP_FIREBASE_API_KEY = AIzaSyCXBNwr3DUmAH2IZEbgKhwc_GE3zjzjiRA

Steps To Run Client:
1. Navigate into the client directory 'cd client'
2. Run 'npm run dev' to run the app on http://localhost:3000
3. Open http://localhost:3000 to view the app in your browser
