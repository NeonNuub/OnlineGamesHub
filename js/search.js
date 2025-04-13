// Search functionality
const searchInput = document.getElementById('searchInput');
let searchTimeout;

// Debounce function to prevent rapid firing of search
function debounce(func, wait) {
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            func.apply(context, args);
        }, wait);
    };
}

// Search function
function performSearch(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    // If search is empty, show all games
    if (searchTerm === '') {
        displayGames();
        return;
    }
    
    // Filter games based on search term
    const filteredGames = games.filter(game => {
        const nameMatch = game.name.toLowerCase().includes(searchTerm);
        const tagMatch = game.tags.some(tag => tag === searchTerm); // Exact tag match
        return nameMatch || tagMatch;
    });
    
    // Display filtered games
    displayGames(filteredGames);
}

// Add event listener with debounce
searchInput.addEventListener('input', debounce(performSearch, 300));

// Add search icon click handler
const searchIcon = document.querySelector('.search-icon');
searchIcon.addEventListener('click', () => {
    searchInput.focus();
});

// Add keyboard navigation for search results
document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && document.activeElement === searchInput) {
        const searchTerm = searchInput.value.toLowerCase().trim();
        if (searchTerm !== '') {
            const filteredGames = games.filter(game => {
                const nameMatch = game.name.toLowerCase().includes(searchTerm);
                const tagMatch = game.tags.some(tag => tag === searchTerm); // Exact tag match
                return nameMatch || tagMatch;
            });
            
            if (filteredGames.length === 1) {
                window.location.href = filteredGames[0].localUrl;
            }
        }
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Display all games by default
    displayGames();

    // Category selection
    const categoryItems = document.querySelectorAll('.category-list li');
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            categoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            const category = item.getAttribute('data-tag');

            // Filter games based on category
            let filteredGames;
            if (category === 'all') {
                filteredGames = games; // Show all games
            } else {
                filteredGames = games.filter(game => game.tags.includes(category)); // Filter by tag
            }

            displayGames(filteredGames); // Display the filtered games
        });
    });
}); 