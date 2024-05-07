import Highway from "@dogstudio/highway"
import Fade from "./transitions/fade.js"
import { updateScroll } from "../common/scroll.js"
import DefaultRenderer from "./renderers/default.js"
import { toggleNav } from "../modules/nav/toggleNav.js"
import Clock from '../common/initClock.js';

export const router = new Highway.Core({
    renderers: {
        default: DefaultRenderer,
    },
    transitions: {
        default: Fade,
    },
})

const clock = new Clock()
clock.init()

router.on("NAVIGATE_END", () => {
    updateScroll()
    clock.init()
})

router.on("NAVIGATE_IN", () => {
    updateScroll()
})

router.on("NAVIGATE_OUT", () => {
    toggleNav(false)
    clock.stop()
})
