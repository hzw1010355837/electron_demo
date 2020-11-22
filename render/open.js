var {shell} = require("electron")


var aHref = document.querySelector("#aHref")


aHref.addEventListener("click", function(e){
    e.preventDefault()
    var href = aHref.getAttribute("href")
    shell.openExternal(href)
})

var child = document.querySelector("#child")

child.onclick = function(e) {
    window.open("child.html")
}
var content = document.querySelector("#content")

window.addEventListener("message", function(msg){
    content.innerHTML = JSON.stringify(msg.data)
})


