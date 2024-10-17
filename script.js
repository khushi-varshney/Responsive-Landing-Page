let popup = document.querySelector('.pop-up');
let main = document.querySelector('.min-h-screen');
let about = document.querySelector('.about');
let body=document.querySelector('body');
let footer = document.querySelector('.footer');


about.addEventListener("click",() => {
    main.innerHTML=`
       <div class="About">
           <h1>About</h1>
           <p class="pp">Enourmous Styles is a website dediated to train and help people to get to know about the fashion and styles. This website is highly engaged in bringing the understanding of 'Authenticity' when it comes to fashion.</p>
           <p class="pp">You should carry yourself in your best and confident form. That's why, We are here for you.</p>
           <h2 class="ppT">Thank You</h2>
       </div>
    `
    main.style.minHeight="63vh";
});