# Foss Mec Landing Page

[![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)](https://angular.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

This repository contains the source code for the official landing page of **Foss Mec**, built with Angular and styled with Tailwind CSS. It providing information about its activities, members, events, and blog posts.

---

## ✨ Features

*   **Single Page Application (SPA):** Seamless navigation between sections using Angular Router.
    *   `/about`: Information about Foss Mec.
    *   `/gallery`: Showcases images from past events and activities.
    *   `/events`: Lists upcoming and past events.
    *   `/blog`: Features articles and posts from Foss Mec members.
    *   A main landing page with all these components.
*   **Dynamic Content:** Event, Gallery, and Blog sections load their content dynamically from local JSON files, making updates easy without code changes.
*   **Detailed Views:** Clicking on an event or blog post navigates to a dedicated page with more details.
*   **Responsive Design:** Built with Tailwind CSS for optimal viewing on all devices.

---

## 🛠️ Tech Stack

*   **Framework:** [Angular](https://angular.io/) (^19.2.0)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (^4.1.3)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Package Manager:** [npm](https://www.npmjs.com/)

---

## Running Locally

**Prerequisites:**

*   [Node.js](https://nodejs.org/)  installed on your system. 
    *   Verify installation: `node -v` and `npm -v`

**Installation & Setup:**

1.  **Clone and Navigate to the repository:**
    ```bash
    git clone https://github.com/dijith-481/foss-web.git && cd fossmec-web
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    ng serve  # use --host 0.0.0.0 for exposing to local network
    ```

4.  **Open in browser:**
    Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

---

## 📦 Build for Production

To create a production-ready build of the application:
This  compiles the application with optimizations and outputs the static files to the `dist/fossmec-landing/browser` directory.These files can then be deployed to any static web hosting service.currently hosted on [render.com](https://render.com/)
```bash
ng build
```
> [!WARNING]
>  you should redirect all paths to  `/` since routing is handled internally by angular.
---

## 🏗️ Project Structure & Data Formats

The dynamic content for sections is managed through JSON files, located within the `Public` directory.
Images is stored in `Public/[section]` directory.

### Blog Data (`blogs.json`)

Blog posts are defined in `blogs.json`. Clicking a blog card navigates to a detailed view.

**Format:**

```json
[
  {
    "id": number, // Unique identifier for routing
    "blogTitle": string, // Main title of the blog post
    "subtitle": string, // A short subtitle or tagline
    "author": string, // Name of the author
    "dateTime": string, // ISO 8601 format timestamp (e.g., "YYYY-MM-DDTHH:mm:ssZ")
    "imageUrl": string, // Relative path to the blog post's cover image (e.g., "blog/image.jpg")
    "description": string // The full content of the blog post (\n seperated lines)
  }
]
```

### Events Data (`events.json`)

Event listings are defined in `events.json`. Clicking an event card navigates to a detailed view. Includes optional fields for a call-to-action button (e.g., registration).

**Format:**

```json
[
  {
    "id": number, // Unique identifier for routing
    "eventTitle": string, // Title of the event
    "imageUrl": string, // Relative path to the event's image (e.g., "events/event.png")
    "buttonUrl": string | null, // Optional: URL for the button
    "buttonContent": string | null, // Optional: Text content for the button (e.g., "Register Now")
    "description": string // Detailed description of the event
  }
]
```

### Gallery Data (`gallery.json`)

Image gallery items are defined in `gallery.json`.

**Format:**

```json
[
  {
    "id": number, // Unique identifier
    "imageTitle": string, // Title or caption for the image
    "imageUrl": string // Relative path to the gallery image (e.g., "/gallery/image.png")
  }
]
```
### Core Members Data (`coreteam.json`)

Details about the core team members.

**Format:**

```json
[
  {
    "id": number, // Unique identifier
    "name": string, // Member's full name
    "position": string, // Member's position/role in the club
    "imageUrl": string // Relative path to the member's photo (e.g., "members/member.jpg")
  }
]
```
---

## ⚠️ Important Note on Content

Please be aware that the content (text, images, specific event/blog details) currently present in the JSON files and displayed on the page when run locally or potentially on a demo deployment might be **placeholder data which have been generated by AI**.

**This placeholder content should be replaced with actual, accurate information pertaining to Foss Mec before final deployment.**
