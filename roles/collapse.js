var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("revealed");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

var colll = document.getElementsByClassName("subcollapsible");
var i;

for (i = 0; i < colll.length; i++) {
  colll[i].addEventListener("click", function() {
    this.classList.toggle("revealed");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
    var parent = this.parentElement;
    parent.style.maxHeight = parent.scrollHeight + "px";
  });
}