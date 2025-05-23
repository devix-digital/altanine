import Highway from "@dogstudio/highway"
import { splitText } from "../../common/splitText.js"
import { loadContent } from "../../common/loadContent.js"
import { parallax } from "../../common/parallax.js"
import { initAccordionCore } from "../../modules/accordion/initAccordion.js"
import { initBlogCarousel } from "../../modules/carousels/blogCarousel.js"
import { cardsMouseFollow } from "../../modules/benefits/cardsMouseFollow.js"

class AboutRenderer extends Highway.Renderer {
    onEnter() {
        splitText()
    }
    onEnterCompleted() {
        loadContent()
        parallax()
        initAccordionCore()
        initBlogCarousel()
        cardsMouseFollow()
    }
}

export default AboutRenderer
