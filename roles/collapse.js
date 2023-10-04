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
    sleep(200);
    var parent = element.parentElement;
    if (parent.className == "content") {
        parent.style.maxHeight = element.scrollHeight + parent.scrollHeight + "px";
        return recursiveShow(parent);
    } else {
        return 0;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}