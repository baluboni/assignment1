a.innerText="Hello World"
var b=document.getElementById("root")
b.appendChild(a)

let hd=React.createElement("h1",{},"This is from react")
let el=document.getElementById("root")
let ad=ReactDOM.createRoot(el)
ad.render(hd)
//nested react element
let nest=React.createElement("h1",{},"Another heading ")
let nested=React.createElement("paragraph",{},"Another paragraph ")
let element=document.getElementById("root")
let root1=ReactDOM.createRoot(element)
root1.render(React.createElement("div",{},nest,nested));
