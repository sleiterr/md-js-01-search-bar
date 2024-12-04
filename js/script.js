const btnContainer = document.querySelector(".btn-items");
const profileInfo = document.querySelector(".pending-list");
const profileImg = document.querySelector(".search-cart");
const mobSelect = document.querySelector("#mob-select");

const searchBar = document.querySelector("#search-bar");
const searchButton = document.querySelector(".btn-search");

let profiles = [
  {
    firstName: "Dennis",
    age: 22,
    city: "Holstebro",
    birthday: "01.01.1990",
    hobby: "Koding",
    img: "https://picsum.photos/500/700?random=1",
    id: 0,
  },
  {
    firstName: "Asger",
    age: 25,
    city: "Viborg",
    birthday: "01.01.1990",
    hobby: "Koding",
    img: "https://picsum.photos/500/700?random=2",
    id: 1,
  },
  {
    firstName: "Hejdi",
    age: 27,
    city: "Herning",
    birthday: "01.01.1990",
    hobby: "Koding",
    img: "https://picsum.photos/500/700?random=3",
    id: 2,
  },
  {
    firstName: "Ionut",
    age: 23,
    city: "Kjelerup",
    birthday: "01.01.1990",
    hobby: "Koding",
    img: "https://picsum.photos/500/700?random=4",
    id: 3,
  },
  {
    firstName: "Jannik",
    age: 29,
    city: "Hobro",
    birthday: "01.01.1990",
    Hobby: "Koding",
    img: "https://picsum.photos/500/700?random=5",
    id: 4,
  },
  {
    firstName: "Mai",
    age: 21,
    city: "Mors",
    birthday: "01.01.1990",
    hobby: "Koding",
    img: "https://picsum.photos/500/700?random=6",
    id: 5,
  },
  {
    firstName: "Mette",
    age: 23,
    city: "Aalborg",
    birthday: "01.01.1990",
    hobby: "Koding",
    img: "https://picsum.photos/500/700?random=7",
    id: 6,
  },
  {
    firstName: "Nauja",
    age: 22,
    city: "Aarhus",
    birthday: "01.01.1990",
    hobby: "Koding",
    img: "https://picsum.photos/500/700?random=8",
    id: 7,
  },
  {
    firstName: "Oleg",
    age: 34,
    city: "Herning",
    birthday: "01.01.1990",
    hobby: "Koding",
    img: "https://picsum.photos/500/700?random=9",
    id: 8,
  },
  {
    firstName: "Siv",
    age: 20,
    city: "Abenra",
    birthday: "01.01.1990",
    hobby: "Koding",
    img: "https://picsum.photos/500/700?random=10",
    id: 9,
  },
  {
    firstName: "Sylvia",
    age: 21,
    city: "Randers",
    birthday: "01.01.1990",
    hobby: "Koding",
    img: "https://picsum.photos/500/700?random=11",
    id: 10,
  },
  {
    firstName: "Wiktor",
    age: 20,
    city: "Grenna",
    birthday: "01.01.1990",
    hobby: "Koding",
    img: "https://picsum.photos/500/700?random=12",
    id: 11,
  },
];

profiles.forEach((profile) => {
  btnContainer.innerHTML += `<button class="btn-item" data-id='${profile.id}' data-img='${profile.img}' >${profile.firstName}</button>`;

  mobSelect.innerHTML += `<option value="${profile.id}">${profile.firstName}</option>`;
});

function updateProfile() {
  let btnNames = document.querySelectorAll(".btn-item");

  btnNames.forEach((button) => {
    button.addEventListener("click", () => {
      let id = parseInt(button.getAttribute("data-id"), 10); //система числення (radix).
      let imgSrc = button.getAttribute("data-img");

      profileImg.innerHTML = `
        <img src='${imgSrc}' alt='${profiles.firstName}'/>
      `;

      profileInfo.innerHTML = `
       <h3 class='pending-title'>${profiles[id].firstName}, ${profiles[id].age} age</h3>
       <p class="pending-items">City: <span class='pending-span'>${profiles[id].city}</span></p>
       <p class="pending-items">hobby: <span class='pending-span'>${profiles[id].hobby}</span></p>
       <p class="pending-items">birthday: <span class='pending-span'>${profiles[id].birthday}</span></p>
     `;
      // updateProfile(id);
    });
  });
}

updateProfile();


function search(e) {
  const searchTerm = e.target.value.toLowerCase();

  // console.log(searchTerm);
  // console.log('ldjfkjdf');
  const results = profiles.filter((profile) =>
    profile.firstName.toLocaleLowerCase().startsWith(searchTerm)
  );

  console.log(results);

  let buttonsHTML = "";
  results.forEach((profile) => {
    buttonsHTML = `<button class="btn-item" data-id='${profile.id}' data-img='${profile.img}' >${profile.firstName}</button>`;
  });

  btnContainer.innerHTML = buttonsHTML;

  updateProfile();
}

const searchbar = document.querySelector("#search-bar");
searchbar.addEventListener("input", search);

// //! button-event-search-bar

// function heandleSearch(e) {
//   e.preventDefault();

//   const searchValue = searchBar.value.trim();

//   if (searchValue) {
//     console.log("input name", searchValue);
//   } else {
//     console.log("search bar is empty");
//   }
// }

// searchButton.addEventListener("click", heandleSearch);
// searchBar.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     e.preventDefault();
//     searchProfile();
//   }
// });

//////////////////////////////////////////////////////////////

// mobSelect.addEventListener("change", (e) => {
//   let selectedId = e.target.value;
//   updateProfile(selectedId);
// });

// let imgSrc = button.getAttribute("data-img");

// function updateProfile(id) {
//   let profile = profiles[id];
//   let imgSrc = profile.img;

//   profileImg.innerHTML = `
//     <img src='${imgSrc}' alt='${profile.firstName}'/>
//   `;

//   profileInfo.innerHTML = `
//     <h3 class='pending-title'>${profile.firstName}, ${profile.age} age</h3>
//     <p class="pending-items">City: <span class='pending-span'>${profile.city}</span></p>
//     <p class="pending-items">hobby: <span class='pending-span'>${profile.hobby}</span></p>
//     <p class="pending-items">birthday: <span class='pending-span'>${profile.birthday}</span></p>
//   `;
// }
