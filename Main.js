// const navlink = document.getElementsByClassName('nav-link');

// navlink[0].addEventListener('hovermouseover', (e) => {

//     console.log(navlink[0]);
//     navlink[0].setAttribute

// });

//function that dynamically adds the product to the users cart.

//all cart 
class CartManager {
    constructor() {
        
    }

    // cart = [];

    addtoCart() {
        // this.cart
    }
    removefromCart() {

    }
    emptyCart() {
        //while cart is not empty, remove items (or delete cart?)
    }
}

console.log(CartManager);

class Product {
    constructor(id, label, price) {
        
        //input parameters
        this.id = id;
        this.label = label;
        this.price = price;

        //other parameters
        this.quantity = 0;
        this.favorites = 0;
        this.reviews = 0;
        this.comments = [];
    }
    
}

const myBelt = new Product(1, 'belt', 10.00);

console.log(myBelt);

