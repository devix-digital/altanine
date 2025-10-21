import gsap from "gsap"

export function follower() {
    document.querySelectorAll(".follower-box").forEach((container) => {
        const follower = container.querySelector(".follower")
        console.log(follower)

        container.addEventListener("mousemove", (e) => {
            const rect = container.getBoundingClientRect()
            const mouseX = e.clientX - rect.left
            const mouseY = e.clientY - rect.top

            const scaleFactor = 1

            gsap.to(follower, {
                scale: scaleFactor,
                x: mouseX - follower.offsetWidth / 2,
                y: mouseY - follower.offsetHeight / 2,
                duration: 0.1,
                ease: "power1.in",
            })
        })

        container.addEventListener("mouseleave", () => {
            gsap.to(follower, {
                scale: 0,
                duration: 0.3,
                ease: "power2.out",
            })
        })
    })
}
