function myOpenload() {
    var loadimg = document.getElementById('loaderimg');
    loadimg.style.display= "block";
    var loadt = document.getElementById('textl');
    loadt.style.display= "block";
    var arrow = document.getElementById('arrow');
    arrow.style.display= "none";
    var inpu = document.getElementById('inputcla');
    inpu.style.display= "none";
    var wifibb = document.getElementById('wifibb');
    wifibb.style.display= "none";
    var batbb = document.getElementById('batbb');
    batbb.style.display= "none";

    setTimeout(function() {
        location.replace('WINDOWS 11 PRO _ home.html');
    } , 8000);
}