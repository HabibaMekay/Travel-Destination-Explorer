window.onload = function() {
    const destinations = JSON.parse(localStorage.getItem('destinations')) || [];
    const container = document.querySelector('.row.g-3');

    // Clear any existing content before appending new cards
    container.innerHTML = '';

    destinations.forEach(destination => {
        const cardHtml = `
            <div class="col-md-6">
                <div class="card shadow">
                    <img src="${destination.image}" class="card-img-top" height="300px" alt="${destination.name}">
                    <div class="card-body">
                        <h5 class="card-title">${destination.name}</h5>
                        <a href="details.html?destination=${encodeURIComponent(destination.name)}" class="btn">More details</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHtml;
    });
};

function filterDestinations() {
    var input, filter, cards, cardBodies, title, i, txtValue;
    input = document.getElementById('searchBar');
    filter = input.value.toUpperCase();
    cards = document.getElementsByClassName('card');
    for (i = 0; i < cards.length; i++) {
        cardBodies = cards[i].getElementsByClassName('card-body');
        title = cardBodies[0].getElementsByClassName("card-title")[0];
        txtValue = title.textContent || title.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            cards[i].style.display = "";
        } else {
            cards[i].style.display = "none";
        }
    }
}

const sampleDestinations = [
    {
        name: "Kirkenes",
        image: "/images/kirkenes.jpg",
        description: "A stunning city in Norway, known for its unique landscapes and activities.",
        averagePrice: "$1500",
        bestTime: "December to March"
    },
    {
        name: "New York",
        image: "/images/New_York.jpg",
        description: "The bustling city that never sleeps, famous for its culture and landmarks.",
        averagePrice: "$2000",
        bestTime: "April to June"
    },
    {
        name: "Tokyo",
        image: "/images/tokoyo.jpeg",
        description: "A blend of traditional and modern culture, with beautiful temples and skyscrapers.",
        averagePrice: "$1800",
        bestTime: "April to October"
    },
    {
        name: "Egypt",
        image: "/images/egypt.jpg",
        description: "The land of pyramids, ancient history, and desert landscapes.",
        averagePrice: "$1200",
        bestTime: "October to March"
    },
    {
        name: "Maldives",
        image: "/images/maldives.webp",
        description: "A tropical paradise with crystal-clear water and luxurious resorts.",
        averagePrice: "$2500",
        bestTime: "November to April"
    },
    {
        name: "Paris",
        image: "/images/paris.jpg",
        description: "The city of love, renowned for its art, fashion, and cuisine.",
        averagePrice: "$1600",
        bestTime: "May to September"
    }
];

// Check if the destinations already exist in localStorage
if (!localStorage.getItem('destinations')) {
    // Store sample destinations in localStorage if not already stored
    localStorage.setItem('destinations', JSON.stringify(sampleDestinations));
}