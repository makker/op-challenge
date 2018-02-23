
function init() {
    // If dev url param then add class dev to body to enable some dev enhancements
    // This feature should be removed before deploying to production
    if (window.location.href.indexOf("?dev") > -1) {
        var body = document.getElementById("body");

        var classes = (body.className.length === 0) ? [] : body.className.split(" ");
        classes.push("dev");
        body.className = classes.join(" ");
    }
};

document.addEventListener('DOMContentLoaded', init, false);