// Retrieve the learning list from local storage or create an empty array
let learningList = JSON.parse(localStorage.getItem("learningList")) || [];

// Function to display the learning list
function displayLearning() {
    const learningListElement = document.getElementById("learning-list");
    // Clear any existing list items
    learningListElement.innerHTML = "";
    // Add a list item for each learning item in the list
    learningList.forEach((learningItem) => {
        const li = document.createElement("li");
        li.innerText = learningItem;
        learningListElement.appendChild(li);
    });
}

// Function to save a learning item to the list
function saveLearning() {
    const learningInput = document.getElementById("learning");
    const learningValue = learningInput.value.trim();
    if (learningValue !== "") {
        // Add the learning item to the list and save to local storage
        learningList.push(learningValue);
        localStorage.setItem("learningList", JSON.stringify(learningList));
        // Clear the input field and update the display
        learningInput.value = "";
        displayLearning();
    }
}

// Call the displayLearning
