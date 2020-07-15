const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
  img: {
    "header-img":
      "https://tk-assets.lambdaschool.com/d312ae1d-879c-4c0b-8e0a-d03661aed7d8_header-img.png",
    "mid-page-img":
      "https://tk-assets.lambdaschool.com/933e5c8a-f143-4a89-b81b-4a609c325f1a_mid-page-accent.jpg",
    "logo-img":
      "https://tk-assets.lambdaschool.com/d7b66b1d-1f0f-489e-b408-f8e25140c82c_logo.png",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["img"]["logo-img"]);

let ctaImage = document.getElementById("cta-img");
ctaImage.setAttribute("src", siteContent["cta"]["img"]);
ctaImage.src =
  "https://tk-assets.lambdaschool.com/d312ae1d-879c-4c0b-8e0a-d03661aed7d8_header-img.png";

let midImage = document.getElementById("middle-img");
midImage.setAttribute("src", siteContent["main-content"]["img"]);
midImage.src =
  "https://tk-assets.lambdaschool.com/933e5c8a-f143-4a89-b81b-4a609c325f1a_mid-page-accent.jpg";
midImage.style.borderRadius = "15px";

//text

const h1 = document.querySelector(".cta-text h1");
h1.textContent = siteContent.cta.h1;
h1.style.color = "red";
h1.style.textShadow = "2px 2px black";

const button = document.querySelector(".cta .cta-text button");
button.textContent = siteContent.cta.button;
button.style.color = "red";
button.style.textShadow = "1px 1px black";

const feats = document.getElementsByTagName("p");
feats[0].textContent = siteContent["main-content"]["features-content"];

const featHead = document.getElementsByTagName("h4");
featHead[0].textContent = siteContent["main-content"]["features-h4"];
featHead[0].style.color = "red";
featHead[0].style.textShadow = "1px 1px black";

const abtHead = document.getElementsByTagName("h4");
abtHead[1].textContent = siteContent["main-content"]["about-h4"];
abtHead[1].style.color = "red";
abtHead[1].style.textShadow = "1px 1px black";

const abt = document.getElementsByTagName("p");
abt[1].textContent = siteContent["main-content"]["about-content"];
//
const srvHead = document.getElementsByTagName("h4");
srvHead[2].textContent = siteContent["main-content"]["services-h4"];
srvHead[2].style.color = "red";
srvHead[2].style.textShadow = "1px 1px black";

const srv = document.getElementsByTagName("p");
srv[2].textContent = siteContent["main-content"]["services-content"];

const prodHead = document.getElementsByTagName("h4");
prodHead[3].textContent = siteContent["main-content"]["product-h4"];
prodHead[3].style.color = "red";
prodHead[3].style.textShadow = "1px 1px black";

const prod = document.getElementsByTagName("p");
prod[3].textContent = siteContent["main-content"]["product-content"];

const visHead = document.getElementsByTagName("h4");
visHead[4].textContent = siteContent["main-content"]["vision-h4"];
visHead[4].style.color = "red";
visHead[4].style.textShadow = "1px 1px black";

const vis = document.getElementsByTagName("p");
vis[4].textContent = siteContent["main-content"]["vision-content"];

// Contact

const contHead = document.getElementsByTagName("h4");
contHead[5].textContent = siteContent["contact"]["contact-h4"];
contHead[5].style.color = "red";
contHead[5].style.textShadow = "1px 1px black";

const cont1 = document.getElementsByTagName("p");
cont1[5].textContent = siteContent["contact"]["address"];

const cont2 = document.getElementsByTagName("p");
cont2[6].textContent = siteContent["contact"]["phone"];

const cont3 = document.getElementsByTagName("p");
cont3[7].textContent = siteContent["contact"]["email"];
cont3[7].style.color = "blue";

// footer

const foot = document.getElementsByTagName("p");
foot[8].textContent = siteContent["footer"]["copyright"];

// nav bar

const navItems = document.querySelectorAll("nav a");
for (let i = 1; i <= navItems.length; i++) {
  navItems[i].textContent = siteContent.nav[`nav-item-${i}`];
}
