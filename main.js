
const { app, BrowserWindow } = require('electron');


// Function to create the main application window
function createWindow() {
  // Create a new BrowserWindow instance
  const mainWindow = new BrowserWindow({
    width: 800, 
    height: 600, 
    webPreferences: {
      
    }
  });

  
  mainWindow.loadFile('src/index.html');
}

// Event: app is ready to create browser windows
app.on('ready', createWindow);

