
// Testimonial Slider
let testimonialIndex = 0;
const testimonialSlides = document.querySelectorAll('.testimonial-slider .testimonial');

function showTestimonial() {
  testimonialSlides.forEach((slide, index) => {
    slide.style.display = index === testimonialIndex ? 'block' : 'none';
  });
  testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
}

setInterval(showTestimonial, 4000);



// scripts.js
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");

  // Highlight and scroll to matching sections
  searchBtn.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase();
    const sections = document.querySelectorAll("section");
    let matchFound = false;

    // Clear previous highlights
    sections.forEach((section) => {
      section.style.backgroundColor = ""; // Reset background color
    });

    // Search through sections
    sections.forEach((section) => {
      if (section.textContent.toLowerCase().includes(query)) {
        matchFound = true;
        section.style.backgroundColor = "#fffa90"; // Highlight match
        section.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });

    // Alert if no matches found
    if (!matchFound) {
      alert("No matches found!");
    }
  });
});


// Filter projects based on category
function filterProjects(category) {
  const projects = document.querySelectorAll(".project-card");
  const buttons = document.querySelectorAll(".filter-btn");

  // Highlight the active button
  buttons.forEach((btn) => btn.classList.remove("active"));
  document.querySelector(`.filter-btn[onclick="filterProjects('${category}')"]`).classList.add("active");

  // Show/Hide projects
  projects.forEach((project) => {
    if (category === "all" || project.dataset.category === category) {
      project.style.display = "block";
      project.classList.add("fade-in");
    } else {
      project.style.display = "none";
    }
  });
}
function openModal(projectId) {
  const modal = document.getElementById("project-modal");
  const modalBody = document.getElementById("modal-body");

  if (projectDetails[projectId]) {
    const { title, description, image } = projectDetails[projectId];
    modalBody.innerHTML = `
      <h2>${title}</h2>
      <img src="${image}" alt="${title}" style="width: 100%; margin: 15px 0;">
      <p>${description}</p>
    `;
  }

  modal.classList.add("show");
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 500); // Match this duration to the CSS animation duration
}


// Data for Project Details
const projectDetails = {
  project9: {
    title: "Food Recipes Web Design",
    description: `
      This project involved creating a responsive, mobile-friendly website using HTML, CSS, and JavaScript.
      The design ensures optimal viewing across various devices.`,
    features: ["Fully responsive layout", "Custom CSS animations", "Optimized for performance"],
    image: "jollofrice.jpeg",
  },
project10: {
    title: "Responsive Web Design",
    description: `
      This project involved creating a responsive, mobile-friendly website using HTML, CSS, and JavaScript.
      The design ensures optimal viewing across various devices.`,
    features: ["Fully responsive layout", "Custom CSS animations", "Optimized for performance"],
    image: "home.jpeg",
  },
project11: {
    title: "Responsive Sign Up Form Design",
    description: `
      This project involved creating a responsive, mobile-friendly website using HTML, CSS, and JavaScript.
      The design ensures optimal viewing across various devices.`,
    features: ["Fully responsive layout", "Custom CSS animations", "Optimized for performance"],
    image: "signup.jpeg",
  },
project12: {
    title: "Unique Football Update web app Design",
    description: `
      This project involved creating a responsive, mobile-friendly website using HTML, CSS, and JavaScript.
      The design ensures optimal viewing across various devices.`,
    features: ["Fully responsive layout", "Custom CSS animations", "Optimized for performance"],
    image: "match.jpeg",
  },


  project2: {
    title: "JavaScript Animation",
    description: `
      It is a project that showcases interactive animations created using modern JavaScript frameworks and libraries.`,
    features: ["Interactive elements", "Smooth transitions", "Real-time updates"],
    image: "project2-full.jpg",
  },
  project4: {
    title: "Masterclass Learning Banner",
    description: `
      Professional graphic design works plus custom animations, suitable when into branding and advertisements.`,
    features: ["Custom logos", "Animated banners", "Brand-focused design"],
    image: "gaozu.jpeg",
  },
project5: {
    title: "Book launching design ",
    description: `
      Professional graphic design works plus custom animations, suitable when into branding and advertisements.`,
    features: ["Custom logos", "Animated banners", "Brand-focused design"],
    image: "mockup.jpeg",
  },
project6: {
    title: "Restaurant banner design",
    description: `
      Professional graphic design works plus custom animations, suitable when into branding and advertisements.`,
    features: ["Custom logos", "Animated banners", "Brand-focused design"],
    image: "asake.jpeg",
  },
project7: {
    title: "Food ads design",
    description: `
      Professional graphic design works plus custom animations, suitable when into branding and advertisements.`,
    features: ["Custom logos", "Animated banners", "Brand-focused design"],
    image: "sal.jpeg",
  },
project8: {
    title: "WhatsApp seminar banner design",
    description: `
      Professional graphic design works plus custom animations, suitable when into branding and advertisements.`,
    features: ["Custom logos", "Animated banners", "Brand-focused design"],
    image: "what.jpeg",
  },
};

// Function to Open the Modal
function viewProject(projectId) {
  const modal = document.getElementById("projectModal");
  const modalBody = document.getElementById("modal-body");

  // Load Project Details
  if (projectDetails[projectId]) {
    const { title, description, features, image } = projectDetails[projectId];
    modalBody.innerHTML = `
      <h2>${title}</h2>
      <img src="${image}" alt="${title}">
      <p>${description}</p>
      <h3>Key Features</h3>
      <ul>
        ${features.map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
    `;
  }

  // Show Modal
  modal.style.display = "flex";
}

// Function to Close the Modal
function closeModal() {
  const modal = document.getElementById("projectModal");
  modal.style.display = "none";
}


function searchCourses() {
  const searchInput = document.getElementById("courseSearch").value.toLowerCase();
  const courseCards = document.querySelectorAll(".course-card");
  courseCards.forEach((card) => {
    const text = card.textContent.toLowerCase();
    card.style.display = text.includes(searchInput) ? "block" : "none";
  });
}



// Initialize Slick Carousel
$(document).ready(function(){
  $('.partner-logos-carousel').slick({
    infinite: true,
    slidesToShow: 4, // Shows 4 logos at once
    slidesToScroll: 1, // Scrolls 1 logo at a time
    autoplay: true, // Enables autoplay
    autoplaySpeed: 2000, // Adjust the autoplay speed (2 seconds)
    arrows: true, // Show navigation arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

