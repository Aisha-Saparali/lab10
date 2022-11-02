

let lab1 = [5, 5, 5, 5, 10, 10];
let lab2 = [5, 5, 5, 5, 5, 5, 10];
let lab3 = [5, 10, 10, 15];
let lab4and5 = [10, 5, 5, 5, 4, 5, 10, 10, 10, 10, 5];
let lab6 = [5, 5, 10, 5, 5, 10];
let lab8 = [5, 10, 10, 9, 5];
let quizl = 32; 

function main(lab1,lab2,lab3,lab4and5,lab6,lab8) {
function get_sum(lab){
let sum=0;
for (let i=0; i<lab.length; i+=1) {
	sum+=lab[i];
}
return sum;
}
sum1=get_sum(lab1);
sum2=get_sum(lab2);
sum3=get_sum(lab3);
sum4and5=get_sum(lab4and5);
sum6=get_sum(lab6); 
sum8=get_sum(lab8);
quiz1:32;
let sums = [sum1,sum2,sum3,sum4and5,sum6,sum8];
function ttl(sums){
	let ttl=0;
	for (let a=0; a<sums.length;a+=1){
		ttl+=sums[a];
	}
	return ttl;
}

let total=ttl(sums);
let avg_labs_score = total/7;

const results={
lab1: lab1, 
lab2: lab2,
lab3: lab3, 
lab4and5: lab4and5, 
lab6: lab6, 
lab8: lab8,
sums: sums,
avg_labs_score: avg_labs_score, 
quiz1: 32, 
ttl_score: 0.6*avg_labs_score+0.4*quizl}
return results;
}

results=main(lab1,lab2,lab3,lab4and5,lab6,lab8);
console.log(results);

