
const { app, BrowserWindow } = require('electron');
const path = require('path');


// Function to create the main application window
function createWindow() {
  // Create a new BrowserWindow instance
  const mainWindow = new BrowserWindow({
    width: 800, 
    height: 600, 
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
      
    }
  });

  
  mainWindow.loadFile('src/index.html');
}

// Event: app is ready to create browser windows
app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

