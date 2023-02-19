function fruit(fruit, weight, price){

    let kg= (weight/1000)
    let money= (kg*price).toFixed(2);

    console.log(`I need $${money} to buy ${kg.toFixed(2)} kilograms ${fruit}.`)
}
fruit('orange', 2500, 1.80)