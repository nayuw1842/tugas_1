const stok = [12, 0, 5, 8, 0, 20];
let barangHabis = 0;
let barangAda = 0;

for (let i = 0; i < stok.length; i++) {
    
    if (stok[i] > 0) {
        console.log(`Barang ke-${i + 1} : Masih Tersedia`);
        barangAda++
    } else  {
        console.log(`Barang ke-${i + 1} : Habis`);
        barangHabis++
    }
};

console.log(`Barang Tersedia : ${barangAda}`);
console.log(`Barang Habis : ${barangHabis}`);