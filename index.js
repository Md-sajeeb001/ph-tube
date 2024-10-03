// const loadDataCetagories = () => {
//   fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
//     .then((res) => res.json())
//     .then((data) => displayCategories(data.categories))
//     .catch((err) => console.log(err));
// };

// const displayCategories = (data) => {
//     console.log(data);
// };

// loadDataCetagories();
// ============================================================== //

// get category btn with fetch

const loadDataCetagories = async () => {
  const url = "https://openapi.programming-hero.com/api/phero-tube/categories";

  const res = await fetch(url);
  const data = await res.json();
  displayCategories(data.categories);
};

// get vedio category with fetch

const loadVedioCategories = async () => {
  const url = "https://openapi.programming-hero.com/api/phero-tube/videos";

  const res = await fetch(url);
  const data = await res.json();
  vedioCategories(data.videos);
};

const displayCategories = (categories) => {
  const btnContainer = document.getElementById("btn-container");
  // console.log(categories)
  categories.forEach((catgs) => {
    const button = document.createElement("button");
    button.classList = "btn";
    button.textContent = catgs.category;
    btnContainer.append(button);
  });
};

const obj = {
    "category_id": "1001",
    "video_id": "aaab",
    "thumbnail": "https://i.ibb.co/QPNzYVy/moonlight.jpg",
    "title": "Midnight Serenade",
    "authors": [
        {
            "profile_picture": "https://i.ibb.co/fDbPv7h/Noha.jpg",
            "profile_name": "Noah Walker",
            "verified": false
        }
    ],
    "others": {
        "views": "543K",
        "posted_date": ""
    },
    "description": "'Midnight Serenade' by Noah Walker is a soulful journey into the depths of the night, capturing the mystique and allure of a moonlit evening. With 543K views, this song brings together tender melodies and evocative lyrics, making it a favorite among listeners seeking a contemplative yet uplifting experience. Immerse yourself in this musical masterpiece and feel the calm embrace of the night."
}

const vedioCategories = (vedios) => {
  const mainContiner = document.getElementById("main-continer");
  vedios.map((vdo) => {
    const card = document.createElement("div");
    card.classList.add = "card card-compact";
    card.innerHTML = `
     <figure class="h-[200px]">
    <img
      src=${vdo.thumbnail}
      class="h-full w-full object-cover rounded-lg"
      alt="Shoes"/>
    </figure>
    <div class="">
      <h2 class="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
    `;
    mainContiner.appendChild(card)
  });
};

loadDataCetagories();
loadVedioCategories();
