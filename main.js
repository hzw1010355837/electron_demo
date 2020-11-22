var electron = require("electron");

var app = electron.app;
var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: "500",
        height: "500",
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    })
    mainWindow.webContents.openDevTools()
    
    // var BrowserView = electron.BrowserView

    // var view = new BrowserView()

    // mainWindow.setBrowserView(view)

    // view.setBounds({x:0,y:100,height:400,width:500})
    // view.webContents.loadURL("https://www.baidu.com")
    
    require("./render/menu")
    mainWindow.loadFile("dialog.html")
    mainWindow.on('close', () => {
        mainWindow = null
    })
})

