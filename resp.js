burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
rightnav = document.querySelector('.rightnav')
leftnav = document.querySelector('.leftnav')

burger.addEventListener('click', ()=>{
     rightnav.classList.toggle('v-class-resp');
     leftnav.classList.toggle('v-class-resp');
    navbar.classList.toggle('heightnav-resp');

})