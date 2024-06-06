import Splide from "@splidejs/splide"
import { carouselCursorFollow } from "./carouselCursorFollow.js"

export const initTeamCarousel = () => {
    const teamCarousels = document.querySelectorAll(".team-carousel")

    const isMobile = window.innerWidth < 768

    if (!isMobile) {
        for (let teamCarousel of teamCarousels) {
            if (teamCarousel) {
                const splide = new Splide(teamCarousel, {
                    type: "slide",
                    rewind: true,
                    drag: "free",
                    perPage: 1,
                    pagination: false,
                    arrows: false,
                    autoWidth: true,
                    speed: 5000,
                    easing: "linear",
                    gap: "32rem",
                    padding: { left: "8rem", right: "8rem" },
                })

                splide.on("mounted", () => {
                    carouselCursorFollow(teamCarousel)
                })

                splide.mount()
            }
        }
    }
}
