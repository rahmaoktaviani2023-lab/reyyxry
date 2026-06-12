document.addEventListener('click', function(e) {
    createFlower(e.clientX, e.clientY);
});

// Mendukung layar sentuh HP
document.addEventListener('touchstart', function(e) {
    createFlower(e.touches[0].clientX, e.touches[0].clientY);
});

function createFlower(x, y) {
    const garden = document.getElementById('garden');
    
    // Buat elemen utama bunga
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.left = x + 'px';
    flower.style.top = y + 'px';

    // Variasi ukuran bunga acak (antara 40px sampai 80px)
    const size = Math.random() * 40 + 40;
    flower.style.width = size + 'px';
    flower.style.height = size + 'px';

    // Wadah kelopak
    const petalsContainer = document.createElement('div');
    petalsContainer.className = 'petals-container';

    // Variasi warna bunga acak (Tone Pink, Ungu, dan Biru Muda)
    const hue = Math.random() * 60 + 300; // Rentang warna estetik
    const petalColor = `linear-gradient(to top, hsl(${hue}, 100%, 70%) 0%, hsl(${hue + 30}, 100%, 85%) 100%)`;

    // Jumlah kelopak bunga (8 kelopak)
    const totalPetals = 8;
    const petalWidth = size / 2;
    const petalHeight = size / 1.2;

    for (let i = 0; i < totalPetals; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Atur ukuran kelopak
        petal.style.width = petalWidth + 'px';
        petal.style.height = petalHeight + 'px';
        petal.style.left = (size / 2 - petalWidth) + 'px';
        petal.style.top = (size / 2 - petalHeight) + 'px';
        
        // Atur warna acak yang sudah dibuat tadi
        petal.style.background = petalColor;

        // Hitung sudut rotasi tiap kelopak agar membentuk lingkaran sempurna
        const angle = (i * (360 / totalPetals)) + 'deg';
        petal.style.setProperty('--angle', angle);

        // Berikan sedikit jeda animasi mekar antar kelopak agar dramatis
        petal.style.animationDelay = (i * 0.05) + 's';

        petalsContainer.appendChild(petal);
    }

    // Buat putik / inti tengah bunga
    const center = document.createElement('div');
    center.className = 'flower-center';
    // Menyesuaikan ukuran inti dengan ukuran bunga
    center.style.width = (size / 5) + 'px';
    center.style.height = (size / 5) + 'px';

    // Satukan semua bagian
    flower.appendChild(petalsContainer);
    flower.appendChild(center);
    garden.appendChild(flower);

    // Hapus elemen bunga dari HTML setelah animasinya selesai (4 detik) agar web tidak lemot
    setTimeout(() => {
        flower.remove();
    }, 4000);
}
