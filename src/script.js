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

// Fetch Cat Image Function
function fetchCatImage() {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(res => res.json())
    .then(data => {
        const cat = data[0];
        displayCatImage(cat);
    })
    .catch(err => {
        CredentialsContainer.innerHTML = `<p>Oops! Something went wrong</p>`;
    });
}