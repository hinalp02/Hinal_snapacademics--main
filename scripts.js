/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

// Expanded data structure to include more information about each book
let books = [
    { title: "The Gutenberg Bible", author: "Johannes Gutenberg", year: 1455, genre: "Religion", rarity: "Extremely Rare", description: "One of the earliest major books printed using mass-produced movable metal type in Europe.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Gutenberg_Bible_at_Yale.jpg/330px-Gutenberg_Bible_at_Yale.jpg" },
    { title: "First Folio", author: "William Shakespeare", year: 1623, genre: "Drama", rarity: "Very Rare", description: "The first collected edition of Shakespeare's plays.", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/William_Shakespeare_-_First_Folio_1623.jpg/375px-William_Shakespeare_-_First_Folio_1623.jpg"},
    { title: "Under the Triple Suns", author: "Stanton A. Coblentz", year: 1955, genre: "Fantasy", rarity: "Rare", description: "Under the Triple Suns by Stanton A. Coblentz is a science fiction tale known for its limited initial run, enhancing its rarity among collectors of classic mid-20th-century genre literature", imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/45/Under_the_triple_suns.jpg"},
    { title: "A wizard of Earthsea", author: "Ursula K. Le Guin", year: 1968, genre: "Fantasy", rarity: "Very Rare", description: "A Wizard of Earthsea is a fantasy novel written by American author Ursula K. Le Guin and first published by the small press Parnassus in 1968. It is regarded as a classic of children's literature and of fantasy, within which it is widely influential. ", imageUrl: "https://pictures.abebooks.com/inventory/md/md31542986038.jpg"},
    { title: "Tarzan of the Apes", author: "Edgar Rice Burroughs", year: 1912, genre: "Fantasy", rarity: "Extremely Rare", description: "First edition, first printing with publisher's two-line imprint on copyright page printed in Olde English, in Currey B binding with acorn at the foot of the spine. Signed by Edgar Rice Burroughs on the front free endpaper. Bound in publisher's red cloth with titles in gilt on upper board and spine; lacking the dust jacket. ", imageUrl: "https://pictures.abebooks.com/inventory/md/md31206823011.jpg"},
    { title: "Dune Messiah", author: "Frank Herbert", year: 1969, genre: "Fantasy", rarity: "Very Rare", description: "Dune Messiah delves into the intricate aftermath of Paul Muad Dib Atreides's reign as Emperor, exploring the unintended consequences of his messiah status amidst political intrigue and personal sacrifices.", imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/46/Dune_Messiah-Frank_Herbert_%281969%29_First_edition.jpg"},
    { title: "The Generall Historie of Virginia, New-England and the Summer Isles", author: "John Smith", year: 1632, genre: "Religion", rarity: "Extremely Rare", description: "The Generall Historie. with the names of the Adventurers, Planters and Governours from the first beginning Anno 1584 to this present 1626. With the Proceedings of those Several Colonies and the Accidents which befell them in all their Journeyes and Discoveries.", imageUrl: "https://pictures.abebooks.com/inventory/md/md31764266707.jpg" },
    { title: "Book of Hours", author: "William Shakespeare", year: 1400, genre: "Religion", rarity: "Extremely Rare", description: "This beautifully executed and unusual Parisian Book of Hours was painted at the time of the Duke of Berry. The realism seen in the illuminations represents a special moment in Parisian art, one exemplifying its northern origins.", imageUrl: "https://pictures.abebooks.com/inventory/md/md30373963308.jpg"},
    { title: "The Prophet", author: "Gibran, Kahlil", year: 1923, genre: "Religion", rarity: "Rare", description: "First edition, first printing. Signed by Kahlil Gibran on the title page. Bound in publisher's black cloth decorated in gilt; lacking the dust jacket. Good.", imageUrl: "https://pictures.abebooks.com/inventory/md/md30794772406.jpg"},
    { title: "The Caretaker", author: "Pinter, Harold", year: 1960, genre: "Drama", rarity: "Very Rare", description: "First edition, The Caretaker is a drama in three acts by Harold Pinter. Although it was the sixth of his major works for stage and television, this psychological study of the confluence of power, allegiance, innocence, and corruption among two brothers and a tramp, became Pinter's first significant commercial success", imageUrl: "https://pictures.abebooks.com/inventory/md/md1158797824.jpg"},
    { title: "The Glass Menagerie", author: "Williams, Tennessee", year: 1945, genre: "Drama", rarity: "Rare", description: "The Glass Menagerie[1] is a memory play by Tennessee Williams that premiered in 1944 and catapulted Williams from obscurity to fame.", imageUrl: "https://pictures.abebooks.com/inventory/md/md31789173774.jpg"},
    { title: "The Worst Journey in the World", author: "Cherry-Garrard, Apsley", year: 1922, genre: "Drama", rarity: "Extremely Rare", description: "First edition of this classic memoir of the 1910â 1913 British Antarctic Expedition", imageUrl: "https://pictures.abebooks.com/inventory/md/md22526121195.jpg"},
    { title: "The Homecoming", author: "Pinter, Harold", year: 1965, genre: "Drama", rarity: "Very Rare", description: "First edition, The Homecoming focuses on the return to his London home of Teddy, a university professor, who brings his wife, Ruth, to meet his father, Max, his brothers, Lenny and Joey, and his Uncle Sam. ", imageUrl: "https://pictures.abebooks.com/inventory/md/md1158797822.jpg"},
    { title: "Citizen of the Galaxy", author: "Heinlein, Robert A.", year: 1957, genre: "Science Fiction", rarity: "Rare", description: "On its surface, Citizen of the Galaxy is about Thorby “Baslim,” orphaned as a small child, enslaved by space pirates, rescued by a mysterious crippled beggar who buys him at auction, adopts him as son, and educates him intellectually and in the ways of the world.", imageUrl: "https://pictures.abebooks.com/inventory/md/md31528967904.jpg"},
    { title: "Fahrenheit 451", author: "Bradbury, Ray", year: 1953, genre: "Science Fiction", rarity: "Very Rare", description: "Fahrenheit 451 tells the story of Guy Montag and his transformation from a book-burning fireman to a book-reading rebel.", imageUrl: "https://pictures.abebooks.com/inventory/md/md31298996918.jpg"},
    { title: "Atvatabar I", author: "Stella, Frank", year: 1995, genre: "Science Fiction", rarity: "Extremely Rare", description: "This is about a ship which finds a way into the inner earth which turns out to be hollow. They then discovered the utopian society of Atvatabar.", imageUrl: "https://pictures.abebooks.com/inventory/md/md31323418634.jpg"},
    { title: "The Life and Strange Surprizing Adventures of Robinson Crusoe; The Farther Adventures of Robinson Crusoe; Serious Reflections During the Life And Surprising Adventures of Robinson Crusoe.", author: "Defoe, Daniel", year: 1719, genre: "Science Fiction", rarity: "Extremely Rare", description: "Exceedingly rare complete first edition set of all three books in Defoe's classic Robinson Crusoe series, including the scarce first and only printing of the third book in the series.", imageUrl: "https://pictures.abebooks.com/inventory/md/md31042981969.jpg"},
    { title: "The Maze", author: "Dali, Salvador and Maurice Sandoz", year: 1945, genre: "Horror", rarity: "Rare", description: "The Maze takes the reader on a dangerous hunt for an apparent serial killer who has murdered nine—and maybe more—prostitutes and hidden their bodies in the thick undergrowth on a lonely stretch of beach", imageUrl: "https://pictures.abebooks.com/inventory/md/md31778399103.jpg"},
    { title: "Strange Case of Dr Jekyll and Mr Hyde", author: "Stevenson, Robert Louis", year: 1886, genre: "Horror", rarity: "Extremely Rare", description: "Strange Case of Dr Jekyll and Mr Hyde by Robert Louis Stevenson is a narrative about the complexities of science and the duplicity of human nature. ", imageUrl: "https://pictures.abebooks.com/inventory/md/md31366994688.jpg"},
    { title: "Complete Set of Weird Tales - Pulp", author: "Robert E. Howard, H.P. Lovecraft", year: 1923, genre: "Horror", rarity: "Extremely Rare", description: "Weird Tales was launched to showcase writers trying to publish stories so bizarre and far out no one else would publish them stories of unearthly dimensions and dark possibilities, gothic seductresses, and cosmic monstrosities. ", imageUrl: "https://pictures.abebooks.com/inventory/md/md31637172993.jpg"}
];
let favorites = []; // Array to store favorites

// This function adds cards to the page to display the data in the array
function showCards(booksToShow, isFavoritesList = false) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateElement = document.getElementById("card-template");
    const templateCard = templateElement.content.querySelector("article.card");

    booksToShow.forEach(book => {
        const nextCard = templateCard.cloneNode(true);
        nextCard.style.display = "block"; 
        editCardContent(nextCard, book, isFavoritesList);
        cardContainer.appendChild(nextCard);
    });
}

function editCardContent(card, book, isFavoritesList) {
    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = book.title;

    const cardImage = card.querySelector("img");
    cardImage.src = book.imageUrl;
    cardImage.alt = book.title + " Cover";

    const details = card.querySelectorAll("li");
    details[0].textContent = "Author: " + book.author;
    details[1].textContent = "Year: " + book.year;
    details[2].textContent = "Genre: " + book.genre;
    details[3].textContent = "Rarity: " + book.rarity;

    const addButton = card.querySelector('.button');
    if (isFavoritesList) {
        addButton.remove();
    } else {
        addButton.style.display = 'block';
    }
}

function filterBooks() {
    const genre = document.getElementById("genre").value;
    const filteredBooks = genre === "All" ? books : books.filter(book => book.genre === genre);
    showCards(filteredBooks);
}

function addToFavorites(button) {
    const card = button.closest('.card-content');
    const bookTitle = card.querySelector('h2').textContent;
    const book = books.find(b => b.title === bookTitle);

    if (!favorites.includes(book)) {
        favorites.push(book);
        button.remove(); // Remove the button after adding to favorites
        console.log(`${book.title} added to favorites`);
    } else {
        console.log(`${book.title} is already in favorites.`);
    }
}

function showFavorites() {
    showCards(favorites, true); 
}

function searchBooks() {
    const searchText = document.getElementById('search-input').value.toLowerCase();
    const searchResults = books.filter(book => 
        book.title.toLowerCase().includes(searchText) || 
        book.year.toString().includes(searchText)
    );
    showCards(searchResults);
}

function showAllBooks() {
    showCards(books);
}

function clearFavorites() {
    favorites = []; 
    showCards(books); // Show all books after clearing favorites
}

document.addEventListener("DOMContentLoaded", () => {
    showCards(books);
});

document.querySelector('#card-template .card').style.display = 'none';
