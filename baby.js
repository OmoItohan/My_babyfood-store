// function babyFood() {
//     var names = document.getElementById('name')
//     names.innerHTML = 'Itohan'
//     var price = document.getElementById('price')
//     price.innerHTML = 'eunice'  
// }
var names = document.getElementById('name')
names.innerHTML = 'Name'
var price = document.getElementById('price')
price.innerHTML = 'Price' 

function babyFood(bfName) {
    switch (bfName) {
    case "cere1":
        names.innerHTML = 'Cerelac Mixed fruits & Wheat'
        price.innerHTML = '$30.0'
        break;
    case "cere2":
        names.innerHTML = 'Cerelac Rice with Milk'
        price.innerHTML = '$50.0'
        break;
    case "cere3":
        names.innerHTML = 'Cerelac Wheat Cereal with Milk'
        price.innerHTML = '$100.0'
        break;
    case "sma1":
        names.innerHTML = 'SMA PRO 3'
        price.innerHTML = '$80.0'
        break;
    case "sma2":
        names.innerHTML = 'SMA PRO 1'
        price.innerHTML = '$70.0'
        break;
    case "sma3":
        names.innerHTML = 'SMA Advanced 1'
        price.innerHTML = '$120.0'
        break;
    case "nutri1":
        names.innerHTML = 'Nutribom MultiGrain'
        price.innerHTML = '$300.0'
        break;
    case "nutri2":
        names.innerHTML = 'Nutribom Oats'
        price.innerHTML = '$700.0'
        break;
    case "nutri3":
        names.innerHTML = 'Nutribom Banana and Apple'
        price.innerHTML = '$1000.0'
        break;
        
    default:
        names.innerHTML = null
        price.innerHTML = null
        break;
}

//     if (bfName == "cere1"){
//         names.innerHTML = 'cerelac wheat'
//         price.innerHTML = 30.0
//     };
}
