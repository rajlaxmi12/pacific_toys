const sampleListings = [
    {
        title: "Super Speed Car",
        description: "A red super speed car with remote control.",
        image: {
            filename: "listingimage",
            url: "https://images-na.ssl-images-amazon.com/images/I/81hobX5l1JL._SL1500_.jpg"           
        },
        price: 1500
    },
    {
        title: "Doll House",
        description: "A beautiful doll house with furniture and accessories.",
        image: {
            filename: "listingimage",
            url:"https://images-na.ssl-images-amazon.com/images/I/81HuM5ITSzL.jpg"
        },
        price: 3000
    },
    {
        title: "Building Blocks Set",
        description: "100 pieces of colorful building blocks for creative construction.",
        image: {
            filename: "listingimage",
            url:"https://m.media-amazon.com/images/I/71HdMYjNabS._AC_SL1500_.jpg"
        },
        price: 800
    },
    {
        title: "Action Figure - Superhero",
        description: "An action figure of a popular superhero with movable joints.",
        image: {
            filename: "listingimage",
            url:"https://i5.walmartimages.com/seo/Marvel-Superhero-Adventures-Captain-America-Spiderman-Miles-Morales-Iron-Man-Black-Panther-Hulk-Kids-Toy-Action-Figure-Boys-Girls-9_6d9a2ad1-9e08-4577-8618-543a0bd4576b.ad23c5679033b5706ab626763923121b.jpeg"
        },
        price: 1200
    },
    {
        title: "Puzzle Game",
        description: "500-piece puzzle game to challenge and entertain.",
        image: {
            filename: "listingimage",
            url:"https://th.bing.com/th/id/OIP.fmmZAIYQdPmW6Wm0QzTZRAHaHa?rs=1&pid=ImgDetMain"
        },
        price: 600
    },
    {
        title: "Remote Control Helicopter",
        description: "A remote control helicopter with LED lights.",
        image: {
            filename: "listingimage",
            url:"https://cdn.shopify.com/s/files/1/0045/1713/4451/products/rc1_1200x1200.jpg?v=1571718913"
        },
        price: 2500
    },
    {
        title: "Stuffed Teddy Bear",
        description: "A large and soft stuffed teddy bear.",
        image: { 
            filename: "listingimage",
            url:"https://th.bing.com/th/id/OIP.vfT9W3pbwzbX7HFxRbFDtgHaHa?rs=1&pid=ImgDetMain"
        },
        price: 700
    },
    {
        title: "Electric Train Set",
        description: "A complete electric train set with tracks and stations.",
        image: {
            filename: "listingimage",
            url:"https://dl.dropboxusercontent.com/s/egar4shrff4nd8x/sky2093lrg-4.jpg"
        },
        price: 4000
    },
    {
        title: "Educational Laptop Toy",
        description: "An educational toy laptop with various learning games.",
        image: {
            filename: "listingimage",
            url:"https://th.bing.com/th/id/OIP.YYmzQa8OWwTOlZ2H03Ve7wHaHa?rs=1&pid=ImgDetMain"
        },
        price: 1500
    },
    {
        title: "Toy Kitchen Set",
        description: "A full kitchen set with stove, utensils, and pretend food.",
        image: {
            filename: "listingimage",
            url: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1610049436-51g81hdGOxL.jpg?crop=1xw:1xh;center,top&resize=480:*"
        },
        price: 2000
    },
    {
        title: "Toy Drum Set",
        description: "A mini drum set for budding musicians.",
        image: {
            filename: "listingimage",
            url: "https://m.media-amazon.com/images/I/71NyvEnFI7L._AC_SL1500_.jpg"
        },
        price: 1800
    },
    {
        title: "Magic Kit",
        description: "A kit with tricks and props for young magicians.",
        image: {
            filename: "listingimage",
            url: "https://m.media-amazon.com/images/I/51XrIKgBP+L.jpg"
        },
        price: 1200
    },
    {
        title: "Robot Dog",
        description: "A robotic dog that barks, walks, and responds to commands.",
        image: {
            filename: "listingimage",
            url:"https://th.bing.com/th/id/OIP.0qyCFzA3Q1zRacJybj5_eAHaHa?rs=1&pid=ImgDetMain"
        },
        price: 3500
    },
    {
        title: "Water Gun",
        description: "A high-pressure water gun for summer fun.",
        image: {
            filename: "listingimage",
            url:"https://th.bing.com/th/id/OIP.iBgVOsvEMaSeEC68CcOq_wHaHV?rs=1&pid=ImgDetMain"
        },
        price: 400
    },
    {
        title: "Kids' Art Set",
        description: "A complete art set with crayons, markers, and drawing paper.",
        image: {
            filename: "listingimage",
            url:"https://m.media-amazon.com/images/I/7112TNSs8bL._AC_SL1280_.jpg"
        },
        price: 900
    },
    {
        title: "Ride-On Toy Car",
        description: "A battery-operated ride-on car for kids.",
        image: {
            filename: "listingimage",
            url: "https://m.media-amazon.com/images/I/81h+Nphld6L._SL1500_.jpg"
        },
        price: 5000
    },
    {
        title: "Toy Plane",
        description: "A realistic toy plane with sound and light effects.",
        image: {
            filename: "listingimage",
            url:"https://images-na.ssl-images-amazon.com/images/I/61CizvhfcbL.jpg"
        },
        price: 1100
    },
    {
        title: "Fishing Game",
        description: "A magnetic fishing game with multiple fish and rods.",
        image: {
            filename: "listingimage",
            url:"https://i5.walmartimages.com/asr/c66d384f-d75e-4161-a557-90bd368898be_1.5d53877b86be6e1cb2a176633f024ae3.png"
        },
        price: 600
    },
    {
        title: "RC Monster Truck",
        description: "A remote-controlled monster truck with off-road capabilities.",
        image: {
            filename: "listingimage",
            url:"https://i5.walmartimages.com/asr/411acae4-643b-49e5-a745-03cb1351c264.5eb52f173405329483b1612aeafc5140.jpeg"
        },
        price: 2700
    },
    {
        title: "Play Tent",
        description: "A colorful play tent for indoor and outdoor adventures.",
        image: {
            filename: "listingimage",
            url:"https://th.bing.com/th/id/OIP.TOva5CPvfjnGxqmoXd4F9AHaHa?rs=1&pid=ImgDetMain"
        },
        price: 2200
    }
];

module.exports = { data : sampleListings };