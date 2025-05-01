// Fungsi Tombol Konversi
function konversi() {
     const detail = document.querySelector("textarea[name='calculate-detail']")
    const hasil = document.querySelector("textarea[name='result-output']")
    
// Membuat HTML agar tidak refresh
    document.getElementById("form").addEventListener('submit', function(event) {event.preventDefault();})
    
// Perhitungan Celcius
    let nilai_konversi = document.getElementById("konversi-input").value
    let nilai_hasil = (parseFloat(nilai_konversi) * 9/5) + 32
    
     if (isNaN(nilai_konversi)) {
            detail.value = "Masukkan Angka yang Benar..."
            hasil.value = ""
            return
        }
    
// Hasil Fahrenheit
    hasil.value = nilai_hasil.toFixed(2) + "°F"

    console.log(hasil.value)
    
    detail.value = "(" + nilai_konversi + "°C x 9/5) + 32 = " + nilai_hasil.toFixed(2) + "°F"
    console.log(detail.value)
    
    }
    
// Fungsi Tombol Reset
    function reset() {
    
    //    definisi variabel reset
        const detail = document.querySelector("textarea[name='calculate-detail']")
        const hasil = document.querySelector("textarea[name='result-output']")
        const awal = document.querySelector("textarea[name='konversi-input']")
    
    //    membuat HTML agar tidak refresh
        document.getElementById("form").addEventListener('submit', function(event) {event.preventDefault();})
    
    //    output reset
        awal.value = ""
        detail.value = ""
        hasil.value = ""
        console.log("clearing all")
    
    }
// Fungsi Tombol Konversi
    function reverse() {
    
    //    definisi variabel konversi()
        const detail_reverse = document.querySelector("textarea[name='calculate-detail']")
        const hasil = document.querySelector("textarea[name='result-output']")
    
    //    membuat HTML tidak refresh, kalau tidak kalkulasi di readonly textarea hilang
        document.getElementById("form").addEventListener('submit', function(event) {event.preventDefault();})
    
    //    perhitungan konversi
        let nilai_konversi = document.getElementById("konversi-input").value
        let nilai_hasil = (parseFloat(nilai_konversi) * 9/5) + 32
    
        if (isNaN(nilai_konversi)) {
            detail_reverse.value = "Masukkan Angka yang Benar..."
            hasil.value = ""
            return
        }
    
    //    output hasil konversi reverse dengan metode queryselector
        hasil.value = nilai_hasil.toFixed(2) + "°F"
        console.log(hasil.value)
    
        detail_reverse.value = "(" + nilai_hasil.toFixed(2) + "°F - 32) x 5/9 = " + nilai_konversi + "°C"
        console.log(detail_reverse.value)
    
    }

// Banner Auto Slide
// Function Auto Slide
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("img-slideshow");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}