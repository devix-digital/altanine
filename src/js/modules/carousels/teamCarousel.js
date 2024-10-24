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
                    const slideCount = splide.length
                    const paginationElement = teamCarousel.querySelector(".splide__pagination")

                    if (slideCount <= 3) {
                        // Приховуємо пагінацію, якщо елементів 3 або менше
                        splide.options.pagination = false
                        if (paginationElement) {
                            paginationElement.style.display = "none"
                        }
                    } else if (paginationElement) {
                        // Налаштовуємо форматування номерів сторінок тільки для цієї каруселі
                        const paginationButtons = paginationElement.querySelectorAll(
                            ".splide__pagination__page"
                        )
                        paginationButtons.forEach((button, index) => {
                            const pageNumber = (index + 1).toString().padStart(2, "0")
                            button.textContent = pageNumber
                        })
                    }

                    carouselCursorFollow(teamCarousel)
                })

                splide.mount()
            }
        }
    }
}
