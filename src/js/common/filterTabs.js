function filterTabs() {
    const tabs = document.querySelectorAll(".cases-tabs-item")
    const elements = document.querySelectorAll(".cases-element-box")

    let isAnimating = false

    tabs.forEach((tab) => {
        tab.addEventListener("pointerdown", () => {
            if (isAnimating || tab.classList.contains("active")) return

            const filter = tab.dataset.filter
            const activeTab = document.querySelector(".cases-tabs-item.active")

            if (activeTab && activeTab !== tab) {
                isAnimating = true
                activeTab.classList.add("fade-out")

                activeTab.addEventListener(
                    "transitionend",
                    () => {
                        activeTab.classList.remove("active", "fade-out")
                        isAnimating = false
                    },
                    { once: true }
                )
            }

            tab.classList.add("active")

            elements.forEach((el) => {
                const categories = el.dataset.category.split(" ")
                el.style.display = filter === "all" || categories.includes(filter) ? "" : "none"
            })
        })
    })
}

export default filterTabs
