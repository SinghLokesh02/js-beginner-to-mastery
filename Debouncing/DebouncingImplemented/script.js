const foodData = [
  {
    img: "https://images.unsplash.com/photo-1546069901-eacef0df6022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    foodName: "Pizza Paradise",
    starRating: 4.5,
    foods: ["Pepperoni Pizza", "Veggie Delight", "Margherita"],
    place: "New York",
    distance: "2.3 km",
    cost: "$15",
  },
  {
    img: "https://cdn.pixabay.com/photo/2023/09/25/22/08/ai-generated-8276129_640.jpg",
    foodName: "Burger Hub",
    starRating: 4.2,
    foods: ["Cheese Burger", "Chicken Burger", "Veggie Burger"],
    place: "Chicago",
    distance: "3.1 km",
    cost: "$12",
  },
  {
    img: "https://cdn.pixabay.com/photo/2020/04/04/15/07/sushi-5002639_640.jpg",
    foodName: "Sushi World",
    starRating: 4.8,
    foods: ["California Roll", "Tuna Sushi", "Salmon Nigiri"],
    place: "Los Angeles",
    distance: "1.7 km",
    cost: "$25",
  },
  {
    img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    foodName: "Taco Fiesta",
    starRating: 4.6,
    foods: ["Chicken Tacos", "Beef Tacos", "Veggie Tacos"],
    place: "Houston",
    distance: "4.2 km",
    cost: "$10",
  },
  {
    img: "https://images4.alphacoders.com/700/700728.jpg",
    foodName: "Pasta Heaven",
    starRating: 4.7,
    foods: ["Spaghetti Carbonara", "Penne Alfredo", "Lasagna"],
    place: "San Francisco",
    distance: "2.9 km",
    cost: "$18",
  },
  {
    img: "https://png.pngtree.com/background/20230519/original/pngtree-free-free-desserts-wallpapers-picture-image_2669805.jpg",
    foodName: "Indian Spice",
    starRating: 4.3,
    foods: ["Butter Chicken", "Paneer Tikka", "Biryani"],
    place: "Dallas",
    distance: "3.6 km",
    cost: "$20",
  },
  {
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    foodName: "BBQ Delight",
    starRating: 4.5,
    foods: ["BBQ Ribs", "Grilled Chicken", "Pulled Pork"],
    place: "Austin",
    distance: "2.4 km",
    cost: "$22",
  },
  {
    img: "https://c4.wallpaperflare.com/wallpaper/482/397/276/food-fruit-delicious-sweet-wallpaper-preview.jpg",
    foodName: "Dessert Dreams",
    starRating: 4.9,
    foods: ["Chocolate Cake", "Cheesecake", "Ice Cream Sundae"],
    place: "Seattle",
    distance: "1.5 km",
    cost: "$8",
  },
  {
    img: "https://img.freepik.com/free-photo/woman-eating-her-tasty-brunch-hipster-cafe-top-view-marble-table-salmon-avocado-toast-coffee-sweet-tasty-cheesecakes-enjoying-her-breakfast_291049-382.jpg",
    foodName: "Cafe Delight",
    starRating: 4.4,
    foods: ["Cappuccino", "Espresso", "Croissant"],
    place: "Portland",
    distance: "1.8 km",
    cost: "$10",
  },
  {
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    foodName: "Smoothie Spot",
    starRating: 4.3,
    foods: ["Berry Blast", "Mango Tango", "Green Detox"],
    place: "Miami",
    distance: "3.3 km",
    cost: "$6",
  },
  {
    img: "https://img.freepik.com/free-photo/grilled-beef-steak-dark-wooden-surface_1150-44344.jpg",
    foodName: "Steak House",
    starRating: 4.8,
    foods: ["T-Bone Steak", "Ribeye", "Sirloin"],
    place: "Denver",
    distance: "2.6 km",
    cost: "$30",
  },
  {
    img: "https://static.chloeting.com/recipes/61ff91602a18c23f7d7f96fb/images/16x9/fancy-avocado-toasts-1676439736714-16x9.webp",
    foodName: "Vegan Vibes",
    starRating: 4.6,
    foods: ["Vegan Bowl", "Avocado Toast", "Vegan Burger"],
    place: "San Diego",
    distance: "3.5 km",
    cost: "$15",
  },
  {
    img: "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    foodName: "Breakfast Bliss",
    starRating: 4.7,
    foods: ["Pancakes", "French Toast", "Omelettes"],
    place: "Boston",
    distance: "2.0 km",
    cost: "$12",
  },
  {
    img: "https://img.freepik.com/premium-photo/belgian-waffles-with-strawberry-ice-cream_140916-6852.jpg",
    foodName: "Waffle Wonders",
    starRating: 4.5,
    foods: ["Belgian Waffles", "Strawberry Waffles", "Nutella Waffles"],
    place: "Philadelphia",
    distance: "3.2 km",
    cost: "$9",
  },
  {
    img: "https://t3.ftcdn.net/jpg/03/25/35/08/360_F_325350805_D8PVU73qs1dj5TdWgm9IpuAjJ7sgHacK.jpg",
    foodName: "Seafood Sensation",
    starRating: 4.9,
    foods: ["Grilled Salmon", "Lobster Bisque", "Shrimp Cocktail"],
    place: "Key West",
    distance: "1.2 km",
    cost: "$28",
  },
];

let select = document.querySelector("select");
let foodContainer = document.getElementById("foodContainer");
foodContainer.innerHTML = "";

// Sorting
select.addEventListener("change", (e) => {
  let newArray = [...foodData];
  if (select.value === "sortByPrice") {
    newArray.sort((a, b) => {
      const A = parseFloat(a.cost.replace("$", ""));
      const B = parseFloat(b.cost.replace("$", ""));
      return A - B;
    });
    showData(newArray);
  }

  if (select.value === "sortByRating") {
    newArray.sort((a, b) => a.starRating - b.starRating);
    showData(newArray);
  }

  if (select.value === "sortByDistance") {
    newArray.sort((a, b) => {
      const A = parseFloat(a.distance.replace("km", ""));
      const B = parseFloat(b.distance.replace("km", ""));
      return A - B;
    });
    showData(newArray);
  }

  if (select.value === "sortByFoodName") {
    newArray.sort((a, b) => {
      if (a.foodName < b.foodName) return -1;
      if (a.foodName > b.foodName) return 1;
      return 0;
    });
    showData(newArray);
  }
});

// Function to Show Data I will provide array

function showData(data) {
  foodContainer.innerHTML = "";
  data.forEach((item) => {
    let foodItem = document.createElement("div");
    foodItem.classList.add("food-item");
    foodItem.innerHTML = `
              <img src="${item.img}" alt="${item.foodName}">
              <h3>${item.foodName}</h3>
              <p>Rating: <i class="fa-solid fa-star"></i> ${item.starRating}</p>
              <p>Foods: ${item.foods.join(", ")}</p>
              <p>Place: ${item.place}</p>
              <p>Distance: ${item.distance}</p>
              <p>Cost: ${item.cost}</p>
          `;
    foodContainer.appendChild(foodItem);
  });
}
showData(foodData);

// Search

// Debounce Function
function debounce(func, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

// The search logic
const Search = (text) => {
  console.log(text);
  let filteredData = foodData.filter((element) =>
    element.foodName.toLowerCase().includes(text.toLowerCase())
  );
  showData(filteredData);
};

// Create debounced version ONCE
const searchByDebounce = debounce(Search, 2000);

// Attach event listener
let search = document.querySelector(".search-input");
search.addEventListener("input", () => {
  let text = search.value;
  searchByDebounce(text); // Use the reused debounce function
});
