import Tween, { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger.js"
import { transition } from "../config/transitions.js"

gsap.registerPlugin(ScrollTrigger)

export const scrollTrigger = () => {
    let content = Tween.timeline({
        scrollTrigger: {
            trigger: ".scroll-trigger",
            start: "top 50%",
        },
    })
    content.to(".show-on-scroll", {
        scale: 1,
        duration: transition.skew.duration,
        ease: transition.skew.ease,
    })
}
