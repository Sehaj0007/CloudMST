const books = [
    { 
        title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald", 
        genres: ["Fiction", "Tragedy", "Realism"], 
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/17508f15457551.562916fff3fb2.jpg",
        description: "Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with Jay Gatsby, a mysterious millionaire with an obsession to reunite with his former lover, Daisy Buchanan",
        rating: 4.5
    },
    { 
        title: "The Silent Patient", 
        author: "Alex Michaelides", 
        genres: ["Mystery", "Thriller"], 
        image: "https://m.media-amazon.com/images/I/61R+Cpm+HxL._AC_UF1000,1000_QL80_.jpg",
        description: "Alicia Berenson, a renowned painter, is accused of murdering her husband, Gabriel, and subsequently becomes mute, refusing to speak a word. Her silence turns a domestic tragedy into a gripping mystery that captures public attention. Theo Faber, a forensic psychotherapist, becomes obsessed with uncovering the truth behind Alicia's actions and her silence, leading him down a path filled with unexpected twists and revelations.",
        rating: 4
    },
    { 
        title: "1984", 
        author: "George Orwell", 
        genres: ["Science Fiction", "Dystopian","Political Fiction"], 
        image: "https://m.media-amazon.com/images/I/81StSOpmkjL._AC_UF1000,1000_QL80_.jpg",
        description: "Published in 1949, \"1984\" is set in a totalitarian society under constant surveillance by the Party and its leader, Big Brother. The novel follows Winston Smith, a government employee who secretly despises the oppressive regime. As Winston seeks truth and freedom, he becomes entangled in acts of rebellion that lead to dire consequences. The narrative explores themes of censorship, propaganda, and the manipulation of reality.",
        rating: 4.2
    },
    { 
        title: "To Kill a Mockingbird", 
        author: "Harper Lee", 
        genres: ["Fiction", "Classic"], 
        image: "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg",
        description: "Set in the 1930s in the fictional town of Maycomb, Alabama, the novel follows young Scout Finch as she witnesses her father, Atticus Finch, defend Tom Robinson, a Black man falsely accused of raping a white woman. Through Scout's eyes, readers explore themes of racial injustice, moral growth, and empathy, as the community grapples with deep-seated prejudices and the loss of innocence.",
        rating: 5
    },
    {
        title: "The Last of Us: American Dreams",
        author: "Neil Druckmann",
        genres: ["Horror", "Graphic Novel"],
        image: "https://m.media-amazon.com/images/I/A1WbKWpNjwL._UF1000,1000_QL80_.jpg",
        description: "Nineteen years ago, a parasitic fungal outbreak killed the majority of the world's population, forcing survivors into a handful of quarantine zones. Thirteen-year-old Ellie has grown up in this violent, postpandemic world, and her disrespect for the military authority running her boarding school earns her new enemies, a new friend in fellow rebel Riley, and her first trip into the outside world.",
        rating: 3.8
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genres: ["Fantasy", "Adventure", "Children"],
        image: "https://m.media-amazon.com/images/I/81mCE+uclxL._UF1000,1000_QL80_.jpg",
        description: "Published in 1937, \"The Hobbit\" introduces readers to Bilbo Baggins, a hobbit who enjoys a quiet life in the Shire. His world is turned upside down when the wizard Gandalf and a group of thirteen dwarves enlist him on a quest to reclaim the Lonely Mountain and its treasure from the dragon Smaug. Throughout this journey, Bilbo encounters trolls, goblins, elves, and other mythical creatures, discovering courage and resourcefulness he never knew he possessed. The novel serves as a prelude to Tolkien's later epic, \"The Lord of the Rings.\" Hobbit is a tale of high adventure, undertaken by a company of dwarves in search of dragon-guarded gold. A reluctant partner in this perilous quest is Bilbo Baggins, a comfort-loving unambitious hobbit, who surprises even himself by his resourcefulness and skill as a burglar.",
        rating: 4.3
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        genres: ["Science Fiction", "Dystopian"],
        image: "https://m.media-amazon.com/images/I/61I24wOsn8L._AC_UF1000,1000_QL80_.jpg",
        description: "In a dystopian future, the nation of Panem is divided into twelve districts, each under the oppressive rule of the Capitol. To demonstrate its dominance and punish past rebellions, the Capitol annually selects a boy and a girl from each district to participate in the Hunger Games—a televised fight to the death. Sixteen-year-old Katniss Everdeen volunteers to take her younger sister's place in the Games. Alongside Peeta Mellark, her district's male tribute, Katniss must navigate the brutal arena, confront moral dilemmas, and challenge the Capitol's tyrannical authority. the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one",
        rating: 4.32
    },
    {
        title: "The Maze Runner",
        author: "James Dashner",
        genres: ["Science Fiction", "Dystopian"],
        image: "https://m.media-amazon.com/images/I/71fwo9096LL._AC_UF1000,1000_QL80_.jpg",
        description: "When Thomas wakes \"The Maze Runner\" follows sixteen-year-old Thomas, who awakens in a mysterious, ever-changing maze with no memory of his past. He joins a group of boys, all similarly amnesiac, who have established a society in the Glade—a central area surrounded by the Maze. Each day, designated Runners venture into the Maze to map its shifting passages and seek an escape. The arrival of a girl bearing a cryptic message triggers a series of events that lead Thomas and his companions to confront the Maze's deadly challenges and uncover the truth about their predicament. in the lift, the only thing he can remember is his name. He's surrounded by strangers—boys whose memories are also gone. Outside the towering stone walls that surround them is a limitless, ever-changing maze. It's the only way out—and no one's ever made it through alive.",
        rating: 4
    },
    {
        title: "The Giver",
        author: "Lois Lowry",
        genres: ["Science Fiction", "Dystopian"],
        image: "https://m.media-amazon.com/images/I/810L4BV3HrL.jpg",
        description: "In a seemingly utopian society devoid of pain and strife, twelve-year-old Jonas is selected to inherit the position of Receiver of Memory. As he trains under the current Receiver, known as The Giver, Jonas uncovers the dark truths behind his community's facade of perfection, including the suppression of emotions, the absence of true freedom, and the ethical compromises made to maintain order. This revelation propels Jonas toward a path of rebellion, challenging the very foundations of his society. Giver, the 1994 Newbery Medal winner, has become one of the most influential novels of our time. The haunting story centers on twelve-year-old Jonas, who lives in a seemingly ideal, if colorless, world of conformity and contentment. Not until he is given his life assignment as the Receiver of Memory does he begin to understand the dark, complex secrets behind his fragile community.",
        rating: 4.31
    },
    {
        title: "The Book Thief",
        author: "Markus Zusak",
        genres: ["History", "Fiction"],
        image: "https://m.media-amazon.com/images/I/914cHl9v7oL._AC_UF1000,1000_QL80_.jpg",
        description: "Set in Nazi Germany during World War II, \"The Book Thief\" follows Liesel Meminger, a young girl sent to live with foster parents Hans and Rosa Hubermann in the town of Molching. Narrated by Death, the novel chronicles Liesel's journey as she discovers the power of words and books amidst the horrors of war. She forms deep bonds with her foster parents, her neighbor Rudy Steiner, and Max Vandenburg, a Jewish man hiding in their basement. Through acts of book thievery and storytelling, Liesel finds solace and resilience in a time of widespread suffering.",
        rating: 4.37
    },
    {
        title: "Water Moon",
        author: "Samantha Sotto Yambao",
        genres: ["Fantasy", "Romance", "Fiction"],
        image: "https://m.media-amazon.com/images/I/71-qF-XEuiL._UF1000,1000_QL80_.jpg",
        description: "\"Water Moon\" tells the story of Ishikawa Hana, who inherits a peculiar pawnshop in Tokyo from her father, Toshio. This isn't an ordinary pawnshop; it's a place where customers can trade their regrets. Hana's life takes an unexpected turn when a charming young physicist enters her shop, leading her on a magical journey that explores themes of choice, identity, family, and regret. The novel weaves a dreamlike narrative, blending elements of fantasy and reality to create a hauntingly beautiful tale.",
        rating: 3.94
    },
    {
        title: "The Lost House",
        author: "Melissa Larsen",
        genres: ["Mystery", "Thriller", "Crime"],
        image: "https://mpd-biblio-covers.imgix.net/9781250332875.jpg",
        description: "In \"The Lost House,\" Melissa Larsen weaves a chilling narrative set against the unforgiving Icelandic winter. The story follows Agnes, a young woman haunted by her family's past. Forty years ago, a brutal double murder occurred in the remote town of Bifröst, Iceland, where a woman and her infant daughter were found dead in the snow. The crime remained unsolved, with suspicions lingering over Agnes's grandfather, who fled to California with his son. Now, Agnes returns to Bifröst to uncover the truth, accompanied by true crime podcaster Nora Carver. As they delve into the cold case, a new disappearance shakes the town, intertwining past and present in a web of secrets and danger.",
        rating: 4
    }
];

let currentGenre = 'all';
let searchTimeout;

function renderBooks(bookList) {
    const bookListContainer = document.getElementById('book-list');
    const noResults = document.querySelector('.no-results');
    bookListContainer.innerHTML = '';
    
    if (bookList.length === 0) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
        bookList.forEach(book => {
            const ratingStars = '<i class="bi bi-star-fill"></i>'.repeat(book.rating);
            const isFavorite = favorites.some(fav => fav.title === book.title);
            const heartClass = isFavorite ? 'bi-heart-fill' : 'bi-heart';
            const bookCard = `
                <div class="col-6 col-md-4 col-lg-3 mb-3">
                    <div class="card h-100" onclick="showBookDetails('${book.title}')">
                        <img src="${book.image}" 
                             class="card-img-top" 
                             alt="${book.title}"
                             onerror="this.src='https://via.placeholder.com/200x300?text=No+Image'">
                        <div class="card-body">
                            <h5 class="card-title">${book.title}</h5>
                            <p class="card-text text-muted">${book.author}</p>
                            <div class="rating small-rating">${ratingStars}</div>
                            <i class="bi ${heartClass} heart-icon" onclick="toggleFavorite(event, '${book.title}')"></i>
                        </div>
                    </div>
                </div>
            `;
            bookListContainer.innerHTML += bookCard;
        });
    }
}

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function toggleFavorite(event, title) {
    event.stopPropagation();
    const book = books.find(b => b.title === title);
    const heartIcon = event.target;
    if (favorites.some(fav => fav.title === title)) {
        favorites = favorites.filter(fav => fav.title !== title);
        heartIcon.classList.remove('bi-heart-fill');
        heartIcon.classList.add('bi-heart');
    } else {
        favorites.push(book);
        heartIcon.classList.remove('bi-heart');
        heartIcon.classList.add('bi-heart-fill');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

function showBookDetails(title) {
    const book = books.find(b => b.title === title);
    if (book) {
        document.getElementById('bookModalTitle').textContent = book.title;
        document.getElementById('bookModalImage').src = book.image;
        document.getElementById('bookModalAuthor').textContent = book.author;
        document.getElementById('bookModalGenre').textContent = book.genres.join(', ');
        document.getElementById('bookModalDescription').textContent = book.description;
        document.getElementById('bookModalRating').innerHTML = 
            '<i class="bi bi-star-fill"></i>'.repeat(book.rating);
        const modal = new bootstrap.Modal(document.getElementById('bookModal'));
        modal.show();
    }
}

function filterBooksByGenre(genre) {
    currentGenre = genre;
    document.querySelectorAll('.genre-button').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === genre);
    });
    
    showLoading(() => {
        const filteredBooks = genre === 'all' 
            ? books 
            : books.filter(book => book.genres.includes(genre));
        renderBooks(filteredBooks);
    });
}

function searchBooks() {
    clearTimeout(searchTimeout);
    showLoading(() => {
        searchTimeout = setTimeout(() => {
            const searchInput = document.getElementById('searchInput').value.toLowerCase();
            console.log("Search Input:", searchInput); // Debugging input
            
            const filteredBooks = books.filter(book => 
                book.title.toLowerCase().includes(searchInput) || 
                book.author.toLowerCase().includes(searchInput) || 
                book.genres.some(genre => genre.toLowerCase().includes(searchInput))
            );

            console.log("Filtered Books:", filteredBooks); // Debugging output
            renderBooks(filteredBooks);
        }, 300);
    });
}

function showLoading(callback) {
    const loading = document.getElementById('loading');
    loading.style.display = 'block';
    setTimeout(() => {
        callback();
        loading.style.display = 'none';
    }, 200);
}

// Initialize with all books
document.addEventListener('DOMContentLoaded', () => {
    console.log("Initial Book List:", books); // Debugging initial data
    renderBooks(books);
    document.querySelector('.genre-button').classList.add('active');
});