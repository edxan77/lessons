let mas = ["click","doubleclick","scroll","rightclick"]

window.addEventListener("click",function(){
    alert(mas[0])
})
window.addEventListener("scroll",function(){
    alert(mas[2])
})
window.addEventListener("contextmenu",function(){
    alert(mas[3])
})