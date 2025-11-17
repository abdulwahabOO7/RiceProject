# React Firebase App

A modern React application using Firebase Realtime Database for data storage.

## Features

- ✅ React 18 with Vite
- ✅ Firebase Realtime Database integration
- ✅ Add, delete, and toggle items
- ✅ Real-time data synchronization
- ✅ Modern, responsive UI

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select an existing one
3. Enable **Realtime Database**:
   - Go to "Realtime Database" in the left sidebar
   - Click "Create Database"
   - Choose your location and start in **test mode** (for development)
4. Get your Firebase configuration:
   - Go to Project Settings (gear icon)
   - Scroll down to "Your apps" section
   - Click on the web icon (`</>`) to add a web app
   - Copy the `firebaseConfig` object

5. Update `src/firebase/config.js`:
   - Replace the placeholder values with your actual Firebase configuration:
     ```javascript
     const firebaseConfig = {
       apiKey: "your-actual-api-key",
       authDomain: "your-project-id.firebaseapp.com",
       databaseURL: "https://your-project-id-default-rtdb.firebaseio.com",
       projectId: "your-project-id",
       storageBucket: "your-project-id.appspot.com",
       messagingSenderId: "your-messaging-sender-id",
       appId: "your-app-id"
     }
     ```

### 3. Set Up Database Rules (Important!)

In Firebase Console, go to Realtime Database > Rules and update them:

**For development (test mode):**
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

**For production (secure):**
```json
{
  "rules": {
    "items": {
      ".read": true,
      ".write": true,
      "$itemId": {
        ".validate": "newData.hasChildren(['text', 'createdAt'])",
        "text": {
          ".validate": "newData.isString() && newData.val().length > 0"
        },
        "createdAt": {
          ".validate": "newData.isString()"
        },
        "completed": {
          ".validate": "newData.isBoolean()"
        }
      }
    }
  }
}
```

### 4. Run the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
├── src/
│   ├── firebase/
│   │   └── config.js      # Firebase configuration
│   ├── App.jsx             # Main app component
│   ├── App.css             # App styles
│   ├── main.jsx            # React entry point
│   └── index.css           # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## How It Works

- The app connects to Firebase Realtime Database
- Items are stored under the `items` path in the database
- Real-time listeners update the UI automatically when data changes
- Each item has:
  - `text`: The item content
  - `createdAt`: Timestamp when created
  - `completed`: Boolean for completion status

## Security Note

⚠️ **Important**: The test mode rules allow anyone to read/write your database. For production, implement proper authentication and security rules.

## License

MIT


