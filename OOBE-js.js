setTimeout(function() {
    document.getElementById('loader1').style.display= "none";
} , 8000);
setTimeout(function() {
    document.getElementById('region').style.display= "block";
} , 8000);

function myBtn1fr() {
    document.getElementById('region').style.display= "none";
    document.getElementById('loader1').style.display= "block";
    var ints = document.getElementById('loader1');
    ints.style.display= "flex";
    ints.style.placeContent= "center";
    ints.style.alignItems= "center";
    setTimeout(function() {
        window.open('login_page.html');
    });
}