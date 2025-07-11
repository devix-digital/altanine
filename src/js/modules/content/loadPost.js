export const loadPosts = (page = 1, category = "") => {
    let loading = false
    let postContainer = document.querySelector(".loadMore")
    let loadMoreButton = document.querySelector(".postsShowMore")
    if (category === "") {
        const urlParams = new URLSearchParams(window.location.search)
        category = urlParams.get("category") || ""
    }

    if (!loading && postContainer) {
        loading = true
        fetch("/wp-admin/admin-ajax.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body:
                "action=load_more_posts&page=" +
                page +
                "&category=" +
                category +
                "&per_page=" +
                "6",
        })
            .then((response) => response.text())
            .then((data) => {
                if (data) {
                    setTimeout(function () {
                        var loader = document.querySelector(".loader")
                        loadMoreButton.closest(".buttonContainer").style.display = "block"
                        postContainer.insertAdjacentHTML("beforeend", data)
                        postContainer.style.height = "auto"
                        if (!!loader) {
                            loader.remove()
                        }

                        let allPages =
                            document.querySelector(".loadMore [data-pages]").dataset.pages
                        if (allPages > page) {
                            page++
                            loadMoreButton.closest(".buttonContainer").style.display = "block"
                        } else {
                            loadMoreButton.closest(".buttonContainer").style.display = "none"
                        }
                    }, 1000)
                }
                setTimeout(function () {
                    loadMoreButton.innerHTML = "View More"
                    loading = false
                }, 1000)
            })
    }
}

export const initLoadPosts = () => {
    let page = 1
    let postContainer = document.querySelector(".loadMore")
    let loadMoreButton = document.querySelector(".postsShowMore")
    let category = ""
    const newsFilter = document.querySelector(".news-filter")
    const newsFilterOpener = newsFilter.querySelector(".opener")
    const newsFilterButtons = newsFilter.querySelectorAll(".news-filter-dropdown .btn")
    const newsFilterOpenerLabels = newsFilterOpener.querySelectorAll(".btn-labels-item")

    newsFilterOpener.addEventListener("click", function (e) {
        e.preventDefault()
        newsFilter.classList.toggle("expanded")
        newsFilterOpener.classList.toggle("is-active")
    })

    newsFilterButtons.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault()
            const filterLabel = e.currentTarget.querySelector(".btn-labels-item")

            newsFilterButtons.forEach((item) => {
                item.classList.remove("is-active")
            })

            btn.classList.add("is-active")

            newsFilterOpenerLabels.forEach((label) => {
                label.textContent = filterLabel.textContent
            })

            newsFilter.classList.remove("expanded")
        })
    })

    document.querySelectorAll(".blog-filter-row p").forEach((input) => {
        input.addEventListener("click", function (e) {
            document.querySelectorAll(".blog-filter-row p").forEach((event) => {
                event.classList.remove("is-active")
            })
            input.classList.add("is-active")
            category = input.getAttribute("data-value")
            if (category === "") {
                let path = window.location.href
                let output = path.substring(0, path.lastIndexOf("?"))
                window.history.pushState("state", "", output)
            } else {
                let path = window.location.href
                let output = path.substring(0, path.lastIndexOf("?"))
                const params = new URLSearchParams(window.location.search)

                params.set("category", category)
                window.history.pushState("state", "", output + "?" + params)
            }
            console.log(category)
            page = 1
            postContainer.innerHTML = "" // Clear existing posts
            postContainer.style.height = "100vh"
            var loader = document.createElement("div")
            loader.className = "loader"
            postContainer.appendChild(loader)

            loadPosts(page, category)
        })
    })

    loadMoreButton.addEventListener("click", function (e) {
        e.preventDefault()
        loadMoreButton.innerHTML = "Loading..."
        let allPages = document.querySelector(".loadMore [data-pages]").dataset.pages
        var loader = document.createElement("div")
        loader.className = "loader"
        postContainer.appendChild(loader)
        page++
        loadPosts(parseInt(page), category)
    })
}
