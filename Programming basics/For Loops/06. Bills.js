function expenses (input) {

    let period=Number (input.shift())

    let water=0
    let internet=0
    let others=0
    let electricityAll=0

    let waterM=20
    let internetM=15

    let total=0
    let all=0

    for (i=1;i<=period;i++) {
        electricity= Number (input.shift())

        water+= 20
        internet+= 15
        total+= 1
        others+= (electricity+waterM+internetM)*1.2
        electricityAll+= electricity
    }
    all=(electricityAll+water+internet + others)/total

    console.log (`Electricity: ${electricityAll.toFixed(2)} lv`)
    console.log (`Water: ${water.toFixed(2)} lv`)
    console.log (`Internet: ${internet.toFixed(2)} lv`)
    console.log (`Other: ${others.toFixed(2)} lv`)
    console.log (`Average: ${all.toFixed(2)} lv`)
}
expenses (["5","68.63","89.25","132.53","93.53","63.22"])
//expenses (["8","123.54","231.54","140.23","100","122.4","430","178.52","64.2"])