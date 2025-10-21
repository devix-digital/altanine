import Highway from "@dogstudio/highway"
import Fade from "./transitions/fade.js"
import { updateScroll } from "../common/scroll.js"
import DefaultRenderer from "./renderers/default.js"

export const router = new Highway.Core({
    renderers: {
        default: DefaultRenderer,
    },
    transitions: {
        default: Fade,
    },
})

router.on("NAVIGATE_END", () => {
    updateScroll()
})

router.on("NAVIGATE_IN", () => {
    updateScroll()
})
