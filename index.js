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

async function loadVedio(id) {
  // alert(id)
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then((res) => res.json())
    .then((data) => vedioCategories(data.category))
    .catch((err) => console.log(err));
}

const displayCategories = (categories) => {
  const btnContainer = document.getElementById("btn-container");
  categories.forEach((catgs) => {
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
    <button onclick="loadVedio(${catgs.category_id})" class="btn">${catgs.category}</button>
    `;
    btnContainer.append(buttonContainer);
  });
};

function getTime(time) {
  const day = parseInt(time / 86400);
  const remainingSecond = time % 86400;
  const hour = parseInt(remainingSecond / 3600);
  let second = time % 3600;
  const min = parseInt(second / 60);
  second = second % 60;
  return `${day} day ${hour} hour ${min} min ${second} second ago`;
}

// const obj = {
//     {
//         "category_id": "1001",
//         "video_id": "aaad",
//         "thumbnail": "https://i.ibb.co/f9FBQwz/smells.jpg",
//         "title": "Smells Like Teen Spirit",
//         "authors": [
//             {
//                 "profile_picture": "https://i.ibb.co/k4tkc42/oliviar-harris.jpg",
//                 "profile_name": "Oliver Harris",
//                 "verified": true
//             }
//         ],
//         "others": {
//             "views": "5.4K",
//             "posted_date": "1672656000"
//         },
//         "description": "'Smells Like Teen Spirit' by Oliver Harris captures the raw energy and rebellious spirit of youth. With over 5.4K views, this track brings a grunge rock vibe, featuring powerful guitar riffs and compelling vocals. Oliver's verified profile guarantees a quality musical journey that resonates with fans of dynamic, high-energy performances."
//     }
// };

const vedioCategories = (vedios) => {
  const mainContiner = document.getElementById("main-continer");
  mainContiner.innerHTML = "";

  if(vedios.length === 0){
    mainContiner.classList.remove('grid')
    mainContiner.innerHTML = `
    <div class=" flex flex-col mx-auto w-[300px] min-h-screen pt-10">
      <img class="w-full" src="assest/icon.png"/>
      <h2 class='text-center py-4 font-bold text-xl'>no vedio found in this categories</h2>
    </div>
    `
  }
  else{
    mainContiner.classList.add('grid')
  }

  vedios.map((vdo) => {
    const card = document.createElement("div");
    card.classList.add = "card card-compact";
    card.innerHTML = `
     <figure class="h-[200px] relative">
    <img
      src=${vdo.thumbnail}
      class="h-full w-full object-cover rounded-lg"
      alt="Shoes"/>
      ${
        vdo.others.posted_date?.length === 0
          ? ""
          : `<span class="absolute bottom-5 right-5 bg-black text-white p-2 rounded-full text-xs">
            ${getTime(vdo.others.posted_date)}
          </span>`
      }
    </figure>
    <div class="px-0 py-3 flex items-center gap-3">
      <div class="w-8 h-8">
      <img class="w-full h-full rounded-full object-cover" src="${
        vdo.authors[0].profile_picture
      }"/>
      </div>

      <div>
      <h2 class="font-bold text-xl">${vdo.title}</h2>
      <div class="flex items-center gap-2">
            <p class="text-gray-400 font-semibold">${
              vdo.authors[0].profile_name
            }</p>
            ${
              vdo.authors[0].verified === true
                ? `<img class='w-5 h-5' src ="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"`
                : ""
            }
            </div>
            <p class="font-semibold text-slate-400">${vdo.others.views}<p>
      </div>
    </div>
    `;
    mainContiner.appendChild(card);
  });
};

loadDataCetagories();
loadVedioCategories();
