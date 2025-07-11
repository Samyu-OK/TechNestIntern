function menu() {
  document.querySelector(".cat").style.display = "block";
}

function bae() {
  document.querySelector(".cat").style.display = "none";
  document.querySelector(".collect").forEach(item => item.style.display = "none");
}

 document.addEventListener("DOMContentLoaded", () => {
  function renderOrders() {
    const orders = JSON.parse(localStorage.getItem("orderItems")) || [];
    const container = document.getElementById("order-section");

    if (!orders.length) {
      container.innerHTML = "<p>No recent orders found.</p>";
      return;
    }

    let total = 0;
    container.innerHTML = orders.map((item, index) => {
      total += Number(item.price);
      return `
        <div class="order-main" style="box-shadow:0 0 2px black inset; border: 1px solid #ccc; padding:15px; margin-bottom:10px; background-color:#F8F8F8; position:relative; left:260px; top:100px; width:730px; height:270px; border-radius:10px;">
          <img src="${item.img}" style="width:250px; height: 250px; box-shadow:0 0 5px black; border-radius:8px; position:relative; left:30px; top:10px;" />
          <h3 class="order-title" style="position: relative; left:400px;color: black; bottom:170px;">${item.name}</h3>
          <p class="order-title"style="position: relative; left:400px; color:black; bottom:170px;" >Price: $${item.price}</p>
          <p class="order-title"style="position: relative; left:400px;color: black; bottom:170px;">Status: <span style="color:green;">Order Confirmed ✅</span></p>
          <button onclick="cancelOrder(${index})" style="margin-top: 10px; cursor:pointer; background:red; color:white; border:none; padding:5px 10px; border-radius:5px; position: relative; left:400px; bottom:170px;"">Cancel Order</button>
        </div>
      `;
    }).join("");

    container.innerHTML += `<h2 style="position:fixed;top:25px; left:430px; color:black; z-index:1;">Total Amount: $${total}</h2>`;
  }

  window.cancelOrder = function(index) {
    const orders = JSON.parse(localStorage.getItem("orderItems")) || [];
    if (confirm("Are you sure you want to cancel this order?")) {
      orders.splice(index, 1);
      localStorage.setItem("orderItems", JSON.stringify(orders));
      renderOrders(); 
    }
  };

  renderOrders(); 
});
  