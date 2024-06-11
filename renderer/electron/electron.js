const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Asegúrate de que tienes un archivo preload.js
      nodeIntegration: true, // Habilita la integración de Node.js
      contextIsolation: false, // Deshabilita el aislamiento del contexto
    },
  });

  mainWindow.loadURL('http://localhost:8888'); // O la ruta de tu aplicación Next.js
}

app.whenReady().then(createWindow);

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
