const nilai = [80, 95, 70, 88, 100, 65];
let nilaiTertinggi = 0;
let nilaiTerendah = 0;

for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] > nilaiTertinggi) {
        nilaiTertinggi = nilai[i];
    } else if (nilai[i] < nilaiTertinggi) {
        nilaiTerendah = nilai[i]
    }
} 

console.log(`Nilai Terendah: ${nilaiTerendah}`);
console.log(`Nilai Tertinggi: ${nilaiTertinggi}`);