console.log("lab5")

function summary() {
    let a = 10;
    let b = 20;

    let sum = a + b;
    alert(`tong a + b la ${sum}`)
}

// summary();

let phepTinh = null;

function phepTinhInput(action = null) {
    phepTinh = action;
}

function thucThiPhepTinh(number1, number2, phepTinh) {

    let result = 0;

    switch (phepTinh) {
        case '+':
            result = Number(number1) + Number(number2);
            break;

        case '-':
            result = Number(number1) - Number(number2);
            break;

        case '*':
            result = Number(number1) * Number(number2);
            break;

        case '/':
            result = Number(number1) / Number(number2);
            break;
    }
    return result
}

document.querySelector("#button").addEventListener("click", function () {
    let number1 = document.querySelector("#number1").value;
    let number2 = document.querySelector("#number2").value;

    if(phepTinh ==null){
        alert("vui long chon hep tinh thuc thi");
        return;
    }
    if(number1 == null || number1=='' || number2 == null || number2 == ''){
        alert("Vui long kiem tra va nhap so cho phep tinh")
        return;
    }
    let result = thucThiPhepTinh(number1,number2,phepTinh);
    alert(`ket qua cua phep tinh: ${number1} ${phepTinh} ${number2} la ${result}`)
})


//==================
//MANG
//Kieu du lieu mang
/*
1. Cach dinh nghia cac mang tuan tu: Mang tuan tu la thu tu cac phan tu trong mang duoc danh dau tu 0->n (n la so nguyen duong)
2. 
*/

let array1 =['tungbm',9, true];
//count
var countArr = array1.length;

//update gia tri phan tu trong mang
array1[2] = false;

//Them moi phan tu trong mang
array1[3] = "Ha Noi";
array1[array1.length] = "My dinh";
console.log(array1)

//Xoa phan tu trong mang splice(index,length)
//index: phan tu dem
//length: Xoa bao nhieu phan tu tu index
array1.splice(1,1);

//lay gia tri 1 phan tu trong mang
var name = array1[0]

//MANG BAT TUAN TU: THU TU CAC PHAN TU TRONG MANG DUOC DINH NGHIA TEXT OR SO BAT KY
//Vi la mang bat tuan tu nen ko the co length
let arr2 = new Array();
arr2['1'] = 'Tungbm';
arr2['a'] = 'Toi la tung';
arr2['xe 1'] = 123;

//update
arr2['1'] = 'Sieu nhan';

//them ki tu dac biet vao trong chuoi
var str = "hom nay \"javascript\"";


console.log(arr2);