import { lenis } from "./scroll.js"

export const scrollTo = () => {
    const scrollButtons = document.querySelectorAll(".scroll-action")
    if (scrollButtons.length) {
        scrollButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const target = document.querySelector(button.dataset.target)
                if (target) {
                    lenis.scrollTo(target, { duration: 3 })
                }

                sessionStorage.setItem("scrollTarget", button.dataset.target)
                sessionStorage.setItem("openTab", button.dataset.href)
            })
        })
    }
}
