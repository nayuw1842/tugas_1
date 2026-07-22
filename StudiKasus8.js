const menu = [10000, 25000, 18000, 12000, 50000];

for (let i = 0; i < menu.length; i++) {

    if (menu[i] < 20000) {
        kategori = "Menu Reguler";
    } else {
        kategori = "Menu Premium";
    }

    console.log(`Menu ke-${i + 1} -> ${kategori}`);
};