function menu() {
  document.querySelector(".cat").style.display = "block";
}

function bae() {
  document.querySelector(".cat").style.display = "none";
  document.querySelector(".collect").forEach(item => item.style.display = "none");
}

function displayCart() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const itemList = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");

  if (!itemList || !totalDisplay) return;

  itemList.innerHTML = "";
  let total = 0;

  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.style.listStyleType = "none";

    li.innerHTML = `<div class="cart-item" style="border: 1px solid #ccc; box-shadow:0 0 5px black; padding:10px; margin-bottom:15px;position:relative; top:80px; background-color:#F8F8F8; border-radius:5px; width:600px; height:200px; margin-left:250px;">
      <img src="${item.img}" style="width:150px; position:relative;  box-shadow:0 0 5px black; top:25px; left:10px; height:150px; vertical-align: middle; cursor:pointer; border-radius:25px; margin-bottom:30px" onclick="openImgPopup('${item.img}')"/>
      <span style="margin-left:10px; position: relative; top:0px; left:30px; color:black;">${item.name} - $${item.price}</span>
      <button onclick="removeItem(${index})" style="margin-left:10px;position: absolute; top:95px; left:480px; padding:2px 10px 2px 10px; background-color:salmon;border-radius: 5px; border-color:white; cursor:pointer;">x</button><br>
      <button onclick='buyNow(${JSON.stringify(JSON.stringify(item))})' style="position:relative; bottom:60px; left:198px;background-color:#FFFA8D; border-radius: 5px; border-color:gray; cursor:pointer; padding:5px 10px 5px 10px;">Buy Now</button><?div>
    `;

    itemList.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = `Total: $${total}`;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}
function removeItem(index) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  displayCart();
}

function goToOrder() {
  if (!JSON.parse(localStorage.getItem("cartItems"))?.length) {
    alert("Your cart is empty!");
    return;
  }
  window.location.href = "order.html";
}

function openImgPopup(imgSrc) {
  document.getElementById("popup-imgage").src = imgSrc;
  document.getElementById("img-popup").style.display = "flex";
}

function closeImgPopup() {
  document.getElementById("img-popup").style.display = "none";
}

window.onload = displayCart;
function buyNow(itemStr) {
  const item = JSON.parse(itemStr);

  
  const orderItems = JSON.parse(localStorage.getItem("orderItems")) || [];

  
  orderItems.push(item);
  localStorage.setItem("orderItems", JSON.stringify(orderItems));

  
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const updatedCart = cartItems.filter(cartItem => cartItem.name !== item.name);
  localStorage.setItem("cartItems", JSON.stringify(updatedCart));


  window.location.href = "order.html";
}

