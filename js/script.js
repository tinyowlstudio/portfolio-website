// For Tabs
// =============================================================
const tabReact = document.getElementById("tabReact");
const tabAngular = document.getElementById("tabAngular");
const tabAPI = document.getElementById("tabAPI");

// Get references to the corresponding tab sections
const tabSectionReact = document.querySelector(".tab-section__react");
const tabSectionAngular = document.querySelector(".tab-section__angular");
const tabSectionAPI = document.querySelector(".tab-section__api");

// Get references to the tab-bar items
const tabBarItemReact = document.querySelector(".tab-bar__react");
const tabBarItemAngular = document.querySelector(".tab-bar__angular");
const tabBarItemAPI = document.querySelector(".tab-bar__api");

// Add click event listeners to the tabs
tabReact.addEventListener("click", () => {
    // Remove 'active' class from all tab sections
    tabSectionReact.classList.add("active");
    tabSectionAngular.classList.remove("active");
    tabSectionAPI.classList.remove("active");
    
    // Remove 'active' class from all tab-bar items
    tabBarItemReact.classList.add("active");
    tabBarItemAngular.classList.remove("active");
    tabBarItemAPI.classList.remove("active");
});

tabAngular.addEventListener("click", () => {
    // Remove 'active' class from all tab sections
    tabSectionReact.classList.remove("active");
    tabSectionAngular.classList.add("active");
    tabSectionAPI.classList.remove("active");
    
    // Remove 'active' class from all tab-bar items
    tabBarItemReact.classList.remove("active");
    tabBarItemAngular.classList.add("active");
    tabBarItemAPI.classList.remove("active");
});

tabAPI.addEventListener("click", () => {
    // Remove 'active' class from all tab sections
    tabSectionReact.classList.remove("active");
    tabSectionAngular.classList.remove("active");
    tabSectionAPI.classList.add("active");
    
    // Remove 'active' class from all tab-bar items
    tabBarItemReact.classList.remove("active");
    tabBarItemAngular.classList.remove("active");
    tabBarItemAPI.classList.add("active");
});




// // For Modals
// // =============================================================
// // Get the About and Contact buttons
// const aboutButton = document.getElementById('aboutButton');
// const contactButton = document.getElementById('contactButton');

// // Get the About and Contact modals
// const aboutModal = document.getElementById('aboutModal');
// const contactModal = document.getElementById('contactModal');

// // Get the close buttons
// const aboutModalClose = document.getElementById('aboutModalClose');
// const contactModalClose = document.getElementById('contactModalClose');

// // Open About Modal when "Who am I?" button is clicked
// aboutButton.addEventListener('click', () => {
//     aboutModal.style.display = 'block';
// });

// // Open Contact Modal when "Contact me" button is clicked
// contactButton.addEventListener('click', () => {
//     contactModal.style.display = 'block';
// });

// // Close About Modal
// aboutModalClose.addEventListener('click', () => {
//     aboutModal.style.display = 'none';
// });

// // Close Contact Modal
// contactModalClose.addEventListener('click', () => {
//     contactModal.style.display = 'none';
// });