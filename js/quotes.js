const quotes = [
    {
        quote: "Start writing, no matter what. The water does not flow until the faucet is turned on.",
        author: "Louis L’Amour"
    },
    {
        quote: "Get it down. Take chances. It may be bad, but it's the only way you can do anything really good.", 
        author:"Jeong Siwook"
    },
    {
        quote: "The first draft is just you telling yourself the story.",
        author: "Terry Pratchett"
    },
    {
        quote: "You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it.",
        author: "Octavia E. Butler"
    },
    {
        quote: "Start before you’re ready.",
        author: "Steven Pressfield"
    },
    {
        quote: "You can always edit a bad page. You can’t edit a blank page",
        author: "Jodi Picoult"
    },
    {
        quote: "You can’t wait for inspiration. You have to go after it with a club.",
        author: "Jack London"
    },
    {
        quote: "I have never started a poem yet whose end I knew. Writing a poem is discovering.",
        author: "Robert Frost"
    },
    {
        quote: "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
        author: "Toni Morrison"
    },
    {
        quote: "I'm writing a first draft and reminding myself that I'm simply shoveling sand into a box so that later I can build castles." ,
        author: "Shannon Hale"
    }    
]

const quoteSelector = document.querySelector("#quote span:first-child");
const authorSelector = document.querySelector("#quote span:last-child");

const number = Math.floor(Math.random() * quotes.length);
quoteSelector.innerText = quotes[number].quote;
authorSelector.innerText = quotes[number].author;