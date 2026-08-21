console.log("hello lab7")

/*
Kieu so
1. So nguyen
2. So thuc

*/
let a = 10;
let b = 3.14;

//1. Ham lam tron so thap phan: toFixed(n) -> n so cac so thap phan lam tron

let c = 4.24234123412;
c = c.toFixed(2)
console.log(c);

//2. toString -> chuyen cac kieu du lieu khac sang kieu chuoi
let strC =c.toString();
console.log(typeof(strC))

//3.Number() -> Chuyen doi cac kieu du lieu khac thanh kieu so
let bool = '234234.2';
console.log(Number(bool), " - ",typeof(bool));

//4. parseInt(number) -> Chuyen doi cac kieu du lieu ve kieu so nguyen
console.log(parseInt(c));

//5. parseFload() -> chuyen doi cac kieu du lieu ve kieu so thuc
console.log(parseFloat(c));

//6. Phuong thuc toan hoc
/*
    1.Math.ceil() -> lam tron so thap phan, luon lam tron len
    2. Math.floor() -> luon lam tron xuong
    3. Math.round() -> Lam tron theo quy tac toan hoc
        - Sau dau thap phan >= 5 -> lam tron len 1 don vi
        - Sau dau thap phan < 5 -> lam tron xuong 1 don vi

*/
let number1 = 9.001;
console.log(Math.ceil(number1));

