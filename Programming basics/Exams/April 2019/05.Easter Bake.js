function easterBake (input) {

   let index=0
   let sweetBread=Number (input[index++])

   let totalSugar=0
   let totalFlour=0

   let maxSugar=Number.MIN_SAFE_INTEGER
   let maxFlour=Number.MIN_SAFE_INTEGER

   let sugarBags=0
   let flourBags=0

   let sugar=0
   let flour=0

   for (i=1;i<=sweetBread;i++) {
        sugar=Number (input[index++])
        flour=Number (input[index++])

        if (sugar>maxSugar) {
            maxSugar=sugar
        }
        if (flour>maxFlour) {
            maxFlour=flour
        }

        totalSugar+= sugar
        totalFlour+= flour
   }
   sugarBags=(totalSugar/950)
   flourBags=(totalFlour/750)

   console.log (`Sugar: ${sugarBags}`)
   console.log (`Flour: ${flourBags}`)
   console.log (`Max used flour is ${maxFlour} grams, max used sugar is ${maxSugar} grams.`)
}
//easterBake (["3","400","350","250","300","450","380"])
easterBake (["4","500","350","560","430","600","345","578","543"])
