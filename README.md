🚀 Productivity Tracker - Chrome Extension + MERN Backend
📌 About the Project
Productivity Tracker is a Chrome extension integrated with a full MERN (MongoDB, Express.js, React, Node.js) stack backend that helps users monitor their time spent on different websites, block distractions, and generate insightful productivity reports. The solution provides:

A Chrome extension to track and block websites in real-time.

A React dashboard to view analytics and manage settings.

A secure backend using MongoDB to sync data across devices.

🛠️ Tech Stack
Frontend
🌐 Chrome Extension: Built with HTML, CSS, and JavaScript.

⚛️ React.js: For analytics dashboard and user interface.

Backend
🛠️ Node.js + Express.js: For API endpoints and business logic.

🗄️ MongoDB: Database for secure data storage.

📚 Mongoose: ODM for MongoDB integration.

🎯 Key Features
✅ Track Time on Websites: Logs time spent on each website. ✅ Block Distracting Sites: Add websites (like YouTube, Facebook) to a blocklist. ✅ Daily Reports: View detailed analytics on the React dashboard. ✅ Sync Data Across Devices: Store data securely in MongoDB for cross-device access. ✅ Customizable User Preferences: Manage settings directly from the dashboard.

📂 Project Structure
plaintext
📦 Productivity-Tracker
├── 📁 extension        # Chrome Extension Files
│   ├── manifest.json   # Defines extension settings
│   ├── popup.html      # UI for the extension
│   ├── popup.js        # Handles extension functionality
│   ├── style.css       # Styling for the extension
│   ├── background.js   # Background script for real-time tracking
│   ├── content.js      # Injected script for site interactions
│   └── icons/          # Icons used for the extension
│
├── 📁 server           # Backend (Express + MongoDB)
│   ├── index.js        # Entry point of the backend server
│   ├── database.js     # MongoDB connection logic
│   ├── models/         # Mongoose schemas for data modeling
│   ├── routes/         # API routes for client-server communication
│   ├── .env            # Environment variables
│   └── package.json    # Backend dependencies
│
├── 📁 dashboard        # React.js Dashboard
│   ├── src/            # Main source code
│   ├── public/         # Public assets
│   ├── package.json    # Frontend dependencies
│   ├── App.js          # Main React component
│   └── components/     # Reusable components
│
└── README.md           # Documentation
⚡ Installation & Setup
1️⃣ Clone the Repository
bash
git clone https://github.com/yourusername/productivity-tracker.git
cd productivity-tracker
2️⃣ Setup the Backend (Express + MongoDB)
Navigate to the server directory:

bash
cd server
npm install
Create a .env file in the server/ directory and add:

plaintext
MONGO_URI=mongodb+srv://<your_mongodb_connection_string>
Start the backend server:

bash
npm run dev
3️⃣ Setup the React Dashboard
Navigate to the dashboard directory:

bash
cd dashboard
npm install
npm start
Access the dashboard at http://localhost:3000/.

4️⃣ Load the Chrome Extension
Open Google Chrome and navigate to chrome://extensions/.

Enable Developer Mode (toggle in the top-right corner).

Click "Load Unpacked" and select the /extension/ folder.

📊 Usage
Open the Chrome extension by clicking its icon in the toolbar:

View tracked time spent on websites.

Add websites to the blocklist to reduce distractions.

Access the React dashboard at http://localhost:3000/:

View detailed daily productivity reports.

Customize preferences such as blocklist settings.

💡 Future Enhancements
🚀 AI-based Focus Mode: Automatically detects distractions and suggests focus-friendly actions.

📅 Weekly Email Reports: Get detailed time-tracking reports sent to your email.

📊 Interactive Charts & Graphs: Visualize productivity data using graphs like pie charts and bar charts.

👨‍💻 Contributing
Want to contribute? Follow these steps:

Fork the repository.

Create a new feature branch:

bash
git checkout -b feature-name
Commit your changes:

bash
git commit -m "Add feature name"
Push to your fork:

bash
git push origin feature-name
Open a pull request to the original repository.

📜 License
This project is licensed under the MIT License. Feel free to use, modify, and distribute this project.
