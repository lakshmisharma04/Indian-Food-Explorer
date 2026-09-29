import type { Product } from "../types/product";

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

function createDish(
  id: number,
  title: string,
  category: string,
  price: number,
  rating: number,
  region: string,
  prepTime: number,
  spiceLevel: Product["spiceLevel"],
  dietary: Product["dietary"],
  ingredients: string[],
  description: string,
): Product {
  return {
    id,
    title,
    category,
    price,
    rating,
    region,
    prepTime,
    spiceLevel,
    dietary,
    ingredients,
    description,
    thumbnail: `/food/${String(id).padStart(2, "0")}.jpg`,
  };
}

const indianFoods: Product[] = [
  createDish(1, "Gobi Manchurian", "snacks", 180, 4.8, "Indo-Chinese", 30, "Hot", "Vegetarian", ["Cauliflower", "Ginger", "Garlic", "Chilli"], "Crisp cauliflower tossed in a tangy, chilli-garlic sauce with scallions."),
  createDish(2, "Pani Puri", "chaat", 90, 4.9, "Mumbai", 20, "Medium", "Vegetarian", ["Semolina puri", "Potato", "Mint", "Tamarind"], "Hollow, crunchy puris filled with spiced potato and bright mint-tamarind water."),
  createDish(3, "Dahi Puri", "chaat", 110, 4.7, "Mumbai", 20, "Mild", "Vegetarian", ["Puri", "Yogurt", "Chutneys", "Sev"], "Crisp puris layered with cool yogurt, sweet chutney, fresh herbs, and sev."),
  createDish(4, "Bhel Puri", "chaat", 100, 4.6, "Mumbai", 15, "Medium", "Vegetarian", ["Puffed rice", "Chutneys", "Onion", "Sev"], "A lively mix of puffed rice, crunchy sev, vegetables, and sweet-spicy chutneys."),
  createDish(5, "Sev Puri", "chaat", 100, 4.6, "Mumbai", 20, "Medium", "Vegetarian", ["Potato", "Sev", "Mint chutney", "Tamarind"], "Little crisp puris piled with potato, chutneys, onion, and a generous shower of sev."),
  createDish(6, "Papdi Chaat", "chaat", 120, 4.7, "Delhi", 25, "Mild", "Vegetarian", ["Papdi", "Chickpeas", "Yogurt", "Chutneys"], "Golden papdi, chickpeas, and yogurt finished with a sweet-and-tangy chaat masala."),
  createDish(7, "Aloo Tikki Chaat", "chaat", 140, 4.8, "Delhi", 30, "Medium", "Vegetarian", ["Potato", "Chickpeas", "Yogurt", "Chutneys"], "Golden potato patties topped with chickpeas, cool yogurt, and lively chutneys."),
  createDish(8, "Samosa Chaat", "chaat", 150, 4.8, "Delhi", 30, "Medium", "Vegetarian", ["Samosa", "Chickpeas", "Yogurt", "Chutneys"], "A flaky samosa broken over warm chickpeas and finished with yogurt and chutneys."),
  createDish(9, "Masala Dosa", "south-indian", 160, 4.8, "Karnataka", 25, "Mild", "Vegetarian", ["Rice", "Lentils", "Potato", "Coconut chutney"], "A crisp fermented rice-and-lentil crepe wrapped around spiced potato masala."),
  createDish(10, "Mysore Masala Dosa", "south-indian", 190, 4.7, "Mysuru", 30, "Hot", "Vegetarian", ["Rice", "Lentils", "Red chutney", "Potato"], "A golden dosa layered with fiery red chutney and a savory potato filling."),
  createDish(11, "Idli Sambar", "south-indian", 120, 4.7, "Tamil Nadu", 25, "Mild", "Vegetarian", ["Rice", "Lentils", "Sambar", "Coconut chutney"], "Soft steamed rice cakes served with fragrant lentil sambar and coconut chutney."),
  createDish(12, "Medu Vada", "south-indian", 110, 4.6, "Tamil Nadu", 25, "Medium", "Vegetarian", ["Urad dal", "Pepper", "Curry leaves", "Sambar"], "Crisp-edged lentil doughnuts with a soft centre, served with sambar and chutney."),
  createDish(13, "Onion Uttapam", "south-indian", 150, 4.5, "Tamil Nadu", 25, "Mild", "Vegetarian", ["Rice", "Lentils", "Onion", "Tomato"], "A fluffy, savoury rice pancake topped with onion, tomato, and fresh coriander."),
  createDish(14, "Ven Pongal", "south-indian", 130, 4.6, "Tamil Nadu", 25, "Mild", "Vegetarian", ["Rice", "Moong dal", "Black pepper", "Ghee"], "Comforting rice and lentils tempered with pepper, cumin, curry leaves, and ghee."),
  createDish(15, "Appam with Vegetable Stew", "south-indian", 190, 4.6, "Kerala", 35, "Mild", "Vegetarian", ["Rice", "Coconut milk", "Vegetables", "Curry leaves"], "Lacy, fermented rice hoppers paired with a gentle coconut-milk vegetable stew."),
  createDish(16, "Hyderabadi Chicken Biryani", "biryani", 280, 4.9, "Hyderabad", 55, "Hot", "Non-vegetarian", ["Basmati rice", "Chicken", "Saffron", "Mint"], "Aromatic dum-cooked basmati layered with marinated chicken, herbs, and warm spices."),
  createDish(17, "Hyderabadi Vegetable Biryani", "biryani", 220, 4.7, "Hyderabad", 45, "Medium", "Vegetarian", ["Basmati rice", "Seasonal vegetables", "Saffron", "Mint"], "Fragrant dum-style rice with vegetables, herbs, saffron, and toasted whole spices."),
  createDish(18, "Lucknowi Chicken Dum Biryani", "biryani", 300, 4.8, "Lucknow", 60, "Mild", "Non-vegetarian", ["Basmati rice", "Chicken", "Yogurt", "Rose water"], "Delicately spiced Awadhi biryani, slow-cooked in a sealed pot until beautifully fragrant."),
  createDish(19, "Kolkata Biryani", "biryani", 290, 4.7, "Kolkata", 55, "Mild", "Non-vegetarian", ["Basmati rice", "Chicken", "Potato", "Saffron"], "Aromatic Kolkata-style biryani with tender chicken, fragrant rice, and its signature potato."),
  createDish(20, "Egg Biryani", "biryani", 230, 4.6, "Tamil Nadu", 40, "Medium", "Non-vegetarian", ["Basmati rice", "Egg", "Onion", "Biryani masala"], "Spiced basmati rice layered with seasoned eggs, caramelised onion, and fresh mint."),
  createDish(21, "Butter Chicken", "curry", 320, 4.9, "Delhi", 40, "Mild", "Non-vegetarian", ["Chicken", "Tomato", "Cream", "Fenugreek"], "Tandoor-kissed chicken in a silky tomato, butter, and fenugreek sauce."),
  createDish(22, "Paneer Tikka Masala", "curry", 270, 4.8, "Punjab", 35, "Medium", "Vegetarian", ["Paneer", "Tomato", "Cream", "Garam masala"], "Charred paneer cubes simmered in a creamy tomato masala with warming spices."),
  createDish(23, "Palak Paneer", "curry", 250, 4.7, "Punjab", 35, "Mild", "Vegetarian", ["Spinach", "Paneer", "Garlic", "Cream"], "Soft paneer in a velvety spinach gravy tempered with garlic and fragrant spices."),
  createDish(24, "Chole Bhature", "curry", 210, 4.8, "Punjab", 40, "Medium", "Vegetarian", ["Chickpeas", "Tomato", "Flour", "Pickle"], "Tangy, slow-simmered chickpeas paired with a puffed, golden-fried bhatura."),
  createDish(25, "Dal Makhani", "curry", 240, 4.8, "Punjab", 50, "Mild", "Vegetarian", ["Black lentils", "Kidney beans", "Butter", "Cream"], "Black lentils and kidney beans simmered low and slow with butter and gentle spices."),
  createDish(26, "Rajma Chawal", "curry", 190, 4.7, "North India", 45, "Medium", "Vegetarian", ["Kidney beans", "Tomato", "Rice", "Garam masala"], "Homestyle kidney beans in a rich tomato gravy, served with steamed rice."),
  createDish(27, "Goan Fish Curry", "curry", 310, 4.7, "Goa", 40, "Hot", "Non-vegetarian", ["Fish", "Coconut", "Kokum", "Red chilli"], "Tangy coastal fish curry with coconut, kokum, and a bright red-chilli masala."),
  createDish(28, "Pav Bhaji", "street-food", 180, 4.8, "Mumbai", 35, "Medium", "Vegetarian", ["Mixed vegetables", "Pav", "Butter", "Lemon"], "Buttery mashed vegetables cooked on a hot griddle and served with toasted pav."),
  createDish(29, "Vada Pav", "street-food", 90, 4.7, "Mumbai", 25, "Hot", "Vegetarian", ["Potato", "Gram flour", "Pav", "Garlic chutney"], "A spiced potato fritter tucked into a soft bun with punchy dry garlic chutney."),
  createDish(30, "Misal Pav", "street-food", 160, 4.7, "Maharashtra", 40, "Hot", "Vegetarian", ["Sprouted beans", "Farsan", "Pav", "Coconut"], "A fiery sprouted-bean curry topped with crunchy farsan and served with pav."),
  createDish(31, "Paneer Kathi Roll", "street-food", 190, 4.6, "Kolkata", 30, "Medium", "Vegetarian", ["Paneer", "Flatbread", "Onion", "Mint chutney"], "Tandoori paneer, crunchy onion, and chutney rolled up in a flaky flatbread."),
  createDish(32, "Samosa", "snacks", 50, 4.7, "North India", 30, "Medium", "Vegetarian", ["Potato", "Peas", "Pastry", "Cumin"], "A crisp, triangular pastry packed with warmly spiced potato and green peas."),
  createDish(33, "Paneer Tikka", "snacks", 240, 4.8, "Punjab", 35, "Medium", "Vegetarian", ["Paneer", "Yogurt", "Bell pepper", "Tandoori masala"], "Yogurt-marinated paneer and peppers charred with classic tandoori spices."),
  createDish(34, "Onion Pakora", "snacks", 100, 4.5, "Maharashtra", 25, "Medium", "Vegetarian", ["Onion", "Gram flour", "Carom seeds", "Chilli"], "Crispy onion fritters with carom, chilli, and a fresh coriander chutney."),
  createDish(35, "Butter Naan", "breads", 55, 4.7, "Punjab", 20, "Mild", "Vegetarian", ["Flour", "Yogurt", "Butter", "Nigella seeds"], "Soft, blistered naan brushed with butter, made for scooping up rich curries."),
  createDish(36, "Garlic Naan", "breads", 70, 4.8, "Punjab", 20, "Mild", "Vegetarian", ["Flour", "Garlic", "Butter", "Coriander"], "Tandoor-baked naan finished with chopped garlic, coriander, and melted butter."),
  createDish(37, "Aloo Paratha", "breads", 120, 4.6, "Punjab", 30, "Medium", "Vegetarian", ["Whole wheat", "Potato", "Cumin", "Yogurt"], "Whole-wheat flatbread stuffed with spiced potato and griddled until golden."),
  createDish(38, "Gulab Jamun", "desserts", 100, 4.8, "North India", 25, "Mild", "Vegetarian", ["Milk solids", "Cardamom", "Rose syrup", "Pistachio"], "Soft milk-solid dumplings soaked in a fragrant cardamom and rose-scented syrup."),
  createDish(39, "Jalebi", "desserts", 90, 4.7, "North India", 30, "Mild", "Vegetarian", ["Flour", "Yogurt", "Saffron", "Sugar syrup"], "Golden, crisp spirals soaked in saffron syrup and served warm."),
  createDish(40, "Rasmalai", "desserts", 130, 4.8, "Bengal", 35, "Mild", "Vegetarian", ["Chenna", "Milk", "Saffron", "Pistachio"], "Delicate chenna cakes resting in chilled saffron milk with a pistachio finish."),
  createDish(41, "Kulfi", "desserts", 80, 4.6, "North India", 15, "Mild", "Vegetarian", ["Milk", "Cardamom", "Pistachio", "Saffron"], "Dense, slow-reduced frozen milk flavoured with cardamom and toasted nuts."),
  createDish(42, "Kheer", "desserts", 110, 4.5, "North India", 40, "Mild", "Vegetarian", ["Rice", "Milk", "Cardamom", "Almond"], "Creamy rice pudding gently simmered with milk, cardamom, and slivered almonds."),
  createDish(43, "Mango Lassi", "drinks", 100, 4.7, "Punjab", 10, "Mild", "Vegetarian", ["Mango", "Yogurt", "Cardamom", "Saffron"], "A cool, creamy blend of ripe mango, yogurt, and a pinch of cardamom."),
  createDish(44, "Masala Chai", "drinks", 50, 4.8, "North India", 12, "Medium", "Vegetarian", ["Black tea", "Milk", "Ginger", "Cardamom"], "Strong Indian tea simmered with milk, ginger, cardamom, and warming spices."),
  createDish(45, "Filter Coffee", "drinks", 65, 4.7, "Tamil Nadu", 12, "Mild", "Vegetarian", ["Coffee", "Milk", "Jaggery"], "South Indian filter coffee, strong and aromatic, poured high for its signature froth."),
  createDish(46, "Punjabi Veg Thali", "thali", 280, 4.8, "Punjab", 45, "Medium", "Vegetarian", ["Dal", "Seasonal curry", "Roti", "Rice"], "A generous regional platter with dal, seasonal sabzi, roti, rice, pickle, and dessert."),
  createDish(47, "South Indian Mini Tiffin", "thali", 240, 4.7, "Tamil Nadu", 40, "Mild", "Vegetarian", ["Idli", "Vada", "Pongal", "Sambar"], "A little of everything: soft idli, crisp vada, comforting pongal, and sambar."),
  createDish(48, "Chicken Chettinad", "curry", 330, 4.8, "Tamil Nadu", 50, "Hot", "Non-vegetarian", ["Chicken", "Black pepper", "Coconut", "Curry leaves"], "A bold Chettinad chicken curry with toasted spices, black pepper, and coconut."),
];

export async function getProducts(signal?: AbortSignal): Promise<Product[]> {
  if (signal?.aborted) throw new DOMException("The request was aborted.", "AbortError");
  return indianFoods;
}

export async function getProductById(id: number, signal?: AbortSignal): Promise<Product> {
  if (signal?.aborted) throw new DOMException("The request was aborted.", "AbortError");
  const dish = indianFoods.find((item) => item.id === id);
  if (!dish) throw new ApiError("Dish not found", 404);
  return dish;
}
