function arrayRotation(nums,rotation){

    let tempElement=0;

    for(let i=1;i<=rotation;i++) {
        tempElement=nums[0];
       
        for(let j=0;j<nums.length-1;j++) {

            nums[j]=nums[j+1];
        }
        nums[nums.length-1]=tempElement;
    }
    console.log(nums.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)
//arrayRotation()