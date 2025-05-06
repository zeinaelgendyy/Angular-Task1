import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Book } from './book.model'; 

@Injectable({
  providedIn: 'root',
})
export class BookData implements InMemoryDbService {
  createDb() {
    const books: Book[] = [
      {
        id: 1,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        description: 'In J.R.R. Tolkiens The Hobbit, Bilbo Baggins, a peaceful hobbit, is swept into an unexpected adventure by the wizard Gandalf and a company of dwarves. Their quest: to reclaim their treasure from the dragon Smaug in the Lonely Mountain. Along their perilous journey, Bilbo faces trolls, goblins, and giant spiders, and he acquires a mysterious ring that grants invisibility. His courage grows as he navigates these dangers, culminating in the epic Battle of Five Armies. Returning home, Bilbo is forever changed by his experiences and the secrets of the ring he now possesses.',
        genre: 'Fantasy',
        imageUrl: 'assets/images/the-hobbit.jpg',
        year: 1937,
        price: 4
      },
      {
        id: 2,
        title: '1984',
        author: 'George Orwell',
        description: 'George Orwells iconic novel, "1984," is a dystopian masterpiece that depicts a chilling future where the totalitarian government exercises total control over citizens. Published in 1949, the book is set in a post-apocalyptic London and follows the story of Winston Smith, a low-ranking member of the ruling Party, as he rebels against the oppressive regime. With its themes of censorship, surveillance, and the dangers of government control, "1984" remains a thought-provoking and timely warning about the erosion of individual freedom and the loss of humanity in a society that values conformity above all else.',
        genre: 'Dystopian',
        imageUrl: 'assets/images/1984.jpg',
        year: 1949,
        price: 20
      },
      {
        id: 3,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        description: 'A novel before its time, Harper Lee’s Pulitzer-prize winner addresses issues of race, inequality and segregation with both levity and compassion. Told through the eyes of loveable rogues Scout and Jem, it also created one of literature’s most beloved heroes – Atticus Finch, a man determined to right the racial wrongs of the Deep South.',
        genre: 'Historical Fiction',
        imageUrl: 'assets/images/to-kill-a-mockingbird.jpg',
        year: 1960,
        price: 7
      },
      {
        id: 4,
        title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        description: 'Ray Bradbury’s dystopian novel follows Guy Montag, a fireman whose job is to burn books in a future society where they are banned. As Montag begins to question the system, he becomes a fugitive seeking truth and freedom.',
        genre: 'Science Fiction',
        imageUrl: 'assets/images/Fahrenheit-451.jpg',
        year: 1953,
        price: 5
      },
      {
        id: 5,
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        description: 'Jane Austens Pride and Prejudice follows the witty and independent Elizabeth Bennet and the proud Mr. Darcy as they navigate societal expectations and their own initial prejudices in 19th-century England. The novel explores themes of love, social standing, and reputation as Elizabeth and Darcy gradually overcome their biases to find a true connection.',
        genre: 'Classic Romance',
        imageUrl: 'assets/images/pride.jpg',
        year: 1813,
        price: 10
      },
      {
        id: 6,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        description: 'F. Scott Fitzgeralds The Great Gatsby is a poignant and evocative portrayal of the Roaring Twenties and a critical examination of the American Dream. Narrated by Nick Carraway, the novel unfolds on Long Island, where Nick becomes entangled in the opulent world of his mysterious neighbor, Jay Gatsby. Gatsby, a self-made millionaire, throws lavish parties in the hopes of reuniting with his former love, Daisy Buchanan, who is now married to the wealthy and powerful Tom Buchanan. Through Gatsbys obsessive pursuit of Daisy and the glittering facade of wealth and social status, Fitzgerald explores themes of love, loss, social class, illusion versus reality, and the corruption of the American Dream in an era of excess and moral ambiguity.',
        genre: 'Classic',
        imageUrl: 'assets/images/great.jpg',
        year: 1925,
        price: 16
      },
      {
        id: 7,
        title: 'Moby Dick',
        author: 'Herman Melville',
        description: 'Herman Melvilles Moby Dick is an epic sea-faring adventure and a profound exploration of obsession and the human condition. The novel centers on Captain Ahab, the monomaniacal captain of the whaling ship Pequod, and his relentless pursuit of Moby Dick, the massive and legendary white whale that took his leg on a previous voyage. Narrated by the young sailor Ishmael, the story chronicles the perilous journey of the Pequod and its diverse crew, delving into themes of fate, free will, the power of nature, and the destructive nature of vengeance. Interwoven with detailed accounts of whaling practices and philosophical reflections, Moby Dick stands as a complex and enduring masterpiece of American literature.',
        genre: 'Adventure',
        imageUrl: 'assets/images/moby-dick.jpg',
        year: 1851,
        price: 15
      },
      {
        id: 8,
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        description: 'J.D. Salingers The Catcher in the Rye follows the experiences of sixteen-year-old Holden Caulfield in the days after hes expelled from his prep school. Narrated in Holdens distinctive and cynical voice, the novel details his wanderings through New York City as he grapples with feelings of alienation, phoniness, and the confusing realities of the adult world. Through his encounters and observations, Holden reflects on themes of innocence, loss, and the challenges of adolescence, offering a raw and introspective look at teenage angst and the search for authenticity.',
        genre: 'Coming of Age',
        imageUrl: 'assets/images/catcher.jpg',
        year: 1951,
        price: 11
      },
      {
        id: 9,
        title: 'Jane Eyre',
        author: 'Charlotte Brontë',
        description: 'Charlotte Brontës Jane Eyre tells the story of a resilient and independent orphaned girl who navigates a challenging childhood and eventually becomes a governess at Thornfield Hall. There, she finds herself drawn to her enigmatic and brooding employer, Mr. Rochester. Their burgeoning romance is soon threatened by dark secrets and hidden pasts within the imposing mansion, leading Jane on a journey of self-discovery, hardship, and the ultimate pursuit of love and equality. The novel blends elements of Gothic atmosphere, romance, and social commentary, exploring themes of class, gender, and the importance of inner strength.',
        genre: 'Gothic Romance',
        imageUrl: 'assets/images/jane-eyre.jpg',
        year: 1847,
        price: 13
      },
      {
        id: 10,
        title: 'Brave New World',
        author: 'Aldous Huxley',
        description: 'Aldous Huxleys Brave New World paints a chilling vision of a future society meticulously engineered through advanced reproductive technology, psychological conditioning, and rampant consumerism. In this World State, individuals are genetically predisposed into a rigid social hierarchy and kept content through the use of a pleasure-inducing drug called soma. The novel explores the loss of individuality, freedom, and genuine human connection in a seemingly utopian society built on scientific control and the suppression of natural human experiences.',
        genre: 'Dystopian',
        imageUrl: 'assets/images/brave-new-world.jpg',
        year: 1932,
        price: 5
      },
      {
        id: 11,
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        description: 'J.R.R. Tolkiens epic fantasy, The Lord of the Rings, tells the story of Frodo Baggins, a hobbit tasked with the monumental quest of carrying the One Ring to the fiery Mount Doom to ensure its destruction and prevent the Dark Lord Sauron from plunging Middle-earth into eternal darkness. Along his perilous journey, Frodo is aided by a fellowship of diverse companions facing countless dangers and battling the forces of evil.',
        genre: 'Fantasy',
        imageUrl: 'assets/images/lotr.jpg',
        year: 1954,
        price: 16
      },
      {
        id: 12,
        title: 'Dracula',
        author: 'Bram Stoker',
        description: 'Bram Stokers Dracula introduces the iconic vampire Count Dracula and the terrifying events that unfold as he seeks to spread his undead curse in England. The novel is a classic of the horror genre, exploring themes of good versus evil, life and death, and the fear of the unknown.',
        genre: 'Horror',
        imageUrl: 'assets/images/dracula.jpg',
        year: 1897,
        price: 15
      },
      {
        id: 13,
        title: 'Frankenstein',
        author: 'Mary Shelley',
        description: 'Mary Shelleys Frankenstein tells the story of Victor Frankenstein, a scientist who creates a sentient being, leading to tragic and horrifying consequences for both creator and creature. The novel explores themes of creation, responsibility, and the nature of humanity.',
        genre: 'Gothic Horror',
        imageUrl: 'assets/images/frankenstein.jpg',
        year: 1818,
        price: 19.99
      },
      {
        id: 14,
        title: 'The Chronicles of Narnia',
        author: 'C.S. Lewis',
        description: 'C.S. Lewiss The Chronicles of Narnia series begins when children step through a wardrobe into the magical land of Narnia, filled with talking animals and mythical creatures, where they become involved in an epic battle between good and evil.',
        genre: 'Fantasy',
        imageUrl: 'assets/images/narnia.jpg',
        year: 1950,
        price: 12
      },
      {
        id: 15,
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        description: 'Fyodor Dostoevskys Crime and Punishment follows the psychological turmoil of Rodion Raskolnikov, an impoverished student in St. Petersburg who commits a murder and grapples with the profound guilt and moral consequences of his actions. The novel delves into themes of morality, redemption, and the complexities of the human psyche.',
        genre: 'Philosophical Fiction',
        imageUrl: 'assets/images/crime-and-punishment.jpg',
        year: 1866,
        price: 13
      },
      {
        id: 16,
        title: 'Wuthering Heights',
        author: 'Emily Brontë',
        description: 'Emily Brontës Wuthering Heights is a tale of intense and destructive love, jealousy, and revenge set on the bleak Yorkshire moors. The story follows the passionate and tormented relationship between Catherine Earnshaw and Heathcliff, and the devastating consequences of their intertwined lives on subsequent generations.',
        genre: 'Gothic Fiction',
        imageUrl: 'assets/images/wuthering-heights.jpg',
        year: 1847,
        price: 14
      },
      {
        id: 17,
        title: 'The Picture of Dorian Gray',
        author: 'Oscar Wilde',
        description: 'Oscar Wildes The Picture of Dorian Gray tells the story of a young man who wishes his portrait would age instead of him. As Dorian Gray indulges in a life of hedonism and sin, his portrait becomes a grotesque reflection of his moral decay, while he miraculously retains his youthful beauty. The novel explores themes of morality, vanity, the corrupting influence of sin, and the duality of appearance versus reality.',
        genre: 'Philosophical Gothic',
        imageUrl: 'assets/images/dorian-gray.jpg',
        year: 1890,
        price: 9
      },
      {
        id: 18,
        title: 'Les Misérables',
        author: 'Victor Hugo',
        description: 'Victor Hugos Les Misérables follows the life of Jean Valjean, an ex-convict seeking redemption in 19th-century France against the backdrop of poverty and social injustice, culminating in the June Rebellion in Paris. The novel explores themes of justice, love, sacrifice, and the struggle for human dignity amidst societal oppression.',
        genre: 'Historical Fiction',
        imageUrl: 'assets/images/les-miserables.jpg',
        year: 1862,
        price: 13
      },
      {
        id: 19,
        title: 'Don Quixote',
        author: 'Miguel de Cervantes',
        description: 'Miguel de Cervantes Don Quixote follows Alonso Quijano, who, lost in chivalric fantasies, believes he is the knight-errant Don Quixote. With his squire Sancho Panza, he embarks on a series of humorous and misguided adventures to revive chivalry. The novel satirizes romance tales and explores the clash between idealism and reality, sanity and madness, through the contrasting perspectives of its iconic duo.',
        genre: 'Satire',
        imageUrl: 'assets/images/don-quixote.jpg',
        year: 1605,
        price: 11
      },
      {
        id: 20,
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        description: 'Paulo Coelhos The Alchemist follows Santiago, a shepherd who journeys from Spain to the Egyptian pyramids in pursuit of a dream of treasure. Along the way, he learns valuable life lessons from various mentors about following his dreams, recognizing omens, and the importance of the journey itself. This philosophical fable explores themes of destiny, self-discovery, and listening to ones heart.',
        genre: 'Adventure/Philosophical',
        imageUrl: 'assets/images/alchemist.jpg',
        year: 1988,
        price: 12
      },
      {
        id: 21,
        title: 'A Tale of Two Cities',
        author: 'Charles Dickens',
        description: 'Charles Dickens A Tale of Two Cities unfolds in London and Paris during the French Revolution, following the intertwined fates of Dr. Manette, his daughter Lucie, and the contrasting figures of Charles Darnay and Sydney Carton. Amidst social upheaval and violence, the novel explores themes of love, sacrifice, and redemption as these characters navigate the dramatic events of the era.',
        genre: 'Historical Drama',
        imageUrl: 'assets/images/two-cities.jpg',
        year: 1859,
        price: 5
      },
      {
        id: 22,
        title: 'The Grapes of Wrath',
        author: 'John Steinbeck',
        description: 'John Steinbecks The Grapes of Wrath follows the Joad familys desperate journey from Oklahoma to California during the Dust Bowl and the Great Depression. Facing poverty, exploitation, and hardship, they strive to maintain their unity and hope for a better future. The novel powerfully portrays the struggles of migrant workers and explores themes of resilience, social injustice, and the enduring human spirit.',
        genre: 'Realist Novel',
        imageUrl: 'assets/images/grapes.jpg',
        year: 1939,
        price: 10
      },
      {
        id: 23,
        title: 'The Stranger',
        author: 'Albert Camus',
        description: 'Albert Camus The Stranger follows Meursault, a detached man in Algiers who becomes involved in a murder. His subsequent trial focuses on his emotional indifference rather than the crime itself. The novel explores themes of absurdism and alienation, highlighting the conflict between humanitys search for meaning and the universes silence, as well as the individuals struggle against societal norms.',
        genre: 'Philosophical Fiction',
        imageUrl: 'assets/images/stranger.jpg',
        year: 1942,
        price: 9.90
      },
      {
        id: 24,
        title: 'Anna Karenina',
        author: 'Leo Tolstoy',
        description: 'Leo Tolstoys Anna Karenina tells the intertwined stories of the passionate and tragic affair between the married Anna Karenina and Count Vronsky in 19th-century Russian high society, and the parallel journey of Konstantin Levin, a landowner seeking meaning in rural life. Annas scandalous love leads to social ruin, while Levin grapples with faith, family, and societal issues. The novel explores themes of love, infidelity, social alienation, and the search for purpose within the complexities of Russian aristocracy.',
        genre: 'Literary Fiction',
        imageUrl: 'assets/images/anna.jpg',
        year: 1877,
        price: 10.99
      },
      {
        id: 25,
        title: 'Beloved',
        author: 'Toni Morrison',
        description: 'Toni Morrisons Beloved tells the story of Sethe, a former slave in post-Civil War Ohio, haunted by the ghost of her baby daughter, Beloved, whom she killed to prevent her return to slavery. Beloveds presence forces Sethe and her surviving daughter, Denver, to confront the brutal memories of the past. The novel powerfully explores the lasting trauma of slavery, the complexities of motherhood, and the arduous journey to find freedom and identity in the aftermath of unimaginable suffering.',
        genre: 'Historical Fiction',
        imageUrl: 'assets/images/beloved.jpg',
        year: 1987,
        price: 19.99
      }
    ];
    return { books };
  }
}