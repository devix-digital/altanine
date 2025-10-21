import gsap from "gsap"

function moveFromMouse() {
    const elements = document.querySelectorAll(".mouse-move-react")

    document.addEventListener("mousemove", (event) => {
        elements.forEach((element) => {
            const mouseX = event.clientX
            const mouseY = event.clientY

            const { left, top, width, height } = element.getBoundingClientRect()
            const centerX = left + width / 2
            const centerY = top + height / 2

            const deltaX = mouseX - centerX
            const deltaY = mouseY - centerY

            const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2)

            const threshold = 130

            if (distance < threshold) {
                const intensity = 0.5
                const moveX = -deltaX * intensity
                const moveY = -deltaY * intensity

                gsap.to(element, {
                    x: moveX,
                    y: moveY,
                    duration: 1,
                    ease: "power2.out",
                })
            } else {
                gsap.to(element, {
                    x: 0,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                })
            }
        })
    })
}

export default moveFromMouse
