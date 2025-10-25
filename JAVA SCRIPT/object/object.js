let supermarket = { name:"Kanchi SuperMarket"};
console.log(supermarket);

let superMarket_address = { address:" 31st street little kanchipuram"};
console.log(superMarket_address);

let superMarketLocation= {location1:"Kanchipuram",location2:{location3:"Chennai",location4:"Chengalpattu"}};
console.log(superMarketLocation.location2.location3);

let items_category = { item:"snacks, groceries, homly needs"};
console.log(items_category);

let itemName = { item:"lays"};
console.log(itemName);

let rate = { flavour:"salted"};
console.log(rate);

let item_Rate = { Rate:"Thirty rupees"};
console.log(item_Rate);

let otherItems = {item1:"dishwasher bar",item:{item2:"medimix soap",item3:"mop"}};
console.log(otherItems.item.item3);

let totalItems = {total:1,total2:{lays:1,mop:2}};
console.log(totalItems.total2.mop);

let desert_name = [{dessert1:"Icecream",dessert2:{sweet1:"GulabJamun",sweet2:"guava"}}];
console.log(desert_name[0].dessert1);

let PaymentMethod = [{payment1:"Cash"},{payment2:{payment3:"Gpay",payment4:"card"}},];
console.log(PaymentMethod[1].payment2 .payment4);



let payment_status = [{paymentmethod1:"paid",paymentmethod2:{paymentmethod3:"not paid",paymentmethod4:"paid"}}];
console.log(payment_status[0].paymentmethod2 .paymentmethod4);


