function load_dest() {
    localStorage.setItem('destinations', JSON.stringify(sampleDestinations));
    const destinations = JSON.parse(localStorage.getItem('destinations')) || [];
    //const container = document.querySelector('.row.g-3');
    
    const container = document.getElementById("destList");

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

// function filter_destinations() {
//     var input, filter, cards, cardBodies, title, i, txtValue;
//     input = document.getElementById('searchBar');
//     filter = input.value.toUpperCase();
//     cards = document.getElementsByClassName('card');
//     container.innerHTML = '';
//     for (i = 0; i < cards.length; i++) {
//         cardBodies = cards[i].getElementsByClassName('card-body');
//         title = cardBodies[0].getElementsByClassName("card-title")[0];
//         txtValue = title.textContent || title.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             const cardHtml = `
//             <div class="col-md-6">
//                 <div class="card shadow">
//                     <img src="${destination.image}" class="card-img-top" height="300px" alt="${destination.name}">
//                     <div class="card-body">
//                         <h5 class="card-title">${destination.name}</h5>
//                         <a href="details.html?destination=${encodeURIComponent(destination.name)}" class="btn">More details</a>
//                     </div>
//                 </div>
//             </div>
//         `;
//         container.innerHTML += cardHtml;
//         }
//     }
// }

function filter_destinations() {
    const input = document.getElementById('searchBar').value.toUpperCase();
    const destinations = JSON.parse(localStorage.getItem('destinations')) || [];
    const container = document.getElementById('destList');

    // Clear the existing content
    container.innerHTML = '';

    // Filter destinations based on input
    const filteredDestinations = destinations.filter(destination => 
        destination.name.toUpperCase().includes(input) || 
        destination.description.toUpperCase().includes(input)
    );

    // Render the filtered destinations
    filteredDestinations.forEach(destination => {
        const cardHtml = `
            <div class="col-md-6 mb-4">
                <div class="card shadow">
                    <img src="${destination.image}" class="card-img-top" height="300px" alt="${destination.name}">
                    <div class="card-body">
                        <h5 class="card-title">${destination.name}</h5>
                        <p class="card-text">${destination.description.substring(0, 100)}...</p>
                        <a href="details.html?destination=${encodeURIComponent(destination.name)}" class="btn btn-primary">More details</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHtml;
    });

    // Display a message if no destinations match the filter
    if (filteredDestinations.length === 0) {
        container.innerHTML = `<p class="text-center">No destinations match your search criteria.</p>`;
    }
}


const sampleDestinations = [
    {
        name: "Kirkenes",
        image: "/images/kirkenes.jpg",
        description: "Kirkenes is a stunning city located in the northeastern part of Norway. Known for its breathtaking Arctic landscapes, it offers a unique blend of nature and adventure. Visitors can experience the magic of the Northern Lights, snowmobiling, and even stay in ice hotels during the winter season. The area is also rich in history, with influences from Norway, Finland, and Russia.",
        averagePrice: "$1500",
        bestTime: "December to March"
    },
    {
        name: "New York",
        image: "/images/New_York.jpg",
        description: "New York City is a bustling metropolis often referred to as the city that never sleeps. With its iconic landmarks like the Statue of Liberty, Times Square, and Central Park, it serves as a cultural and economic hub. Visitors can enjoy world-class dining, Broadway shows, and diverse neighborhoods that offer a little something for everyone.",
        averagePrice: "$2000",
        bestTime: "April to June"
    },
    {
        name: "Tokyo",
        image: "/images/tokoyo.jpeg",
        description: "Tokyo, the capital of Japan, is a vibrant city where modernity meets tradition. From its bustling streets filled with skyscrapers and neon lights to serene temples and tranquil gardens, Tokyo offers a dynamic experience. Visitors can indulge in authentic sushi, explore the historic Asakusa district, and marvel at the technological wonders of Akihabara.",
        averagePrice: "$1800",
        bestTime: "April to October"
    },
    {
        name: "Giza",
        image: "/images/egypt.jpg",
        description: "Giza, located on the outskirts of Cairo, Egypt, is synonymous with the grandeur of the ancient world. Home to the iconic Pyramids and the Great Sphinx, it offers a glimpse into the remarkable engineering and cultural achievements of the ancient Egyptians. Visitors can explore the nearby desert on camel rides and witness breathtaking sunsets over these historic landmarks.",
        averagePrice: "$1200",
        bestTime: "October to March"
    },
    {
        name: "Maldives",
        image: "/images/maldives.webp",
        description: "The Maldives is a tropical paradise renowned for its pristine beaches, crystal-clear turquoise waters, and luxurious overwater bungalows. This idyllic destination offers the perfect escape for relaxation and adventure, including snorkeling, diving, and dolphin watching. It’s a haven for honeymooners and anyone seeking tranquility in a stunning natural setting.",
        averagePrice: "$2500",
        bestTime: "November to April"
    },
    {
        name: "Paris",
        image: "/images/paris.jpg",
        description: "Paris, the city of love, is a timeless destination known for its romantic ambiance, world-famous art museums, and historic architecture. From the Eiffel Tower to the cobbled streets of Montmartre, every corner of Paris exudes charm. Visitors can enjoy gourmet cuisine, shop at luxury boutiques, and take leisurely strolls along the Seine River.",
        averagePrice: "$1600",
        bestTime: "May to September"
    },
    {
        name: "Albania",
        image: "/images/Albania.jpg",
        description: "Albania, a hidden gem in the Balkans, offers stunning beaches along the Adriatic and Ionian seas, ancient ruins, and a rich cultural heritage. The Albanian Riviera is perfect for sunbathers, while the cities of Berat and Gjirokastër showcase well-preserved Ottoman architecture. It’s an emerging destination for nature lovers and history enthusiasts alike.",
        averagePrice: "$900",
        bestTime: "May to October"
    },
    {
        name: "Dalmatia",
        image: "/images/Dalmatia.jpg",
        description: "Dalmatia, a coastal region of Croatia, is famed for its crystal-clear waters, historic towns, and picturesque islands. Visitors can explore the ancient city of Split, wander through the medieval walls of Dubrovnik, or sail between the region's idyllic islands. It’s a paradise for beach lovers and history buffs alike.",
        averagePrice: "$1400",
        bestTime: "June to September"
    },
    {
        name: "Greece",
        image: "/images/greece.jpg",
        description: "Greece is a land of ancient myths, sun-soaked islands, and warm hospitality. Visitors can marvel at the ruins of Athens, relax on the white sandy beaches of the Cyclades, or experience the traditional villages of Crete. Its combination of history, culture, and natural beauty makes it an unforgettable destination.",
        averagePrice: "$1200",
        bestTime: "May to October"
    },
    {
        name: "Italy",
        image: "/images/italy.jpg",
        description: "Italy is a treasure trove of history, art, and culinary delights. From the romantic canals of Venice to the rolling hills of Tuscany, every region offers something unique. Visitors can savor authentic pasta and pizza, explore the ruins of ancient Rome, or relax on the Amalfi Coast's stunning beaches.",
        averagePrice: "$1800",
        bestTime: "April to October"
    },
    {
        name: "Kenya",
        image: "/images/kenya.jpg",
        description: "Kenya is a land of diverse landscapes, from savannahs teeming with wildlife to the pristine beaches along the Indian Ocean. A safari in the Maasai Mara is a must for spotting the Big Five, while Mount Kenya offers a challenge for adventurous hikers. It’s a dream destination for nature and wildlife enthusiasts.",
        averagePrice: "$2500",
        bestTime: "June to October"
    },
    {
        name: "Morocco",
        image: "/images/morocco.jpg",
        description: "Morocco is a mesmerizing country with vibrant souks, stunning deserts, and majestic mountains. Visitors can lose themselves in the bustling streets of Marrakech, ride camels through the Sahara, or explore the blue-hued city of Chefchaouen. Its rich culture and warm hospitality make it a unique destination.",
        averagePrice: "$1400",
        bestTime: "March to May"
    },
    {
        name: "New Zealand",
        image: "/images/newzealand.jpg",
        description: "New Zealand is a land of breathtaking natural beauty, offering everything from majestic mountains to serene beaches. Adventure seekers can enjoy bungee jumping in Queenstown, exploring the glowworm caves of Waitomo, or hiking through the stunning Fiordland National Park. It’s a haven for outdoor enthusiasts.",
        averagePrice: "$3000",
        bestTime: "November to February"
    },
    {
        name: "Pamplona",
        image: "/images/Pamplona.jpg",
        description: "Pamplona, located in northern Spain, is best known for the Running of the Bulls during the San Fermín festival. Beyond the festivities, visitors can enjoy the city's historic streets, beautiful parks, and delicious Basque cuisine. It’s a city with deep traditions and vibrant energy.",
        averagePrice: "$1100",
        bestTime: "July"
    },
    {
        name: "Rome",
        image: "/images/Rome.jpg",
        description: "Rome, the Eternal City, is a living museum filled with ancient landmarks like the Colosseum, Roman Forum, and Pantheon. Visitors can indulge in authentic Italian gelato, toss coins into the Trevi Fountain, and immerse themselves in the city's vibrant culture. It's a must-visit for history lovers.",
        averagePrice: "$1500",
        bestTime: "April to June"
    },
    {
        name: "Thailand",
        image: "/images/thailand.jpg",
        description: "Thailand is a tropical paradise known for its stunning beaches, bustling markets, and rich culture. Visitors can explore the ornate temples of Bangkok, relax on the islands of Phuket or Koh Samui, and enjoy the delicious street food. It’s a destination that offers both adventure and relaxation.",
        averagePrice: "$1200",
        bestTime: "November to February"
    }
];




load_dest()