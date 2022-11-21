var btn=document.getElementById("btn");
var light=document.getElementById("light");

function toggleBtn(){
    btn.classList.toggle("btn-active");
    light.classList.toggle("light-on");
}

const burger=document.getElementsByClassName('burger')[0]
const navBar=document.getElementsByClassName('nav-elements')[0]

burger.addEventListener('click', () => {
    navBar.classList.toggle('active')
})
