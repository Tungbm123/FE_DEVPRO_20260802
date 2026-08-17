console.log("lab1.js");


// document.querySelector('#delete').addEventListener('click',function(){
//     confirm('ban co muon xoa nguoi dung nay ko?');
// });

//dinh nghia bien trong js
var hoten = "nguyen van A";
let diem = 10;
const gioiTinh = "";
var HOTEN = "tungbm";
console.log(hoten + " " + HOTEN);
/*
QUY TAC DAT TEN BIEN
    1. Ten bien bat dau bang chu cai hoac $ hoac _ 
    2. Ten bien phai duy nhat trong vung hoat dong cua no
    3. Ten bien co phan biet chu hoa thuong

*/

/*
KIEU DU LIEU CUA BIEN
    1. String
    2. number float, integer
    3. Boolean
    4. Array
    5. Object 
*/

/*
CACH XAC DINH KIEU DU LIEU CUA BIEN
    Dua vao kieu du lieu ma gia tri no duoc gan
*/

/*
CAC PHEP TINH CO BAN TRONG LAP TRINH
    1. Phep cong: Chu y 2 so hang deu phai la kieu number
    2. 
*/

/*
SO SANH TUONG DOI: so sanh ve gia tri, ko so sanh ve kieu du lieu
==
!=
*/

const d = '100';
const e = 100;
console.log(d == e);

/*
SO SANH TUYET DOI: so sanh ve gia tri va so sanh ve kieu du lieu
===
!==
*/

console.log(d === e);

// document.getElementById('submit').addEventListener('click',function(){
//     const valueInput = document.querySelector('#keyword').value;
//     if(valueInput == ''){
//         alert('Vui long nhap so muon kiem tra')
//     }else if(valueInput%2 == 0){
//         alert(`so ${valueInput} la so chan`);
//     }else{
//         alert(`so ${valueInput} la so le`);
//     }
// })

/*
SWITCH CASE
1. Su dung khi biet truoc cac gia tri hoac cac truong hop xay ra
2. Su dung so sanh bang tuyet doi
*/

// document.getElementById("submit").addEventListener("click", function(){
//     let valueInput = document.querySelector("#keyword").value;
//     switch(valueInput){
//         case 'A':
//         case 'a':
//             alert("day la phim a");
//             break;
//         case 'b':
//             alert("day la phim b");
//             break;
//         default:
//             alert("ko xac dinh duoc");
//     }
// })

document.getElementById("submit").addEventListener("click", function () {
    let numberA = document.querySelector("#keyword").value;

    // chuyen string ve dang so
    numberA = Number(numberA);

    let soNguyenTo = true;
    if (numberA < 2) {
        soNguyenTo = false;
        console.log("Vui long nhap vao so >=2")
    } else {
        for (let i = 2; i <= Math.sqrt(numberA); i++) {
            if (numberA % i === 0) {
                soNguyenTo = false;
                console.log(`So ${numberA} ko phai so nguyen to`)
                break;
            } else {
                soNguyenTo = true
            }
        }
    }
    if (soNguyenTo) {
        console.log(`So ${numberA} la so nguyen to`)
    }

})


document.getElementById("submit2").addEventListener("click", function () {
    let numberA = document.querySelector("#keyword").value;

    // chuyen string ve dang so
    numberA = Number(numberA);
    let soNguyenTo = true;
    if (numberA < 2) {
        soNguyenTo = false;
        console.log("Vui long nhap vao so >=2")
    } else {
        let i = 2
        while (i < numberA) {
            if (numberA % i == 0) {
                soNguyenTo = false
            }
            i++;
        }
    }

     if (soNguyenTo) {
        console.log(`So ${numberA} la so nguyen to`)
    }else{
        console.log(`So ${numberA} khong phai la so nguyen to`)
    }

})
