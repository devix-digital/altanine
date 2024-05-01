import Tween from "gsap"
import { transition } from "../../config/transitions.js"

export const cardsMouseFollow = () => {
    const cards = document.querySelectorAll(".benefits-card")
    if (cards.length) {
        for (let card of cards) {
            const elements = {
                border: card.querySelector(".benefits-card-border"),
                icon: card.querySelector(".benefits-card-icon"),
                title: card.querySelector(".benefits-card-title"),
                description: card.querySelector(".benefits-card-description"),
                number: card.querySelector(".benefits-card-number"),
            }

            card.addEventListener("mousemove", ({ offsetX, offsetY }) => {
                animateElement(elements.border, offsetX, offsetY, 50, 0.6, 0, 0.97)
                animateElement(elements.icon, offsetX, offsetY, 30, 0.5, 0, 1)
                animateElement(elements.title, offsetX, offsetY, 50, 0.8, 0.05, 1)
                animateElement(elements.description, offsetX, offsetY, 50, 0.7, 0.1, 1)
                animateElement(elements.number, offsetX, offsetY, 30, 0.6, 0.05, 1)
            })
            card.addEventListener("mouseout", (event) => {
                for (const element of Object.values(elements)) {
                    resetMoving(element)
                }
            })
        }
    }
}

const animateElement = (element, offsetX, offsetY, different, duration, delay, scale) => {
    if (element) {
        Tween.to(element, {
            x: (offsetX - element.getBoundingClientRect().width / 2) / different,
            y: (offsetY - element.getBoundingClientRect().height / 2) / different,
            duration,
            scale,
            ease: transition.move.ease,
            delay,
        })
    }
}

const resetMoving = (element) => {
    Tween.to(element, {
        x: 0,
        y: 0,
        scale: 1,
        duration: transition.scale.duration,
        ease: transition.scale.ease,
    })
}
