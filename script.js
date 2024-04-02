let popup = document.querySelector('.pop-up');
let main = document.querySelector('.min-h-screen');
let about = document.querySelector('.about');
let body=document.querySelector('body');
let footer = document.querySelector('.footer');
let visuality = "light";

about.addEventListener("click",() => {
    if (visuality == "light") {
        footer.style.textAlign = "center";
        popup.style.height = "20rem";
        popup.style.marginTop = "4vw";
        popup.style.marginLeft = "14vw";
        popup.style.borderRadius = "20%";
        popup.style.backgroundColor = "pink";
        popup.style.visibility = "visible";
        popup.style.border = "4px solid black";
        popup.style.width = "50vw";
        main.style.maxHeight = "1vh";
        main.style.minHeight="1vh";
        main.style.visibility = "hidden";
        visuality = "dark";
    } else{
        visibility="light";
        popup.style.height = "0";
        popup.style.marginTop = "0";
        popup.style.marginLeft = "0";
        popup.style.borderRadius = "0";
        popup.style.visibility = "hidden";
        main.style.visibility = "visible";
        main.style.maxHeight = "380vh";
        main.style.minHeight = "150vh";
    }
});