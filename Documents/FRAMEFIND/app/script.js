const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const clearButton = document.getElementById("clear-button");
const results = document.getElementById("results");
const status = document.getElementById("status");

const images = [
    {
        title: "Nature",
        category: "nature",
        url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e"
    },

    {
        title: "Mountain",
        category: "nature",
        url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
    },

    {
        title: "City",
        category: "cities",
        url: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df"
    },

    {
        title: "New York",
        category: "cities",
        url: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee"
    },

    {
        title: "Animal",
        category: "animals",
        url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d"
    },

    {
        title: "Tiger",
        category: "animals",
        url: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5"
    },

    {
        title: "Space",
        category: "space",
        url: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa"
    },

    {
        title: "Galaxy",
        category: "space",
        url: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564"
    }
];


function displayImages(imageList) {

    results.innerHTML = "";

    if (imageList.length === 0) {

        status.textContent = "No images found.";

        return;
    }

    status.textContent = `${imageList.length} images found`;

    imageList.forEach(function(image) {

        const card = document.createElement("div");

        card.className = "image-card";

        card.innerHTML = `
            <img 
                src="${image.url}?auto=format&fit=crop&w=800&q=80"
                alt="${image.title}"
            >

            <p>${image.title}</p>
        `;

        results.appendChild(card);
    });
}


searchForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const searchTerm = searchInput.value.toLowerCase().trim();

    if (searchTerm === "") {

        status.textContent = "Please enter something to search.";

        results.innerHTML = "";

        return;
    }

    const filteredImages = images.filter(function(image) {

        return (
            image.title.toLowerCase().includes(searchTerm) ||
            image.category.toLowerCase().includes(searchTerm)
        );

    });

    displayImages(filteredImages);
});


clearButton.addEventListener("click", function() {

    searchInput.value = "";

    results.innerHTML = "";

    status.textContent = "Search to see results";

});


const chips = document.querySelectorAll(".chips button");

chips.forEach(function(chip) {

    chip.addEventListener("click", function() {

        const searchTerm = chip.dataset.search;

        searchInput.value = searchTerm;

        const filteredImages = images.filter(function(image) {

            return image.category === searchTerm;

        });

        displayImages(filteredImages);

    });

});