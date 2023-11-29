a.innerText="Hello World"
var b=document.getElementById("root")
b.appendChild(a)

let hd=React.createElement("h1",{},"This is from react")
let el=document.getElementById("root")
let ad=ReactDOM.createRoot(el)
ad.render(hd)