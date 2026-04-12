
var twoSum = function(nums, target) {
     let map = {};

     for(let i = 0 ;  i< nums.length ; i++){
        const partner =  target - nums[i]

        if(map[partner] !== undefined){

            return [map[partner], i]
        }

        map[nums[i]] = i 
     }
};


 let results =   twoSum([500,20,85,1,2,40,3,5,35,4,88,100,50],40)

console.log(results)


