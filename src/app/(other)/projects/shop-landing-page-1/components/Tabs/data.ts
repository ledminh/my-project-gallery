import sample1JPG from "../../assets/images/sample-1.jpg";
import sample2JPG from "../../assets/images/sample-2.jpg";
import sample3JPG from "../../assets/images/sample-3.jpg";
import sample4JPG from "../../assets/images/sample-4.jpg";
import sample5JPG from "../../assets/images/sample-5.jpg";
import sample6JPG from "../../assets/images/sample-6.jpg";
import sample7JPG from "../../assets/images/sample-7.jpg";
import sample8JPG from "../../assets/images/sample-8.jpg";
import sample9JPG from "../../assets/images/sample-9.jpg";
import sample10JPG from "../../assets/images/sample-10.jpg";

const newArrivals = [
  {
    id: "product-1",
    name: "Man Shirt",
    slug: "man-shirt",
    price: 100,
    image: sample1JPG,
  },
  {
    id: "product-2",
    name: "Women Hoodie",
    slug: "women-hoodie",
    price: 150,
    image: sample2JPG,
  },
  {
    id: "product-3",
    name: "Woman T-Shirt",
    slug: "woman-t-shirt",
    price: 50,
    image: sample3JPG,
  },
  {
    id: "product-4",
    name: "Black Cap",
    slug: "black-cap",
    price: 20,
    image: sample4JPG,
  },
  {
    id: "product-5",
    name: "Man T-Shirt",
    slug: "man-t-shirt",
    price: 40,
    image: sample5JPG,
  },
  {
    id: "product-6",
    name: "Woman Shirt",
    slug: "woman-shirt",
    price: 60,
    image: sample6JPG,
  },
  {
    id: "product-7",
    name: "Man Sowtter",
    slug: "man-sowtter",
    price: 80,
    image: sample7JPG,
  },
  {
    id: "product-8",
    name: "Socks",
    slug: "socks",
    price: 10,
    image: sample8JPG,
  },
];

const bestSellers = [
  {
    id: "product-11",
    name: "Woman Hoodie",
    slug: "woman-hoodie",
    price: 120,
    image: sample9JPG,
  },
  {
    id: "product-12",
    name: "Man Jacket",
    slug: "man-jacket",
    price: 180,
    image: sample10JPG,
  },
  {
    id: "product-9",
    name: "Woman Dress",
    slug: "woman-dress",
    price: 90,
    image: sample1JPG,
  },
  {
    id: "product-10",
    name: "Man Pants",
    slug: "man-pants",
    price: 70,
    image: sample2JPG,
  },
  {
    id: "product-13",
    name: "Woman Skirt",
    slug: "woman-skirt",
    price: 65,
    image: sample3JPG,
  },
  {
    id: "product-14",
    name: "Man Shorts",
    slug: "man-shorts",
    price: 30,
    image: sample4JPG,
  },
  {
    id: "product-15",
    name: "Woman Blouse",
    slug: "woman-blouse",
    price: 55,
    image: sample5JPG,
  },
  {
    id: "product-16",
    name: "Man Sweater",
    slug: "man-sweater",
    price: 75,
    image: sample6JPG,
  },
];

const trendingProducts = [
  ...newArrivals.slice(0, 4),
  ...bestSellers.slice(0, 4),
];

const summerEssentials = [
  {
    id: "product-17",
    name: "Beach Towel",
    slug: "beach-towel",
    price: 25,
    image: sample7JPG,
  },
  {
    id: "product-18",
    name: "Sunscreen",
    slug: "sunscreen",
    price: 15,
    image: sample8JPG,
  },
  {
    id: "product-19",
    name: "Sunglasses",
    slug: "sunglasses",
    price: 50,
    image: sample9JPG,
  },
  {
    id: "product-20",
    name: "Flip Flops",
    slug: "flip-flops",
    price: 30,
    image: sample10JPG,
  },
  {
    id: "product-21",
    name: "Beach Bag",
    slug: "beach-bag",
    price: 40,
    image: sample1JPG,
  },
  {
    id: "product-22",
    name: "Swimsuit",
    slug: "swimsuit",
    price: 60,
    image: sample2JPG,
  },
  {
    id: "product-23",
    name: "Water Bottle",
    slug: "water-bottle",
    price: 20,
    image: sample3JPG,
  },
  {
    id: "product-24",
    name: "Beach Hat",
    slug: "beach-hat",
    price: 35,
    image: sample4JPG,
  },
];

const data = [
  {
    id: "new-arrivals",
    name: "New Arrivals",
    products: newArrivals,
  },
  {
    id: "best-sellers",
    name: "Best Sellers",
    products: bestSellers,
  },
  {
    id: "trending-products",
    name: "Trending Products",
    products: trendingProducts,
  },
  {
    id: "summer-essentials",
    name: "Summer Essentials",
    products: summerEssentials,
  },
];

export default data;
