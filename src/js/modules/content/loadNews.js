export const loadNews = (page = 1, year = "") => {
    console.log('working');

    let loading = false;
    let newsContainer = document.querySelector(".loadMoreNews");
    let loadMoreButton = document.querySelector(".loadMoreNewsButton");
    let globalLoader = document.querySelector(".news-loader-overlay");

    if (!loading && newsContainer) {
        loading = true;

        // ✅ Show loader
        if (globalLoader) globalLoader.style.display = "flex";

        fetch("/wp-admin/admin-ajax.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body:
                "action=load_more_news" +
                "&page=" + page +
                "&per_page=4" +
                "&year=" + year,
        })
            .then((response) => response.text())
            .then((data) => {
                if (data) {

                    // if filter or first page → clear content
                    if (page === 1) {
                        newsContainer.innerHTML = "";
                    }

                    // Add the new posts
                    newsContainer.insertAdjacentHTML("beforeend", data);

                    // Check the pages quantity
                    let allPages = document.querySelector(".loadMoreNews [data-pages]").dataset.pages;
                    if (allPages > page) {
                        loadMoreButton.querySelector(".newsShowMore").style.display = "inline-flex";
                    } else {
                        loadMoreButton.querySelector(".newsShowMore").style.display = "none";
                    }
                }

                // ✅ Hide loader
                globalLoader.style.display = "none";

                // Restore initial button text
                loadMoreButton.querySelectorAll('.btn-labels .btn-labels-item').forEach(function(e){
                    e.innerHTML = "View More";
                });

                loading = false;
            });
    }
};

export const initLoadNews = () => {
    let page = 1;
    let currentYear = ""; // ✅ default: show all years
    let postContainer = document.querySelector(".loadMoreNews");
    let loadMoreButton = document.querySelector(".loadMoreNewsButton .newsShowMore");

    // ✅ Load More button pagination
    loadMoreButton.addEventListener("click", function (e) {
        e.preventDefault();
        loadMoreButton.querySelectorAll('.btn-labels .btn-labels-item').forEach(function(e){
            e.innerHTML = "Loading...";
        });

        let allPages = document.querySelector(".loadMoreNews [data-pages]").dataset.pages;
        console.log(allPages);


        page++;
        loadNews(page, currentYear); // ✅ now only passes year
    });

    // ✅ Year filter buttons
    document.querySelectorAll("[data-filter-item]").forEach(function(btn){
        btn.addEventListener("click", function(){
            // Get selected year from button (or empty for Latest)
            currentYear = btn.dataset.year || "";

            // Reset pagination
            page = 1;

            // Active state
            document.querySelectorAll("[data-filter-item]").forEach(b => b.classList.remove("is-active"));
            btn.classList.add("is-active");

            // Load filtered posts (resets container)
            loadNews(page, currentYear);
        });
    });
};

export const filterMenu = () => {
    const filterMenu = document.querySelector("[data-filter-menu]")
    if (!filterMenu) return;

    const filterOpener = filterMenu.querySelector("[data-filter-opener]")
    const filterOpenerLabels = filterOpener.querySelectorAll(".btn-labels-item")
    const filterItems = filterMenu.querySelectorAll("[data-filter-item]")

    filterOpener.addEventListener("click", function (e) {
        e.preventDefault()
        filterMenu.classList.toggle("expanded")
        filterOpener.classList.toggle("is-active")
    })

    filterItems.forEach((btn) => {
        btn.addEventListener("click", function (e) {
            e.preventDefault()
            const filterLabel = e.currentTarget.querySelector(".btn-labels-item")

            filterItems.forEach((item) => {
                item.classList.remove("is-active")
            })

            btn.classList.add("is-active")

            filterOpenerLabels.forEach((label) => {
                label.textContent = filterLabel.textContent
            })

            filterOpener.classList.remove("is-active")
            filterMenu.classList.remove("expanded")
        })
    })
}