import gsap from "gsap"
import { transition } from "../config/transitions.js"
import { showSplitWords } from "../modules/scroll/showSplitWords.js"

export const loadContent = () => {
    const preloader = document.querySelector("#preloader")
    const heroBanner = document.querySelector("#hero-banner")
    const header = document.querySelector("#header")
    const content = document.querySelectorAll("[data-load-order]")

    if (preloader) {
        /* preloader */
        gsap.fromTo(
            preloader,
            {
                height: "100%",
            },
            {
                height: 0,
                duration: transition.skew.duration,
                ease: transition.skew.ease,
                onComplete: () => {
                    preloader.remove()
                },
            }
        )

        /* banner */
        if (heroBanner) {
            gsap.fromTo(
                heroBanner,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
            )
        }

        /* header */
        if (header) {
            gsap.fromTo(
                header,
                {
                    yPercent: -100,
                },
                {
                    yPercent: 0,
                    delay: 0.3,
                    duration: transition.skew.duration,
                    ease: transition.skew.ease,
                    onComplete: () => {
                        showSplitWords()
                    },
                }
            )
        }
    } else {
        showSplitWords()
    }

    /* content */
    if (content.length) {
        gsap.fromTo(
            content,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                delay: 0.8,
                stagger: 0.1,
                duration: transition.skew.duration,
                ease: transition.skew.ease,
            }
        )
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    gsap.to(entry.target, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
                    observer.unobserve(entry.target) // Якщо потрібна анімація лише один раз
                }
            })
        },
        { threshold: 0.5 }
    )

    // Спостереження за елементами з класом 'animate-on-scroll'
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.observe(el)
    })
}
