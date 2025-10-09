export function filterVisibility() {
    const eventsWrap = document.querySelector(".events-wrap")
    const filter = document.querySelector(".events-filter")

    if (!eventsWrap || !filter) return

    const hasItems = eventsWrap.querySelectorAll(".accordion-events-item").length > 0
    filter.style.display = hasItems ? "" : "none"
}
