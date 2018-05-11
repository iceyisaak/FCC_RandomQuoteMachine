$(document).ready(function(){

  function getQuote(){
    var quotes = [
      'Quote 1',
      'Quote 2',
      'Quote 3',
      'Quote 4',
      'Quote 5',
      'Quote 6',
      'Quote 7',
      'Quote 8',
      'Quote 9',
      'Quote 10'
    ];
    
    var author = [
      'Author A',
      'Author B',
      'Author C',
      'Author D',
      'Author E',
      'Author F',
      'Author G',
      'Author H',
      'Author I',
      'Author J'
    ];
    
    var randomNum = Math.floor((Math.random()*quotes.length));
    var randomQuote = quotes[randomNum]; 
    var randomAuthor = author[randomNum];
    
    $('.quote').text(randomQuote);
    $('.author').text(randomAuthor);
  }
  
  $('.q-btn').on('click', function(){
    getQuote();
    }); 
  });