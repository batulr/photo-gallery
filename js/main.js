marginL = 0;
function leftRight(obj) {
  spaceLeft = document.getElementById("photo-container").style.marginLeft;
  spaceLeft = spaceLeft.replace("px", null);
  spaceLeft = parseInt(spaceLeft);
  step = 300;
  totalLength = document.querySelectorAll(".photo-item").length;
  totalLength *= -115;
  objId = obj.id;
  if (objId == "left") {
    if (spaceLeft >= -step) {
      marginL = 0;
    } else {
      marginL += step;
    }
  }
  if (objId == "right") {
    if (spaceLeft <= totalLength + 500 + step) {
      marginL = totalLength + 500;
    } else {
      marginL -= step;
    }
  }
  document.getElementById("photo-container").style.marginLeft = marginL + "px";
}
function viewPhoto(obj) {
  objUrl = obj.src;
  objAlt = obj.alt;
  document.getElementById("photo-display").innerHTML =
    '<img src="' + objUrl + '" id="selected-photo" alt="">';
  document.getElementById("commentary").innerHTML = objAlt;
  console.log(objAlt);
}
