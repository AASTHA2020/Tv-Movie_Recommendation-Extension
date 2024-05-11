// Example content script code

// Function to extract relevant information from the page
function extractInformation() {
    // Example: Extract movie/TV show title
    const titleElement = document.querySelector('h1.title'); // Replace 'h1.title' with the selector for the title element on the page
    const title = titleElement ? titleElement.textContent.trim() : '';
  
    // Example: Extract movie/TV show genre
    const genreElement = document.querySelector('.genre'); // Replace '.genre' with the selector for the genre element on the page
    const genre = genreElement ? genreElement.textContent.trim() : '';
  
    // Example: Extract movie/TV show description
    const descriptionElement = document.querySelector('.description'); // Replace '.description' with the selector for the description element on the page
    const description = descriptionElement ? descriptionElement.textContent.trim() : '';
  
    // Example: Extract movie/TV show rating
    const ratingElement = document.querySelector('.rating'); // Replace '.rating' with the selector for the rating element on the page
    const rating = ratingElement ? ratingElement.textContent.trim() : '';
  
    // Return the extracted information as an object
    return {
      title,
      genre,
      description,
      rating
    };
  }
  
  // Main function to execute when the content script is injected into the page
  function main() {
    // Extract relevant information from the page
    const pageInformation = extractInformation();
  
    // Send the extracted information to the extension's background script for processing
    chrome.runtime.sendMessage({ action: "extractInformation", data: pageInformation });
  }
  
  // Execute the main function when the content script is loaded
  main();
  