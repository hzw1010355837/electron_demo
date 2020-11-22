const btn = document.getElementById("btn")

const browserWindow = require("electron").remote.BrowserWindow

window.onload = function() {
    btn.onclick = ()=>{
        newWin = new browserWindow({
            height:500,
            width:500
        })
        newWin.loadFile("btn.html")

        newWin.on("close", ()=>{
            newWin=null
        })
    }
    
}

const {remote} = require("electron")
var rightTemplate = [
    {label: '粘贴'},
    {label: '复制'}
]

var m = remote.Menu.buildFromTemplate(rightTemplate)

window.addEventListener("contextmenu", function(e) {
    e.preventDefault()
    m.popup({window:remote.getCurrentWindow()})
})
