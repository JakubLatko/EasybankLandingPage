const menuButton = document.querySelector(".mobileMenuButton")
const menuIcon = document.querySelector('.menuIcon')
const navList = document.querySelector(".navList")

menuButton.addEventListener( "click" , ()=>{
    if(navList.ariaExpanded === "false"){
        navList.classList.toggle("navClosed")
        navList.setAttribute("aria-expanded" , "true")
        menuIcon.src="images/icon-close.svg"
    } else if (navList.ariaExpanded === "true"){
        navList.classList.toggle("navClosed")
        navList.setAttribute("aria-expanded" , "false")
        menuIcon.src="images/icon-hamburger.svg"
    }
})

