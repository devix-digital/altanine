import Tween, { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger.js"
import { lenis } from "../../common/scroll.js"

gsap.registerPlugin(ScrollTrigger)

export const initHorizontalScroll = () => {
    initialiseGSAPScrollTriggerPinningHorizontal()
    initialiseLenisScroll()

    function initialiseGSAPScrollTriggerPinningHorizontal() {
        let sectionPin = document.querySelector("#section_pin")

        let containerAnimation = Tween.to(sectionPin, {
            scrollTrigger: {
                trigger: "#section_to-pin",
                start: "top top",
                end: () => "+=" + sectionPin.offsetWidth,
                pin: true,
                scrub: true,
            },
            x: () => -(sectionPin.scrollWidth - document.documentElement.clientWidth) + "px",
            ease: "none",
        })

        var bloskWrappers = sectionPin.querySelectorAll(".block_wrapper")

        bloskWrappers.forEach((bloskWrapper) => {
            var bloskWrapperID = bloskWrapper.id

            Tween.to(bloskWrapper, {
                scrollTrigger: {
                    trigger: bloskWrapper,
                    start: "left center",
                    end: "right center",
                    containerAnimation: containerAnimation,
                    toggleClass: {
                        targets: "." + bloskWrapperID,
                        className: "active",
                    },
                },
            })
        })
    }

    function initialiseLenisScroll() {
        lenis.on("scroll", ScrollTrigger.update)

        Tween.ticker.add((time) => {
            lenis.raf(time * 1000)
        })

        Tween.ticker.lagSmoothing(0)
    }
}
