let str = "Hom nay la 1 ngay dac biet, toi da try hard het suc minh";
/*
Js coi chhuoi la 1 mang tuan tu
*/

//1. Dem so ky tu trong chuoi
let countStr = str.length;

/*
2.tim kiem chuoi a trong chuoi b
    - indexOf() -> Tra ve vi tri dau tien
    - lastIndexOf()-> Tra ve vi tri cuoi cung tim thay
        Neu ko tim thay thi tra ve -1
    - search() -> Tuong tu giong voi indexOf
*/

/*
3. Ham cat chuoi
- str.slice(start,end)-> start: vi tri bat dau cat, end: vi tri dung lai (cat tu vi tri start den truoc vi tri end)
- srt.substring(): tuong tu

*/

/*
4. Thay doi chuoi A thanh chuoi B
    str.replace(str2, new string) -> Thay the chuoi str2 thanh new string
    Chu y: chi thay khop chuoi lan dau tien chu ko thay toan bo chuoi. Muon thay tat ca thi phai dung replaceAll()
*/

/*
5. chuyen doi chuoi thanh mang
    str.split(ky tu): tach chuoi thanh mang 
*/

let str1 = str.search("het suc");
let str2 = str.slice(0, (str1 - 1));
console.log(str2);
let str3 = "toi da bo rat nhieu time de hoc";
let str4 = str.replace(str2,str3)

let arr = str.split(' ');
console.log(arr)