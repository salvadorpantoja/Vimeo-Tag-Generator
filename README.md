# Vimeo Tag Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://salvadorpantoja.dev/vimeoTagMaker/)

A browser-based tool that enforces strict metadata naming conventions by programmatically generating tags. It replaces an error-prone manual process with a standardized UI, ensuring 100% syntax compliance for video uploads.

## 🚀 Live Demo
**[View Live Project Here](https://salvadorpantoja.dev/vimeoTagMaker/)**

## 💡 The Problem
Our team was issued a complex manual on how to tag videos for analytics (e.g., specific syntax for tags and required fields.

Attempting to recreate this syntax manually for every upload resulted in:
1.  **Human Error:** Typos and incorrect variable ordering broke search functionality.
2.  **High Cognitive Load:** Users had to memorize arbitrary formatting rules.
3.  **Inconsistent Data:** Minor variations in tagging made library management difficult.

## 🛠 The Solution
I built this application to abstract away the syntax rules. Users simply select options and input raw data, and the application creates the required string structure in the background.

**Key Features:**
*   **Logic Abstraction:** Users interact with simple form fields; the app handles the complex concatenation logic.
*   **Standardized Output:** Ensures every video is tagged with the exact same format, regardless of who uploads it.
*   **Clipboard Integration:** One-click copying prevents transcription errors.
*   **Immediate Feedback:** Visualizes the final tag structure before submission.

## 💻 Tech Stack
*   **HTML5 / CSS3:** Semantic markup and responsive layout.
*   **JavaScript (ES6+):** DOM manipulation and string interpolation logic.

## 🔧 Usage
1.  Select the required **Category** and **Project Type** from the dropdowns.
2.  Input the variable data (Reference IDs, categories, etc.).
3.  Click **Generate Tags**.
4.  The app constructs the final string based on internal syntax rules.
5.  Click **Copy** to use in Vimeo.

## 📂 Project Structure
```text
/
├── index.html       # UI and Input Fields
├── styles.css       # Custom styling 
├── script.js        # Syntax generation logic
└── README.md        # Documentation