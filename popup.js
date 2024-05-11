// In popup.js

// Function to handle click event on extension icon
function handleClick() {
    // Send message to background script to fetch recommendations
    chrome.runtime.sendMessage({ action: "fetchRecommendations" }, function(response) {
      // Update recommendations list with recommendations received from background script
      updateRecommendationsList(response.recommendations);
    });
  }
  
  // Function to update recommendations list with fetched recommendations
  function updateRecommendationsList(recommendations) {
    var recommendationsList = document.getElementById("recommendationsList");
    recommendationsList.innerHTML = ""; // Clear previous recommendations
    
    // Iterate over fetched recommendations and add them as list items
    recommendations.forEach(function(recommendation) {
      var listItem = document.createElement("li");
      listItem.textContent = recommendation.title + " - " + recommendation.genre;
      recommendationsList.appendChild(listItem);
    });
  }
  
  // Add event listener to extension icon
  document.addEventListener("DOMContentLoaded", function () {
    // Get extension icon element
    var icon = document.getElementById("extensionIcon");
  
    // Add click event listener to icon
    icon.addEventListener("click", handleClick);
  });
  