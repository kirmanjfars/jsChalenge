let books=  [{
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "images/things-fall-apart.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  },
  {
    "author": "Hans Christian Andersen",
    "country": "Denmark",
    "imageLink": "images/fairy-tales.jpg",
    "language": "Danish",
    "link": "https://en.wikipedia.org/wiki/Fairy_Tales_Told_for_Children._First_Collection.\n",
    "pages": 784,
    "title": "Fairy tales",
    "year": 1836
  },
  {
    "author": "Dante Alighieri",
    "country": "Italy",
    "imageLink": "images/the-divine-comedy.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/Divine_Comedy\n",
    "pages": 928,
    "title": "The Divine Comedy",
    "year": 1315
  },
  {
    "author": "Unknown",
    "country": "Sumer and Akkadian Empire",
    "imageLink": "images/the-epic-of-gilgamesh.jpg",
    "language": "Akkadian",
    "link": "https://en.wikipedia.org/wiki/Epic_of_Gilgamesh\n",
    "pages": 160,
    "title": "The Epic Of Gilgamesh",
    "year": -1700
  },
  {
    "author": "Unknown",
    "country": "Achaemenid Empire",
    "imageLink": "images/the-book-of-job.jpg",
    "language": "Hebrew",
    "link": "https://en.wikipedia.org/wiki/Book_of_Job\n",
    "pages": 176,
    "title": "The Book Of Job",
    "year": -600
  },
  {
    "author": "Unknown",
    "country": "India/Iran/Iraq/Egypt/Tajikistan",
    "imageLink": "images/one-thousand-and-one-nights.jpg",
    "language": "Arabic",
    "link": "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
    "pages": 288,
    "title": "One Thousand and One Nights",
    "year": 1200
  },
  {
    "author": "Unknown",
    "country": "Iceland",
    "imageLink": "images/njals-saga.jpg",
    "language": "Old Norse",
    "link": "https://en.wikipedia.org/wiki/Nj%C3%A1ls_saga\n",
    "pages": 384,
    "title": "Nj\u00e1l's Saga",
    "year": 1350
  },
  {
    "author": "Jane Austen",
    "country": "United Kingdom",
    "imageLink": "images/pride-and-prejudice.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Pride_and_Prejudice\n",
    "pages": 226,
    "title": "Pride and Prejudice",
    "year": 1813
  },
  {
    "author": "Honor\u00e9 de Balzac",
    "country": "France",
    "imageLink": "images/le-pere-goriot.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot\n",
    "pages": 443,
    "title": "Le P\u00e8re Goriot",
    "year": 1835
  },
  {
    "author": "Samuel Beckett",
    "country": "Republic of Ireland",
    "imageLink": "images/molloy-malone-dies-the-unnamable.jpg",
    "language": "French, English",
    "link": "https://en.wikipedia.org/wiki/Molloy_(novel)\n",
    "pages": 256,
    "title": "Molloy, Malone Dies, The Unnamable, the trilogy",
    "year": 1952
  },
  {
    "author": "Giovanni Boccaccio",
    "country": "Italy",
    "imageLink": "images/the-decameron.jpg",
    "language": "Italian",
    "link": "https://en.wikipedia.org/wiki/The_Decameron\n",
    "pages": 1024,
    "title": "The Decameron",
    "year": 1351
  },
  {
    "author": "Jorge Luis Borges",
    "country": "Argentina",
    "imageLink": "images/ficciones.jpg",
    "language": "Spanish",
    "link": "https://en.wikipedia.org/wiki/Ficciones\n",
    "pages": 224,
    "title": "Ficciones",
    "year": 1965
  },
  {
    "author": "Emily Bront\u00eb",
    "country": "United Kingdom",
    "imageLink": "images/wuthering-heights.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Wuthering_Heights\n",
    "pages": 342,
    "title": "Wuthering Heights",
    "year": 1847
  },
  {
    "author": "Albert Camus",
    "country": "Algeria, French Empire",
    "imageLink": "images/l-etranger.jpg",
    "language": "French",
    "link": "https://en.wikipedia.org/wiki/The_Stranger_(novel)\n",
    "pages": 185,
    "title": "The Stranger",
    "year": 1942
  },
  {
    "author": "Paul Celan",
    "country": "Romania, France",
    "imageLink": "images/poems-paul-celan.jpg",
    "language": "German",
    "link": "\n",
    "pages": 320,
    "title": "Poems",
    "year": 1952
  }]


/*You should have a class for a Library,
In that library you should be able to add books, delete them and list them.
In addition to that, read from and add books to cart (or basket), every book should be added once, there should be no duplicates,
it should be a method for getting the sum of all book pages that in the cart, and the user can do `checkout()` to buy all books if any,
then empties the cart, otherwise it will show a message that there's no books in cart.
Also it should have a method for searching books by title or auther name, it should return all books that contain that part of string. */


class Library{
    constructor(books){
         this.books = books;
         this.flage=false;
         this.cart=[];
         this.solded = [];
    }
    
    //In that library you should be able to add books
    addBook(author,country,imageLink, language, link,pages, title, year ) {
        let flage = true;
        this.books.forEach(function (book){

            if(book.title!==title && book.author!==author && flage===true ){
               flage = false;
            }

        }.bind(this));

        if(flage===false){
            let temp={};
            temp["author"]= author;
            temp["country"]= country;
            temp["imageLink"]= imageLink;
            temp["language"]= language;
            temp["link"]= link;
            temp["pages"]= pages;
            temp["title"]= title;
            temp["year"]= year;
            this.books.push(temp);
            flage=false;
            return this.books;
        }else{
            return "Book is already exsist";
        }
    }

    //In that library you should be able to delete books
    deleteBook(title){
        let temp = [];
         this.books.filter( (book)=>{
            if(book.title !==title){
                temp.push(book);
                return book
             }
        });
        this.books = temp;
       return this.books;
    }
  
    //List
    listThem(){
        let str = [];
        this.books.forEach((el, i)=>{
           str.push("Book "+(i+1)+":-"+el.title+"\nWrited by:- "+ el.author+"\n");
        })
        return str.join('');
    }

    searchFor(searchVar){
       let n;
       let r;
       let str = "";
       let temp = searchVar;
       this.books.forEach((book)=>{
            n = book.title.search(temp);
            r = book.author.search(temp)
            if(n >= 0  ||  r>=0 ){
                str= "Book:- "+book.title+"\nWrited by:- "+ book.author;
            }
        })
        return str;
    }

    addToCard(searchVar){
        this.books.forEach((book)=>{
            if(searchVar == book.title ||  searchVar== book.author ){
                this.cart.push(book);
            }
        })
      return this.cart;
    }

    removeFromCard(searchVar){
        let temp = [];
        this.cart.filter( (book)=>{
           if(book.author !== searchVar ){
               temp.push(book);
               return book
            }
       });
       this.cart = temp;
       return this.cart;
    }

    sumOfPage(){
        let result =0;
        this.cart.map((book)=>{
            result = result + Number(book.pages);
        })
        return result;
    }

    checkout(){
        let str = "";
        if(this.cart.length !== 0){
            this.solded = this.cart; 
            this.cart={};
            str= "the cart have been empty"
        }else{
           str = "error, the cart is empty"
        }
        
        return str;
    }


}

  
let cart1 = new Library(books);
//  (author,country,imageLink, language, link,pages, title, year )
//console.log(cart1.addBook("Kirmanj","Kurdistan","#", "Kurdish", "#", "345","Genoside in Sky", "2002" )) ;
//console.log( cart1.deleteBook("Poems"));
//console.log( cart1.listThem());
console.log( cart1.searchFor("Heights"));
//cart1.addToCard("Albert Camus");
//cart1.addToCard("Ficciones");
//console.log( cart1.removeFromCard("Albert Camus"));
///console.log( cart1.checkout());
//console.log(cart1.sumOfPage());

