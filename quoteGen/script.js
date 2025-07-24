// variables
let quote=document.querySelector("p");
let button=document.querySelector("button");
// 20 quotations in array
let quotations = [
    "Good things take time",
    "Practice makes a man perfect",
    "The only way to do great work is to love what you do",
    "Success is not final, failure is not fatal: it is the courage to continue that counts",
    "Don't watch the clock; do what it does. Keep going",
    "Believe you can and you're halfway there",
    "Your time is limited, so don’t waste it living someone else’s life",
    "Dream big and dare to fail",
    "Hardships often prepare ordinary people for an extraordinary destiny",
    "Do something today that your future self will thank you for",
    "Opportunities don't happen. You create them",
    "Success usually comes to those who are too busy to be looking for it",
    "It does not matter how slowly you go as long as you do not stop",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart",
    "The future depends on what you do today",
    "The harder you work for something, the greater you'll feel when you achieve it",
    "Push yourself, because no one else is going to do it for you",
    "Great things never come from comfort zones",
    "Work hard in silence, let your success be your noise",
    "Stay positive, work hard, make it happen"
];




// logic
const generateQuote=()=>{
    let randomNumber = Math.floor(Math.random() * 20);
    quote.innerHTML=quotations[randomNumber];
}




// event listeners
button.addEventListener("click",generateQuote);