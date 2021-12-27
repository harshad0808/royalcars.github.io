function selectall() {
    document.querySelector(".bmw").style.display = ""
    document.querySelector(".jaguar").style.display = ""
    document.querySelector(".audi").style.display = ""
}
function bmw() {
    document.querySelector(".audi").style.display = "none"
    document.querySelector(".jaguar").style.display = "none"
    document.querySelector(".bmw").style.display = ""
}
function audi() {
    document.querySelector(".bmw").style.display = "none"
    document.querySelector(".jaguar").style.display = "none"
    document.querySelector(".audi").style.display = ""
}
function jaguar() {
    document.querySelector(".bmw").style.display = "none"
    document.querySelector(".jaguar").style.display = ""
    document.querySelector(".audi").style.display = "none"
}

function testdrive(ref) {
    let a = ref.parentElement.parentElement.children[0];

    let b = a.innerHTML;
    localStorage.setItem("model", b);


}