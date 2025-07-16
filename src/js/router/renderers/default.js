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
import { initHorizontalScroll } from "../../modules/scroll/horizontalScroll.js"
import { toggleTab } from "../../common/tabs.js"
import { stickyHeader } from "../../common/stickyHeader.js"
import { initTeamCarousel } from "../../modules/carousels/teamCarousel.js"
import { initLoadPosts, loadPosts } from "../../modules/content/loadPost.js"
import { initLoadNews, loadNews, filterMenu } from "../../modules/content/loadNews.js"
import { initCaptcha } from "../../common/captcha.js"

class DefaultRenderer extends Highway.Renderer {
    onEnter() {
        splitText()
        initHover()
        initAccordion()
        initAccordionCore()
        initHeroCarousel()
        initBlogCarousel()
        initTeamCarousel()
        initProcessCarousel()
        if (window.innerWidth > 767) {
            initHorizontalScroll()
        }
        toggleTab()
        stickyHeader()
        if (!!document.querySelector(".loadMore")) {
            loadPosts(1, "")
            initLoadPosts()
        }
        if (!!document.querySelector(".loadMoreNews")) {
            loadNews(1, "")
            initLoadNews()
        }
        filterMenu()
    }
    onEnterCompleted() {
        scrollTo()
        loadContent()
        parallax()
        cardsMouseFollow()
        initModal()
        setTimeout(() => {
            initCaptcha()
        }, 100)
    }
}

export default DefaultRenderer
