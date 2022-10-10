function flowerShop (input) {
    let magnolia=Number (input[0])
    let ziumbiul=Number (input[1])
    let rose=Number (input[2])
    let cactus=Number (input[3])
    
    let giftPr=Number (input[4])

    let magnoliaPr=magnolia*3.25
    let ziumbiulPr=ziumbiul*4
    let rosePr=rose*3.50
    let cactusPr=cactus*8

    let totalPr=magnoliaPr+ziumbiulPr+rosePr+cactusPr

    let tax= totalPr*0.05

    let finalPr=totalPr-tax

    if (finalPr>=giftPr) {
        console.log (`She is left with ${Math.floor(finalPr-giftPr)} leva.`)
    }
    else {
        console.log (`She will have to borrow ${Math.ceil(giftPr-finalPr)} leva.`)
    }

}
//flowerShop (["2", "3", "5", "1", "50"])
flowerShop (["15", "7", "5", "10", "100"])