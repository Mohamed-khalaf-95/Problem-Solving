//86
/*
html body
 <span class="my-span">My Span 1</span>
   <span class="my-span">My Span 2</span>
<p>Hello Paragraph 1</p>
<p>Hello Paragraph 2</p>
<div id="my-div">Hello Div</div>
<form action="">
  <input type="text" name="one" value="hello">
</form>
<form action="">
  <input type="text" name="two" value="hello">
</form>
<a href="https://google.com">Google</a>
<a href="https://facebook.com">Facebook</a>

*/
console.log("Id-Elmenet " + "#".repeat(20));
let myIdElement = document.getElementById("my-div");
console.log(myIdElement);

//===============================================
console.log("Tag-Elmenets " + "#".repeat(20));
let myTagElement = document.getElementsByTagName("p");
console.log(myTagElement);
console.log(myTagElement[0]);
console.log(myTagElement[1]);
//===============================================
console.log("Class-Elmenets " + "#".repeat(20));
let myClassElement = document.getElementsByClassName("my-span");
console.log(myClassElement);
console.log(myClassElement[0]);
console.log(myClassElement[1]);
// //===============================================
console.log("Query-Selectors-Elmenets " + "#".repeat(20));
let myQueryElement = document.querySelector(".my-span");
console.log(myQueryElement);
//=================================================
console.log("All-Query-Selectors-Elmenets " + "#".repeat(20));
let myAllQueryElement = document.querySelectorAll(".my-span");
console.log(myAllQueryElement);
console.log(myAllQueryElement[0]);
console.log(myAllQueryElement[1]);
// //===============================================
console.log("Collection-Elmenets " + "#".repeat(20));
console.log("Page title = " + document.title);
console.log(document.body);
console.log(document.links);
console.log(document.links[0]);
console.log(document.links[1].text);
console.log(document.forms);
console.log(document.forms[0].one.value);
console.log(document.images);
//87==========================================================================
/* 
html body
<div class="js">JavaScript <span> Div </span></div>
   <img src="" alt="">
   <a href="#">Google   <span> youtube </span> Facebook</a>
   <div id="mylinks">
    This is my <b>link collection</b>:
    <ul>
      <li style="display: none;"><a href="www.borland.com">Bye bye <b>Borland</b> </a></li>
      <li><a href="www.microfocus.com">Welcome to <b>Micro Focus</b></a></li>
    </ul>
  </div>


*/
let myElement = document.querySelector(".js");
console.log(myElement.innerHTML);
console.log(myElement.textContent);

//myElement.innerHTML = "form main <span>js file </span>";
console.log(myElement.innerHTML);
//myElement.textContent = "Hello From Main Js File <span>"
console.log(myElement.textContent);

document.images[0].src = "./img.jpeg";
document.images[0].width = "300";
document.images[0].height = "200";
document.images[0].alt = "img from js";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "pic-class";
//87==========================================================================
let myLink = document.querySelector("a");
console.log(myLink);
myLink.className = "link";
myLink.href = "https://facebook.com";
console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));
myLink.setAttribute("href", "https://google.com");
myLink.setAttribute("class", "google-link");
myLink.setAttribute("value", "google-value");
let myLinks = document.getElementById("mylinks");
document.write("</br>" + myLinks.innerText);
document.write("</br>" + myLinks.textContent);
//89==========================================================================
/* <div>Div</div>
<p class="para" title="paragraph" data-src="">paragraph</p> */
let myP = document.querySelectorAll(".para");
for (let i = 0; i < myP.length; i++) {
  if (myP[i].getAttribute("data-src") === "") {
    console.log(myP[i]);
    myP[i].className = "khalaf";
    //myP[i].setAttribute("data-src", "testing");
  }
}
//add product
function addProduct(pName, pDesc, price) {
  //container
  pContainer = document.createElement("div");
  //heading
  let heading = document.createElement("h1");
  let title = document.createTextNode(pName);
  heading.appendChild(title);
  //desc
  let descEle = document.createElement("h3");
  let desc = document.createTextNode(pDesc);
  descEle.appendChild(desc);
  //price
  let priceEle = document.createElement("p");
  let priceValue = document.createTextNode(price);
  priceEle.appendChild(priceValue);
  //append child
  pContainer.appendChild(heading);
  pContainer.appendChild(descEle);
  pContainer.appendChild(priceEle);
  return pContainer;
}

console.log(addProduct("product one", "test product", 100));
document.body.appendChild(addProduct("product one", "test product", 100));

//create 100 product
for (let i = 1; i <= 100; i++) {
  let ele = document.createElement("div");
  let heading = document.createElement("h2");
  let desc = document.createElement("p");

  let headingText = document.createTextNode("Product title " + i);
  let descText = document.createTextNode("Product Description");

  ele.className = "product";

  heading.appendChild(headingText);
  desc.appendChild(descText);

  ele.appendChild(heading);
  ele.appendChild(desc);

  document.body.appendChild(ele);
}


// events 
let myBtn = document.getElementById("btn");
let showPassMess = document.getElementById("pass");
let showPassgood = document.getElementById("passgood");
let myInput = document.querySelector("input[type = text]");

//mous left clicked
myBtn.onclick = function () {
  console.log("clicked");
};
myBtn.onmousedown = () => console.log("mouse down");
myBtn.onmouseup = () => console.log("mouse setup");
// mous right clicked
myBtn.oncontextmenu = () => console.log("contexmenu");
// mouse hover in
myBtn.onmouseenter = () => console.log("mouse Enter");
myBtn.onmouseover = () => console.log("mouse over");
// mouse move count
myBtn.onmousemove = () => console.log("mouse move");
// mouse hover out
myBtn.onmouseleave = () => console.log("mouse leave");
myBtn.onmouseout = () => console.log("mouse out");

//window.onload = () => (myBtn.style.display = "block");
window.onresize = () => (myBtn.style.background = "brown");

document.body.onscroll = function () {
  myscrolling();
};
window.onscroll = function () {
  console.log("scrooling");
};

function myscrolling() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    myBtn.className = "fixed";
  }
}

 myInput.onfocus = function(){
  showPassMess.style.display = "block"
  showPassgood.style.display = "none"
  myInput.style.background = "pink"
  
  }

  myInput.onblur = function(){ 
    showPassMess.style.display = "none"
    showPassgood.style.display = "block"
    myInput.style.background = ""
  }

//form validation
let myForm = document.getElementById("userinfo");
let userIn = document.querySelector("[name='username']");
let passwordIn = document.querySelector("[name='password']");
let ageIn = document.querySelector("[name='age']");

// start validation
myForm.onsubmit = function (e) {
  
  let userValid = false;
  let passwordValid = false;
  let ageValid = false;
  //condition
  if (userIn.value !== "" && userIn.value.length <= 10) {
    userValid = true;
  }
  if (passwordIn.value !== "" && passwordIn.value.length >= 10) {
    passwordValid = true;
  }
  if (ageIn.value !== "" && ageIn.value.length <= 3) {
    ageValid = true;
  }
  if (userValid === false || passwordValid === false || ageValid === false) {
    e.preventDefault();
  }
};

