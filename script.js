var getMinDistance = function(nums, target, start) {
     
     let mins =  Infinity;

     for(let  i = 0 ; i < nums.length ; i++){

        if(nums[i] === target){
            let distance =  Math.abs(i - start)
            mins =  Math.min(mins, distance)
        }
        

     }
       console.log( mins);
       

};


getMinDistance([1,1,1,1,1,1,1,1,1,1],1,0)
