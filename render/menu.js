const {Menu,BrowserWindow} = require("electron")

var template = [
    {
        label: "语文",
        submenu: [
            {
                label: "id",
                accelerator: "ctrl+n",
                click: ()=>{
                    newWin = new BrowserWindow({
                        height:500,
                        width:500,
                        webPreferences: {
                            nodeIntegration: true,
                            enableRemoteModule: true
                        }
                    })
                    newWin.loadFile("./menu.html")
                    newWin.on("close", ()=>{
                        newWin = null
                    })
                }
            },
            {label: "name"},
            {label: "scope"}
        ]
    },
    {
        label: "数学",
        submenu: [
            {label: "id"},
            {label: "name"},
            {label: "scope"}
        ]
    }
]

var m = Menu.buildFromTemplate(template)


Menu.setApplicationMenu(m)
