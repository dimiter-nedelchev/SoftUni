function hospital (input) {

    let days=Number (input.shift())
    let doctors=7
    let treatedPatients=0
    let untreatedPatients=0

    for (i=1;i<=days;i++) {
        patients=Number(input.shift())
        if (i%3==0 && untreatedPatients>treatedPatients) {
            doctors+=1
            if (doctors>=patients) {
            treatedPatients+= patients
        }
        else {
            untreatedPatients+= patients-doctors
            treatedPatients+= doctors
        }
    }
        else if (doctors>=patients){
            treatedPatients+= patients
        }
        else if (doctors<patients) {
            untreatedPatients+= patients - doctors
            treatedPatients+= doctors
        }
    }
    console.log (`Treated patients: ${treatedPatients}.`)
    console.log (`Untreated patients: ${untreatedPatients}.`)
}
hospital (["4", "7", "27", "9", "1"])
hospital (["6", "25", "25", "25", "25", "25","2"])

