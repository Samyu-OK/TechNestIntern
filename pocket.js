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
    name: "Patek Philippe",
    price: 1137,
    img: "img/p10.jpg",
    desc: "With a perfectly crafted watch on your wrist, you don't just watch time — you own it.Let your moments be defined by elegance and precision.",
    code: "TS-SLE120"
  },
  {
    name: "IWC Schaffhausen",
    price: 1232,
    img: "img/p4.jpg",
    desc: "From bold designs to classic details, our watches are made to inspire confidence.Every tick is a reminder of your strength and ambition.",
    code: "TS-SLV210"
  },
  {
    name: "Patek Phillippe",
    price: 14200,
    img: "img/p2.jpg",
    desc: "A timepiece that matches your ambition and moves with your rhythm.This is not just a watch — it's your daily reminder to make time count.",
    code: "TS-SLV260"
  },
  {
    name: "Jaeger-Le-Coultre",
    price: 1077,
    img: "img/p6.jpg",
    desc: "It whispers sophistication, power, and intention in every glance.Let your wrist tell the world you value every second.",
    code: "TS-SLV280"
  },
  {
    name: " Patek Phillippe Dark",
    price: 18200,
    img: "img/p12.jpg",
    desc: "This watch blends tradition with innovation, perfectly balanced.For those who lead, not follow.",
    code: "TS-SLV700"
  },
  {
    name: "Omega professional",
    price: 10200,
    img: "img/p3.jpg",
    desc: "With bold design and unwavering accuracy, this is for the leaders.Own your hours. Command your minutes.",
    code: "TS-SLV290"
  },
  {
    name: "Jaeger-Le-Coultre",
    price: 1062,
    img: "img/p44.jpg",
    desc: "It whispers sophistication, power, and intention in every glance.Let your wrist tell the world you value every second.",
    code: "TS-SLV293"
  },
  {
    name: "OLEVS",
    price: 216,
    img: "img/p5.jpg",
    desc: "A watch that's as ambitious as you are. Crafted to move with you through every milestone.",
    code: "TS-SLV390"
  },
  {
    name: "Lige",
    price: 180,
    img: "img/p13.jpg",
    desc: "With every tick, this watch tells a story of grace and detail.Let your timepiece speak for your character.",
    code: "TS-S6V290"
  },
  {
    name: "S&T Black",
    price: 120,
    img: "img/p14.jpg",
    desc: "Timeless elegance and Swiss precision make the Silver an essential piece in any collection.",
    code: "TS-SLO297"
  },
  {
    name: "Geneva Silver",
    price: 230,
    img: "img/p15.jpg",
    desc: "With every tick, this watch tells a story of grace and detail.Let your timepiece speak for your character.",
    code: "TS-SLV289"
  },
  {
    name: "Geneva Blue",
    price: 150,
    img: "img/p16.jpg",
    desc: "With every glance, this watch makes a statement of intent. Let your wrist reflect your purpose.",
    code: "TS-SLV120"
  },
  {
    name: "Poedagar",
    price: 240,
    img: "img/p17.jpg",
    desc: "This isn't just about telling time — it's about telling your story. Be bold, be timeless, be remembered.",
    code: "TS-SLVE70"
  },
  {
    name: "Poedagar Blue",
    price: 220,
    img: "img/p18.jpg",
    desc: "With bold design and unwavering accuracy, this is for the leaders. Own your hours. Command your minutes..",
    code: "TS-SLV230"
  },
  {
    name: "D1 Milano",
    price: 1420,
    img: "img/p19.jpg",
    desc: "A timepiece that matches your ambition and moves with your rhythm. This is not just a watch — it's your daily reminder to make time count.",
    code: "TS-SLS670"
  },
  {
    name: "Economici",
    price: 350,
    img: "img/p20.jpg",
    desc: " This watch blends tradition with innovation, perfectly balanced. For those who lead, not follow.",
    code: "TS-SLC780"
  },
  {
    name: "Emporio Armani",
    price: 240,
    img: "img/p21.jpg",
    desc: "This watch anchors you in style and sophistication. Because true elegance never goes out of fashion.",
    code: "TS-SLV211"
  },
  {
    name: "Emporio Exchange",
    price: 280,
    img: "img/p22.jpg",
    desc: "This isn't just about telling time — it's about telling your story. Be bold, be timeless, be remembered.",
    code: "TS-SHV291"
  },
  {
    name: "Fossil",
    price: 128,
    img: "img/p23.jpg",
    desc: "With a perfectly crafted watch on your wrist, you don't just watch time — you own it. Let your moments be defined by elegance and precision.",
    code: "TS-SLV340"
  },
  {
    name: "Emporio Armani",
    price: 320,
    img: "img/p24.jpg",
    desc: "This watch doesn't just measure time — it elevates every moment. Refined. Reliable. Relentless.",
    code: "TS-SLT298"
  },
  {
    name: "OLEVS",
    price: 210,
    img: "img/p25.jpg",
    desc: "This watch redefines what it means to keep time. Built for performance. Designed for you.",
    code: "TS-SLQ543"
  },
  {
    name: "Chanel",
    price: 3000,
    img: "img/p11.jpg",
    desc: "A watch that's as ambitious as you are. Crafted to move with you through every milestone.",
    code: "TS-SBE590"
  },
  {
    name: "Rolex Black",
    price: 5000,
    img: "img/p42.jpg",
    desc: "This watch doesn't just measure time — it elevates every moment. Refined. Reliable. Relentless.",
    code: "TS-SLV212"
  },
  {
    name: "Rolex",
    price: 7000,
    img: "img/p13.jpg",
    desc: "Our watches are built for those who make each moment meaningful. Turn time into a legacy, one tick at a time.",
    code: "TS-SLV222"
  },
  {
    name: "Rolex Gold",
    price: 8300,
    img: "img/p29.jpg",
    desc: "With every tick, this watch tells a story of grace and detail. Let your timepiece speak for your character.",
    code: "TS-SLA331"
  },
  {
    name: "Fossil",
    price: 150,
    img: "img/p30.jpg",
    desc: "This isn't just about telling time — it's about telling your story. Be bold, be timeless, be remembered.",
    code: "TS-SLT339"
  },
  {
    name: "Patek Phillippe",
    price: 7200,
    img: "img/p31.jpg",
    desc: "This watch anchors you in style and sophistication. Because true elegance never goes out of fashion.",
    code: "TS-SLV651"
  },
  {
    name: "OLEVS",
    price: 270,
    img: "img/p32.jpg",
    desc: "With every glance, this watch makes a statement of intent. Let your wrist reflect your purpose..",
    code: "TS-SLF564"
  },
  {
    name: "Rolex White",
    price: 6980,
    img: "img/p33.jpg",
    desc: "This watch blends tradition with innovation, perfectly balanced. For those who lead, not follow.",
    code: "TS-SLU421"
  },
  {
    name: "Chanel",
    price: 3000,
    img: "img/p41.jpg",
    desc: "Crafted with precision and elegance, it reflects who you are without saying a word. Wear time with pride, and let each second add to your story.",
    code: "TS-SLZ987"
  },
  {
    name: "Fossil Automatic",
    price: 200,
    img: "img/p35.jpg",
    desc: "It whispers sophistication, power, and intention in every glance. Let your wrist tell the world you value every second.",
    code: "TS-SLV250"
  },
  {
    name: "Armendus Piguet",
    price: 6080,
    img: "img/p36.jpg",
    desc: "From bold designs to classic details, our watches are made to inspire confidence. Every tick is a reminder of your strength and ambition..",
    code: "TS-SLB087"
  },
  {
    name: "Rolex Blue",
    price: 5200,
    img: "img/p37.jpg",
    desc: "This watch doesn't just measure time — it elevates every moment. Refined. Reliable. Relentless.",
    code: "TS-SLW675"
  },
  {
    name: "Armendus Piguet Bronze",
    price: 8200,
    img: "img/p38.jpg",
    desc: "Our watches are built for those who make each moment meaningful. Turn time into a legacy, one tick at a time..",
    code: "TS-SLV980"
  },
  {
    name: "Tutor",
    price: 2200,
    img: "img/p40.jpg",
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
        message.style.marginLeft="8px";
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
