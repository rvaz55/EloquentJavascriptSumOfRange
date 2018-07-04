var nums = []
var total = [0]

function range (start , end) {
  if (0 <= start && 0 <= end){
    for (x = 1 ; x < end+1 ; x ++){
      nums.push(x)
      }}
   if (start <= 0 || end <= 0){
     if (start <= 0 ){
      for (x = start ; x < end+1 ; x ++){
        var startNum = start + 1
        nums.push(x)}
      }
      if (end <= 0 ){
      for (x = end ; x < start+1 ; x ++){
        var startNum = end + 1
        nums.push(x)}
      }}
}

function sum(){
  for ( var x =0 ; x < nums.length ; x++ ){ 
    var newTotal = total[0] + nums[x]
    total.pop()
    total.push(newTotal)
}}

range (5,-4);
console.log("This is the range: " + "["+ nums + "]")  

sum();
console.log("This is the total sum of the range: " + total)
