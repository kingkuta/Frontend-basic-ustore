"use strict";

filterSelection('all')
function filterSelection(c) {
    let x, i;
    x = document.getElementsByClassName("product-card");
    if (c === "all") c = "";
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
    }
}
function addClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) === -1) {
            element.className += " " + arr2[i];
        }
    }
}
function removeClass(element, name) {
    let i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
const btnContainer = document.getElementById("myBtnContainer");
const btnns = btnContainer.getElementsByClassName("butn");
for (let i = 0; i < btnns.length; i++) {
    btnns[i].addEventListener("click", function(){
        let current = document.getElementsByClassName("actived");
        current[0].className = current[0].className.replace(" actived", "");
        this.className += " actived";
    });
}



//search
const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const product = document.querySelectorAll(".product-card");
    const pname = document.getElementsByTagName("h2");

    for (let i = 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];

        if (match) {
            let textvalue = match.textContent || match.innerHTML

            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                product[i].style.display = "";
            } else {
                product[i].style.display = "none"
            }
        }
    }
}









