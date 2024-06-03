# Country Management System

This project is a simple Country Management System application built with TypeScript. The goal is to manage information about various countries around the world, focusing on filtering and displaying snowy countries. This application demonstrates the use of interfaces,

# Country Management System

This is a simple Country Management System application built with TypeScript. It manages information about various countries and filters out snowy countries to display them separately.

## Features

- Defines an interface for Country objects.
- Implements three types of countries: RainyCountry, SnowyCountry, and IslandCountry.
- Filters and displays snowy countries separately.

## Getting Started

Follow these steps to set up and run the project:

### Prerequisites

- Node.js installed on your machine.

### Installation

1. cd country-app
2. npm install
3. npx tsc

## Project Structure

- **app.ts**: Contains the TypeScript code defining the Country interface and classes, filtering logic, and rendering functions.
- **public/index.html**: The main HTML file.
- **public/styles.css**: The CSS file for styling the application.

## How It Works

1. The application defines an `ICountry` interface and three classes: `RainCountry`, `SnowyCountry`, and `IslandCountry`.
2. Each class implements the `ICountry` interface and provides specific properties and methods.
3. A list of various country objects is created.
4. The application filters out snowy countries and displays them separately.
5. The filtered results and the total snow level are rendered to the DOM.


## CSS Explanation

The `styles.css` file includes the following styles:

- **Global Styles**:
  - Resets margins, paddings, and box-sizing for all elements to ensure consistent styling across browsers.
  - Sets global styles for the `body` element, including font family, background color, text color, line height, and padding.

- **Header Styles**:
  - Styles the main header (`h1`) to be centered with a dark blue color and margin at the bottom.

- **Container Styles**:
  - Styles the country containers (`.country-container`) with bottom margins.
  - Styles the headers within the containers (`h2`) to be centered with a dark blue color and margin at the bottom.

- **Grid Styles**:
  - Sets up a flexible grid layout (`.grid`) to display country cards, allowing wrapping and space around the items.

- **Project Card Styles**:
  - Styles the project cards (`.project`) with a white background, light border, border radius, box shadow, margin, width, overflow handling, and flex direction set to column.
  - Ensures images within the project cards (`.project img`) fit and cover the available space without distortion.

- **Table Styles**:
  - Styles the tables within the project cards (`.project-table`) to be fully collapsed, have blue borders, and margins at the top.
  - Ensures table cells (`.project-table td`) have padding and blue borders.

- **Text Styles**:
  - Styles the project text sections (`.project-text`) with padding, light background, top border, and dark blue text color.


This simplified README provides essential information about the project, including setup instructions, a brief overview of the project structure, and a high-level explanation of how the application works.



