function change(className, displayValue) {
    var items = document.getElementsByClassName(className);
    for (var i=0; i < items.length; i++) {
      items[i].style.setProperty('display', displayValue, 'important');;
      console.log(items[i].innerHTML)
    }
  }
  function audi() {
      change("bmw","none")
      change("jaguar","none") 
      change("audi","")
  }
  function jaguar() {
      change("bmw","none")
      change("jaguar","") 
      change("audi","none")
  }
  function bmw() {
      change("bmw","")
      change("jaguar","none") 
      change("audi","none")
  }
  function selectall() {
      change("bmw","")
      change("jaguar","") 
      change("audi","")
  }

function testdrive(ref) {
    let a = ref.parentElement.parentElement.children[0];

    let b = a.innerHTML;
    localStorage.setItem("model", b);


}
