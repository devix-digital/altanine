import { lenis } from "./scroll.js"

export const openTab = (tabName, tabHash) => {
    document.querySelectorAll(".js-tab-content").forEach((tab) => {
        tab.classList.remove("is-active")
    })
    document.querySelectorAll(".js-tab-link").forEach((btn) => {
        btn.classList.remove("is-active")
    })

    document.getElementById(tabName)?.classList.add("is-active")

    const tabBtn = document.querySelector(`.js-tab-link[data-href="${tabName}"]`)
    if (tabBtn) tabBtn.classList.add("is-active")

    if (tabHash) {
        history.replaceState(null, null, `#${tabHash}`)
    }

    if (window.location.hash) {
        const tabContainer = document.querySelector("#team")
        if (tabContainer) {
            lenis.scrollTo(tabContainer, { duration: 1.5 })
        }
    }
}

const openTabFromHash = () => {
    if (window.location.hash) {
        const hash = window.location.hash.substring(1)
        const tabBtn = document.querySelector(`.js-tab-link[data-hash="${hash}"]`)
        if (tabBtn) {
            const target = tabBtn.getAttribute("data-href")
            openTab(target, hash)
        }
    }
}

export const toggleTab = () => {
    const tabBtns = document.querySelectorAll(".js-tab-link")
    tabBtns.forEach((tabBtn) => {
        tabBtn.addEventListener("click", (e) => {
            e.preventDefault()
            const target = tabBtn.getAttribute("data-href")
            const hash = tabBtn.getAttribute("data-hash")
            openTab(target, hash)
        })
    })

    openTabFromHash()
}

export const toggleTabInMenu = () => {
    const tabBtns = document.querySelectorAll(".js-tab-menulink")
    tabBtns.forEach((tabBtn) => {
        tabBtn.addEventListener("click", (e) => {
            e.preventDefault()
            const target = tabBtn.getAttribute("data-href")
            const hash = tabBtn.getAttribute("data-hash")
            openTab(target, hash)
        })
    })

    openTabFromHash()
}
