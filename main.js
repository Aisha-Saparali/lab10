

let lab1 = [5, 5, 5, 5, 10, 10];
let lab2 = [5, 5, 5, 5, 5, 5, 10];
let lab3 = [5, 10, 10, 15];
let lab4and5 = [10, 5, 5, 5, 4, 5, 10, 10, 10, 10, 5];
let lab6 = [5, 5, 10, 5, 5, 10];
let lab8 = [5, 10, 10, 9, 5];
let quizl = 32; 

function get_sum(A){
let sum=0;
for (let i=0; i< A.length; i++) {
sum=sum+A[i];}
return sum;
}

function main(lab1,lab2,lab3,lab4and5,lab6,lab8,quiz1) {
sum1=get_sum(lab1);
sum2=get_sum(lab2);
sum3=get_sum(lab3);
sum4and5=get_sum(lab4and5);
sum6=get_sum(lab6); 
sum8=get_sum(lab8);
let avg_labs_score = (sum1+sum2+sum3+sum4and5+sum6+lab8)/6;
let total_score =0.6*avg_labs_score+0.4*quizl;
results={
lab1: [5, 5, 5, 5, 10, 10], 
lab2: [5, 5, 5, 5, 5, 5, 10],
lab3: [5, 10, 10, 15], 
lab4and5: [10, 5, 5, 5, 4, 5, 10, 10, 10, 10, 5], 
lab6: [5, 5, 10, 5, 5, 10], 
quiz1: 32,
sums: sum1,sum2, sum3, sum4and5,sum6, sum8,
total_sums: total_sums,
avg_total_sums: avg_total_sums }
return results}

console.log (main);

