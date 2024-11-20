// JavaScript to toggle the search panel visibility
document.getElementById('search-icon').addEventListener('click', function() {
  document.body.classList.add('search-active');  // Show search panel
});

function closeSearch() {
  document.body.classList.remove('search-active');  // Hide search panel
}

// Function to show suggestions dynamically based on input
function showSuggestions() {
  let searchBar = document.getElementById('search-bar');
  let suggestions = document.getElementById('suggestions');
  let query = searchBar.value.toLowerCase();

  // Example static suggestions, could be replaced with dynamic data
  const items = ['Shirt', 'Jeans', 'Jacket', 'Shoes', 'Hats', 'Sweaters'];

  // Clear previous suggestions
  suggestions.innerHTML = '';

  // Only show suggestions if there's something typed and it matches the items
  if (query.length > 0) {
    let filteredItems = items.filter(item => item.toLowerCase().includes(query));
    
    // If there are matching items, show them
    if (filteredItems.length > 0) {
      filteredItems.forEach(item => {
        let div = document.createElement('div');
        div.classList.add('suggestion-item');
        div.textContent = item;
        suggestions.appendChild(div);
      });
    } else {
      // Show a message if no suggestions match
      let noResults = document.createElement('div');
      noResults.classList.add('suggestion-item');
      noResults.textContent = 'No suggestions found';
      suggestions.appendChild(noResults);
    }
  }
}

// Function to check if element is in view
function isElementInView(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Function to add animations when elements come into view
function animateOnScroll() {
  const elements = document.querySelectorAll('.section-animate');
  
  elements.forEach(element => {
    if (isElementInView(element)) {
      element.classList.add('section-animate-visible');
    }
  });
}

// Call animateOnScroll when the page is scrolled
window.addEventListener('scroll', animateOnScroll);

// Initial call to trigger animations for elements already in view
window.addEventListener('load', animateOnScroll);
// Function to handle the collapsible behavior
document.querySelectorAll('.collapsible-header').forEach(header => {
  header.addEventListener('click', function () {
      const content = this.nextElementSibling;
      const icon = this.querySelector('.icon');

      // Check if content is already open
      if (content.classList.contains('open')) {
          content.classList.remove('open'); // Collapse content
          icon.textContent = "+"; // Change icon to +
      } else {
          content.classList.add('open'); // Expand content
          icon.textContent = "-"; // Change icon to -
      }
  });
});

// Elements
const changeRegionBtn = document.querySelector('.change-region-btn');
const dialogOverlay = document.querySelector('#dialog-overlay');
const closeBtn = document.querySelector('.close-btn');
const regionHeaders = document.querySelectorAll('.region-header'); // To handle multiple regions
const regionLists = document.querySelectorAll('.region-list'); // To handle multiple region lists
const toggleIcons = document.querySelectorAll('.toggle-icon'); // For toggling + and -

// Function to open the dialog
function openDialog() {
    dialogOverlay.classList.add('active');  // Make the dialog visible
    dialogOverlay.classList.remove('hidden');  // Remove hidden class
}

// Function to close the dialog
function closeDialog() {
    dialogOverlay.classList.remove('active');  // Hide the dialog
    dialogOverlay.classList.add('hidden');  // Add the hidden class back
}

// Toggle region list visibility
function toggleRegionList(event) {
    const regionList = event.target.nextElementSibling; // The list of regions
    const toggleIcon = event.target.querySelector('.toggle-icon'); // The + or - icon

    regionList.classList.toggle('hidden'); // Toggle the visibility of the region list
    toggleIcon.textContent = regionList.classList.contains('hidden') ? '+' : '-'; // Change the icon
}

