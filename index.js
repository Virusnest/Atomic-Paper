const { app, BrowserWindow} = require('electron')
app.dock.hide();
const createWindow = (w,h) => {
    const win = new BrowserWindow({
      type: 'desktop', 
      width: w,
      y:-6,
      height: h,
      show: false,
      movable: false,
      autoHideMenuBar: true,
      enableLargerThanScreen: true,
      excludedFromShownWindowsMenu: true,
      roundedCorners: false,
      titleBarStyle: 'hidden',
      resizable: false,
      focusable: true,
      hasShadow: false,
    })
    win.once('ready-to-show', () => {
      win.show()
      win.focus()
    })
  
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    
    const { screen } = require('electron')

    // Create a window that fills the screen's available work area.
    const primaryDisplay = screen.getPrimaryDisplay()
    const { width, height } = primaryDisplay.size
  
    createWindow(width,height)  
})

