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