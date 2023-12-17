//Bài tập 1: Tính tiền lương nhân viên
/* Mô hình 3 khối
B1: xác định dữ liệu đầu vào 
 Lương một ngày: var luong1Ngay = 100000
Số ngày làm : var soNgayLam =
*/
/**
 * B2: logic tính toán
 * var tinhLuong = luong1Ngay * soNgayLam
 */
/**
 * B3: in kết quả
 */
var Luong1Ngay = 100000;
document.getElementById("tinhLuong").onclick = function () {
  var soNgayLam = document.getElementById("soNgayLam").value * 1;
  var tinhLuong = soNgayLam * Luong1Ngay;
  document.getElementById("show").innerHTML = "Lương: " + tinhLuong;
};

//Bài tập 2: Tính trung bình 5 số thực
/** Mô hình 3 khối
 * B1: xác định dữ liệu đầu vào
 * var sothu1 = 10;
 * var sothu2 = 10.1;
 * var sothu3 = 10.3;
 * var sothu4 = 10.4;
 * var sothu5 = 10.3;
 * */
/**
 * B2: logic tính toán
 * var tinhTb = (sothu1+sothu2+sothu3+sothu4+sothu5)/5;
 */
/**
 * B3: in kết quả
 */
document.getElementById("btnTinhTb").onclick = function () {
  console.log("a");
  var soThu1 = document.getElementById("soThuc1").value * 1;
  var soThu2 = document.getElementById("soThuc2").value * 1;
  var soThu3 = document.getElementById("soThuc3").value * 1;
  var soThu4 = document.getElementById("soThuc4").value * 1;
  var soThu5 = document.getElementById("soThuc5").value * 1;
  var tinhTb = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
  document.getElementById("showTb").innerHTML = "Trung binh 5 so: " + tinhTb;
};
//Bài tập 3: Quy đổi USD sang tiền Việt
/* Mô hình 3 khối
B1: xác định dữ liệu đầu vào 
Giá usd hiện nay var USD = 23.500 
Tiền USD: var tienUSD 
*/
/**
 * B2: logic tính toán
 * var quyDoi = tienUSD * USD
 */
/**
 * B3: in kết quả
 */
var USD = 23500;
document.getElementById("btnQuyDoi").onclick = function () {
  var tienUSD = document.getElementById("tienUSD").value * 1;
  var quyDoi = tienUSD * USD;
  document.getElementById("showQuyDoi").innerHTML = "Tiền Việt: " + quyDoi;
};

//Bài tập 4: Tinh chu vi và diện tích hình chữ nhật
/* Mô hình 3 khối
B1: xác định dữ liệu đầu vào 
Nhập giá trị chiều dài: var chieuDai
Nhập giá trị chiều rộng: var chieuRong
*/
/**
 * B2: logic tính toán
Chu vi : var chuVi= (chieuDai+chieuRong)/2
DienTich: var dienTinh = chieuDai*chieuRong;
*/
/**
 * B3: in kết quả
 */
document.getElementById("btnTinh").onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  var dienTich = chieuDai * chieuRong;
  var chuVi = (chieuDai + chieuRong) * 2;
  document.getElementById("showTinh").innerHTML =
    "Chu vi: " + chuVi + "    Dien tich: " + dienTich;
};

//Bài tập 3: Tính tổng 2 ký số
/* Mô hình 3 khối
B1: xác định dữ liệu đầu vào 
Nhập số có 2 chữ số: var so  
*/
/**
 * B2: logic tính toán
 * Số hàng đơn vị: var soHangDonVi=so % 10;
 * Số hàng chục: var soHangChuc=so/10;
 */
/**
 * B3: in kết quả
 */

document.getElementById("btnTong").onclick = function () {
    var soHang = document.getElementById("soHang").value * 1;
    console.log('2')
  var soHangDonVi = Math.floor (soHang % 10);
  var soHangChuc = Math.floor( soHang / 10);
  var tong = soHangChuc + soHangDonVi;
  document.getElementById("showTong").innerHTML = "Tổng hai số hạng: " + tong;
};
