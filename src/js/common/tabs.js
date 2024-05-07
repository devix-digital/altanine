const openTab = (evt, tabName) => {
    let i, tabContent, tabLinks
    tabContent = document.querySelectorAll(".js-tab-content")
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].classList.remove("is-active")
    }
    tabLinks = document.querySelectorAll(".js-tab-link")
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" is-active", "")
    }
    document.getElementById(tabName).classList.add("is-active")
    evt.currentTarget.className += " is-active"
}

export const toggleTab = () => {
    const tabBtns = document.querySelectorAll(".js-tab-link")
    tabBtns.forEach((tabBtn) => {
        tabBtn.addEventListener("click", (e) => {
            let target = e.target.getAttribute("data-href")
            openTab(e, target)
        })
    })
}
