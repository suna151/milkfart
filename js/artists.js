function fillModal(name) {
    var overlay = document.getElementById('art-big');
    var under = document.getElementById('content');
    overlay.style.display = "none";
    under.style.display = "block";
    
    var id = name;
    var title = document.getElementById("modal-title");
    var pic = document.getElementById("pic");
    var info = document.getElementById("info");
    var art1 = document.getElementById("art-1");
    var art2 = document.getElementById("art-2");
    var art3 = document.getElementById("art-3");
    var back = document.getElementById("back");
    var header = document.getElementById("modal-header")
    if (id == "rodrigo") {
        title.innerHTML = "Rodrigo Lee";
        pic.src = "images/artists/roddy2.png";
        info.innerHTML = "Text";
        art1.src = "images/artists/roddy-art-1.png";
        art2.src = "images/artists/roddy-art-2.png";
        art3.src = "images/artists/roddy-art-3.png";
        art1.style.height = art2.style.height = art3.style.height = "200px";
        back.style.color = "#8cd9f2";
        header.style.background = "#8cd9f2";
    } else if (id == "diana") {
        title.innerHTML = "Diana Victoreen";
        pic.src = "images/artists/diana2.png";
        info.innerHTML = "Text";
        art1.src = "images/artists/diana-art-1.png";
        art2.src = "images/artists/diana-art-2.png";
        art3.src = "images/artists/diana-art-3.png";
        art1.style.height = art2.style.height = art3.style.height = "176px";
        back.style.color = "#fdb4b5";
        header.style.background = "#fdb4b5";
    } else if (id == "placeholder") {
        title.innerHTML = "Placeholder";
        pic.src = "images/placeholder.png";
        info.innerHTML = "Text";
        art1.src = "images/placeholder.png";
        art2.src = "images/placeholder.png";
        art3.src = "images/placeholder.png";
        art1.style.height = art2.style.height = art3.style.height = "180px";
    }
}

function showImage(img) {
    var overlay = document.getElementById('art-big');
    var under = document.getElementById('content');
    var modalImg = document.getElementById('img');
    overlay.style.display = "block";
    overlay.style.zIndex = "1";
    under.style.display = "none";
    modalImg.src = img.src;
}

var span = document.getElementById('back');
var previous;

span.onmouseenter = function() {
    previous = this.style.color;
    this.style.color = "#FC6088";
}

span.onmouseout = function() {
    this.style.color = previous;
}

span.onclick = function() {
    var overlay = document.getElementById('art-big');
    var under = document.getElementById('content');
    overlay.style.display = "none";
    under.style.display = "block";
}