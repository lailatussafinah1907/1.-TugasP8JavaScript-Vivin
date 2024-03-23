const images = ["images/gambar1.png", "images/gambar2.png", "images/gambar3.png"]; // contoh gambar

const carouselContainer = document.getElementById("carousel");
let currentIndex = 0;

function showImage(index) {
    carouselContainer.innerHTML = ""; // Menghapus gambar sebelumnya
    const image = document.createElement("img");
    image.src = images[index];
    image.style.width = "98%"; // Mengatur lebar gambar menjadi 98% dari lebar layar laptop Asus Core i3
    image.style.height = "auto"; // Mengatur tinggi gambar agar mengikuti rasio aspek aslinya
    image.style.margin = "0 auto"; // Memberikan margin otomatis secara horizontal untuk mencentralisasi gambar
    carouselContainer.appendChild(image);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Menampilkan gambar pertama
showImage(currentIndex);

// Mengatur interval untuk mengubah gambar setiap 6 detik (6000 milidetik)
setInterval(nextImage, 6000);
