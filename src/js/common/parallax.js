import Tween, { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger.js"
import Ukiyo from "ukiyojs"
import { transition } from "../config/transitions.js"

gsap.registerPlugin(ScrollTrigger)

export const parallax = () => {
    if (window.matchMedia("(max-width: 768px)").matches) {
        const els = document.querySelectorAll("[data-parallax]")
        if (els.length) {
            els.forEach((el) => {
                new Ukiyo(el, {
                    scale: 1.2,
                    willChange: true,
                })
            })
        }
    }

    /* benefits */
    if (document.querySelectorAll(".benefits-card").length) {
        let benefitsTl = Tween.timeline({
            scrollTrigger: {
                trigger: ".benefits",
                start: "top 30%",
            },
        })
        benefitsTl.to(".benefits-card", {
            y: 0,
            stagger: 0.1,
            duration: transition.skew.duration,
            ease: transition.skew.ease,
        })
    }

    if (document.querySelectorAll(".certificates-column").length) {
        /* parallax for investigations section */
        let investigationsTl = Tween.timeline({
            scrollTrigger: {
                trigger: ".investigations",
            },
        })
        investigationsTl.to(".certificates-column", {
            y: 0,
            duration: transition.skew.duration,
            ease: transition.skew.ease,
        })
    }

    if (document.querySelectorAll(".show-on-scroll").length) {
        /* parallax for content section */
        let contentTl = Tween.timeline({
            scrollTrigger: {
                trigger: ".content",
                start: "top 50%",
            },
        })
        contentTl.to(".show-on-scroll", {
            y: 0,
            duration: transition.skew.duration,
            ease: transition.skew.ease,
        })
    }
}
