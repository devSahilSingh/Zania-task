# Task App

## Requirements
- Node.js
- npm

## Installation
1. Clone the repository.
2. Run `npm install` to install the dependencies.

## Running the Application
1. Run `npm start` to start the development server.
2. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Overview

This project is a task management application that demonstrates data persistence, REST API integration, and responsive UI design. The application allows users to manage tasks with images, ensuring data permanence across reloads and providing real-time feedback on data saving and image loading.

## Features
- Displays a grid of cards from a browser storage using msw fetch.
- Cards can be reordered via drag and drop.
- Placeholder spinner for each image in card until image is loaded.
- Click on a card to view its image in an overlay.
- Uses MSW to mock a server and store data in local storage.
- Automatically saves changes every 5 seconds when reorder.
