function isSymmetric(arr) {

    if (!Array.isArray(arr)){
    
    return false; // Non-arrays are non-symmetric
    
    }
    
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));

    return equal;
    
    }
    isSymmetric(["pesho", new Date(2016, 8, 15), false, new Date(2016, 8, 15), "pesho"])
    isSymmetric([1,2,1])
    module.exports= isSymmetric
    