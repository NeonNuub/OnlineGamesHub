// Recommendation system
const RECENT_GAMES_KEY = 'recentGames';
const MAX_RECENT_GAMES = 5;

// Track recently played games
function trackRecentGame(gameId) {
    let recentGames = JSON.parse(localStorage.getItem(RECENT_GAMES_KEY) || '[]');
    
    // Remove if already exists
    recentGames = recentGames.filter(id => id !== gameId);
    
    // Add to front
    recentGames.unshift(gameId);
    
    // Keep only MAX_RECENT_GAMES
    recentGames = recentGames.slice(0, MAX_RECENT_GAMES);
    
    localStorage.setItem(RECENT_GAMES_KEY, JSON.stringify(recentGames));
}

// Get recommended games based on tags
function getRecommendedGames(currentGame) {
    const recentGames = JSON.parse(localStorage.getItem(RECENT_GAMES_KEY) || '[]');
    const recentGameTags = recentGames
        .map(id => games.find(g => g.id === id))
        .filter(Boolean)
        .flatMap(game => game.tags);
    
    // Count tag occurrences
    const tagCounts = {};
    recentGameTags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
    
    // Sort games by tag similarity
    return games
        .filter(game => game.id !== currentGame?.id)
        .map(game => ({
            game,
            score: game.tags.reduce((score, tag) => score + (tagCounts[tag] || 0), 0)
        }))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
        .map(item => item.game);
}

// Add click tracking to game cards
document.addEventListener('click', (e) => {
    const gameCard = e.target.closest('.game-card');
    if (gameCard) {
        const gameId = gameCard.querySelector('h3').textContent
            .toLowerCase()
            .replace(/\s+/g, '-');
        trackRecentGame(gameId);
    }
}); 