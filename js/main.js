
document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul a");

    navLinks.forEach(function (link) {
        const href = link.getAttribute("href");
        if (href === currentPage || (currentPage === "" && href === "index.html")) {
            link.style.color = "#e8c97e";
            link.style.fontWeight = "bold";
        }
    });

    const form = document.querySelector(".contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            const btn = form.querySelector("button");
            btn.textContent = "Message Sent!";
            btn.style.backgroundColor = "#2a7a4b";
            setTimeout(function () {
                btn.textContent = "Send Message";
                btn.style.backgroundColor = "";
                form.reset();
            }, 2500);
        });
    }
});
