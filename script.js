const linkIcons = document.querySelectorAll(".list-icon i");
const brandName = document.querySelector(".brand-name");
const mission = document.querySelector(".mission");
const shop = document.querySelector(".shop");
const product = document.querySelector(".product");
const community = document.querySelector(".community");
const blog = document.querySelector(".blog");

gsap.from(brandName, { autoAlpha: 0, scale: 0, duration: 1, ease: "linear" });

gsap.from(mission, { autoAlpha: 0, x: -250, duration: 1, ease: "linear" });

gsap.from(shop, { autoAlpha: 0, x: -250, duration: 1, ease: "linear" });

gsap.from(product, { autoAlpha: 0, y: -250, duration: 1, ease: "linear" });

gsap.from(community, { autoAlpha: 0, x: -250, duration: 1, ease: "linear" });

gsap.from(blog, { autoAlpha: 0, x: -250, duration: 1, ease: "linear" });
