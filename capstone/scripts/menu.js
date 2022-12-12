const menu = [
  {
    id: 1,
    title: "Dosa",
    category: "breakfast",
    price: 50,
    img: "./images/dosa.jpg",
    desc: `All dosas are available and served hot with chutney and sambar `,
  },
  {
    id: 2,
    title: "Mandi",
    category: "lunch",
    price: 799,
    img: "./images/mandi.jpg",
    desc: `Mandi served with large chicken leg pieces which satisfies your stomach `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 1000,
    img: "./images/milk.jpg",
    desc: `A very famous milkshake , served with nuts and icecream on it`,
  },
  {
    id: 4,
    title: "Idli",
    category: "breakfast",
    price: 20,
    img: "./images/idli.jpg",
    desc: `Served 4 with chutney and delicious sambar `,
  },
  {
    id: 5,
    title: "Biryani",
    category: "lunch",
    price: 200,
    img: "./images/biryani.jpg",
    desc: `Served with pieces , gravy and raita`,
  },
  {
    id: 6,
    title: "Scoops",
    category: "shakes",
    price: 200,
    img: "./images/scoops.jpg",
    desc: `Can add more flavours , comes with two scoops`,
  },
  {
    id: 7,
    title: "pongal",
    category: "breakfast",
    price: 60,
    img: "./images/pongal.jpg",
    desc: `Made with steamed rice and served hot with chutney, sambar and raita `,
  },
  {
    id: 8,
    title: "Panner and Butternaan",
    category: "lunch",
    price: 700,
    img: "./images/panner.jpg",
    desc: `Best option for veg lovers . This is served with 2 butternaans and panner curry `,
  },
  {
    id: 9,
    title: "Hot Fudge Sandae",
    category: "shakes",
    price: 700,
    img: "./images/fudge.jpg",
    desc: `Comes with your favourite flavours and with dry fuits and choco sauce`,
  },
];

const sectionCenter = document.querySelector(".menu-items");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    // console.log(item);

    return ` <div class="menu-item row">
    <div class="item-img">
    <a href=""><img src="${item.img}" alt="${item.title}" /></a>
    </div>
    
    <div class="item-description">
    <div class="item-header">
    <h3>${item.title}</h3>
    <h3>Rs.${item.price}</h3>
    </div>
    <p>
    ${item.desc}
    </p>
    </div>
    </div>
    `;
  });
  displayMenu = displayMenu.join("");
  // console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (category) {
      return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`;
    })
    .join("");

  btnContainer.innerHTML = categoryBtns;
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  console.log(filterBtns);

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      // console.log(e.currentTarget.dataset);
      const category = e.currentTarget.dataset.id;
      const menuCategory = menu.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
