let total = 0;


function clickCard(target) {
  //console.log('works');
  const totalprice = document.getElementById("totalprice");
  const addtocart = document.getElementById("addtocart");
  const getPrice = document.getElementById("get-price");
  const itemName = target.querySelector("h2").innerText;

  const count = addtocart.childElementCount;
  const li = document.createElement("li");
  li.classList.add("list-none");
  li.innerText = `${count + 1}.${itemName}`;
  addtocart.appendChild(li);

  const aaprice = target.querySelector("p").innerText.split(" ")[0];
  const caaprice = parseFloat(aaprice);
  total = parseFloat(total) + caaprice;
  totalprice.innerText = total;
  const Finaltotal = (document.getElementById("Finalprice").innerText = total);
  if (Finaltotal >= 200) {
    const cuponbtn = document.getElementById("couponbtn");
    cuponbtn.removeAttribute("disabled");
cuponbtn.addEventListener("click", function () {
      const couponcode = document.getElementById("couponcode").value;
      if (couponcode === "SELL200") {
        const finalDiscountPrice = (Finaltotal * 20) / 100;
        const refinalDiscountPrice = (document.getElementById(
          "discountprice"
        ).innerText = finalDiscountPrice);
        const finallastprice = Finaltotal - refinalDiscountPrice;
        document.getElementById("Finalprice").innerText = finallastprice;
        const cuponbtn = document.getElementById("couponbtn");
        cuponbtn.setAttribute("disabled", " ");
      } else {
        if (!false) {
          alert("Invalid coupon");
          return;
        }
      }
    });
  }
  
}


function openWin() {
  document.getElementById("totalprice").innerText = "";
  document.getElementById("discountprice").innerText = "";
  document.getElementById("Finalprice").innerText = "";
  document.getElementById("addtocart").innerText = "";
  document.getElementById("couponcode").value = "";
}
//make purchase

