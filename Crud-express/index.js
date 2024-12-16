const express = require("express");
const port = 2001;

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded());


let books = [

    // CLASSIC

    {
        id: 1,
        category: "classic",
        image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_kjOJ2izocPQIzgnS06yyaU8dhXh1mEPI7pD_HVhns3N_Bzed5tUKFeZvv_2C7Im4bIvUdxTnJSjpbKJj5sJcwAz9GG6_W2OSoq8jhfJhMC2t4RZotKAs&usqp=CAE",
        name: "The Beautiful And Damand",
        author: "Louisa Hichen",
        publishedyear: "1992",
        price: "₹399.00",
    },
    {
        id: 2,
        category: "classic",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTDP1AaCVHl8uEcx4X4UpGXND4NhFxngg4Ss_eUixfXGSPoLaQFNkkBjTvhaqFbftgCqNpHtI0q-6UZp2AHrSSTUuK-9vsRItm8LRI1bW8&usqp=CAE",
        name: "Little Women",
        author: "Louisa May Alcott",
        publishedyear: "1868",
        price: "₹291.00",
    },
    {
        id: 3,
        category: "classic",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQm5n4OzN5A3mosrcXotm1o1cRb0AihZeO7J8X50rPNdFovH7lfzrq6q5kST34uRimwlrbVklzYPQpT_pIMuYXDlgwRtpQlvlnKA4GlsWoolFBZb2mA9opj&usqp=CAE",
        name: "The Greate Gatsby",
        author: "Louisa May Alcott",
        publishedyear: "1788",
        price: "₹420.00",
    },


    // BUSINESS

    {
        id: 4,
        category: "business",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRMnFnNsegWADvCRPlMG2auSnLTUjpg1HNvThnb6LiZ89VjIK_Y5sOL6ANGNg7oAmspCL74bkCZQYJQ_J1k4QlfV7QqatYCpogHHCuacWDWmtOO3E8ELiCknQ&usqp=CAE",
        name: "The Diary Of CEO",
        author: "Steven Bartlett",
        publishedyear: "2015",
        price: "₹149.00",
    },
    {
        id: 5,
        category: "business",
        image: "https://m.media-amazon.com/images/I/7198rnk4z2L._AC._SR360,460.jpg",
        name: "The Content Creater",
        author: "Shree Raman Maharshi",
        publishedyear: "1993",
        price: "₹250.00",
    },
    {
        id: 6,
        category: "business",
        image: "https://m.media-amazon.com/images/I/41fZ1WqYW-L._AC._SR180,230.jpg",
        name: "WHO AM I ?",
        author: "Shree Raman Maharshi",
        publishedyear: "1995",
        price: "₹99.00",
    },
    
    // FANTACY
    
    {
        id: 7,
        category: "fantacy",
        image:"https://m.media-amazon.com/images/I/81zeKRGCPpL._AC._SR360,460.jpg",
        name: "Harry Potter",
        author: "Shree Raman Maharshi",
        publishedyear: "1995",
        price: "₹189.00",
    },
    {
        id: 8,
        category: "fantacy",
        image:"https://m.media-amazon.com/images/I/71uUY42uNsL._AC._SR360,460.jpg",
        name: "Before The Coffee Gets Cold",
        author: "Shree Raman Maharshi",
        publishedyear: "1963",
        price: "₹199.00",
    },
    {
        id: 9,
        category: "fantacy",
        image:"https://m.media-amazon.com/images/I/81HaNp6VD8L._AC_UL320_.jpg",
        name: "Wind And Truth",
        author: "Shree Raman Maharshi",
        publishedyear: "1930",
        price: "₹159.00",
    },

    // COMICS

    {
        id: 10,
        category: "comics",
        image:"https://m.media-amazon.com/images/I/719QdCh6zRL._AC_UY218_.jpg",
        name: "Twinkle Double Double Digest",
        author: "Shree Raman Maharshi",
        publishedyear: "2020",
        price: "₹149.00",
    },
    {
        id: 11,
        category: "comics",
        image:"https://m.media-amazon.com/images/I/71GgVdPAY4L._AC_UY218_.jpg",
        name: "Suppandi Volume 5",
        author: "Shree Raman Maharshi",
        publishedyear: "2020",
        price: "₹159.00",
    },
    {
        id: 12,
        category: "comics",
        image:"https://m.media-amazon.com/images/I/91F-m3Zm1xL._AC_UY218_.jpg",
        name: "Attack on Titan",
        author: "Shree Raman Maharshi",
        publishedyear: "2020",
        price: "₹150.00",
    },
    
    // FICTION

    {
        id: 13,
        category: "fiction",
        image:"https://m.media-amazon.com/images/I/51lMJWnnRDL._AC_UL320_.jpg",
        name: "White Nights",
        author: "Shree Raman Maharshi",
        publishedyear: "2010",
        price: "₹180.00",
    },
    {
        id: 14,
        category: "fiction",
        image:"https://m.media-amazon.com/images/I/81pGO40uexL._AC_UL320_.jpg",
        name: "Too Good To Be True",
        author: "Shree Raman Maharshi",
        publishedyear: "2000",
        price: "₹150.00",
    },
    {
        id: 15,
        category: "fiction",
        image:"https://m.media-amazon.com/images/I/81V-0E86iyL._AC_UL320_.jpg",
        name: "50 Greatest Short Stories",
        author: "Shree Raman Maharshi",
        publishedyear: "2003",
        price: "₹178.00",
    },

    // BIOGRAPHY

    {
        id: 16,
        category: "bio",
        image:"https://m.media-amazon.com/images/I/61157LApbuL._AC._SR360,460.jpg",
        name: "Men's Search For Meaning",
        author: "Shree Raman Maharshi",
        publishedyear: "2020",
        price: "₹199.00",
    },
    {
        id: 17,
        category: "bio",
        image:"https://m.media-amazon.com/images/I/619ZKDSCt1L._AC_UL320_.jpg",
        name: "Tuesday With Morrie",
        author: "Shree Raman Maharshi",
        publishedyear: "2023",
        price: "₹100.00",
    },
    {
        id: 18,
        category: "bio",
        image:"https://m.media-amazon.com/images/I/61mi2Ff+kzL._AC_UL320_.jpg",
        name: "Story Of My Life : hellen keller",
        author: "Shree Raman Maharshi",
        publishedyear: "2023",
        price: "₹100.00",
    },

    // SELF-HELP

    {
        id: 19,
        category: "self",
        image:"https://m.media-amazon.com/images/I/51QTTApN-XL._AC._SR180,230.jpg",
        name: "The Power Of Your Mind",
        author: "Shree Raman Maharshi",
        publishedyear: "2002",
        price: "₹150.00",
    },
    {
        id: 20,
        category: "self",
        image:"https://m.media-amazon.com/images/I/81l3rZK4lnL._AC._SR360,460.jpg",
        name: "Japanese Secreate to be Happy",
        author: "Shree Raman Maharshi",
        publishedyear: "2003",
        price: "₹200.00",
    },
    {
        id: 21,
        category: "self",
        image:"https://m.media-amazon.com/images/I/715qi-cIbML._AC._SR360,460.jpg",
        name: "Don't Believe Everything You Think",
        author: "Shree Raman Maharshi",
        publishedyear: "1996",
        price: "₹150.00",
    },

    // ROMANCE

    {
        id: 22,
        category: "romance",
        image:"https://m.media-amazon.com/images/I/715qi-cIbML._AC._SR360,460.jpg",
        name: "Stories We Never Tell",
        author: "Shree Raman Maharshi",
        publishedyear: "2020",
        price: "₹150.00",
    },
    {
        id: 23,
        category: "romance",
        image:"https://m.media-amazon.com/images/I/81FEcpB9erL._AC._SR360,460.jpg",
        name: "Love Redesigned",
        author: "Shree Raman Maharshi",
        publishedyear: "2023",
        price: "₹199.00",
    },
    {
        id: 24,
        category: "romance",
        image:"https://m.media-amazon.com/images/I/91EHaC+M-RL._AC._SR360,460.jpg",
        name: "A Curse For True Love",
        author: "Shree Raman Maharshi",
        publishedyear: "1883",
        price: "₹450.00",
    },

]
// let books = []

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/classic", (req, res) => {
    const classicBooks = books.filter((book) => book.category === "classic");
    res.render("classic", { books});
});

app.get("/business", (req, res) => {
    const businessBooks = books.filter((book) => book.category === "business");
    res.render("business", { books: businessBooks });
})

app.get("/fantacy", (req, res) => {
    const fantacyBooks = books.filter((book) => book.category === "fantacy");
    res.render("fantacy", { books: fantacyBooks });
})

app.get("/comics", (req, res) => {
    const comicsBooks = books.filter((book) => book.category === "comics");
    res.render("comics", { books: comicsBooks });
})

app.get("/fiction", (req, res) => {
    const fictionBooks = books.filter((book) => book.category === "fiction");
    res.render("fiction", { books: fictionBooks });
})

app.get("/bio", (req, res) => {
    const biographyBooks = books.filter((book) => book.category === "bio");
    res.render("bio", { books: biographyBooks });
})

app.get("/self", (req, res) => {
    const selfBooks = books.filter((book) => book.category === "self");
    res.render("self", { books: selfBooks });
})

app.get("/romance", (req, res) => {
    const romanceBooks = books.filter((book) => book.category === "romance");
    res.render("romance", { books: romanceBooks });
})

app.get("/deleteData", (req, res) => {
    const bookId = parseInt(req.query.id)
    books = books.filter((book) => book.id !== bookId)
    res.redirect("")
})

app.get("/addData", (req, res) => {
    // console.log(req.body)
    res.render("add");
})
app.post("/AddData", (req, res) => {
    console.log(req.body)
    req.body.id = String(Date.now())
    books.push(req.body)
    res.redirect("/")
})
    

app.get("/editData/:id", (req, res) => {
    const bookId = parseInt(req.params.id);
    const singleData = books.find((book) => book.id === bookId);
    res.render("edit", { singleData })
})


app.post("/updateData", (req, res) => {
    let updatedCategory = "";

    books.map((e) => {
        if (e.id == req.body.id) {  
            e.image = req.body.image;
            e.name = req.body.name;
            e.author = req.body.author;
            e.publishedyear = req.body.publishedyear;
            e.price = req.body.price;
            updatedCategory = e.category = req.body.category; 
        }
    });
    res.redirect(`/${updatedCategory}`);
});

app.listen(port, (err) => {
    err ? console.log(err) : console.log("Server started on port " + port);
});

