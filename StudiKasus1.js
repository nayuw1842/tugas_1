const nama = "Budi";
const umur = 20;
const hargaBarang = [12000, 15000, 8000, 5000];
let totalHarga = 0;

for (let i = 0; i < hargaBarang.length; i++) {
    totalHarga += hargaBarang[i];
};

if (totalHarga > 30000) {
    console.log("Selamat! Anda mendapatkan diskon")
    status = "Mendapat diskon";
} else {
    console.log("Belanja lagi agar mendapat diskon.")
    status = "Tidak mendapat diskon";
};

console.log(`Nama: ${nama}`);
console.log(`Umur: ${umur}`);
console.log(`Total Harga: ${totalHarga}`);
console.log(`Status: ${status}`);