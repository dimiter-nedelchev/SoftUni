function foreignLanguages(country) {

    if (country==="USA" || "England") {
        console.log("English");
    }
    else if (country==="Spain" || country==="Mexico" || country==="Argentina") {
        console.log("Spanish");
    }
    else {
        console.log("unknown");
    }
}
foreignLanguages("USA")
foreignLanguages("Germany")