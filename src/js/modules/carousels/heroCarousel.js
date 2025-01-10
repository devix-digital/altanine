import Splide from "@splidejs/splide"
import { setProgressBar } from "../progress/progressbar.js"

export const initHeroCarousel = () => {
    const heroCarousel = document.querySelector("#hero-carousel")
    const progressBar = document.querySelector("#hero-progress-bar")
    if (heroCarousel) {
        const slides = heroCarousel.querySelectorAll(".full-carousel-slide")

        const splide = new Splide(heroCarousel, {
            type: "fade",
            rewind: true,
            drag: false,
            perPage: 1,
            pagination: false,
            arrows: false,
            autoWidth: false,
            speed: 1000,
            easing: "linear",
            autoplay: true,
            interval: 4000,
        })

        splide.mount()
        /* fill after each slide change */
        splide.on("autoplay:playing", function (rate) {
            setProgressBar(progressBar, rate)
        })
        splide.on("move", function (newIndex) {
            const allVideos = heroCarousel.querySelectorAll("video")
            allVideos.forEach((video, index) => {
                if (index === newIndex) {
                    video.play()
                } else {
                    video.pause()
                    video.currentTime = 0
                }
            })
        })
    }
}
