/* =========================================================
   VISTALENS
   PROFESSIONAL PHOTOGRAPHY WEBSITE
   JAVASCRIPT
========================================================= */


/* =========================================================
   ELEMENTS
========================================================= */

const siteHeader =
    document.getElementById("siteHeader");

const menuButton =
    document.getElementById("menuButton");

const mainNav =
    document.getElementById("mainNav");

const navSearchBtn =
    document.getElementById("navSearchBtn");

const searchInput =
    document.getElementById("searchInput");

const clearSearch =
    document.getElementById("clearSearch");

const galleryGrid =
    document.getElementById("galleryGrid");

const galleryItems =
    Array.from(
        document.querySelectorAll(".gallery-item")
    );

const filterButtons =
    document.querySelectorAll(".filter-btn");

const collectionCards =
    document.querySelectorAll(".collection-card");

const resultCount =
    document.getElementById("resultCount");

const noResults =
    document.getElementById("noResults");

const resetGallery =
    document.getElementById("resetGallery");

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxTitle =
    document.getElementById("lightboxTitle");

const lightboxCategory =
    document.getElementById("lightboxCategory");

const closeLightbox =
    document.getElementById("closeLightbox");

const prevImage =
    document.getElementById("prevImage");

const nextImage =
    document.getElementById("nextImage");

const currentImageNumber =
    document.getElementById("currentImageNumber");

const totalImageNumber =
    document.getElementById("totalImageNumber");

const favoriteButton =
    document.getElementById("favoriteButton");

const downloadButton =
    document.getElementById("downloadButton");

const toast =
    document.getElementById("toast");

const newsletterForm =
    document.getElementById("newsletterForm");

const emailInput =
    document.getElementById("emailInput");


/* =========================================================
   VARIABLES
========================================================= */

let activeCategory = "all";

let searchTerm = "";

let visibleItems = [];

let currentIndex = 0;

let touchStartX = 0;

let touchEndX = 0;

let favoriteImages =
    JSON.parse(
        localStorage.getItem(
            "vistaLensFavorites"
        )
    ) || [];


/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

function updateHeader() {

    if (window.scrollY > 40) {

        siteHeader.classList.add("scrolled");

    } else {

        siteHeader.classList.remove("scrolled");

    }

}

window.addEventListener(
    "scroll",
    updateHeader
);

updateHeader();


/* =========================================================
   MOBILE MENU
========================================================= */

menuButton.addEventListener(
    "click",
    () => {

        mainNav.classList.toggle("open");

        const isOpen =
            mainNav.classList.contains("open");

        menuButton.textContent =
            isOpen ? "×" : "☰";

    }
);


document
    .querySelectorAll(".nav-link")
    .forEach((link) => {

        link.addEventListener(
            "click",
            () => {

                mainNav.classList.remove(
                    "open"
                );

                menuButton.textContent =
                    "☰";

            }
        );

    });


/* =========================================================
   NAVIGATION SEARCH BUTTON
========================================================= */

navSearchBtn.addEventListener(
    "click",
    () => {

        document
            .getElementById("explore")
            .scrollIntoView({
                behavior: "smooth"
            });

        setTimeout(
            () => {

                searchInput.focus();

            },
            600
        );

    }
);


/* =========================================================
   GALLERY DATA
========================================================= */

function getItemData(item) {

    const image =
        item.querySelector("img");

    return {

        element: item,

        url: image.src,

        title:
            item.dataset.title ||
            "Untitled Photograph",

        category:
            item.dataset.category ||
            "Gallery",

        alt:
            image.alt ||
            "Photograph"

    };

}


/* =========================================================
   UPDATE GALLERY
========================================================= */

function updateGallery() {

    visibleItems = [];


    galleryItems.forEach(
        (item, index) => {

            const title =
                (
                    item.dataset.title || ""
                ).toLowerCase();

            const category =
                (
                    item.dataset.category || ""
                ).toLowerCase();


            const categoryMatches =
                activeCategory === "all" ||
                category === activeCategory;


            const searchMatches =
                title.includes(searchTerm) ||
                category.includes(searchTerm);


            if (
                categoryMatches &&
                searchMatches
            ) {

                item.style.display =
                    "block";

                visibleItems.push(item);

                /*
                 * Re-run entrance animation.
                 */

                item.style.animation =
                    "none";

                void item.offsetWidth;

                item.style.animation =
                    `galleryAppear 0.45s ease ${Math.min(index * 0.02, 0.3)}s both`;

            } else {

                item.style.display =
                    "none";

            }

        }
    );


    /* RESULT COUNT */

    resultCount.textContent =
        visibleItems.length;


    /* SEARCH BUTTON */

    if (searchTerm.length > 0) {

        document
            .querySelector(".search-box")
            .classList.add("has-value");

    } else {

        document
            .querySelector(".search-box")
            .classList.remove("has-value");

    }


    /* NO RESULTS */

    if (visibleItems.length === 0) {

        noResults.style.display =
            "block";

        galleryGrid.style.display =
            "none";

    } else {

        noResults.style.display =
            "none";

        galleryGrid.style.display =
            "grid";

    }

}


/* =========================================================
   FILTER BUTTONS
========================================================= */

filterButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {

                filterButtons.forEach(
                    (btn) => {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                activeCategory =
                    button.dataset.filter;


                updateGallery();

            }
        );

    }
);


/* =========================================================
   SEARCH
========================================================= */

searchInput.addEventListener(
    "input",
    () => {

        searchTerm =
            searchInput.value
                .trim()
                .toLowerCase();

        updateGallery();

    }
);


/* =========================================================
   CLEAR SEARCH
========================================================= */

clearSearch.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        searchTerm = "";

        updateGallery();

        searchInput.focus();

    }
);


/* =========================================================
   RESET GALLERY
========================================================= */

resetGallery.addEventListener(
    "click",
    () => {

        searchInput.value = "";

        searchTerm = "";

        activeCategory = "all";


        filterButtons.forEach(
            (button) => {

                button.classList.remove(
                    "active"
                );

            }
        );


        document
            .querySelector(
                '[data-filter="all"]'
            )
            .classList.add("active");


        updateGallery();

    }
);


/* =========================================================
   COLLECTION CARDS
========================================================= */

collectionCards.forEach(
    (card) => {

        card.addEventListener(
            "click",
            () => {

                const category =
                    card.dataset.category;


                activeCategory =
                    category;


                filterButtons.forEach(
                    (button) => {

                        button.classList.toggle(
                            "active",
                            button.dataset.filter ===
                            category
                        );

                    }
                );


                updateGallery();


                document
                    .getElementById("explore")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

            }
        );

    }
);


/* =========================================================
   OPEN LIGHTBOX
========================================================= */

galleryItems.forEach(
    (item) => {

        item.addEventListener(
            "click",
            (event) => {

                /*
                 * Prevent the internal button
                 * from causing another action.
                 */

                if (
                    event.target.closest(
                        ".view-image"
                    )
                ) {
                    event.stopPropagation();
                }


                const index =
                    visibleItems.indexOf(item);


                if (index !== -1) {

                    currentIndex =
                        index;

                    openLightbox();

                }

            }
        );

    }
);


/* =========================================================
   OPEN LIGHTBOX FUNCTION
========================================================= */

function openLightbox() {

    if (
        visibleItems.length === 0
    ) {
        return;
    }


    const item =
        visibleItems[currentIndex];


    const data =
        getItemData(item);


    lightboxImage.src =
        data.url;

    lightboxImage.alt =
        data.alt;


    lightboxTitle.textContent =
        data.title;


    lightboxCategory.textContent =
        capitalize(data.category);


    currentImageNumber.textContent =
        String(currentIndex + 1)
            .padStart(2, "0");


    totalImageNumber.textContent =
        visibleItems.length;


    updateFavoriteButton(
        data.url
    );


    downloadButton.dataset.url =
        data.url;

    downloadButton.dataset.title =
        data.title;


    lightbox.classList.add(
        "active"
    );

    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   CLOSE LIGHTBOX
========================================================= */

function closeLightboxFunction() {

    lightbox.classList.remove(
        "active"
    );

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";

}


/* =========================================================
   NEXT IMAGE
========================================================= */

function showNextImage() {

    if (
        visibleItems.length === 0
    ) {
        return;
    }


    currentIndex++;


    if (
        currentIndex >=
        visibleItems.length
    ) {

        currentIndex = 0;

    }


    openLightbox();

}


/* =========================================================
   PREVIOUS IMAGE
========================================================= */

function showPreviousImage() {

    if (
        visibleItems.length === 0
    ) {
        return;
    }


    currentIndex--;


    if (currentIndex < 0) {

        currentIndex =
            visibleItems.length - 1;

    }


    openLightbox();

}


/* =========================================================
   LIGHTBOX BUTTONS
========================================================= */

closeLightbox.addEventListener(
    "click",
    closeLightboxFunction
);

nextImage.addEventListener(
    "click",
    showNextImage
);

prevImage.addEventListener(
    "click",
    showPreviousImage
);


/* =========================================================
   CLOSE BY BACKGROUND
========================================================= */

lightbox.addEventListener(
    "click",
    (event) => {

        if (
            event.target === lightbox
        ) {

            closeLightboxFunction();

        }

    }
);


/* =========================================================
   KEYBOARD CONTROLS
========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !lightbox.classList.contains(
                "active"
            )
        ) {
            return;
        }


        if (
            event.key === "Escape"
        ) {

            closeLightboxFunction();

        }


        if (
            event.key === "ArrowRight"
        ) {

            showNextImage();

        }


        if (
            event.key === "ArrowLeft"
        ) {

            showPreviousImage();

        }

    }
);


/* =========================================================
   MOBILE SWIPE
========================================================= */

lightbox.addEventListener(
    "touchstart",
    (event) => {

        touchStartX =
            event.changedTouches[0]
                .screenX;

    },
    {
        passive: true
    }
);


lightbox.addEventListener(
    "touchend",
    (event) => {

        touchEndX =
            event.changedTouches[0]
                .screenX;

        handleSwipe();

    },
    {
        passive: true
    }
);


function handleSwipe() {

    const distance =
        touchEndX -
        touchStartX;


    if (distance < -60) {

        showNextImage();

    }


    if (distance > 60) {

        showPreviousImage();

    }

}


/* =========================================================
   FAVORITES
========================================================= */

function updateFavoriteButton(url) {

    const isFavorite =
        favoriteImages.includes(url);


    favoriteButton.classList.toggle(
        "favorite",
        isFavorite
    );


    favoriteButton.textContent =
        isFavorite ? "♥" : "♡";

}


favoriteButton.addEventListener(
    "click",
    () => {

        const url =
            downloadButton.dataset.url;


        const index =
            favoriteImages.indexOf(url);


        if (index === -1) {

            favoriteImages.push(url);

            showToast(
                "Added to favorites"
            );

        } else {

            favoriteImages.splice(
                index,
                1
            );

            showToast(
                "Removed from favorites"
            );

        }


        localStorage.setItem(
            "vistaLensFavorites",
            JSON.stringify(
                favoriteImages
            )
        );


        updateFavoriteButton(
            url
        );

    }
);


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function showToast(message) {

    const paragraph =
        toast.querySelector("p");


    paragraph.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimer
    );


    toastTimer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2200
        );

}


/* =========================================================
   DOWNLOAD
========================================================= */

downloadButton.addEventListener(
    "click",
    async () => {

        const imageUrl =
            downloadButton.dataset.url;

        const title =
            downloadButton.dataset.title ||
            "vistalens-image";


        if (!imageUrl) {
            return;
        }


        const originalText =
            downloadButton.textContent;


        downloadButton.textContent =
            "Downloading...";


        downloadButton.disabled =
            true;


        try {

            const response =
                await fetch(
                    imageUrl,
                    {
                        mode: "cors"
                    }
                );


            if (!response.ok) {

                throw new Error(
                    "Download failed"
                );

            }


            const blob =
                await response.blob();


            const blobUrl =
                URL.createObjectURL(
                    blob
                );


            const link =
                document.createElement(
                    "a"
                );


            link.href =
                blobUrl;


            link.download =
                createFileName(
                    title
                );


            document.body.appendChild(
                link
            );


            link.click();


            link.remove();


            setTimeout(
                () => {

                    URL.revokeObjectURL(
                        blobUrl
                    );

                },
                1000
            );


            showToast(
                "Download started"
            );


        } catch (error) {

            console.error(
                error
            );


            /*
             * External image servers may
             * block automatic downloads.
             */

            window.open(
                imageUrl,
                "_blank"
            );


            showToast(
                "Image opened in a new tab"
            );

        }


        setTimeout(
            () => {

                downloadButton.textContent =
                    originalText;

                downloadButton.disabled =
                    false;

            },
            1500
        );

    }
);


/* =========================================================
   NEWSLETTER
========================================================= */

newsletterForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const email =
            emailInput.value.trim();


        if (!email) {
            return;
        }


        showToast(
            "Thanks for subscribing!"
        );


        emailInput.value = "";

    }
);


/* =========================================================
   IMAGE ERROR HANDLING
========================================================= */

galleryItems.forEach(
    (item) => {

        const image =
            item.querySelector("img");


        image.addEventListener(
            "error",
            () => {

                item.style.background =
                    "#ddd";

            }
        );

    }
);


/* =========================================================
   UTILITY FUNCTIONS
========================================================= */

function capitalize(text) {

    if (!text) {
        return "";
    }


    return (
        text.charAt(0).toUpperCase() +
        text.slice(1)
    );

}


function createFileName(title) {

    return (
        title
            .toLowerCase()
            .replace(
                /[^a-z0-9]+/g,
                "-"
            )
            .replace(
                /^-+|-+$/g,
                ""
            )
    ) + ".jpg";

}


/* =========================================================
   IMAGE PRELOADING FOR LIGHTBOX
========================================================= */

galleryItems.forEach(
    (item) => {

        const image =
            item.querySelector("img");


        image.addEventListener(
            "click",
            () => {

                /*
                 * Browser already has the image,
                 * but this gives the lightbox a
                 * smoother transition.
                 */

                const preload =
                    new Image();

                preload.src =
                    image.src;

            }
        );

    }
);


/* =========================================================
   INITIALIZE
========================================================= */

updateGallery();


/* =========================================================
   ACTIVE NAVIGATION SECTION
========================================================= */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        ".nav-link"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        navigationLinks
                            .forEach(
                                (link) => {

                                    link.classList
                                        .remove(
                                            "active"
                                        );

                                }
                            );


                        const activeLink =
                            document.querySelector(
                                `.nav-link[href="#${entry.target.id}"]`
                            );


                        if (activeLink) {

                            activeLink.classList.add(
                                "active"
                            );

                        }

                    }

                }
            );

        },
        {
            threshold: 0.2
        }
    );


sections.forEach(
    (section) => {

        observer.observe(
            section
        );

    }
);

