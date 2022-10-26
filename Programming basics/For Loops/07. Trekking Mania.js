function trekkingMania (input) {
    index=0
    let groups=Number (input[index++])
    let people=0

    let musala=0
    let monblan=0
    let kilimandjaro=0
    let k2=0
    let everest=0

    let total=0

    for (i=1;i<=groups;i++) {
        people=Number (input[index++])

        if (people<=5) {
            musala+= people
        }
        else if (people>=6 && people<=12) {
            monblan+= people
        }
        else if (people>=13 && people<=25) {
            kilimandjaro+= people
        }
        else if (people>=26 && people<=40) {
            k2+= people
        }
        else {
            everest+= people
        }

        total+= people
    }
    console.log (`${((musala/total)*100).toFixed(2)}%`)
    console.log (`${((monblan/total)*100).toFixed(2)}%`)
    console.log (`${((kilimandjaro/total)*100).toFixed(2)}%`)
    console.log (`${((k2/total)*100).toFixed(2)}%`)
    console.log (`${((everest/total)*100).toFixed(2)}%`)
}
//trekkingMania (["10","10","5","1","100","12","26","17","37","40","78"])
//trekkingMania (["5","25","41","31","250","6"])
