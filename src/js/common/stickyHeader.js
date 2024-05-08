import throttle from "lodash/throttle.js"

let lastScrollTop = 0
const header = document.getElementById("header")

window.addEventListener(
    "scroll",
    throttle(function () {
        let currentScroll = window.scrollY || document.documentElement.scrollTop
        if (currentScroll > lastScrollTop) {
            header.style.top = "-100rem"
        } else {
            header.style.top = "16rem"
        }

        lastScrollTop = currentScroll
    }, 200)
)
