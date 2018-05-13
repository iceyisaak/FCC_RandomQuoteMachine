$(document).ready(function(){

 //Declare Global Variables for RandomQuote, RandomNum, RandomAuthor;
  var randomQuote;
  var randomNum;
  var randomAuthor;
  
  //GetQuote Function
  function getQuote(){

    //All the Quotes to be displayed;
     var quotes =  [
      'The secret of change is not fighting the old, but focus on building the new',
      'Whether you think you can or you can\'t, either way you are right.' ,
      'Aim for the moon, if you miss you will land will hit a star.',
      'What we think, we become.',
      'A person is limited only by thoughts that he chooses.',
      'I attract into my life whatever I give my attention, energy, and focus to whether negative or positive.',
      'The best revenge is a massive success.',
      'Money doesn\'t talk, it swears.' ,
      'If you correct your mind, the rest of your life will fall into place.',
      'Take the first step in faith. You don\'t have to see the whole staircase, just take the first step.'
    ];
    
    //All the Authors corresponding to the Quotes to be displayed;
    var author = [
      'Socrates',
      'Henry Ford',
      'William Clement Stone',
      'Buddha',
      'James Allen',
      'Michael Losier',
      'Frank Sinatra',
      'Bob Dylan',
      'Lao Tzu',
      'Dr. Martin Luther King Jr.'
    ];
  
    //Generating Random Number;
    randomNum = Math.floor((Math.random()*quotes.length));
    randomQuote = quotes[randomNum]; 
    randomAuthor = author[randomNum];
    
    //Show Randomly picked quote and its author;
    $('.quote').text(randomQuote);
    $('.author').text(randomAuthor);
  
  };
  
//Show Quote on first load;  
$(function(){
  getQuote();
});  
  
//Tweet Quote Button;  
  $('.t-btn').on('click', function(){
    window.open('https://twitter.com/intent/tweet?text=' + '\'' + randomQuote + '\'' + ' - ' + randomAuthor);
    });
  
//Next Quote Button;  
  $('.q-btn').on('click', function(){
    getQuote();
    }); 
  
  });