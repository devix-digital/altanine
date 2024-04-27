export const detectSubNav = () => {
    const menuItems = document.querySelectorAll(".header-panel-nav > nav > ul > li")

    menuItems.forEach((item) => {
        const subMenu = item.querySelector("ul")

        if (subMenu) {
            item.classList.add("has-submenu")

            item.addEventListener("touchstart", (e) => {
                e.preventDefault()
                subMenu.classList.toggle("submenu")
                item.classList.toggle("opened")
            })
        }
    })
}
