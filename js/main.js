/*=============== SHOW MENU ===============*/
    const  navMenu=document.getElementById('nav-menu');
    const  navToggle= document.getElementById('nav-toggle');
    const  navClose= document.getElementById('nav-close');

    /* Menu show */
    navToggle.addEventListener("click", function(){
        navMenu.classList.add('show-menu');
    })

      /* Menu hide */
    navClose.addEventListener("click", function(){
        navMenu.classList.remove('show-menu');
    })

    /* search */
    const search=document.getElementById('search');
    const searchBtn=document.getElementById('search-btn');
    const searchClose= document.getElementById('search-close');

    /* show search  */

    searchBtn.addEventListener("click", ()=>{
        search.classList.add("show-search")
    })

    /** Hde search */
    searchClose.addEventListener("click",()=>{
        search.classList.remove('show-search')
    })
    // ========Login=======//
    const login=document.getElementById('login');
    const loginBtn= document.getElementById('login-btn');
    const loginClose= document.getElementById('login-close');

    /** show login */
    loginBtn.addEventListener("click", ()=>{
        login.classList.add('show-login');
    })

    /** Hide Login */
    loginClose.addEventListener('click', ()=>{
        login.classList.remove('show-login');
    })
