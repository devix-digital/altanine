export default function burger() {
    const burger = document.getElementById("burger")
    const menu = document.getElementById("mobile-menu")

    burger.addEventListener("click", () => {
        if (menu) {
            menu.classList.toggle("active")
        }

        if (!burger.classList.contains("active")) {
            burger.classList.add("active")
            setTimeout(() => burger.classList.add("cross"), 300)
        } else {
            // Reverse animation
            burger.classList.remove("cross")
            setTimeout(() => burger.classList.remove("active"), 300)
        }
    })
}
