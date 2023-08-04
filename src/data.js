const data = {
  products: [
    {
      name: "Denim",
      slug: "denim-shirt",
      category: "Shirts",
      image: "https://m.media-amazon.com/images/I/61KNBTw4K8S._AC_UL320_.jpg", // 679px × 829px
      price: 699,
      countInStock: 10,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: " Dark checked men's shirt full sleeves.",
    },
    {
      name: "Printed Shirt",
      slug: "printed-shirt",
      category: "Shirts",
      image: "https://m.media-amazon.com/images/I/71cFpnm0b6S._AC_UL320_.jpg",
      price: 1249,
      countInStock: 20,
      brand: "Adidas",
      rating: 4.0,
      numReviews: 10,
      description:
        " Men's Poly Cotton Digital Printed Stitched Half Sleeve Shirt",
    },
    {
      name: "Prime Shirt",
      slug: "prime-shirt",
      category: "Shirts",
      image: "https://m.media-amazon.com/images/I/61XkWjxqQyL._AC_UL320_.jpg",
      price: 953,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description: "IndoPrimo Men's Regular Fit Casual Shirt",
    },
    {
      name: "Cotton Shirt",
      slug: "cotton-shirt",
      category: "Shirts",
      image: "https://m.media-amazon.com/images/I/71VmkFepBML._AC_UL320_.jpg",
      price: 500,
      countInStock: 15,
      brand: "Nike",
      rating: 4.5,
      numReviews: 14,
      description:
        " Men's Striped Yellow & Black Regular Fit Cotton Casual Shirt",
    },
    {
      name: "GWA Track-pants",
      slug: "gwa-track-pants",
      category: "Pants",
      image: "https://m.media-amazon.com/images/I/71LAXQ9DHRS._AC_UL320_.jpg",
      price: 999,
      countInStock: 5,
      brand: "Puma",
      rating: 3.5,
      numReviews: 10,
      description: "Mens Trackpant diffrent color(Pack of 3)",
    },
    {
      name: "Camouflage Pant",
      slug: "camouflage-pant",
      category: "Pants",
      image: "https://m.media-amazon.com/images/I/610BjJqZ67L._AC_UL320_.jpg",
      price: 65,
      countInStock: 5,
      brand: "Adidas",
      rating: 4.5,
      numReviews: 10,
      description: "Men's Camouflage Regular Fit Track Pant",
    },
    {
      name: "Symbol Fit Pant",
      slug: "symbol-fit-pant",
      category: "Pants",
      image: "https://m.media-amazon.com/images/I/718kU7VISWL._AC_UL320_.jpg",
      price: 699,
      countInStock: 5,
      brand: "Puma",
      rating: 5.0,
      numReviews: 10,
      description: " Men's Straight Casual Trousers Light Gray Color.",
    },
    {
      name: "Urbano Jeans",
      slug: "urbano-jeans",
      category: "Pants",
      image: "https://m.media-amazon.com/images/I/71m0W58-zQL._AC_UL320_.jpg",
      price: 365,
      countInStock: 5,
      brand: "Nike",
      rating: 4.5,
      numReviews: 10,
      description: "Men's slim fit blue pencil jeans",
    },
    {
      name: "Kurta Set",
      slug: "kurta-set",
      category: "Dress",
      image: "https://m.media-amazon.com/images/I/71lOb02ErwL._UY741_.jpg",
      price: 1647,
      countInStock: 2,
      brand: "Urbanic",
      rating: 4.9,
      numReviews: 9,
      description:
        " Miss Ethnik Women's Faux Georgette Semi Stitched Top With Stitched Faux.",
    },
    {
      name: "Checked Frock",
      slug: "checked-frock",
      category: "Dress",
      image: "https://m.media-amazon.com/images/I/71XGtXJG-3L._AC_UL320_.jpg",
      price: 365,
      countInStock: 5,
      brand: "Zara",
      rating: 4.5,
      numReviews: 10,
      description: "Frock above knee length, elbow length sleeves checked.",
    },
    {
      name: "Pink Dress",
      slug: "pink-dress",
      category: "Dress",
      image: "https://m.media-amazon.com/images/I/61XnG8ZA3lL._AC_UL320_.jpg",
      price: 1439,
      countInStock: 5,
      brand: "Urbanic",
      rating: 4.0,
      numReviews: 10,
      description:
        " Women's Polyester comfortable A-Line Knee-Length, sleevless Dress",
    },
    {
      name: "Black Knee-L Dress",
      slug: "black-knee-l-dress",
      category: "Dress",
      image: "https://m.media-amazon.com/images/I/51G9HRFhtrL._AC_UL320_.jpg",
      price: 789,
      countInStock: 5,
      brand: "Zara",
      rating: 4.5,
      numReviews: 10,
      description: "Women's High-low Knee Length Dress",
    },

    {
      name: "A Line Maxi Dress",
      slug: "a-line-maxi-dress",
      category: "Dress",
      image: "https://m.media-amazon.com/images/I/71vELrB1BmL._AC_UL320_.jpg",
      price: 349,
      countInStock: 5,
      brand: "Urbano",
      rating: 4.2,
      numReviews: 9,
      description: "Full length maxi dress, pink color.",
    },
    {
      name: "Dhoti",
      slug: "dhoti-pant",
      category: "Pants",
      image: "https://m.media-amazon.com/images/I/71q4AwDmxKL._AC_UL320_.jpg",
      price: 599,
      countInStock: 4,
      brand: "Zara",
      rating: 3.9,
      numReviews: 9,
      description: "Men's Free size Dhoti off brown color.",
    },
    {
      name: "Baby Flannel",
      slug: "baby-flannel",
      category: "Kids",
      image: "https://m.media-amazon.com/images/I/61kqhTCKtgL._AC_UL320_.jpg",
      price: 799,
      countInStock: 4,
      brand: "P&G",
      rating: 4.2,
      numReviews: 8,
      description: "Unisex Baby Flannel Jumpsuit Panda Style.",
    },
    {
      name: "Traditionals",
      slug: "traditionals",
      category: "Kids",
      image: "https://m.media-amazon.com/images/I/61Tu7AD5tDL._UY550_.jpg",
      price: 1349,
      countInStock: 7,
      brand: "P&G",
      rating: 4.9,
      numReviews: 6,
      description: "Creation Boys' Black Cotton Blend Sherwani.",
    },
    {
      name: "Mickey Frock",
      slug: "mickey-frock",
      category: "Kids",
      image: "https://m.media-amazon.com/images/I/31BZCo3lsSL.jpg",
      price: 700,
      countInStock: 10,
      brand: "P&G",
      rating: 3.2,
      numReviews: 8,
      description: "woonie Baby Girl's Fit And Flare Frock Set.",
    },
    {
      name: "Night Suit",
      slug: "night-suit",
      category: "Kids",
      image: "https://m.media-amazon.com/images/I/71C4Q55SQAL._AC_UL320_.jpg",
      price: 799,
      countInStock: 6,
      brand: "P&G",
      rating: 3.7,
      numReviews: 5,
      description: "Kids blue Cotton Printed Pyjama Set Pack.",
    },
    {
      name: "Night Suit",
      slug: "night-suit",
      category: "Kids",
      image: "https://m.media-amazon.com/images/I/71C4Q55SQAL._AC_UL320_.jpg",
      price: 799,
      countInStock: 6,
      brand: "P&G",
      rating: 3.7,
      numReviews: 5,
      description: "Kids blue Cotton Printed Pyjama Set Pack.",
    },
  ],
};
export default data;