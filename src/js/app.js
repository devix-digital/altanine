import "./router/index.js"
import { initFooterAbstractMoving } from "./modules/footer/abstractMoving.js"
import { initMobileNavigation } from "./modules/nav/toggleNav.js"
import { detectSubNav } from "./modules/nav/detectSubNav.js"

initFooterAbstractMoving()
initMobileNavigation()
detectSubNav()
