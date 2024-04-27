export const detectSubNav = () => {
    const menuItems = document.querySelectorAll(".header-panel-nav > nav > ul > li")
    
    menuItems.forEach((item) => {
        const subMenu = item.querySelector("ul")
        
        if (subMenu) {
            item.classList.add("has-submenu")
            
            item.addEventListener("click", (e) => {
                e.preventDefault()
                if (subMenu.classList.contains("submenu")) {
                    subMenu.classList.remove("submenu")
                    item.classList.remove("opened")
                } else {
                    subMenu.classList.add("submenu")
                    item.classList.add("opened")
                }
            });
        }
    })
}
