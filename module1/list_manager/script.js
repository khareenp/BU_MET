
const listManager = closure();

// A "closure" where its local variables 
// remain persistent even after it's been invoked
// These local variables do not permeate the global space
function closure() {
    const input = document.getElementById('new-item');
    const submitOutput = document.getElementById('submit-output');
    const errorMessages = document.getElementById('error-messages');
    const btnAdd = document.getElementById('btn-add');

    // Function to check if item is alphanumeric
    // Return a boolean (true/false)
    function isValidItem(item) {
        // Check for lengths
        if (item.length < 3 || item.length > 10) {
            return false;
        }

        // check for alphanumeric
        return isAlphanumeric(item);

    }

    // Validating item using regex
    function isAlphanumeric(item) {
        return /^[a-z0-9]+$/i.test(item);
    }

    // Function to add items to the list
    const addItem = function () {
        errorMessages.textContent = '';  // Clear all previous error messages
        const item = input.value.trim();  // remove leading and trailing white spaces

        // If item is not blank or null
        if (item) {

            // If item is NOT alphanumeric or NOT between 3-10 characters
            if (!isValidItem(item)) {
                errorMessages.textContent = "Invalid item. Must be 3-10 characters and alphanumeric.";
                return;  //Stop here
            }

            // Validation passed - proceed
            const list = document.getElementById('item-list');
            const listItem = document.createElement('li');      // <li></li>
            listItem.textContent = input.value;                 // e.g. <li>apple</li>

            // Let's add a Remove button to each item
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';

            // Register a 'click' event to remove the "selected" item
            removeButton.addEventListener('click', function() {
                list.removeChild(listItem);
            });

            // Add the removeButton to the listItem
            listItem.appendChild(removeButton);

            // Add the listItem to the DOM
            list.appendChild(listItem);
            input.value = ""; // Clear input after adding

        } else {
            errorMessages.textContent = "Please enter an item."
        }

    }

    // High order function to process the list
    function processList(callback) {
        const items = [];
        const listItems = document.querySelectorAll("#item-list li");

        // foreEach is a "high-order" function
        listItems.forEach((item) => {
            //items.push(item.textContent);
            items.push(item.textContent.replace("Remove", "").trim());
        });
        callback(items);
    }

    const submitList = function () {

        // Passing an anonymous function as a "callback" function
        // to be invoked within the processList function
        processList(function (items) {
            if (items.length > 0) {
                submitOutput.textContent = 'Submitted items: ' + items.join(', ');
                document.getElementById("item-list").innerHTML = ""; // Clear list after submission
            } else {
                submitOutput.textContent = "Please add items to the list before submitting.";
            }
        });
    }

    // addEventListener is a "high-order" function
    // addItem is a "callback" function
    btnAdd.addEventListener('click', addItem);   //register event to dom element

    // btnAdd.addEventListener('click',submtList);   
    // btnAdd.onclick = addItem;

    return {submitList}
};