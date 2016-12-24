var order = {
}

function getRadioSelected(Name) {

}

function SizePrice() {
    var elements = document.getElementsByName("Size");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            order.size = elements[i].id;
            return parseFloat(elements[i].value);
        }
    }
}

function MeatPrice() {
    var price = 0;
    var Meats = [];
    var elements = document.getElementsByName("Meat");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            price += 2.0;
            Meats.push(elements[i].value)
        }
    }
    order.meats = Meats;
    return price;
}

function CheesePrice() {

    var cheeseElements = document.getElementsByName("Cheese");
    for (var i = 0; i < cheeseElements.length; i++) {
        if (cheeseElements[i].checked){
            var cheese = cheeseElements[i].id;
            if (cheese != "CheeseExtra") {
                cheese == "CheeseRegular" ? order.cheese = "Regular" : order.cheese = "No Cheese";
                return 0;
            }
            order.cheese = "Extra Cheese"
        }
    }

    var sizeElements = document.getElementsByName("Size");
    for (var i = 0; i < sizeElements.length; i++) {
        if (sizeElements[i].checked) {
            var size = sizeElements[i].id;
        }
    }

    if(size=="Personal") return 1.0;
    else if(size=="Medium") return 2.0;
    else if(size=="Large") return 3.0;
    else if(size=="X-Large") return 4.0;
    else return false;
    return false;
}

function CrustPrice () {
    var elements = document.getElementsByName("Crust");
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            order.crust = elements[i].value;
            if (elements[i].id == "CrustStuffed") {
                order.crust = "Cheese Stuffed Crust";
                return 3.0;
            } else {
                return 0;
            }
        }
    }
    return false;
}

function VeggiesPrice() {
    var elements = document.getElementsByName("Veggies");
    var Veggies = [];
    var price = 0;
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            Veggies.push(elements[i].value);
            price += 2.0;
        }
    }
    order.veggies = Veggies;
    return price;
}

function GetPrice() {
    var price = 0.0;
    console.log(price);
    price += SizePrice();
    console.log(price);
    price += CrustPrice();
    console.log(price);
    price += MeatPrice();
    console.log(price);
    price += CheesePrice();
    console.log(price);
    price += VeggiesPrice();
    order.price = price;
    GetReceiptInfo();
}

function GetReceiptInfo() {
    document.getElementById("Size").innerHTML = order.size;
    document.getElementById("SizePrice").innerHTML = "$"+SizePrice();
    document.getElementById("Meats").innerHTML = order.meats;
    document.getElementById("MeatPrice").innerHTML = "$" + (MeatPrice());
    document.getElementById("Cheese").innerHTML = order.cheese;
    document.getElementById("CheesePrice").innerHTML = "$" + CheesePrice();
    document.getElementById("Crust").innerHTML = order.crust;
    document.getElementById("CrustPrice").innerHTML = "$" + CrustPrice();
    document.getElementById("Veggies").innerHTML = order.veggies;
    document.getElementById("VeggiesPrice").innerHTML = "$" + VeggiesPrice();
    document.getElementById("TotalPrice").innerHTML = "$" + order.price;
}