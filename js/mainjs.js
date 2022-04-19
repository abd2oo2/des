let latest = document.querySelector(".latest");
let head = document.querySelector(".container-head ");
let header = document.querySelector("header")

window.onscroll =function(){
    if(window.scrollY >= latest.offsetTop){
        header.style.position = "fixed";
        header.style.backgroundColor = "#2a2a2a";
        header.style.zIndex = "1000";
        head.style.padding = "10px"
        header.style.width = "100%";
        header.style.paddingBottom = "30px"
    }else if(window.scrollY <= latest.offsetTop){
        header.style.position = "relative";
        header.style.backgroundColor= "";
    }
}
let but = document.querySelector(".container-foot .right .suu");
but.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}
let ii = document.querySelector("header .bar");
let lee = document.querySelector("header .linked-2");
let cont = document.querySelector(".container-head");
let i = true;

ii.onclick = function(){
    if(i === false)
    {
        lee.style.display = "block";
        i = true
    }else{
        lee.style.display = "none";
        i=false;
    }
}