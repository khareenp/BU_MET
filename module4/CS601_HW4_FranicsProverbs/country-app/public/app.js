"use strict";
// Class for Rainy Country implementing ICountry
class RainCountry {
    // Constructor to initialize name and rainLevel
    constructor(name, rainLevel) {
        this.name = name;
        this.rainLevel = rainLevel;
    }
    // Method to return country info as a table and text
    getInfo(element) {
        element.innerHTML = `
            <table class="project-table">
                <tr><td>Country</td><td>${this.name}</td></tr>
                <tr><td>Rain Level</td><td>${this.rainLevel} inches</td></tr>
            </table>
            <div class="project-text">${this.name} has a rain level of ${this.rainLevel} inches.</div>
        `;
        return element;
    }
}
// Class for Snowy Country implementing ICountry
class SnowyCountry {
    // Constructor to initialize name and snowLevel
    constructor(name, snowLevel) {
        this.name = name;
        this.snowLevel = snowLevel;
    }
    // Method to return country info as a table and text
    getInfo(element) {
        element.innerHTML = `
            <table class="project-table">
                <tr><td>Country</td><td>${this.name}</td></tr>
                <tr><td>Snow Level</td><td>${this.snowLevel} inches</td></tr>
            </table>
            <div class="project-text">${this.name} has a snow level of ${this.snowLevel} inches.</div>
        `;
        return element;
    }
}
// Class for Island Country implementing ICountry
class IslandCountry {
    // Constructor to initialize name and landSize
    constructor(name, landSize) {
        this.name = name;
        this.landSize = landSize;
    }
    // Method to return country info as a table and text
    getInfo(element) {
        element.innerHTML = `
            <table class="project-table">
                <tr><td>Country</td><td>${this.name}</td></tr>
                <tr><td>Land Size</td><td>${this.landSize} sq km</td></tr>
            </table>
            <div class="project-text">${this.name} has a land size of ${this.landSize} square kilometers.</div>
        `;
        return element;
    }
}
// Sample data array of various country objects
const countries = [
    new RainCountry("United States", 28),
    new SnowyCountry("Norway", 20),
    new RainCountry("Brazil", 40),
    new IslandCountry("Japan", 145937),
    new SnowyCountry("Sweden", 30),
    new IslandCountry("Australia", 2968464)
];
// List to store snowy countries
const snowyCountriesList = [];
// Function to filter snowy countries
function filterSnowyCountry(country) {
    // Check if the country has a snowLevel property
    if (country.snowLevel !== undefined) {
        return country;
    }
    return null;
}
// Build the snowyCountriesList by filtering snowy countries
countries.forEach(country => {
    const snowyCountry = filterSnowyCountry(country);
    if (snowyCountry) {
        snowyCountriesList.push(snowyCountry);
    }
});
// Function to render country information
function renderCountries() {
    // Get the container elements for all countries and snowy countries
    const allCountriesDiv = document.querySelector('#all-countries .grid');
    const snowyCountriesDiv = document.querySelector('#snowy-countries .grid');
    if (allCountriesDiv && snowyCountriesDiv) {
        // Render all countries
        countries.forEach(country => {
            const countryElement = document.createElement('div');
            countryElement.className = 'project';
            allCountriesDiv.appendChild(country.getInfo(countryElement));
        });
        // Render snowy countries and calculate total snow level
        let totalSnowLevel = 0;
        snowyCountriesList.forEach(country => {
            const countryElement = document.createElement('div');
            countryElement.className = 'project';
            snowyCountriesDiv.appendChild(country.getInfo(countryElement));
            totalSnowLevel += country.snowLevel;
        });
        // Display total snow level
        const totalSnowLevelElement = document.createElement('div');
        totalSnowLevelElement.className = 'project-text';
        totalSnowLevelElement.innerHTML = `Total Snow Level: ${totalSnowLevel} inches.`;
        snowyCountriesDiv.appendChild(totalSnowLevelElement);
    }
}
// Call the render function to display the countries on page load
renderCountries();
