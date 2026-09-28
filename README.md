# 📸 VistaLens — Realistic Image Gallery

> **See the world differently.**

VistaLens is a modern, realistic, and responsive **Image Gallery Website** built using **HTML, CSS, and JavaScript**.

It provides a professional photography-gallery experience with beautiful image cards, category filtering, search, favorites, fullscreen viewing, image downloads, smooth animations, dark mode, and responsive design.

---

## ✨ Features

* 📸 Modern photography gallery
* 🖼️ 50+ images
* 🔎 Search images
* 🗂️ Category filtering
* 🌿 Nature collection
* ✈️ Travel collection
* 🐾 Animals collection
* 🏙️ City collection
* ☕ Lifestyle collection
* ❤️ Add images to favorites
* 💾 Save favorites using LocalStorage
* 🔍 Fullscreen image viewer
* ⬅️ Previous image
* ➡️ Next image
* ⌨️ Keyboard navigation
* 📱 Mobile touch/swipe navigation
* 💻 Fully responsive design
* 🌙 Dark mode
* 🎨 Smooth animations and transitions
* 🔍 Image hover effects
* 📥 Image download option
* 🔔 Toast notifications
* ⬆️ Back-to-top button
* ⚡ Lazy-loaded images
* ♿ Accessibility-friendly controls

---

## 🛠️ Technologies Used

| Technology   | Purpose                       |
| ------------ | ----------------------------- |
| HTML5        | Website structure             |
| CSS3         | Styling and responsive design |
| JavaScript   | Website functionality         |
| LocalStorage | Favorites and theme storage   |
| Unsplash     | Demo photography              |
| Git & GitHub | Version control               |
| GitHub Pages | Website hosting               |

---

## 📂 Project Structure

```text
VistaLens/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🖼️ Gallery Categories

### 🌿 Nature

* Mountains
* Forests
* Waterfalls
* Lakes
* Oceans
* Sunsets
* Flowers
* Landscapes

### ✈️ Travel

* Beaches
* Islands
* Road Trips
* Adventure
* Snow Destinations
* Travel Locations
* European Streets
* Mountain Trips

### 🐾 Animals

* Lions
* Tigers
* Elephants
* Dogs
* Cats
* Horses
* Deer
* Birds
* Butterflies
* Pandas

### 🏙️ City

* New York
* Tokyo
* Dubai
* London
* Paris
* Singapore
* Hong Kong
* Mumbai
* Modern Architecture
* City Nights

### ☕ Lifestyle

* Coffee
* Workspace
* Reading
* Food
* Fashion
* Music
* Photography
* Fitness
* Creative Workspace
* Travel Lifestyle

---

## 🔎 Search and Filtering

VistaLens allows users to easily find photographs.

Users can:

1. Search for an image by name.
2. Select a photography category.
3. View matching images instantly.
4. Open any image in fullscreen mode.

No page refresh is required.

---

## ❤️ Favorites

Users can mark photographs as favorites using the heart button.

Favorites are stored using the browser's **LocalStorage**, so they remain available even after refreshing the website.

---

## 🔍 Fullscreen Image Viewer

Clicking an image opens a fullscreen viewer.

The viewer includes:

* 🖼️ Large image preview
* 📝 Image title
* 🗂️ Image category
* 🔢 Image counter
* ⬅️ Previous button
* ➡️ Next button
* ❤️ Favorite button
* 📥 Download button
* ❌ Close button

---

## ⌨️ Keyboard Controls

| Key   | Action             |
| ----- | ------------------ |
| `←`   | Previous image     |
| `→`   | Next image         |
| `Esc` | Close image viewer |

---

## 📱 Responsive Design

VistaLens is designed to work on:

* 💻 Desktop
* 🖥️ Laptop
* 📱 Mobile
* 📲 Tablet

The gallery automatically adjusts according to the screen size.

---

## 🌙 Dark Mode

VistaLens includes a modern dark mode.

Users can switch between:

* ☀️ Light Mode
* 🌙 Dark Mode

The selected theme is saved using LocalStorage.

---

## 🎨 Design

VistaLens uses a modern photography-inspired interface featuring:

* Cinematic hero section
* Large typography
* Professional navigation
* Rounded image cards
* Smooth hover effects
* Image overlays
* Modern buttons
* Smooth transitions
* Responsive layouts
* Dark mode
* Clean photography-focused design

---

## 🚀 How to Run

### Option 1 — Open Directly

Download or clone the repository and open:

```text
index.html
```

in your browser.

No backend or database is required.

### Option 2 — Using VS Code

1. Open the project folder in VS Code.
2. Open `index.html`.
3. Use the Live Server extension if desired.
4. Open the website in your browser.

---

## 📥 Installation

Clone the repository:

```bash
git clone https://github.com/joshnavikavuri36-wq/CodeAlpha_Image_Gallery.git
```

Open the project:

```bash
cd CodeAlpha_Image_Gallery
```

Then open:

```text
index.html
```

---

## 🖼️ Adding Your Own Images

You can replace the demo images with your own photographs.

Create an `images` folder:

```text
CodeAlpha_Image_Gallery/
│
├── images/
│   ├── nature-1.jpg
│   ├── nature-2.jpg
│   ├── travel-1.jpg
│   ├── animal-1.jpg
│   ├── city-1.jpg
│   └── lifestyle-1.jpg
│
├── index.html
├── style.css
├── script.js
└── README.md
```

Then update the image source in `index.html`:

```html
<img src="images/nature-1.jpg" alt="Mountain Landscape">
```

---

## 📸 Screenshots

Add screenshots of your project here after uploading them to GitHub.

Example:

```markdown
## Screenshots

### 🏠 Home Page

![VistaLens Home](screenshots/home.png)

### 🖼️ Gallery

![VistaLens Gallery](screenshots/gallery.png)

### 🔍 Fullscreen Viewer

![VistaLens Viewer](screenshots/viewer.png)

### 📱 Mobile View

![VistaLens Mobile](screenshots/mobile.png)
```

---

## ⚡ Performance

VistaLens uses:

* Lazy-loaded images
* CSS animations
* Efficient JavaScript
* Responsive layouts
* Minimal dependencies
* Efficient DOM manipulation

The project does not require a JavaScript framework or backend.

---

## ♿ Accessibility

The website includes:

* Semantic HTML
* Descriptive image alt attributes
* Keyboard navigation
* Accessible buttons
* Focus states
* Responsive typography
* Clear navigation

---

## 🌎 Browser Support

| Browser         | Support |
| --------------- | ------- |
| Google Chrome   | ✅       |
| Microsoft Edge  | ✅       |
| Mozilla Firefox | ✅       |
| Safari          | ✅       |
| Opera           | ✅       |
| Mobile Browsers | ✅       |

---

## 🚀 GitHub Pages Deployment

VistaLens can be hosted for free using GitHub Pages.

### Step 1

Open your GitHub repository.

### Step 2

Go to:

```text
Settings → Pages
```

### Step 3

Under **Build and deployment**, select:

```text
Source: Deploy from a branch
```

### Step 4

Select:

```text
Branch: main
Folder: / (root)
```

### Step 5

Click **Save**.

Your website URL will look like:

```text
https://joshnavikavuri36-wq.github.io/CodeAlpha_Image_Gallery/
```

---

## 🔮 Future Improvements

* [ ] User login and registration
* [ ] User profiles
* [ ] Upload photographs
* [ ] Cloud image storage
* [ ] Admin dashboard
* [ ] User-created collections
* [ ] Comments
* [ ] Social media sharing
* [ ] Advanced image search
* [ ] AI image tagging
* [ ] AI image descriptions
* [ ] Image compression
* [ ] Progressive Web App
* [ ] Offline support
* [ ] Backend database
* [ ] Photography contests

---

## 🧪 Testing Checklist

* [x] Navigation
* [x] Search
* [x] Category filtering
* [x] Image opening
* [x] Fullscreen viewer
* [x] Previous button
* [x] Next button
* [x] Close button
* [x] Keyboard navigation
* [x] Favorites
* [x] LocalStorage
* [x] Dark mode
* [x] Responsive design
* [x] Mobile navigation
* [x] Touch gestures
* [x] Back-to-top button
* [x] Image loading
* [ ] Add final screenshots
* [ ] Enable GitHub Pages
* [ ] Replace demo images with final photographs

---

## 📚 Learning Outcomes

Through this project, I practiced:

* HTML5
* CSS3
* JavaScript
* DOM Manipulation
* Event Handling
* CSS Grid
* Flexbox
* Responsive Web Design
* LocalStorage
* Search Functionality
* Category Filtering
* Lightbox Development
* Keyboard Events
* Touch Gestures
* CSS Animations
* UI/UX Design
* Git and GitHub
* GitHub Pages Deployment

---

## 👩‍💻 Developer

### Joshnavi

**B.Tech — Computer Science & Engineering (AI & Machine Learning)**

**Malla Reddy Deemed to be University**

### Interests

* 🤖 Artificial Intelligence
* 🧠 Machine Learning
* 💻 Web Development
* 🐍 Python
* ☕ Java
* ⚙️ Software Development
* 🎨 UI/UX Design

---

## 🤝 Contributing

Contributions and suggestions are welcome.

Create a new branch:

```bash
git checkout -b feature/new-feature
```

Make your changes:

```bash
git add .
```

Commit your changes:

```bash
git commit -m "Add new feature"
```

Push your branch:

```bash
git push origin feature/new-feature
```

Then create a Pull Request on GitHub.

---

## 📄 License

This project is created for **educational and portfolio purposes**.

If you replace the demo images with your own images, make sure you have the necessary rights or licenses to use them.

---

## ⭐ Support

If you like VistaLens, consider giving the repository a ⭐ on GitHub.

Your feedback and suggestions are welcome!

---

<div align="center">

# 📸 VistaLens

### See the world differently.

**Built with ❤️ using HTML • CSS • JavaScript**

⭐ **Star this repository if you like the project!**

</div>
