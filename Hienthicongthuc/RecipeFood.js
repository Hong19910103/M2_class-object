var RecipeFood = {
    title: "sườn xào chua ngọt",
    servings: 2,
    ingredients: ["400 gr sườn thăn", "4 tpsp nước mắn", "đường", "nước cốt chanh", " nước sôi", "hành khô, tỏi", "cà chua"]
};
console.log("Tên món ăn là: " + RecipeFood.title);
console.log("Khẩu phần ăn là: " + RecipeFood.servings);
// console.log("Thành phần : "+ RecipeFood.ingredients);
for (var i = 0; i < RecipeFood.ingredients.length; i++) {
    console.log(" - " + RecipeFood.ingredients[i]);
}
