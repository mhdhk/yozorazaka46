window.addEventListener('transitionend', modifyUsingOmRoniFormatting);

function modifyUsingOmRoniFormatting() {
    document.getElementsByClassName("md-sidebar--secondary")[0].style = "--md-default-bg-color:none";
}