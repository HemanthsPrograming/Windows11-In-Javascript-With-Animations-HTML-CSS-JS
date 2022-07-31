document.onclick = hideMenu; 
document.oncontextmenu = rightClick; 

 function hideMenu() { 
     document.getElementById("contextMenu") 
             .style.display = "none" 
 } 

 function rightClick(e) { 
     e.preventDefault(); 

     if (document.getElementById("contextMenu") .style.display == "block"){ 
         hideMenu(); 
     }else{ 
         var menu = document.getElementById("contextMenu")      
         menu.style.display = 'block'; 
         menu.style.left = e.pageX + "px"; 
         menu.style.top = e.pageY + "px"; 
     } 
 } 




var startmenu = document.getElementById("myStart");


var stbtn = document.getElementById("myStartmenu");


var stspan = document.getElementsByClassName("startmenuclose")[0];


stbtn.onclick = function() {
  startmenu.style.display = "block";
}


stspan.onclick = function() {
  startmenu.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == startmenu) {
    startmenu.style.display = "none";
  }
}


function myEdgewin() {
  document.getElementById('edgewinopen').style.display= "block";
  startmenu.style.display= "none";
}
function myEdgeclose() {
  document.getElementById('edgewinopen').style.display= "none";
}
function myEdgeminimize() {
  document.getElementById('edgewinopen').style.display= "none";
  document.getElementById('edgedash').style.display= "block";
  document.getElementById('edgeshade').style.display= "block";
}

function myEdgemaximize() {
  document.getElementById('edgewinopen').style.display= "none";
  document.getElementById('restoreedge').style.display= "block";
}

function myEdgerestoreclose() {
  document.getElementById('restoreedge').style.display= "none";
}
function myEdgerestoremax() {
  document.getElementById("edgewinopen").style.display= "block";
  document.getElementById("restoreedge").style.display= "none";
}
function myEdgerestoremin() {
  document.getElementById("edgewinopen").style.display= "none";
  document.getElementById("restoreedge").style.display= "none";
}


function myTab1() {
  document.getElementById('tab1cont').style.display= "block";
  document.getElementById('tab1cont').style.background= "#fff";
}
function myTab2() {
  document.getElementById('tab2cont').style.display= "block";
  document.getElementById('tab2cont').style.background= "#fff";
}

function myTab3() {
  document.getElementById('tab3cont').style.display= "block";
  document.getElementById('tab3cont').style.background= "#fff";
}

function myTab4() {
  document.getElementById('tab4cont').style.display= "block";
  document.getElementById('tab4cont').style.background= "#fff";
}

function myFileclose() {
  var filewindow = document.getElementById('filewin');

  filewindow.style.display= "none";
}
function myFileopen() {
  var filewindow = document.getElementById('filewin');

  filewindow.style.display= "block";
}

function myStartcon() {
  var consrtmenu = document.getElementById('winconmenuone');
  consrtmenu.style.display= "block";
}

function winConrun() {
  var consrtmenuone = document.getElementById('winconmenuone');
  consrtmenuone.style.display= "none";
  document.getElementById('runwindow').style.display= "block";
}
function myRunwinclosein() {
  document.getElementById('runwindow').style.display= "none";
}
function myChangewhite() {
  document.body.style.backgroundImage= "url('WIN11.jpg')";
  document.body.style.backgroundRepeat= "no-repeat";
  var taskbar = document.getElementById('taskbar');
  taskbar.style.backgroundColor= "rgba(255, 255, 255, 0.726)";
  document.body.style.backgroundSize= "cover";
  var startmenuco = document.getElementById('startmenucont');
  startmenuco.style.backgroundColor= "rgba(255, 255, 255, 0.781)";
  startmenuco.style.color= "#000";
}
function myChangeblack() {
  document.body.style.background= "url('dark.jpg')";
  document.body.style.backgroundRepeat= "no-repeat";
  document.body.style.backgroundSize= "cover";
  document.body.style.backgroundAttachment= "fixed";
  var taskbar = document.getElementById('taskbar');
  taskbar.style.backgroundColor= "rgba(0, 0, 0, 0.726)";
  var startmenuco = document.getElementById('startmenucont');
  startmenuco.style.backgroundColor= "rgba(0, 0, 0, 0.781)";
  startmenuco.style.color= "#fff";
}
function myChangeother() {
  document.body.style.backgroundImage= "url('other.jpg')";
  document.body.style.backgroundRepeat= "no-repeat";
  document.body.style.backgroundSize= "cover";
  var taskbar = document.getElementById('taskbar');
  taskbar.style.backgroundColor= "rgba(0, 0, 0, 0.726)";
  var startmenuco = document.getElementById('startmenucont');
  startmenuco.style.backgroundColor= "rgba(0, 0, 0, 0.781)";
  startmenuco.style.color= "#fff";
  document.body.style.backgroundAttachment= "fixed";
}
function myChangeblue() {
  document.body.style.backgroundImage= "url('blue.jpg')";
  document.body.style.backgroundRepeat= "no-repeat";
  document.body.style.backgroundSize= "cover";
  var taskbar = document.getElementById('taskbar');
  taskbar.style.backgroundColor= "rgba(255, 255, 255, 0.726)";
  document.body.style.backgroundSize= "cover";
  var startmenuco = document.getElementById('startmenucont');
  startmenuco.style.backgroundColor= "rgba(255, 255, 255, 0.781)";
  startmenuco.style.color= "#000";
  document.body.style.backgroundAttachment= "fixed";
}
function myChangearil() {
  document.body.style.backgroundImage= "url('img103.jpg')";
  document.body.style.backgroundRepeat= "no-repeat";
  document.body.style.backgroundSize= "cover";
  var taskbar = document.getElementById('taskbar');
  taskbar.style.backgroundColor= "rgba(0, 0, 0, 0.726)";
  var startmenuco = document.getElementById('startmenucont');
  startmenuco.style.backgroundColor= "rgba(0, 0, 0, 0.781)";
  startmenuco.style.color= "#fff";
  document.body.style.backgroundAttachment= "fixed";
}
function myCloseselectback() {
  document.getElementById('closeselect').style.display= "none";
}
function myChangebacksel() {
  document.getElementById('closeselect').style.display= "block";
}

function myOpenwinverwin() {
  var winver = document.getElementById('windowsver');
  winver.style.display= "block";
}

function myWinvercl() {
  var winver = document.getElementById('windowsver');
  winver.style.display= "none";
  var consrtmenuone = document.getElementById('winconmenuone');
  consrtmenuone.style.display= "none";
}

function mySetwinmax() {
  var  setwin = document.getElementById('settingswindow');
  setwin.style.height= "500px";
  setwin.style.width= "800px";
  setwin.style.top= "50px";
  setwin.style.left= "70px";
  setwin.style.resize= "both";
  setwin.style.overflow= "auto";
  setwin.style.borderRadius= "9px";
  setwin.style.animation= "winsetmin 0.3s linear";
}

function mySetwinleft() {
  var left = document.getElementById('settingwindow');
  left.style.height= "735px";
  left.style.width= "383px";
  left.style.left= "0px";
}

function myOpensetop() {
  setTimeout(function() {
    document.getElementById('hvmuset').style.display= "block";
  } , 2000);
}
function mySethvmuclose() {
  document.getElementById('hvmuset').style.display= "block";
}