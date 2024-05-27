
async function dragAndDrop() {
  const data = await fetchData(); // Fetch the data asynchronously
  displayItems(data); // Display the fetched items on the page
  enableDragAndDrop(); // Enable drag-and-drop functionality
}

async function fetchData() {
  const url = "http://localhost:3000/data"; // URL to fetch the data from
  const response = await fetch(url); // Fetch the data from the server
  const data = await response.json(); // Parse the response as JSON
  console.log(data); // Log the fetched data to the console for debugging
  return data; // Return the parsed data
}

function displayItems(data) {
  const fruits = data.items.fruits; // Extract fruits from the data
  const vegetables = data.items.vegetables; // Extract vegetables from the data
  const fruitsAndVegies = fruits.concat(vegetables); // Combine fruits and vegetables into one array
  const list = document.getElementById("unsorted-list"); // Get the unsorted list element from the DOM

  // Iterate over each item in the combined array
  fruitsAndVegies.forEach((e) => {
    const item = document.createElement("li"); // Create a new list item element
    item.innerHTML = e.name; // Set the inner HTML of the list item to the name of the item
    item.setAttribute("draggable", "true");
    item.setAttribute("data-category", e.category); // Tag with category
    list.appendChild(item); // Append the new list item to the list
  });
}
// Function to enable drag-and-drop functionality
function enableDragAndDrop() {
  // Select all list items within the unsorted-list container
  const items = document.querySelectorAll("#unsorted-list li");

  // Get references to the drop zones for fruits and vegetables
  const fruitZone = document.getElementById("fruit-zone");
  const vegZone = document.getElementById("veg-zone");

  // Add dragstart event listeners to each list item
  items.forEach(item => {
    item.addEventListener("dragstart", handleDragStart);
  });

  // Add dragover and drop event listeners to each drop zone
  [fruitZone, vegZone].forEach(zone => {
    zone.addEventListener("dragover", handleDragOver);
    zone.addEventListener("drop", handleDrop);
  });
}

// Function to handle drag start event
function handleDragStart(event) {
  // Set the dragged item's name and category as data
  event.dataTransfer.setData("text/plain", event.target.innerHTML);
  event.dataTransfer.setData("category", event.target.getAttribute("data-category"));
}

// Function to handle drag over event
function handleDragOver(event) {
  event.preventDefault(); // Prevent default behavior
}

// Function to handle drop event
function handleDrop(event) {
  event.preventDefault(); // Prevent default behavior

  // Get the name and category of the dropped item
  const droppedItemName = event.dataTransfer.getData("text/plain");
  const droppedItemCategory = event.dataTransfer.getData("category");

  // Determine the category of the target drop zone (fruit or vegetable)
  const targetZoneCategory = event.target.id.includes("fruit") ? "Fruit" : "Vegetable";

  // Check if the dropped item's category matches the target zone's category
  if (droppedItemCategory === targetZoneCategory) {
    // Create a new list item with the dropped item's name and append it to the target drop zone
    const listItem = document.createElement("li");
    listItem.textContent = droppedItemName;
    event.target.appendChild(listItem);
  }
}


// Call the dragAndDrop function when the window loads to initiate the process
window.onload = dragAndDrop;
