# Unblocked Games Hub

A modern, responsive website for hosting unblocked games with a beautiful UI and smooth animations.

## Features

- 🎮 Modern and responsive design
- 🌓 Dark/Light mode toggle
- 🔍 Real-time search functionality
- 📱 Mobile-friendly layout
- 🏷️ Category filtering
- ⭐ Game recommendations based on play history
- 🎨 Smooth animations and transitions

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Start playing games!

## Adding New Games

To add a new game:

1. Create a new folder in `games/<game-id>/`
2. Add your game files in that folder
3. Add an icon to `assets/icons/`
4. Add the game data to `js/games.js`:

```javascript
{
    id: "game-id",
    name: "Game Name",
    icon: "assets/icons/game-id.png",
    url: "games/game-id/index.html",
    tags: ["tag1", "tag2", "popular"]
}
```

## Project Structure

```
/ (root)
├── index.html              # Homepage
├── all-games.html          # All games list
├── assets/
│   ├── icons/             # Game icons
│   └── styles.css         # Main CSS
├── games/                 # Game folders
├── js/
│   ├── games.js          # Game data
│   ├── search.js         # Search functionality
│   └── recommend.js      # Recommendations
└── README.md
```

## Technologies Used

- HTML5
- CSS3 (with animations)
- JavaScript (ES6+)
- Font Awesome icons
- Google Fonts (Poppins)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 