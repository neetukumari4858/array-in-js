var marks = [
    [78, 76, 94, 86, 88],
    [91, 71, 98, 65, 76],
    [95, 45, 78, 52, 49]
]
//  o/p >>>>1142
var sum=0;
for (var i of   marks) {
    for (j of i){
        sum=sum+j
    }
}
console.log(sum)