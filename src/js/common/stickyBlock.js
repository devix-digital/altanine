import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger.js"
import { lenis } from "./scroll.js"

gsap.registerPlugin(ScrollTrigger)

// --- scrollerProxy як і раніше ---
ScrollTrigger.scrollerProxy(document.body, {
    scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value) : lenis.scroll
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight }
    },
})
lenis.on("scroll", ScrollTrigger.update)
ScrollTrigger.addEventListener("refresh", () => lenis.resize())
ScrollTrigger.refresh()

// --- Sticky логіка для всіх блоків ---
document.querySelectorAll(".work-areas-block-sticky").forEach((sticky) => {
    const parent = sticky.closest(".work-areas-block")

    ScrollTrigger.create({
        trigger: parent,
        start: "top top",
        end: () => `+=${parent.offsetHeight - sticky.offsetHeight}`,
        pin: sticky,
        scrub: true,
        pinSpacing: false,
    })

    gsap.to(sticky, {
        scale: 0.8,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
            trigger: parent,
            start: () => `top top+=${parent.offsetHeight - sticky.offsetHeight - 200}`,
            end: "bottom top",
            scrub: true,
        },
    })
})
