document.querySelector(".add-p").addEventListener("click", function() {
  let newParaghraph = document.createElement("p");
  //let paragraphSign = document.createTextNode("§");
  let newParaghraphText = document.createTextNode("New paragraph here");
  newParaghraph.setAttribute("class", "ag-paragraph");
  newParaghraph.setAttribute("contenteditable", "true");
  newParaghraph.appendChild(newParaghraphText);
  document.querySelector(".content-section").appendChild(newParaghraph);
});
document.querySelector(".add-s").addEventListener("click",function(){
  let newSignText = document.createTextNode("..................................");
  let newSign = document.createElement("DIV");
  newSign.setAttribute("class","ag-sign");
  newSign.appendChild(newSignText);
  document.querySelector(".writing").appendChild(newSign);
});