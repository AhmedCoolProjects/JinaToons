function ff() {
  window.onclick = (e) => {
    var src = e.target.id;
    document.getElementById("video_id").src = src;
    document.getElementById("navbar_id").style.zIndex = "-1";
  };
}

