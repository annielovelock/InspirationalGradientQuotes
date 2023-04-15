// Get a reference to the container element
const container = document.querySelector('.container');

// Define an array of image filenames
const images = [
"1.png",
"2.png",
"3.png",
"4.png",
"6.png",
"7.png",
"8.png",
"9.png",
"10.png",
"11.png",
"12.png",
"13.png",
"14.png",
"15.png",
"16.png",
  // add more image filenames as needed
];

// Define an array of quotes with attributed names
const quotes = [
  {quote: "The world is changed by your example, not by your opinion.", author: "Paulo Coelho"},
  {quote: "The only way of discovering the limits of the possible is to venture a little way past them into the impossible.", author: "Arthur C. Clarke"},
  {quote: "The most common way people give up their power is by thinking they don't have any.", author: "Alice Walker"},
{quote: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt"},
{quote: "The only way to do great work is to love what you do.", author: "Steve Jobs"},
{quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill"},
{quote: "The best way to predict the future is to create it.", author: "Alan Kay"},
{quote: "The world is full of magical things patiently waiting for our wits to grow sharper.", author: "Bertrand Russell"},
{quote: "The only courage that matters is the kind that gets you from one moment to the next.", author: "Mignon McLaughlin"},
{quote: "The only thing that overcomes hard luck is hard work.", author: "Harry Golden"},
{quote: "The only limit to your impact is your imagination and commitment.", author: "Tony Robbins"},
{quote: "The only thing worse than starting something and failing... is not starting something.", author: "Seth Godin"},
{quote: "The only true wisdom is in knowing you know nothing.", author: "Socrates"},
{quote: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.", author: "Alan Watts"},
{quote: "The secret of getting ahead is getting started.", author: "Mark Twain"},
{quote: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb"},
{quote: "Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE.", author: "Joss Whedon"},
{quote: "Do one thing every day that scares you.", author: "Eleanor Roosevelt"},
{quote: "Whatever you are, be a good one.", author: "Abraham Lincoln"},
{quote: "Your passion is waiting for your courage to catch up.", author: "Isabelle Lafleche"},
{quote: "Perfection is not attainable, but if we chase perfection we can catch excellence.", author: "Vince Lombardi"},
{quote: "Someone is sitting in the shade today because someone planted a tree a long time ago.", author: "Warren Buffett"}

  // add more quotes as needed
];

// Preload the images and call the callback function when done
function preloadImages(callback) {
  let loadedImages = 0;
  const totalImages = images.length;
  
  images.forEach((image) => {
    const img = new Image();
    img.onload = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        callback();
      }
    };
    img.src = `images/${image}`;
  });
}

// Set the background image of the container element to the random image
function setBackground() {
  const randomImage = images[Math.floor(Math.random() * images.length)];
  container.style.backgroundImage = `url(images/${randomImage})`;
  container.classList.add('loaded');
}

// Preload the images and set the background image when done
preloadImages(setBackground);

// Show a random quote with attribution in the container
const quoteObj = quotes[Math.floor(Math.random() * quotes.length)];
const text = document.querySelector('.container p');
text.innerHTML = `${quoteObj.quote}<br><span class="names">${quoteObj.author}</span>`;

// Show the text when the container has finished loading
container.addEventListener('transitionend', () => {
  const text = document.querySelector('.container p');
  text.classList.add('loaded');
});
