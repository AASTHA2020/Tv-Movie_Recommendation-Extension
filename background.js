// In background.js

// Listen for messages sent from popup.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    // Check message action
    if (message.action === "fetchRecommendations") {
      // Perform logic to fetch recommendations
      var recommendations = fetchRecommendations();
  
      // Send recommendations back to popup.js
      sendResponse({ recommendations: recommendations });
    }
  });


  // Function to fetch recommendations from TMDb API
async function fetchRecommendations() {
    try {
      // Make a GET request to fetch trending movies from TMDb API
      const response = await fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=YOUR_API_KEY");
      const data = await response.json();
  
      // Extract relevant information from the response
      const recommendations = data.results.map(movie => {
        return {
          title: movie.title,
          genre: "Unknown", // TMDb does not provide genre information in this endpoint
        };
      });
  
      return recommendations;
    } catch (error) {
      console.error("Error fetching recommendations:", error);
      return [];
    }
  }
  