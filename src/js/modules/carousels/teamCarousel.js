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
                    perPage: 3,
                    pagination: true,
                    arrows: false,
                    autoWidth: true,
                    speed: 1000,
                    easing: "linear",
                    gap: "32rem",
                    padding: { left: "8rem", right: "8rem" },
                })

                splide.on("mounted", () => {
                    carouselCursorFollow(teamCarousel)
                })

                splide.on("mounted", () => {
                    const paginationButtons = document.querySelectorAll(".splide__pagination__page")

                    paginationButtons.forEach((button, index) => {
                        const pageNumber = (index + 1).toString().padStart(2, "0") // Форматуємо номер сторінки
                        button.textContent = pageNumber
                    })
                })

                splide.mount()
            }
        }
    }
}
