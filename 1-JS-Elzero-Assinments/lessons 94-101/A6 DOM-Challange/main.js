document.body.style.cssText = `font-family:Verdana, Geneva, Tahoma, sans-serif; padding:0;margin:0;`;
// nav bar varible
let logo = "Elzero";
let navLinks = ["Home", "About", "Service", "Contact"];
let header = document.createElement("header");
let mySection = document.createElement("section");
let myFooter = document.createElement("div");
// start nav bar function
function navBar(logo, ...links) {
  //container
  let container = document.createElement("div");
  container.className = "container";
  container.style.cssText = `display: flex;align-items: center;justify-content: space-between;padding: 0 15px;`;
  header.append(container);
  document.body.prepend(header);
  //logo
  let navLogo = document.createElement("h1");
  navLogo.className = "logo";
  navLogo.textContent = logo;
  navLogo.style.color = "#20a665";
  container.appendChild(navLogo);
  //links
  let navElements = document.createElement("ul");
  navElements.className = "nav-links";
  navElements.style.cssText = `display: flex;align-items: center;justify-content: flex-end;list-style: none;`;
  for (let i = 0; i < links.length; i++) {
    let navElementLinks = document.createElement("li");
    navElementLinks.className = "nav-link";
    navElementLinks.textContent = links[i];
    navElements.append(navElementLinks);
    navElementLinks.style.cssText = `margin-right: 20px;color: #777;`;
  }
  container.append(navElements);
}
// start product function
function products() {
  let container = document.createElement("div");
  container.className = "container";
  container.style.cssText = `padding:15px; display:grid;grid-template-columns:repeat(auto-fill, minmax(450px,1fr)); gap:20px`;
  mySection.append(container);
  mySection.style.cssText = `background-color:#eee;`;
  for (let i = 0; i < 15; i++) {
    let myProEle = document.createElement("div");
    myProEle.className = "product";
    myProEle.style.cssText = `background-color:#fff; padding:15px;display:flex; flex-direction:column;justify-content:center;align-items:center;`;
    let proCounter = document.createElement("h2");
    proCounter.className = "product-counter";
    proCounter.textContent = i + 1;
    proCounter.style.cssText = `font-weight:400; font-size:35px;margin-bottom: 15px;`;
    myProEle.append(proCounter);
    let myProTitleEl = document.createElement("h3");
    let myProTitle = document.createTextNode("Product");
    myProTitleEl.style.cssText = `font-weight:400; font-size:16px; color:#777; margin-top:0`;
    myProTitleEl.append(myProTitle);
    myProEle.append(myProTitleEl);
    container.append(myProEle);
    header.after(mySection);
  }
}
//start footer
function footer() {
  myFooter.className = "footer";
  myFooter.style.cssText = `padding:20px; font-size:20px;text-align:center;background-color:#20a665; color:#fff`;
  myFooter.textContent = "Copyright 2021";
  mySection.after(myFooter);
}
navBar(logo, ...navLinks);
products();
footer();
