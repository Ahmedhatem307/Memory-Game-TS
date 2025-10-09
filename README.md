# Memory Game (TypeScript) 🧠

A simple **Memory Matching Game** built with **TypeScript**, **HTML**, **CSS**, and **Bootstrap**.  
Flip cards to find matching pairs — test your memory and focus!

🎮 **[Live Demo on GitHub Pages](https://ahmedhatem307.github.io/Memory-Game-TS/)**

---

## 🚀 Features

- 🔢 20 cards (10 pairs)
- 🧩 Randomized card order each game
- ⏱️ Move counter and game info
- 🔊 Flip and match sounds
- 📱 Responsive layout using Bootstrap & CSS media queries
- ⚡ Optimized performance with WebP images and preloading
- 🎨 Clean structure with separated CSS and TypeScript modules

---

## 🛠️ Tech Stack

- **TypeScript**
- **HTML5**
- **CSS3**
- **Bootstrap 5**
- **Node.js** (for TypeScript compilation)

---

## 🧩 Project Structure

```
Memory-Game-TS
├─ bootstrap-5.3.8-dist
│
├─ dist
│  ├─ card.js
│  ├─ game.js
│  ├─ gameAudios.js
│  ├─ main.js
│  └─ utils.js
├─ README.md
├─ src
│  ├─ assets
│  │  ├─ audio
│  │  │  ├─ fail.mp3
│  │  │  ├─ flip.mp3
│  │  │  ├─ game-over.mp3
│  │  │  ├─ gameTrack.mp3
│  │  │  └─ success.mp3
│  │  └─ images
│  │     ├─ 1.webp
│  │     ├─ 10.webp
│  │     ├─ 2.webp
│  │     ├─ 3.webp
│  │     ├─ 4.webp
│  │     ├─ 5.webp
│  │     ├─ 6.webp
│  │     ├─ 7.webp
│  │     ├─ 8.webp
│  │     ├─ 9.webp
│  │     ├─ back.webp
│  │     └─ tableImage.webp
│  ├─ css
│  │  └─ style.css
│  ├─ index.html
│  └─ ts
│     ├─ card.ts
│     ├─ game.ts
│     ├─ gameAudios.ts
│     ├─ main.ts
│     └─ utils.ts
└─ tsconfig.json

```

---

## ⚙️ Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Ahmedhatem307/Memory-Game-TS.git

   cd Memory-Game-TS
   ```

2. **Install dependencies:**

   ```bash
   npm install -g typescript
   ```

3. **Compile TypeScript and watch for changes:**

   ```bash
   tsc --watch
   ```

4. **Open `index.html` in your browser or use a live server extension.**

## 📚 What I Learned

- During this project, I:

- Practiced writing modular TypeScript code.

- Improved project structure and organization.

- Learned to optimize performance with compressed images (WebP) and preloading.

- Integrated audio feedback for a better user experience.

- Strengthened my understanding of DOM manipulation and game logic.

## 💡 Future Improvements

- Add difficulty levels (easy/medium/hard)

- Implement a timer and scoring system

- Add animations and visual effects

- Save high scores using localStorage
