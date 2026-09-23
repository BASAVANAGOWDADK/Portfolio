const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".navlist a");
const sections = document.querySelectorAll("main section[id]");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const year = document.getElementById("year");

if (year) {
    year.textContent = String(new Date().getFullYear());
}

menuToggle?.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
});

const closeNav = () => {
    document.body.classList.remove("nav-open");
    menuToggle?.setAttribute("aria-expanded", "false");
    menuToggle?.setAttribute("aria-label", "Open menu");
};

nav?.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        closeNav();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeNav();
    }
});

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
        projectCards.forEach((card) => {
            const tags = card.dataset.tags || "";
            const show = filter === "all" || tags.includes(filter);
            card.classList.toggle("is-hidden", !show);
        });
    });
});

const setActiveLink = () => {
    const offset = window.scrollY + 90;
    let current = "home";
    sections.forEach((section) => {
        if (offset >= section.offsetTop) {
            current = section.id;
        }
    });
    navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
};

const onScroll = () => {
    document.body.classList.toggle("is-scrolled", window.scrollY > 8);
    setActiveLink();
};

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
