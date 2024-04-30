import Tween from "gsap"
import { transition } from "../config/transitions.js"

export const showVideos = () => {
    for (let video of document.querySelectorAll(".video")) {
        if (!video.paused) {
            const poster = document.getElementById(video.dataset.posterId)
            if (poster) {
                Tween.fromTo(
                    poster,
                    {
                        opacity: 1,
                    },
                    {
                        opacity: 1,
                        duration: transition.skew.duration,
                        ease: transition.skew.ease,
                        onComplete: () => {
                            poster.style.display = "none"
                        },
                    }
                )
            }
        }
    }
}
