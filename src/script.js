// Objects
const Settings = {
    imageLimit: 1,
    size: "full",
    theme: "light"
};

const CatImage = {
    id: "",
    url: "",
    width: 0
};

const UserFavorite = {
    imageId: "",
    favoritedAt: '',
    notes: ""
};

const Category = {
    id: null,
    name: "",
    description: ""
};

const Tag = {
    id: 0,
    name: "",
    type: ""
};

// DOM Elements
const generateBtn = document.getElementById('generate-btn');
const catContainer = document.getElementById('cat-container');
const settingsForm = document.getElementById('settings-form');

// Click Event Listener
generateBtn.addEventListener('click', fetchCatImages);
// Submit Form Event Listener
settingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newLimit = parseInt(document.getElementById('image-limit').value);
    Settings,imageLimit = newLimit;
    console.log(`Settings updated: Limit = ${Settings.imageLimit}`);
});

// Fetch cat Images (+Array Iteration)
function fetchCatImages() {
  fetch(`https://api.thecatapi.com/v1/images/search?limit=${Settings.imageLimit}`)
    .then(res => res.json())
    .then(data => {
      catContainer.innerHTML = '';
      data.forEach(cat => displayCatImage(cat));
    })
    .catch(err => {
      catContainer.innerHTML = `<p>Error fetching cat images. Try again later.</p>`;
    });
}

// Display Image
function displayCatImage(catData) {
    const img = document.createElement('img');
    img.src = catData.url;
    img.alt = "Random cat";
    img.width = 300;


// Mouseover Image Event Listener
img.addEventListener('mouseover', () => {
    console.log("Look! A Kitty! <3");
});

    catContainer.appendChild(img);
}