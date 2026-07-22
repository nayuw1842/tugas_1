const hadir = [true, false, true, true, false, true];
let siswaHadir = 0;
let siswaTidakHadir = 0;


for (let i = 0; i < hadir.length; i++) {

    if (hadir[i] === true) {
        status = "Hadir",
        siswaHadir++
    } else {
        status = "Tidak Hadir",
        siswaTidakHadir++
    }
    
    console.log(`Siswa ke-${i + 1} : ${status}`);
};

console.log(`Jumlah Siswa Hadir : ${siswaHadir}`);
console.log(`Jumlah Siswa Tidak Hadir : ${siswaTidakHadir}`);