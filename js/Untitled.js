var taps = document.querySelectorAll(".link ul li a"),
    
    content = document.querySelectorAll(".cardes");

taps.forEach(function (tab, tab_index) {
    tab.addEventListener("click", function () {
        taps.forEach(function (tab) {
            tab.style.backgroundColor = "rgba(208, 187, 255, 0)";
            tab.style.color = "#000";
        })

        tab.style.backgroundColor = "white";
        tab.style.color = "#000";
        content.forEach(function (content, content_index) {
            if (content_index == tab_index) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        })
    })
})

var form = document.getElementsByClassName('button');
var i;
for (i = 0; i < form.length; i++) {
    form[i].onclick = function () {
        document.getElementById("div").style.display = "block";
    }
}
document.getElementById("cancle").onclick = function () {
    document.getElementById("div").style.display = "none";
}
