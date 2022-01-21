let mas = ["click","scroll","rightclick","You pressed any button on keyboard", "You opened page","You resized page",]

window.addEventListener("click",function(){
    alert(mas[0])
})
window.addEventListener("scroll",function(){
    alert(mas[1])
})
window.addEventListener("contextmenu",function(){
    alert(mas[2])
})
window.addEventListener("keypress",function(){
    alert(mas[3])
})
window.addEventListener("load",function(){
  alert(mas[4])
})
window.addEventListener("resize",function(){
    alert(mas[5])
})