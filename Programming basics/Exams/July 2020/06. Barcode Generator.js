function barcodeGenerator (input) {

    let start=input [0]
    let end=input [1]
    let total=''

    for (i=Number(start[0]);i<=Number(end[0]);i++) {
        for (j=Number(start[1]);j<=Number(end[1]);j++) {
            for (k=Number(start[2]);k<=Number(end[2]);k++) {
                for (m=Number(start[3]);m<=Number(end[3]);m++) {
                    if (i%2!==0 && j%2!==0 && k%2!==0 && m%2!==0) {
                        total+= `${i.toString()}${j.toString()}${k.toString()}${m.toString()} `
                    }
                }
            }
        }
    }
    console.log (total)
}
barcodeGenerator (["2345","6789"])
//barcodeGenerator (["3256","6579"])
//barcodeGenerator (["1365","5877"])
