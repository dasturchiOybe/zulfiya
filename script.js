const uzb = document.querySelector(".uzb-t");
const rus = document.querySelector(".rus-t");
function transletRUS() {
    document.querySelector(".uzb").style.display = "none";
    document.querySelector(".rus").style.display = "inline-block";
};
function transletUZB() {
    document.querySelector(".rus").style.display = "none";
    document.querySelector(".uzb").style.display = "inline-block";
};
