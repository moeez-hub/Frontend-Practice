let marks = [20,20,20,20];
sum = 0;
for (let index = 0; index < marks.length; index++) {
    sum = sum+marks[index];  
}
average = sum/marks.length;
console.log("average marks of class : "+ average);