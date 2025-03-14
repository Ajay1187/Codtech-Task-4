🚀 Productivity Tracker - Chrome Extension + MERN Backend
📌 About the Project
Productivity Tracker is a Chrome extension that helps users monitor their time spent on different websites, block distractions, and generate detailed productivity reports. The project includes a React dashboard for analytics, and the data is stored securely using MongoDB.

🛠️ Tech Stack
Frontend
Chrome Extension (HTML, CSS, JavaScript)
React.js (For detailed reports & settings)
Backend
Node.js + Express.js
MongoDB (Database)
Mongoose (ODM for MongoDB)
🎯 Key Features
✅ Track Time on Websites – Logs the time spent on each website.
✅ Block Distracting Sites – Add sites like YouTube, Facebook to the blocklist.
✅ Daily Reports – Get detailed time reports in the React dashboard.
✅ Sync Data Across Devices – Data is stored in MongoDB for cross-device access.
✅ User Preferences – Customize your settings via the dashboard.

📂 Project Structure
Copy
Edit
📦 Productivity-Tracker
├── 📁 extension        # Chrome Extension Files
│   ├── manifest.json
│   ├── popup.html
│   ├── popup.js
│   ├── style.css
│   ├── background.js
│   ├── content.js
│   └── icons/
│
├── 📁 server          # Backend (Express + MongoDB)
│   ├── index.js
│   ├── database.js
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── package.json
│
├── 📁 dashboard       # React.js Dashboard
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── App.js
│   └── components/
│
└── README.md
⚡ Installation & Setup
1️⃣ Clone the Repository
sh
Copy
Edit
git clone https://github.com/yourusername/productivity-tracker.git
cd productivity-tracker
2️⃣ Setup the Backend (Express + MongoDB)
sh
Copy
Edit
cd server
npm install
Create a .env file in the server/ directory and add:
Copy
Edit
MONGO_URI=mongodb+srv://your_mongodb_connection_string
Start the backend server:
sh
Copy
Edit
npm run dev
3️⃣ Setup the React Dashboard
sh
Copy
Edit
cd dashboard
npm install
npm start
4️⃣ Load the Chrome Extension
Open Google Chrome → Go to chrome://extensions/
Enable Developer Mode (toggle in top-right).
Click "Load Unpacked" and select the /extension/ folder.
📊 Usage
Click on the extension icon to view tracked time and block sites.
Open the React Dashboard (http://localhost:3000/) for detailed reports.
Customize settings for site blocking & tracking.
💡 Future Enhancements
🚀 AI-based Focus Mode – Detects when you're distracted.
📅 Weekly Email Reports – Get automatic reports via email.
📊 Charts & Graphs – Visualize your time usage.

👨‍💻 Contributing
Want to contribute? Fork the repo and create a pull request.

📜 License
This project is MIT Licensed. Feel free to use and improve! 🚀

