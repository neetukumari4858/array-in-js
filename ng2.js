a=[10,4,5,2,5,6,9]
var sum=0
var c=0
for (var i of a){
    sum=sum+i
    c=c+1
}
console.log("average",(parseInt(sum/c)))