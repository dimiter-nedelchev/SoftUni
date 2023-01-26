function matchPhoneNum(numbers){

    const pattern= /\+\b[3][5][9](\s+|-)[2]\1\d{3}\1\d{4}\b/g
    let nums= numbers.shift()

    let phoneNumbers= nums.match(pattern)
    let sofiaNums= []
    
    for(let nums of phoneNumbers){
        sofiaNums.push(nums.trim())
    }

    sofiaNums= sofiaNums.join(', ')
    console.log(sofiaNums)
}
matchPhoneNum(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222']);