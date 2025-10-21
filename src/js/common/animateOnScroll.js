import Lenis from "@studio-freight/lenis"
import gsap from "gsap"

const lenis = new Lenis()

export function animateOnScroll() {
    const element = document.querySelector(".scroll-element")

    const updateAnimation = () => {
        const rect = element.getBoundingClientRect()
        const elementCenterY = rect.top + rect.height / 2
        const windowHeight = window.innerHeight / 2

        const distanceFromCenter = windowHeight - elementCenterY
        const scale = Math.max(1 - Math.abs(distanceFromCenter) / 1000, 0.5)
        const opacity = Math.max(1 - Math.abs(distanceFromCenter) / 500, 0.5)

        gsap.to(element, {
            scale,
            opacity,
            duration: 0.3,
            ease: "power2.out",
        })
    }

    // Викликаємо анімацію одразу при ініціалізації
    updateAnimation()

    // Додаємо оновлення анімації при скролі
    lenis.on("scroll", updateAnimation)
}

animateOnScroll()
lenis.start()
