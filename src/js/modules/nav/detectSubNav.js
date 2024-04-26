export const detectSubNav = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const menuItems = document.querySelectorAll(".header-panel-nav > li")
        menuItems.forEach((item) => {
            if (item.querySelector("ul")) {
                item.classList.add("has-submenu")
            }
        })
    })
}
