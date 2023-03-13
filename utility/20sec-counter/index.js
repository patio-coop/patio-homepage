const { app, BrowserWindow, ipcMain } = require('electron');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 200,
    height: 100,
    webPreferences: {
     nodeIntegration: true,
      contextIsolation: false,
    },
    frame: true, // Initially show the window frame
    transparent: true,
    title: 'Presentation Timer'
  });

  win.loadFile('index.html');

  // Remove the menu bar and disable the window controls on Linux
  if (process.platform === 'linux') {
    win.setMenuBarVisibility(false)
    // win.setResizable(false);
    // win.setFullScreenable(false);
  }

  // Toggle the window frame when the "toggleFrame" event is emitted from the renderer process
  ipcMain.on('toggleMenu', (event, arg) => {
    console.log('a')
    const isFrameVisible = win.isMenuBarVisible();
    win.setMenuBarVisibility(!isFrameVisible);
  });
});
