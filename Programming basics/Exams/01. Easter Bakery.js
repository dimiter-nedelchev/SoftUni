function easterBakery (input) {

    let flourPr=Number(input[0]);
    let flour=Number(input[1]);
    let sugar=Number(input[2]);
    let eggs=Number(input[3]);
    let yeast=Number(input[4]);

    let sugarPr=flourPr*0.75;
    let eggPr=flourPr*1.1;
    let yeastPr=sugarPr*0.2;

    let totalPr=(flour*flourPr) + (sugar*sugarPr) + (eggs*eggPr) + (yeastPr*yeast);

    console.log(totalPr.toFixed(2));
}
easterBakery (["50","10","3.5","6","1"]);
