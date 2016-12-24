function getInputSelected(Name) {
    var elements = document.getElementsByName(Name);
    var result = [];
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].checked) {
            result.push(elements[i].value);
        }
    }
    return result;
}

function GetOrder() {
    var order = {};
    order.size = getInputSelected("Size");
    order.meat = getInputSelected("Meat");
    order.cheese = getInputSelected("Cheese");
    order.crust = getInputSelected("Crust");
    order.sauce = getInputSelected("Sauce");
    order.veggies = getInputSelected("Veggies");

    return order;
}

function float(f) {
    return parseFloat(f);
}

function GetExtraCheesePrice(cheese, size) {
    if (cheese == "Extra Cheese") {
        if(size=="Personal") return 1.0;
        else if(size=="Medium") return 2.0;
        else if (size == "Large") return 3.0;
        else if(size=="X-Large") return 4.0;
    } else {
        return 0.0;
    }
}

function GetBasePrice(size){
    if(size=="Personal") return 6.0;
    else if(size=="Medium") return 10.0;
    else if (size == "Large") return 14.0;
    else if(size=="X-Large") return 16.0;
}

function GetPriceDetails(order) {
    var priceDetails = {
        base: float(GetBasePrice(order.size[0])),
        meat: float(order.meat.length * 2.0),
        crust: 0.0,
        veggies: float(order.veggies.length * 2.0),
        cheese: GetExtraCheesePrice(order.cheese[0], order.size[0]),
        total: 0.0
    };
    if (order.crust == "Stuffed Cheese Crust") priceDetails.crust = float(3.0);
    var total = 0.0;
    for (var k in priceDetails) {
        total += priceDetails[k];
    }
    priceDetails.total = total;
    return priceDetails;
}

function GetReceiptInfo() {
    var element = document.getElementById("OrderSummary");
    element.style = "display: block";
    var order = GetOrder();
    var details = GetPriceDetails(order);
    document.getElementById("Size").innerHTML = order.size;
    document.getElementById("SizePrice").innerHTML = "$" + details.base;
    order.meat.length != 0 ?
        document.getElementById("Meats").innerHTML = order.meat : document.getElementById("Meats").innerHTML = "No Meats";
    document.getElementById("MeatPrice").innerHTML = "$" + details.meat;
    document.getElementById("Cheese").innerHTML = order.cheese;
    document.getElementById("CheesePrice").innerHTML = "$" + details.cheese;
    document.getElementById("Crust").innerHTML = order.crust;
    document.getElementById("CrustPrice").innerHTML = "$" + details.crust;
    order.veggies.length != 0 ?
        document.getElementById("Veggies").innerHTML = order.veggies : document.getElementById("Veggies").innerHTML = "No Veggies";    
    document.getElementById("VeggiesPrice").innerHTML = "$" + details.veggies;
    document.getElementById("TotalPrice").innerHTML = "$" + details.total;
}