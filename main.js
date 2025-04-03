//code javascript untuk hamburger menu dan banner slider//

document.getElementById("button-menu").addEventListener("click", function()
{
    document.getElementById("mobile-menu").classList.toggle("hidden")
}
);

var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000, // Ganti gambar otomatis setiap 3 detik
        disableOnInteraction: false,
    },
});
