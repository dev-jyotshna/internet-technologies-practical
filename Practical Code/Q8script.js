$(document).ready(function() {
    // Event listener for the style button
    $('#styleButton').click(function() {
      // Redesign the complete page using jQuery
      $('body').css({
        'background-color': '#f5f5f5',
        'color': '#333'
      });
  
      $('h1').css({
        'color': '#4caf50',
        'border-bottom': '2px solid #4caf50',
        'padding-bottom': '10px'
      });
  
      $('section').css({
        'background-color': '#fff',
        'border': '1px solid #ddd',
        'border-radius': '8px',
        'padding': '20px',
        'margin-bottom': '20px'
      });
  
      $('button').css({
        'background-color': '#333',
        'color': '#fff',
        'margin-top': '20px'
      });
    });
  });
  