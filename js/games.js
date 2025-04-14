// Game data
const games = [
    {
        id: "2048",
        name: "2048",
        tags: ["popular", "puzzle", "strategy"],
        icon: "assets/icons/2048.png",
        localUrl: "games/2048/index.html"
    },
    {
        id: "flappy-bird",
        name: "Flappy Bird",
        tags: ["popular", "arcade"],
        icon: "assets/icons/flappy-bird.png",
        localUrl: "games/flappy-bird/index.html"
    },
    {
        id: "pacman",
        name: "Pac-Man",
        tags: ["popular", "arcade", "classic"],
        icon: "assets/icons/pacman.png",
        localUrl: "games/pacman/index.html"
    },
    {
        id: "hextris",
        name: "Hextris",
        tags: ["puzzle", "strategy"],
        icon: "assets/icons/hextris.png",
        localUrl: "games/hextris/index.html"
    },
    {
        id: "paper.io2",
        name: "Paper.io 2",
        tags: ["strategy", "classic"],
        icon: "assets/icons/paper.io2.png",
        localUrl: "games/paper.io2/index.html"
    },
    {
        id: "slope",
        name: "Slope",
        tags: ["strategy", "classic"],
        icon: "assets/icons/slope.jpeg",
        localUrl: "games/slope/index.html"
    },
    {
        id: "subway-surfers",
        name: "Subway Surfers",
        tags: ["strategy", "classic", "action"],
        icon: "assets/icons/subway-surfers.png",
        localUrl: "games/subway-surfers/index.html"
    },
    {
        id: "bitlife",
        name: "Bitlife",
        tags: ["strategy", "popular"],
        icon: "assets/icons/bitlife.png",
        localUrl: "games/bitlife/index.html"
    },
    {
        id: "drift-boss",
        name: "Drift Boss",
        tags: ["strategy", "classic", "popular"],
        icon: "assets/icons/drift-boss.png",
        localUrl: "games/drift-boss/index.html"
    },
    {
        id: "core-ball",
        name: "Core Ball",
        tags: ["strategy", "puzzle"],
        icon: "assets/icons/core-ball.png",
        localUrl: "games/core-ball/index.html"
    },
    {
        id: "duck-life4",
        name: "Duck Life 4",
        tags: ["popular", "classic", "strategy"],
        icon: "assets/icons/duck-life4.jpg",
        localUrl: "games/duck-life4/index.html"
    },
    {
        id: "temple-run2",
        name: "Temple Run 2",
        tags: ["classic", "strategy"],
        icon: "assets/icons/temple-run2.png",
        localUrl: "games/temple-run2/index.html"
    },
    {
        id: "moto-x3m",
        name: "Moto X3M",
        tags: ["classic", "racing", "popular"],
        icon: "assets/icons/moto-x3m.png",
        localUrl: "games/moto-x3m/index.html"
    },
    {
        id: "moto-x3m2",
        name: "Moto X3M 2",
        tags: ["classic", "racing", "popular"],
        icon: "assets/icons/moto-x3m2.png",
        localUrl: "games/moto-x3m2/index.html"
    },
    {
        id: "moto-x3m-winter",
        name: "Moto X3M Winter",
        tags: ["classic", "racing", "popular"],
        icon: "assets/icons/moto-x3m-winter.jpg",
        localUrl: "games/moto-x3m-winter/index.html"
    },
    {
        id: "moto-x3m-pool-party",
        name: "Moto X3M Pool Party",
        tags: ["classic", "racing", "popular"],
        icon: "assets/icons/moto-x3m-pool-party.png",
        localUrl: "games/moto-x3m-pool-party/index.html"
    },
    {
        id: "moto-x3m-spooky-land",
        name: "Moto X3M Spooky Land",
        tags: ["classic", "racing", "popular"],
        icon: "assets/icons/moto-x3m-spooky-land.png",
        localUrl: "games/moto-x3m-spooky-land/index.html"
    },
    {
        id: "ball-hop",
        name: "Ball Hop",
        tags: ["classic"],
        icon: "assets/icons/ball-hop.png",
        localUrl: "games/ball-hop/index.html"
    },
    {
        id: "retro-bowl",
        name: "Retro Bowl",
        tags: ["classic", "popular", "strategy"],
        icon: "assets/icons/retro-bowl.png",
        localUrl: "games/retro-bowl/index.html"
    },
    {
        id: "stickman-hook",
        name: "Stickman Hook",
        tags: ["classic", "strategy"],
        icon: "assets/icons/stickman-hook.jpg",
        localUrl: "games/stickman-hook/index.html"
    },
    {
        id: "crossy-road",
        name: "Crossy Road",
        tags: ["popular", "arcade", "classic"],
        icon: "assets/icons/crossy-road.jpg",
        localUrl: "games/crossy-road/index.html"
    },
    {
        id: "stack",
        name: "Stack",
        tags: ["puzzle", "strategy"],
        icon: "assets/icons/stack.png",
        localUrl: "games/stack/index.html"
    },
    {
        id: "doge-miner",
        name: "Doge Miner",
        tags: ["classic", "strategy"],
        icon: "assets/icons/doge-miner.jpg",
        localUrl: "games/doge-miner/index.html"
    },
    {
        id: "basketball-stars",
        name: "Basketball Stars",
        tags: ["sports", "action", "classic"],
        icon: "assets/icons/basketball-stars.png",
        localUrl: "games/basketball-stars/index.html"
    },
    {
        id: "geometry-dash",
        name: "Geometry Dash",
        tags: ["popular", "classic"],
        icon: "assets/icons/geometry-dash.jpg",
        localUrl: "games/geometry-dash/index.html"
    },
    {
        id: "project-sand",
        name: "Project Sand",
        tags: [],
        icon: "assets/icons/project-sand.png",
        localUrl: "games/project-sand/index.html"
    },
    {
        id: "save-the-doge",
        name: "Save the Doge",
        tags: ["puzzle", "strategy"],
        icon: "assets/icons/save-the-doge.png",
        localUrl: "games/save-the-doge/index.html"
    },
    {
        id: "minefork",
        name: "Minefork",
        tags: ["popular", "classic"],
        icon: "assets/icons/minefork.png",
        localUrl: "games/minefork/index.html"
    },
    {
        id: "google-feud",
        name: "Google Feud",
        tags: ["puzzle"],
        icon: "assets/icons/google-feud.png",
        localUrl: "games/google-feud/index.html"
    },
    {
        id: "rooftop-snipers",
        name: "Rooftop Snipers",
        tags: ["action", "shooting"],
        icon: "assets/icons/rooftop-snipers.png",
        localUrl: "games/rooftop-snipers/index.html"
    },
    {
        id: "rocketpult",
        name: "Rocketpult",
        tags: ["action"],
        icon: "assets/icons/rocketpult.png",
        localUrl: "games/rocketpult/index.html"
    },
    {
        id: "sand-tetris",
        name: "Sand Tetris",
        tags: ["puzzle", "classic"],
        icon: "assets/icons/sand-tetris.png",
        localUrl: "games/sand-tetris/index.html"
    },
    {
        id: "tomb-of-the-mask",
        name: "Tomb of the Mask",
        tags: ["classic", "arcade"],
        icon: "assets/icons/tomb-of-the-mask.png",
        localUrl: "games/tomb-of-the-mask/index.html"
    },
    {
        id: "cut-the-rope",
        name: "Cut the Rope",
        tags: ["puzzle", "classic"],
        icon: "assets/icons/cut-the-rope.jpg",
        localUrl: "games/cut-the-rope/index.html"
    },
    {
        id: "cluster-rush",
        name: "Cluster Rush",
        tags: ["puzzle", "strategy"],
        icon: "assets/icons/cluster-rush.png",
        localUrl: "games/cluster-rush/index.html"
    },
    {
        id: "baldis-basics",
        name: "Baldi's Basics in Education and Learning",
        tags: ["classic", "action", "strategy"],
        icon: "assets/icons/baldis-basics.png",
        localUrl: "games/baldis-basics/index.html"
    },
    {
        id: "bad-time-simulator",
        name: "Bad Time Simulator",
        tags: ["strategy", "action"],
        icon: "assets/icons/bad-time-simulator.jpg",
        localUrl: "games/bad-time-simulator/index.html"
    },
    {
        id: "ovo",
        name: "OvO",
        tags: ["strategy", "arcade"],
        icon: "assets/icons/ovo.png",
        localUrl: "games/ovo/index.html"
    },
    {
        id: "idle-dice",
        name: "Idle Dice",
        tags: ["strategy", "arcade"],
        icon: "assets/icons/idle-dice.jpg",
        localUrl: "games/idle-dice/index.html"
    },
    {
        id: "idle-ants",
        name: "Idle Ants",
        tags: ["strategy", "arcade"],
        icon: "assets/icons/idle-ants.jpg",
        localUrl: "games/idle-ants/index.html"
    },
    {
        id: "idle-breakout",
        name: "Idle Breakout",
        tags: ["strategy", "arcade"],
        icon: "assets/icons/idle-breakout.png",
        localUrl: "games/idle-breakout/index.html"
    },
    {
        id: "getting-over-it-scratch",
        name: "Getting Over It Scratch",
        tags: ["strategy"],
        icon: "assets/icons/getting-over-it-scratch.jpg",
        localUrl: "games/getting-over-it-scratch/index.html"
    },
];

// Function to create game cards
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    
    // Create card content
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    
    // Create image element
    const img = document.createElement('img');
    img.src = game.icon;
    img.alt = game.name;
    img.onerror = function() {
        this.src = 'assets/icons/default.svg';
    };
    
    // Create game info
    const gameInfo = document.createElement('div');
    gameInfo.className = 'game-info';
    
    const title = document.createElement('h3');
    title.textContent = game.name;
    
    const tags = document.createElement('div');
    tags.className = 'game-tags';
    
    game.tags.forEach(tag => {
        const tagSpan = document.createElement('span');
        tagSpan.className = 'game-tag';
        tagSpan.textContent = tag;
        tags.appendChild(tagSpan);
    });
    
    // Assemble the card
    gameInfo.appendChild(title);
    gameInfo.appendChild(tags);
    
    cardContent.appendChild(img);
    cardContent.appendChild(gameInfo);
    card.appendChild(cardContent);
    
    // Add click event
    card.addEventListener('click', () => {
        window.location.href = game.localUrl;
    });
    
    return card;
}

// Function to display games with loading state
function displayGames(gamesToShow = games) {
    const container = document.getElementById('gamesContainer');
    
    // Clear container
    container.innerHTML = '';
    
    // Add loading spinner
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="loading-spinner"></div>';
    container.appendChild(loading);
    
    // Use setTimeout to prevent flickering
    setTimeout(() => {
        // Clear loading spinner
        container.innerHTML = '';
        
        // Add game cards with staggered animation
        gamesToShow.forEach((game, index) => {
            const card = createGameCard(game);
            card.style.animationDelay = `${index * 0.1}s`;
            container.appendChild(card);
        });
        
        // If no games found, show message
        if (gamesToShow.length === 0) {
            const noGames = document.createElement('div');
            noGames.className = 'no-games';
            noGames.innerHTML = '<p>No games found. Try a different search term.</p>';
            container.appendChild(noGames);
        }
    }, 300);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Display all games by default
    displayGames();
    
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        const icon = themeToggle.querySelector('i');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
        
        // Save theme preference
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
    });
    
    // Category selection
    const categoryItems = document.querySelectorAll('.category-list li');
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            categoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            const category = item.textContent.trim().toLowerCase();
            
            // Filter games based on category
            let filteredGames;
            if (category === 'all games') {
                filteredGames = games;
            } else if (category === 'popular') {
                filteredGames = games.filter(game => game.tags.includes('popular'));
            } else {
                filteredGames = games.filter(game => game.tags.includes(category));
            }
            
            displayGames(filteredGames);
        });
    });
}); 