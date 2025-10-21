export function initOdometr() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const odometer = entry.target
                    odometer.innerHTML = odometer.dataset.value
                    observer.unobserve(odometer)
                }
            })
        },
        { threshold: 0.5 }
    )

    document.querySelectorAll(".odometer").forEach((el) => observer.observe(el))
}
