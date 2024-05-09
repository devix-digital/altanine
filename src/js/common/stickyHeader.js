import throttle from "lodash/throttle.js"

let lastScrollTop = 0
const header = document.getElementById("header")
let hero = document.querySelector(".hero")

export const stickyHeader = () => {
    window.addEventListener(
        "scroll",
        throttle(function () {
            let currentScroll = window.scrollY || document.documentElement.scrollTop
            hero = document.querySelector(".hero") // update after changed page
            let heroHeight = hero.offsetHeight

            if (currentScroll > lastScrollTop && currentScroll > heroHeight) {
                header.style.top = "-100rem"
            } else {
                header.style.top = "16rem"
            }

            lastScrollTop = currentScroll
        }, 200)
    )
}
