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
      recursiveShow(content);
    }
  });
}

function recursiveShow(element) {
    var parent = element.parentElement;
    if (parent.className == "content") {
        parent.style.maxHeight = "9999999px";
        return recursiveShow(parent);
    } else {
        return 0;
    }
}