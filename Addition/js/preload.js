

function ownpreloader(){
	document.getElementById("preloader").style.display = "none";
}

let f = document.getElementsByClassName("house");

function houseTransform() {
  console.log(f[0].getElementsByClassName("active"));
  if ((f[0].getElementsByClassName("active")[0].getAttribute("class").toString().indexOf("dot1") !== -1) || (f[0].getElementsByClassName("active")[0].getAttribute("class").toString().indexOf("dot2") !== -1)) {
    document.getElementById("house_animation").style.flexDirection = "row-reverse";
  }
  else {
    document.getElementById("house_animation").style.flexDirection = "row";
  }
}

document.getElementById("house_animation").addEventListener("click", function() {
  houseTransform();
})