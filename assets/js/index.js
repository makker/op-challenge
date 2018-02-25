

function inactivateSection(section) {
    var classes = section.className.split(" ");
    classes.splice(classes.indexOf("open"), 1);
    section.className = classes.join(" ");
    
    var container = section.getElementsByClassName("container-info")[0];
    container.style.height = 0;
}
function inactivateSections(keep) {
    var openedSections = document.querySelectorAll("section.open");

    openedSections.forEach(function(section) {
        if (section.className.indexOf("open") > -1) {
            inactivateSection(section);
        }
    });
}
function activateSection(section) {
    var alreadyOpen = (section.className.indexOf("open") > -1);
    inactivateSections();

    if (!alreadyOpen) {
        // If not already open then add class open
        var classes = (section.className.length === 0) ? [] : section.className.split(" ");
        classes.push("open");
        section.className = classes.join(" ");

        // Set calculated height as a style to enable CSS transition
        var container = section.getElementsByClassName("container-info")[0];
        var wrapper = container.getElementsByClassName("wrapper-info")[0];
        container.style.height = wrapper.clientHeight + "px";
    }
}
function init() {
    // set click handlers to section headers
    var sectionHeaders = document.querySelectorAll("section > header");
    sectionHeaders.forEach(function(header){
        header.addEventListener("click", function(event){
            var section = this.parentNode;
            activateSection(section);
        }, false);
    });

    // set height=0 to section body containers
    var sectionBodys = document.querySelectorAll("section > .container-info");
    sectionBodys.forEach(function(sectionBody){
        sectionBody.style.height = 0;
    });

    // If dev url param then add class dev to body to enable some dev enhancements
    // This feature should be removed before deploying to production
    if (window.location.href.indexOf("?dev") > -1) {
        var body = document.getElementById("body");

        var classes = (body.className.length === 0) ? [] : body.className.split(" ");
        classes.push("dev");
        body.className = classes.join(" ");
    
        // Open a section for inspection
        var sectionToOpen = document.querySelectorAll("section")[1];
        console.log("sectionToOpen: ", sectionToOpen);
        activateSection(sectionToOpen);
    }
};

document.addEventListener('DOMContentLoaded', init, false);

/* Polyfill for NodeList.forEach from 
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
 */
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}