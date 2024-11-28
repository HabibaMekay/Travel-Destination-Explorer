const people = [
  {
    name: "Habiba Emad Mekay",
    picture: "/images/person4.jpg",
    words: "Travel Sis changed my life! I can now easily find new destinations!",
  },
  {
    name: "Mariam Ghandoor",
    picture: "/images/person1.jpg",
    words: "Please give us bonus :(",
  },
  {
    name: "Rawan Wagih",
    picture: "/images/person5.jpg",
    words: "Thank you, Beyonce, and thank you Maya!",
  },
  {
    name: "Ahmed Ghandour",
    picture: "/images/da7ee7.jpeg",
    words: "مبسوط اني عرفت اسافر مع عيلتي! Thank you Travel Sis",
  },
  {
    name: "Barrack Obama",
    picture: "/images/barrack.jpeg",
    words: "Please give us the full grade",
  },
  {
    name: "Beyonce",
    picture: "/images/beyonce.jpeg",
    words: "I'm so happy I used Travel Sis to plan my vacation!",
  },
];

const peopleDisplay = document.getElementById("people-display");
let j = 0;

setInterval(() => {
  peopleDisplay.innerHTML = "";

  for (let i = 0; i < people.length; i++) {
    if (i % 2 === j % 2) {

      // Create the card element
      const card = document.createElement("div");
      // card.className = "col-md-3 make-it-fade"; commented this and used the one below for responsivness
      card.className = "col-12 col-sm-6 col-md-4 col-lg-3 make-it-fade";

      //card.style = " opacity: 0; transform: translateY(20px); animation: fadeIn 0.5s ease-in-out forwards";

      card.innerHTML = `
            <div class="card shadow" style="border: 0.5px solid #3e2b22;">
                <img src="${people[i].picture}" class="card-img-top" height="300px" alt="${people[i].name}"> 
        

                <div class="card-body">
                    <h6 style="color: #3e2b22" class="card-title">"${people[i].words}"</h6>
                    <p class="card-text"><small class="testimonial-author">- ${people[i].name}</small></p>
                </div>
            </div>
      `;

      peopleDisplay.appendChild(card);
    }
  }

  j++;
}, 5000);


    // const beta3 = document.getElementById('people-display')

// <div class="row g-3 justify-content-evenly">
// <div class="col-md-3">
//     <div class="card shadow" style="border: 0.5px solid #3e2b22;">
//         <img src="/images/person4.jpg" class="card-img-top" height="300px" alt="Kirkenes">
//         <div class="card-body" id="kirkenes">
//             <h6 style="color: #3e2b22" class="card-title">"Travel Sis changed my life! I can now easily find new destinations!"</h6>
//             <p class="card-text"><small class="testimonial-author">- Mariam Ghandoor</small></p>
//         </div>
//     </div>
// </div>


//////////////////////////////////////////////////////////////////////////////////////////

//   const peopleDisplay = document.getElementById("people-display");
//   let currentIndex = 0;
  
//   // Function to render a group of testimonials
//   function renderTestimonials() {
//     // Clear the current content
//     peopleDisplay.innerHTML = "";
  
//     // Determine the current group of 3
//     for (let i = 0; i < 3; i++) {
//       const person = people[(currentIndex + i) % people.length]; // Wrap around using modulo
//       const col = document.createElement("div");
//       col.className = "col-md-3";
  
//       col.innerHTML = `
//         <div class="card shadow" style="border: 0.5px solid #3e2b22;">
//           <img src="${person.picture}" class="card-img-top" height="300px" alt="${person.name}">
//           <div class="card-body">
//             <h6 style="color: #3e2b22" class="card-title">"${person.words}"</h6>
//             <p class="card-text"><small class="testimonial-author">- ${person.name}</small></p>
//           </div>
//         </div>
//       `;
  
//       peopleDisplay.appendChild(col);
//     }
  
//     // Update the index to the next group
//     currentIndex = (currentIndex + 3) % people.length;
//   }
  
//   // Initial render
//   renderTestimonials();
  
//   // Set interval to update the testimonials every 5 seconds
//   setInterval(renderTestimonials, 5000);
  


//7777777777777777777777777777777wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww


