// konversi suhu
function konversi() {
  let celcius =
  document.getElementById('celcius').value;
    if (celcius === '') {
    alert('Isi suhu celcius dulu!');
    return;
  }
  let fahrenheit = (celcius * 9 / 5) + 32;

document.getElementById('fahrenheit').value= fahrenheit.toFixed(2);

document.getElementById('caraKalkulasi').value = `(${celcius} x 9 / 5) + 32 = $
{fahrenheit.toFixed(2)} °F`;
}

function reset() {
  document.getElementById('celcius').value = '';
  document.getElementById('fahrenheit').value = '';
  document.getElementById('caraKalkulasi').value = '';
}

function reverse() {
  let fahrenheit =
  document.getElementById('fahrenheit').value;
  if (fahrenheit === '') {
    alert('Isi suhu fahrenheit dulu!');
    return;
  }
  let celcius = (fahrenheit - 32) * 5 / 9;

document.getElementById('celcius').value = celcius.toFixed(2);

document.getElementById('caraKalkulasi').value = `(${fahrenheit} - 32) x 5/9 = $
{celcius.toFixed(2)} °C`;
}

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

