
function menu() {
  document.querySelector(".cat").style.display = "block";
}

function bae() {
  document.querySelector(".cat").style.display = "none";
  document.querySelectorAll(".collect").forEach(item => item.style.display = "block");
}


let currentIndex = 0;
const totalSlides = 4;

function showSlide(index) {
  const slides = document.querySelector('.slides');

  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(() => {
  nextSlide();
}, 6000);



const products = [
  {
    name: "Michael Kors",
    price: 195,
    img: "img/w27.jpg",
    desc: "With a perfectly crafted watch on your wrist, you don't just watch time — you own it.Let your moments be defined by elegance and precision.",
    code: "TS-SLE120"
  },
  {
    name: "MockBerg",
    price: 150,
    img: "img/w2.jpg",
    desc: "From bold designs to classic details, our watches are made to inspire confidence.Every tick is a reminder of your strength and ambition.",
    code: "TS-SLV210"
  },
  {
    name: "KOVONSH",
    price: 85,
    img: "img/w3.jpg",
    desc: "A timepiece that matches your ambition and moves with your rhythm.This is not just a watch — it's your daily reminder to make time count.",
    code: "TS-SLV260"
  },
  {
    name: "Omega",
    price: 3200,
    img: "img/w4.jpg",
    desc: "It whispers sophistication, power, and intention in every glance.Let your wrist tell the world you value every second.",
    code: "TS-SLV280"
  },
  {
    name: "Rolex Silver",
    price: 8500,
    img: "img/w39.jpg",
    desc: "This watch blends tradition with innovation, perfectly balanced.For those who lead, not follow.",
    code: "TS-SLV700"
  },
  {
    name: "Seiko",
    price: 320,
    img: "img/w6.jpg",
    desc: "With bold design and unwavering accuracy, this is for the leaders.Own your hours. Command your minutes.",
    code: "TS-SLV290"
  },
  {
    name: "Michael Kors",
    price: 180,
    img: "img/w7.jpg",
    desc: "It whispers sophistication, power, and intention in every glance.Let your wrist tell the world you value every second.",
    code: "TS-SLV293"
  },
  {
    name: "Fossil",
    price: 120,
    img: "img/w8.jpg",
    desc: "A watch that's as ambitious as you are. Crafted to move with you through every milestone.",
    code: "TS-SLV390"
  },
  {
    name: "Calvin Klein",
    price: 165,
    img: "img/w9.jpg",
    desc: "With every tick, this watch tells a story of grace and detail.Let your timepiece speak for your character.",
    code: "TS-S6V290"
  },
  {
    name: "Omega",
    price: 2800,
    img: "img/w10.jpg",
    desc: "Timeless elegance and Swiss precision make the Silver an essential piece in any collection.",
    code: "TS-SLO297"
  },
  {
    name: "Calvin Klein Black",
    price: 185,
    img: "img/w11.jpg",
    desc: "With every tick, this watch tells a story of grace and detail.Let your timepiece speak for your character.",
    code: "TS-SLV289"
  },
  {
    name: "Guess",
    price: 95,
    img: "img/w12.jpg",
    desc: "With every glance, this watch makes a statement of intent. Let your wrist reflect your purpose.",
    code: "TS-SLV120"
  },
  {
    name: "Tissot",
    price: 450,
    img: "img/w13.jpg",
    desc: "This isn't just about telling time — it's about telling your story. Be bold, be timeless, be remembered.",
    code: "TS-SLVE70"
  },
  {
    name: "Michael Kors",
    price: 220,
    img: "img/w14.jpg",
    desc: "With bold design and unwavering accuracy, this is for the leaders. Own your hours. Command your minutes..",
    code: "TS-SLV230"
  },
  {
    name: "Calvin Klein",
    price: 195,
    img: "img/w15.jpg",
    desc: "A timepiece that matches your ambition and moves with your rhythm. This is not just a watch — it's your daily reminder to make time count.",
    code: "TS-SLS670"
  },
  {
    name: "Versace",
    price: 850,
    img: "img/w16.jpg",
    desc: " This watch blends tradition with innovation, perfectly balanced. For those who lead, not follow.",
    code: "TS-SLC780"
  },
  {
    name: "Versace Rose Gold",
    price: 950,
    img: "img/w17.jpg",
    desc: "This watch anchors you in style and sophistication. Because true elegance never goes out of fashion.",
    code: "TS-SLV211"
  },
  {
    name: "Emporio Exchange",
    price: 175,
    img: "img/w18.jpg",
    desc: "This isn't just about telling time — it's about telling your story. Be bold, be timeless, be remembered.",
    code: "TS-SHV291"
  },
  {
    name: "Podeager",
    price: 65,
    img: "img/w19.jpg",
    desc: "With a perfectly crafted watch on your wrist, you don't just watch time — you own it. Let your moments be defined by elegance and precision.",
    code: "TS-SLV340"
  },
  {
    name: "CRRJU",
    price: 45,
    img: "img/w20.jpg",
    desc: "This watch doesn't just measure time — it elevates every moment. Refined. Reliable. Relentless.",
    code: "TS-SLT298"
  },
  {
    name: "Michael Kors",
    price: 165,
    img: "img/w21.jpg",
    desc: "This watch redefines what it means to keep time. Built for performance. Designed for you.",
    code: "TS-SLQ543"
  },
  {
    name: "Michael Kors",
    price: 285,
    img: "img/w22.jpg",
    desc: "A watch that's as ambitious as you are. Crafted to move with you through every milestone.",
    code: "TS-SBE590"
  },
  {
    name: "Michael Kors Blue",
    price: 240,
    img: "img/w23.jpg",
    desc: "This watch doesn't just measure time — it elevates every moment. Refined. Reliable. Relentless.",
    code: "TS-SLV212"
  },
  {
    name: "Michael Kors Bronze",
    price: 265,
    img: "img/w24.jpg",
    desc: "Our watches are built for those who make each moment meaningful. Turn time into a legacy, one tick at a time.",
    code: "TS-SLV222"
  },
  {
    name: "Michael Kors Silver Pink",
    price: 225,
    img: "img/w25.jpg",
    desc: "With every tick, this watch tells a story of grace and detail. Let your timepiece speak for your character.",
    code: "TS-SLA331"
  },
  {
    name: "Michael Kors",
    price: 155,
    img: "img/w26.jpg",
    desc: "This isn't just about telling time — it's about telling your story. Be bold, be timeless, be remembered.",
    code: "TS-SLT339"
  },
  {
    name: "Rolex Emerald",
    price: 12500,
    img: "img/w38.jpg",
    desc: "This watch anchors you in style and sophistication. Because true elegance never goes out of fashion.",
    code: "TS-SLV651"
  },
  {
    name: "Citizen",
    price: 180,
    img: "img/w28.jpg",
    desc: "With every glance, this watch makes a statement of intent. Let your wrist reflect your purpose..",
    code: "TS-SLF564"
  },
  {
    name: "Citizen",
    price: 280,
    img: "img/w29.jpg",
    desc: "This watch blends tradition with innovation, perfectly balanced. For those who lead, not follow.",
    code: "TS-SLU421"
  },
  {
    name: "Vivienn Westwood",
    price: 320,
    img: "img/w30.jpg",
    desc: "Crafted with precision and elegance, it reflects who you are without saying a word. Wear time with pride, and let each second add to your story.",
    code: "TS-SLZ987"
  },
  {
    name: "Rolex Purple",
    price: 9200,
    img: "img/w31.jpg",
    desc: "It whispers sophistication, power, and intention in every glance. Let your wrist tell the world you value every second.",
    code: "TS-SLV250"
  },
  {
    name: "Rolex Brown",
    price: 11800,
    img: "img/w34.jpg",
    desc: "From bold designs to classic details, our watches are made to inspire confidence. Every tick is a reminder of your strength and ambition..",
    code: "TS-SLB087"
  },
  {
    name: "Rolex Green",
    price: 15200,
    img: "img/w32.jpg",
    desc: "This watch doesn't just measure time — it elevates every moment. Refined. Reliable. Relentless.",
    code: "TS-SLW675"
  },
  {
    name: "Rolex Violet",
    price: 13500,
    img: "img/w33.jpg",
    desc: "Our watches are built for those who make each moment meaningful. Turn time into a legacy, one tick at a time..",
    code: "TS-SLV980"
  },
  {
    name: "Rolex Bronze",
    price: 10200,
    img: "img/w35.jpg",
    desc: "With bold design and unwavering accuracy, this is for the leaders. Own your hours. Command your minutes..",
    code: "TS-SLX230"
  }
];
function createProductHTML(product, index) {
  return `
    <div class="card1">
      <img src="${product.img}" class="image" onclick="openPopup(${index})">
      <h2 class="txt">${product.name}</h2>
      <h2 class="cost">$${product.price}</h2>
    </div>

    <div class="popup" id="popup${index}" style="display:none;">
      <span class="close" onclick="closePopup(${index})">×</span>
      <img src="${product.img}" class="popup-image">
      <h2 class="popup-txt">${product.name}</h2>
      <h2 class="popup-cost">$${product.price}</h2>
      <div class="para">${product.desc}</div>
      <br>
      <div class="listing">
        Product Name: ${product.name}<br>
        Price: $${product.price}<br>
        Availability: In Stock<br>
        Style Code: ${product.code}
      </div>
      <div>
        <button class="add" 
                data-name="${product.name}" 
                data-price="${product.price}" 
                data-img="${product.img}">Add to Cart</button>
        <button class="buy">Buy Now</button>
        <p class="message" id="message${index}"></p>
      </div>
    </div>
  `;
}

const container = document.getElementById("product-container");
products.forEach((product, i) => {
  container.innerHTML += createProductHTML(product, i);
});


function openPopup(id) {
  document.getElementById(`popup${id}`).style.display = "flex";
}

function closePopup(id) {
  document.getElementById(`popup${id}`).style.display = "none";
}


setTimeout(() => {
  
  document.querySelectorAll(".add").forEach(button => {
    button.addEventListener("click", () => {
      const name = button.getAttribute("data-name");
      const price = parseFloat(button.getAttribute("data-price"));
      const img = button.getAttribute("data-img");

      const item = { name, price, img };
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      cartItems.push(item);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));

      const message = button.nextElementSibling.nextElementSibling;
      if (message) {
        message.textContent = "Added to Cart!";
        message.style.color = "white";
        message.style.paddingTop="15px";
        message.style.marginRight="8px";
 
      }
    });
  });


  document.querySelectorAll(".buy").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const parent = e.target.closest(".popup");
      if (!parent) return;

      const name = parent.querySelector(".popup-txt").textContent;
      const price = parent.querySelector(".popup-cost").textContent.replace("$", "");
      const img = parent.querySelector(".popup-image").getAttribute("src");

      const orderItem = { name, price, img };

    
      const existingOrders = JSON.parse(localStorage.getItem("orderItems")) || [];
      existingOrders.push(orderItem);
      localStorage.setItem("orderItems", JSON.stringify(existingOrders));

      
      window.location.href = "order.html";
    });
  });
}, 0);


function displayCart() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const itemList = document.getElementById("cart-items");
  const totalDisplay = document.getElementById("total");

  if (!itemList || !totalDisplay) return;

  itemList.innerHTML = "";
  let total = 0;

  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${item.img}" alt="${item.name}" />
      ${item.name} - $${item.price}
      <button onclick="removeItem(${index})">x</button>
    `;
    itemList.appendChild(li);
    total += item.price;
  });

  totalDisplay.textContent = `Total: $${total}`;
}

function removeItem(index) {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  displayCart();
}

if (window.location.pathname.includes("cart.html")) {
  window.onload = displayCart;
}