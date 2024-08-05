function shownav() {
    var navbar = document.querySelector('.navbar');
    var btn=document.getElementById('bar-icon');
    if (navbar.style.visibility === 'hidden') {
        navbar.style.visibility = 'visible';
        navbar.style.zIndex = '1000';
        btn.classList='';
        btn.classList='fa-solid fa-x';
    } else {
        navbar.style.visibility = 'hidden';
        navbar.style.zIndex = '-1'; 
        btn.classList='';
        btn.classList='fa-solid fa-bars';
    }
}
function scrolltotop(){
    window.scrollTo(0,0)
}
