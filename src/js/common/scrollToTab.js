import { lenis } from "./scroll.js"
import { openTab } from "./tabs.js"

export const handleScrollFromOtherPage = () => {
    const targetSelector = sessionStorage.getItem("scrollTarget")
    const tabId = sessionStorage.getItem("openTab")

    if (!targetSelector) return

    const target = document.querySelector(targetSelector)
    if (target) {
        lenis.scrollTo(target, {
            duration: 1.5,
            onComplete: () => {
                if (tabId) {
                    const tabBtn = document.querySelector(`[data-href="${tabId}"]`)
                    if (tabBtn) {
                        const hash = tabBtn.getAttribute("data-hash")
                        openTab(tabId, hash, true)
                    }
                }
            },
        })
    }

    sessionStorage.removeItem("scrollTarget")
    sessionStorage.removeItem("openTab")
}
