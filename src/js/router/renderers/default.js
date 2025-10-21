import Highway from "@dogstudio/highway"
import { splitText } from "../../common/splitText.js"
import { loadContent } from "../../common/loadContent.js"
import { initAccordion, initAccordionCore } from "../../modules/accordion/initAccordion.js"
import { scrollTo } from "../../common/scrollTo.js"
import { initModal } from "../../modules/modal/initModal.js"
import { initHorizontalScroll } from "../../modules/scroll/horizontalScroll.js"
import { stickyHeader } from "../../common/stickyHeader.js"
import { scrollTrigger } from "../../common/scrollTrigger.js"
import filterTabs from "../../common/filterTabs.js"
import moveFromMouse from "../../common/moveFromMouse.js"
import burger from "../../common/burger.js"
import { initOdometr } from "../../common/InitOdometr.js"
import { follower } from "../../common/follower.js"

class DefaultRenderer extends Highway.Renderer {
    onEnter() {
        scrollTrigger()
        splitText()
        initAccordion()
        initAccordionCore()
        if (window.innerWidth > 767) {
            initHorizontalScroll()
        }
        stickyHeader()
        filterTabs()
        moveFromMouse()
        initOdometr()
    }
    onEnterCompleted() {
        scrollTo()
        loadContent()
        initModal()
        burger()
        follower()
    }
}

export default DefaultRenderer
