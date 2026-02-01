# 🚀 LeetMetric – LeetCode Stats Finder

LeetMetric is a web-based application that allows users to fetch and visualize their **LeetCode problem-solving statistics** by entering a valid LeetCode username.
It displays solved problems by difficulty level using **interactive progress visuals**.

🔗 **Live Demo:**
[https://janvibehal.github.io/LeetCode-stats-finder/](https://janvibehal.github.io/LeetCode-stats-finder/)

---

## ✨ Features

* 🔍 Search LeetCode user by username
* 📊 Displays solved problems for:

  * Easy
  * Medium
  * Hard
* 🟢 Visual progress representation using dynamic circular charts
* ⌨️ Supports **Enter key** for search
* ❌ Graceful handling of invalid / non-existent users
* 🌐 Fully hosted using **GitHub Pages**

---

## 🛠️ Tech Stack

* **HTML5** – Structure
* **CSS3** – Styling & circular progress visuals
* **JavaScript (ES6)** – Logic & API handling
* **Git & GitHub** – Version control & hosting

---

## 📦 API Used

* LeetCode Stats API

  ```
  https://leetcode-stats-api.herokuapp.com/{username}
  ```

> ⚠️ Note: This is a third-party API and may occasionally face CORS or availability issues on hosted environments.

---

## 🧑‍💻 How It Works

1. User enters a LeetCode username
2. App fetches stats from the API
3. Solved problems are calculated as percentages
4. Progress circles update dynamically
5. If the user is not found, stats are hidden and an error message is shown

---

## 🚀 Getting Started (Run Locally)

1. Clone the repository

   ```bash
   git clone https://github.com/janvibehal/LeetCode-stats-finder.git
   ```
2. Open `index.html` in your browser
3. Enter a LeetCode username and search

---

## 🌍 Deployment

The project is deployed using **GitHub Pages**.

Every push to the `main` branch automatically redeploys the site.

---

## 📸 Preview

> Enter a username → View solved problem stats → Visual progress display

---

## 🔮 Future Improvements

* Add loading animations
* Show total solved problems & acceptance rate
* Add dark/light mode toggle
* Improve API reliability using a backend proxy

---

## 👩‍💻 Author

**Janvi Behal**
Computer Science Engineering Student
Frontend & UI/UX Enthusiast

* GitHub: [https://github.com/janvibehal](https://github.com/janvibehal)

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!

Just tell me 👍
