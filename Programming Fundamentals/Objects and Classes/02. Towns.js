function towns(input){

    const length= input.length - 1;

    for(let i=0;i<=length;i++){
        const [name, latitude, longitude]= input[i].split(' | ');
        
        const town= {
            town: name,
            latitude: Number(latitude),
            longitude: Number(longitude),
        }

        console.log(town)
    }

}
//towns(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625']);
towns(['Plovdiv | 136.45 | 812.575']);