# Trading Journal Application

## Overview
The Trading Journal Application is a Progressive Web App (PWA) designed to help traders track their trades, analyze performance, and make informed decisions. It is a lightweight, offline-capable tool for active traders to record and reflect on their trading activities.

## Features
- 📝 **Trade Tracking**: Log details of each trade including entry and exit points, trade size, and fees.
- 📊 **Performance Analysis**: Analyze your performance with metrics such as win/loss ratio, average profit/loss, and more.
- 📱 **Progressive Web App**: Works offline, installable on mobile and desktop devices.
- 💾 **Local Storage**: All data is stored locally in your browser - no account needed.
- 🎨 **Responsive Design**: Fully responsive and works on all devices.

## Installation

### Option 1: Online (Easiest - No Installation Required)
Simply visit the live application:
[https://aflah012.github.io/Trading-Jurnal/](https://aflah012.github.io/Trading-Jurnal/)

You can also install it as an app:
- **On Mobile**: Open the link, tap the share button, and select "Add to Home Screen"
- **On Desktop**: Open the link, click the install button (+ icon) in the address bar

### Option 2: Run Locally (For Development)
1. Clone the repository:
   ```bash
   git clone https://github.com/Aflah012/Trading-Jurnal.git
   cd Trading-Jurnal
   ```

2. Start a local web server (choose one):
   
   **Using Python 3:**
   ```bash
   python -m http.server 8000
   ```
   
   **Using Python 2:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   
   **Using Node.js:**
   ```bash
   npx http-server
   ```

3. Open your browser and go to:
   ````
   http://localhost:8000
   ````

## Usage
Once the application is running, you can:
- ✅ Add a new trade to your journal
- ✅ Review past trades and their outcomes
- ✅ Analyze your trading strategy using performance metrics
- ✅ Use the app offline - data is saved locally in your browser

## Technology Stack
- **HTML5** - Structure and PWA manifest
- **CSS3** - Styling and responsive design
- **JavaScript** - Application logic and offline functionality
- **Service Worker** - Offline support

## File Structure
```
Trading-Jurnal/
├── index.html       # Main application file
├── sw.js           # Service Worker for offline support
├── manifest.json   # PWA configuration
├── icon-192.png    # App icon
├── LICENSE         # MIT License
└── README.md       # This file
```

## Contribution
Contributions are welcome! If you have suggestions for improving the application, please feel free to submit a pull request or open an issue.

## License
This project is licensed under the MIT License - see the LICENSE file for details.