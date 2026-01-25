# Vimeo Tag Formatter

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://salvadorpantoja.dev/vimeoTagMaker/)

A browser-based utility designed to automate metadata formatting for video upload workflows. This tool eliminates manual data entry errors by converting list-based inputs into Vimeo-compliant, comma-separated tag strings.

## 🚀 Live Demo
**[View Live Project Here](https://salvadorpantoja.dev/vimeoTagMaker/)**

## 💡 The Problem
Video platforms like Vimeo require tags to be comma-separated strings (e.g., `tag1, tag2, tag3`). However, most internal content calendars and project management tools provide metadata in vertical lists or excel columns.

Manually reformatting these tags for hundreds of videos is:
1.  **Time-consuming:** Copy-pasting individual lines takes hours.
2.  **Error-prone:** It is easy to miss a comma or exceed character limits.
3.  **Inconsistent:** Different team members format metadata differently.

## 🛠 The Solution
I built this tool to act as a "middleware" between project management software and the Vimeo upload interface.

**Key Features:**
*   **Instant Formatting:** Converts new-line separated lists into API-ready comma-separated strings.
*   **Smart Validation:** Automatically checks for Vimeo's specific constraints (character limits per batch).
*   **Standardized Categories:** Dropdown selection ensures category metadata matches the official video taxonomy.
*   **One-Click Copy:** Streamlines the user workflow with clipboard integration.

## 💻 Tech Stack
*   **HTML5 / CSS3:** Semantic markup and responsive layout.
*   **JavaScript (ES6+):** Logic for string manipulation, character counting, and DOM interaction.

## 🔧 Usage
1.  Select the **Video Category** from the dropdown.
2.  Paste your list of tags (from Excel, Trello, email, etc.) into the input area.
3.  Enter the **Project Reference ID** (optional).
4.  Click **Generate Tags**.
5.  Use the **Copy** button to grab the formatted string for Vimeo.

## 📂 Project Structure
```text
/
├── index.html       # Main application structure
├── styles.css       # Custom styling 
├── script.js        # Logic for parsing and formatting
└── README.md        # Documentation