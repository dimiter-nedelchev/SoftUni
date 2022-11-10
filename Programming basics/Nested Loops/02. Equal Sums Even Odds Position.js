function equalSums (input) {

    let start=Number (input[0])
    let end=Number (input[1])
    let num=''

    let total=''
    let position=0

    let evenSum=0
    let oddSum=0

    for (i=start;i<=end;i++) {

        num=i.toString()

        for (j=0;j<num.length;j++) {
            
            position=j+1

            if (position%2==0) {
                evenSum+= Number (num[j])
            }
            else {
                oddSum+= Number (num[j])
            }

        }
        if (evenSum===oddSum) {
            total+= `${num} `
        }
            evenSum=0
            oddSum=0
    }
    console.log (total)
}
equalSums();