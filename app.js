// HTML'den gerekli öğeleri seçiyoruz
const containers = document.querySelectorAll('.container'); // Tüm konteyner öğeleri

// Sayfa kaydırıldığında checkContainers() işlevini çağır
window.addEventListener("scroll", checkContainers);

// İlk olarak sayfa yüklendiğinde de checkContainers() işlevini çağır
checkContainers();

// checkContainers() işlevi: tüm konteynerleri denetler ve eğer belirli bir eşik değerine ulaşılırsa "show" sınıfını ekler veya kaldırır
function checkContainers() {
    // Tetikleyici alt sınırı belirle (pencere yüksekliğinin 6/4'ü)
    const triggerBottom = (window.innerHeight / 6) * 4;

    // Konteynerlerin her biri için bir döngü oluştur
    containers.forEach(container => {
        // Konteynerin üst kenarının pencerenin üst kenarına olan uzaklığını al
        const containerTop = container.getBoundingClientRect().top;

        // Eğer konteynerin üst kenarı, tetikleyici alt sınırdan daha küçükse
        if (containerTop < triggerBottom) {
            // Konteyner öğesine "show" sınıfını ekle
            container.classList.add("show");
        } else {
            // Aksi halde, "show" sınıfını kaldır
            container.classList.remove("show");
        }
    });
}