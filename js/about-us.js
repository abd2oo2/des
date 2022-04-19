let latest = document.querySelector(".container-section");
let head = document.querySelector(".container-head");
let header = document.querySelector("header")

window.onscroll =function(){
    if(window.scrollY >= latest.offsetTop){
        header.style.position = "fixed";
        header.style.backgroundColor = "#2a2a2a";
        header.style.zIndex = "1000";
        head.style.padding = "10px"
        head.style.paddingBottom = "30px"
        header.style.width = "100%"
    }else if(window.scrollY <= latest.offsetTop){
        header.style.position = "relative";
        header.style.backgroundColor= "";
    }
}
let but = document.querySelector(".container-copy .right .go");
but.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}
let ii = document.querySelector("header .container-head .head .bar");
let lee = document.querySelector("header .container-head .head .list-2");
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