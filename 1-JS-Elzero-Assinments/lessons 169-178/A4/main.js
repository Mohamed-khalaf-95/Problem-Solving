let articalRequest = new XMLHttpRequest();
articalRequest.open("get", "./artical.json");
articalRequest.send();
articalRequest.onload = function () {
  let mainData = JSON.parse(this.responseText);
  let mainDiv = document.getElementById("data");
  if (this.status === 200 && this.readyState === 4) {
    for (let value in mainData) {
      let contentDiv = document.createElement("div");
      contentDiv.className = "content";
      let title = document.createElement("h2");
      let titleTxt = document.createTextNode(mainData[value].articalTitle);
      title.appendChild(titleTxt);
      let artContent = document.createElement("p");
      let artContentTxt = document.createTextNode(
        mainData[value]["Artical Content"]
      );
      artContent.appendChild(artContentTxt);
      let artOwner = document.createElement("p");
      let artOwnerTxt = document.createTextNode(
        "Author : " + mainData[value]["name"]
      );
      artOwner.appendChild(artOwnerTxt);
      let artCat = document.createElement("p");
      let artCatTxt = document.createTextNode("Category : " + mainData[value]["department"]);
      artCat.appendChild(artCatTxt);

      contentDiv.append(title, artContent, artOwner, artCat);
      mainDiv.appendChild(contentDiv);
    }
  }
};
