import Highway from "@dogstudio/highway"
import { splitText } from "../../common/splitText.js"
import { loadContent } from "../../common/loadContent.js"
import { initHover } from "../../modules/buttons/initHover.js"
import { parallax } from "../../common/parallax.js"
import { initAccordion, initAccordionCore } from "../../modules/accordion/initAccordion.js"
import { initBlogCarousel } from "../../modules/carousels/blogCarousel.js"
import { cardsMouseFollow } from "../../modules/benefits/cardsMouseFollow.js"
import { scrollTo } from "../../common/scrollTo.js"
import { initHeroCarousel } from "../../modules/carousels/heroCarousel.js"
import { initProcessCarousel } from "../../modules/carousels/processCarousel.js"
import { initModal } from "../../modules/modal/initModal.js"
import { initClock } from "../../common/initClock.js"
import { initHorizontalScroll } from "../../modules/scroll/horizontalScroll.js"

class DefaultRenderer extends Highway.Renderer {
    onEnter() {
        splitText()
        initHover()
        initAccordion()
        initAccordionCore()
        initHeroCarousel()
        initBlogCarousel()
        initProcessCarousel()
        if (window.innerWidth > 767) {
            initHorizontalScroll()
        }
    }
    onEnterCompleted() {
        scrollTo()
        loadContent()
        parallax()
        cardsMouseFollow()
        initModal()
        document.querySelector(".clock") ? initClock(true) : null
    }
}

export default DefaultRenderer
