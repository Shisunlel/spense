const navToggler = document.querySelector('.nav-toggler');

const toggleCollapse = ()=>{
    document.querySelector('.navbar').classList.toggle('show');
}

navToggler.addEventListener('click', toggleCollapse);