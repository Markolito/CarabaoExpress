let cartItem = [];
let cartPrice = [];
let cartTotal = 0;
const bowl = ["Bowl", 7.99];
const largeBox = ["Large Box", 9.99];
const boodleBox = ["Boodle Box", 14.99];

const chickenAdobo = ["Chicken Adobo", 8.99];
const yumYumLechonKawali = ["Yum Yum Lechon Kawali", 11.99];
const lechonCrispySisig = ["Lechon Crispy Sisig", 8.99];
const sweetLonganisa = ["Sweet Longanisa", 8.99];
const porkTocino = ["Pork Tocino", 8.99];
const beefTapa = ["Beef Tapa", 10.99];
const pancitPalabok = ["Pancit Palabok", 8.99];
const pancitNoodles = ["Pancit Noodles", 6.99];
const whiteRice = ["White Rice", 3.99];
const garlicRice = ["Garlic Rice", 4.99];
const veggieStirFry = ["Veggie Stir Fry", 6.99];
const pickledRedOnions = ["Pickled Red Onions", 3.99];

const lumpiaShanghai = ["Lumpia Shanghai", 1.25];
const veggieLumpia = ["Veggie Lumpia", 1.00];
const myNewDish = ["My New Dish", 4.99];

const bananaTuron = ["Banana Turon", 1.75];
const pineappleDoleWhip = ["Pineapple Dole Whip", 3.50];
const doleWhipFloat = ["Dole Whip Float", 5.50];
const kidsCone = ["Kids Cone", 1.00];

$(function(){
    $("#cartButton").click(function() {
        for(i = 0; i < cartItem.length; i++){ 
            var col1 = document.createElement("div");                          
            col1.classList.add("col");  
            col1.innerHTML = cartItem[i]; 
            document.getElementById("cart").appendChild(col1);                       
            var col2 = document.createElement("div");                          
            col2.classList.add("col");  
            col2.innerHTML = "$" + cartPrice[i]; 
            document.getElementById("cart").appendChild(col2); 

            if(i + 1 == cartItem.length){
                let T = parseFloat(cartTotal).toFixed(2);
                document.getElementById("cartTotals").innerHTML = "$" + T;
            }
        }
    });
    $("#continueShoppingButton").click(function() {
        for(i = 0; i < cartItem.length; i++){ 
            var cart = document.getElementById("cart");  //remove col1 from parent element div class row
            var cartrow = document.getElementById('cart');    //remove col2 from parent element div class row
         //remove row from parent element div id cart
        }
    });

    //Combo Meals
    $("#bowlButton").click(function() {
        cartPrice.push(bowl[1]);
        cartItem.push(bowl[0]);
        cartTotal += bowl[1];
        console.log(cartPrice, cartItem, cartTotal);
    });
    $("#largeBoxButton").click(function() {
        cartPrice.push(largeBox[1]);
        cartItem.push(largeBox[0]);
        cartTotal += largeBox[1];
        console.log(cartPrice, cartItem, cartTotal);
    });
    $("#boodleBoxButton").click(function() {
        cartPrice.push(boodleBox[1]);
        cartItem.push(boodleBox[0]);
        cartTotal += boodleBox[1];
        console.log(cartPrice, cartItem, cartTotal);
    });
    //A La Carte
    $("#chickenAdoboButton").click(function() {
        cartPrice.push(chickenAdobo[1]);
        cartItem.push(chickenAdobo[0]);
        cartTotal += chickenAdobo[1];
        console.log(cartPrice, cartItem, cartTotal);
    });
    $("#yumYumLechonKawaliButton").click(function() {
        cartPrice.push(yumYumLechonKawali[1]);
        cartItem.push(yumYumLechonKawali[0]);
        cartTotal += yumYumLechonKawali[1];
    });
    $("#lechonCrispySisigButton").click(function() {
        cartPrice.push(lechonCrispySisig[1]);
        cartItem.push(lechonCrispySisig[0]);
        cartTotal += lechonCrispySisig[1];
    });
    $("#sweetLonganisaButton").click(function() {
        cartPrice.push(sweetLonganisa[1]);
        cartItem.push(sweetLonganisa[0]);
        cartTotal += sweetLonganisa[1];
    });
    $("#porkTocinoButton").click(function() {
        cartPrice.pushporkTocino([1]);
        cartItem.pushporkTocino([0]);
        cartTotal += porkTocino[1];
        console.log(cartPrice, cartItem, cartTotal);
    });
    $("#beefTapaButton").click(function() {
        cartPrice.push(beefTapa[1]);
        cartItem.push(beefTapa[0]);
        cartTotal += beefTapa[1];
    });
    $("#pancitPalabokButton").click(function() {
        cartPrice.push(pancitPalabok[1]);
        cartItem.push(pancitPalabok[0]);
        cartTotal += pancitPalabok[1];
    });
    $("#pancitNoodlesButton").click(function() {
        cartPrice.push(pancitNoodles[1]);
        cartItem.push(pancitNoodles[0]);
        cartTotal += pancitNoodles[1];
    });
    $("#whiteRiceButton").click(function() {
        cartPrice.push(whiteRice[1]);
        cartItem.push(whiteRice[0]);
        cartTotal += whiteRice[1];
        console.log(cartPrice, cartItem, cartTotal);
    });
    $("#garlicRiceButton").click(function() {
        cartPrice.push(garlicRice[1]);
        cartItem.push(garlicRice[0]);
        cartTotal += garlicRice[1];
    });
    $("#veggieStirFryButton").click(function() {
        cartPrice.push(veggieStirFry[1]);
        cartItem.push(veggieStirFry[0]);
        cartTotal += veggieStirFry[1];
    });
    $("#pickledRedOnionsButton").click(function() {
        cartPrice.push(pickledRedOnions[1]);
        cartItem.push(pickledRedOnions[0]);
        cartTotal += pickledRedOnions[1];
    });

    //Apps
    $("#lumpiaShanghaiButton").click(function() {
        cartPrice.push(lumpiaShanghai[1]);
        cartItem.push(lumpiaShanghai[0]);
        cartTotal += lumpiaShanghai[1];
        console.log(cartPrice, cartItem, cartTotal);
    });
    $("#veggieLumpiaButton").click(function() {
        cartPrice.push(veggieLumpia[1]);
        cartItem.push(veggieLumpia[0]);
        cartTotal += veggieLumpia[1];
    });
    $("#myNewDishButton").click(function() {
        cartPrice.push(myNewDish[1]);
        cartItem.push(myNewDish[0]);
        cartTotal += myNewDish[1];
    });

    //Desserts
    $("#bananaTuronButton").click(function() {
        cartPrice.push(bananaTuron[1]);
        cartItem.push(bananaTuron[0]);
        cartTotal += bananaTuron[1];
        console.log(cartPrice, cartItem, cartTotal);
    });
    $("#pineappleDoleWhipButton").click(function() {
        cartPrice.push(pineappleDoleWhip[1]);
        cartItem.push(pineappleDoleWhip[0]);
        cartTotal += pineappleDoleWhip[1];
    });
    $("#doleWhipFloatButton").click(function() {
        cartPrice.push(doleWhipFloat[1]);
        cartItem.push(doleWhipFloat[0]);
        cartTotal += doleWhipFloat[1];
    });
    $("#kidsConeButton").click(function() {
        cartPrice.push(kidsCone[1]);
        cartItem.push(kidsCone[0]);
        cartTotal += kidsCone[1];
    });
});