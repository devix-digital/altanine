export const detectSubNav = () => {
    document.addEventListener("DOMContentLoaded", () => {
        const menuItems = document.querySelectorAll(".header-panel-nav > nav > ul > li")

        menuItems.forEach((item) => {
            const subMenu = item.querySelector("ul")

            // item.addEventListener("mouseenter", () => {
            //     const prevItem = item.previousElementSibling
            //     const nextItem = item.nextElementSibling
            //     nextItem.classList.remove("opened")
            //     prevItem.classList.remove("opened")

            //     if (prevItem.classList.contains("has-submenu")) {
            //         prevItem.classList.remove("submenu")
            //     }
            //     if (nextItem.classList.contains("has-submenu")) {
            //         nextItem.classList.remove("submenu")
            //     }
            // })

            if (subMenu) {
                const firstLink = subMenu.parentNode.querySelector("a")
                item.classList.add("has-submenu")

                item.addEventListener("mouseenter", () => {
                    subMenu.classList.add("submenu")
                    item.classList.add("opened")
                })

                subMenu.addEventListener("mouseleave", () => {
                    subMenu.classList.remove("submenu")
                    item.classList.remove("opened")
                })

                firstLink.addEventListener("click", (e) => {
                    e.preventDefault()
                    if (subMenu.classList.contains("submenu")) {
                        subMenu.classList.remove("submenu")
                        item.classList.remove("opened")
                    } else {
                        subMenu.classList.add("submenu")
                        item.classList.add("opened")
                    }
                })

                firstLink.addEventListener("touchstart", (e) => {
                    e.preventDefault()
                    if (subMenu.classList.contains("submenu")) {
                        subMenu.classList.remove("submenu")
                        item.classList.remove("opened")
                    } else {
                        subMenu.classList.add("submenu")
                        item.classList.add("opened")
                    }
                })
            }
        })
    })
}
