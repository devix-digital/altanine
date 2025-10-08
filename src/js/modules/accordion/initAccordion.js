import Tween from "gsap"
import { transition } from "../../config/transitions.js"

export const initAccordion = () => {
    const accordions = document.querySelectorAll(".accordion")

    if (accordions.length) {
        accordions.forEach((accordion) => {
            const accordionRows = accordion.querySelectorAll(".accordion-item")
            let currentAccordionRow = null

            if (accordionRows.length > 0) {
                accordionRows.forEach((accordionRow, i) => {
                    const accordionContent = accordionRow.querySelector(".accordion-item-body")
                    const accordionHeader = accordionRow.querySelector(".accordion-item-header")
                    const t = Tween.to(accordionContent, {
                        height: "auto",
                        paused: true,
                        duration: transition.move.duration,
                        ease: transition.move.ease,
                    })

                    accordionRow._accordionTween = t

                    accordionHeader.addEventListener("click", () => {
                        if (currentAccordionRow !== null) {
                            accordionRows[currentAccordionRow].classList.toggle("is-active")
                            if (currentAccordionRow === i) {
                                currentAccordionRow = null
                                return t.reverse()
                            }
                            accordionRows[currentAccordionRow]._accordionTween.reverse()
                        }
                        accordionRow.classList.toggle("is-active")
                        t.play()
                        currentAccordionRow = i
                    })
                })

                accordionRows[0].querySelector(".accordion-item-header").click()
            }
        })
    }
}

export const initEventsAccordion = () => {
    const accordionRows = document.querySelectorAll(".accordion-events-item")
    let currentAccordionRow = null

    if (accordionRows.length > 0) {
        accordionRows.forEach((accordionRow, i) => {
            const accordionContent = accordionRow.querySelector(".accordion-events-item-body")
            const accordionHeader = accordionRow.querySelector(".accordion-events-item-header")
            const t = Tween.to(accordionContent, {
                height: "auto",
                paused: true,
                duration: transition.move.duration,
                ease: transition.move.ease,
            })

            accordionRow._accordionTween = t

            accordionHeader.addEventListener("click", () => {
                if (currentAccordionRow !== null) {
                    accordionRows[currentAccordionRow].classList.toggle("is-active")
                    if (currentAccordionRow === i) {
                        currentAccordionRow = null
                        return t.reverse()
                    }
                    accordionRows[currentAccordionRow]._accordionTween.reverse()
                }
                accordionRow.classList.toggle("is-active")
                t.play()
                currentAccordionRow = i
            })
        })
    }
}

export const initAccordionCore = () => {
    const accordionsCore = document.querySelectorAll(".our-mission-core")

    if (accordionsCore.length) {
        accordionsCore.forEach((accordion) => {
            const accordionRows = Tween.utils.toArray(".mission__core-item")
            let currentAccordionRow = null

            accordionRows.forEach((accordionRow, i) => {
                const accordionContent = accordionRow.querySelector(".mission__core-desc")
                const accordionHeader = accordionRow.querySelector(".mission__core-title")
                const t = Tween.to(accordionContent, {
                    height: "auto",
                    paused: true,
                    duration: transition.move.duration,
                    ease: transition.move.ease,
                })

                accordionRow._accordionTween = t

                accordionHeader.addEventListener("click", () => {
                    const activeAttr = accordionHeader.parentElement.getAttribute("data-core")
                    const dataCoreImage = document.querySelector(
                        "[data-core-image='" + activeAttr + "'"
                    )
                    var elems = document.querySelectorAll(".section-banner")

                    ;[].forEach.call(elems, function (el) {
                        el.classList.remove("is-active")
                    })

                    dataCoreImage.classList.add("is-active")
                    if (currentAccordionRow !== null) {
                        accordionRows[currentAccordionRow].classList.toggle("is-active")

                        if (currentAccordionRow === i) {
                            currentAccordionRow = null
                            return t.reverse()
                        }
                        accordionRows[currentAccordionRow]._accordionTween.reverse()
                    }
                    accordionRow.classList.toggle("is-active")

                    t.play()
                    currentAccordionRow = i
                })
            })

            accordionRows[0].querySelector(".mission__core-title").click()
        })
    }
}
