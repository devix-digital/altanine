import Tween from "gsap"
import { transition } from "../../config/transitions.js"

export const carouselCursorFollow = (carousel) => {
    if (carousel) {
        const cursors = document.querySelectorAll(".carousel-cursor")
        const buttons = carousel.querySelectorAll(".btn")
        const paginations = carousel.querySelectorAll(".splide__pagination__page")

        if (cursors.length) {
            cursors.forEach((cursor) => {
                const { width: cursorWidth, height: cursorHeight } = cursor.getBoundingClientRect()
                document.addEventListener("mousemove", (event) => {
                    const { clientX, clientY } = event
                    Tween.to(cursor, {
                        x: clientX - cursorWidth / 2,
                        y: clientY - cursorHeight / 2,
                        duration: transition.move.duration,
                        ease: transition.move.ease,
                    })
                })

                carousel.addEventListener("mouseenter", () => {
                    switchCursor(cursor, 1)
                })

                carousel.addEventListener("mouseleave", () => {
                    switchCursor(cursor, 0)
                })

                if (buttons.length) {
                    for (let button of buttons) {
                        button.addEventListener("mouseenter", () => {
                            switchCursor(cursor, 0)
                        })
                        button.addEventListener("mouseleave", () => {
                            switchCursor(cursor, 1)
                        })
                    }
                }
                if (paginations.length) {
                    for (let pagination of paginations) {
                        pagination.addEventListener("mouseenter", () => {
                            switchCursor(cursor, 0)
                        })
                        pagination.addEventListener("mouseleave", () => {
                            switchCursor(cursor, 1)
                        })
                    }
                }
            })
        }
    }
}

const switchCursor = (cursor, status) => {
    Tween.set(cursor, {
        opacity: status,
    })
}
