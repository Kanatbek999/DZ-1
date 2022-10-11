window.addEventListener('load', () => {
 
    let a = + prompt('Значение А')
   
    if (!Number.isInteger(a) || a == '') {
      do {
        alert('Ошибка.')
        a = + prompt('Inter value A')
      } while (!Number.isInteger(a))
    }
   
    let b = + prompt('Значение В')
   
    if (!Number.isInteger(b) || b == '') {
      do {
        alert('Ошибка.')
        b = + prompt('Inter value B')
      } while (!Number.isInteger(b))
    }
   
    if (a > b) alert('A > B')
    else if (a < b) alert('A < B')
    else if (a == b) alert('A = B')
   
  })

  let name = prompt(" Ваша имя фамилия?");
        alert(`Привет, ${name}!`);
        let message = 'Добро пожалывать';
        alert(message);

// -----3------//

const colors = prompt("Укажите цвет")

switch ("colors") {
  case ("red"):
      alert("stop")
    break;
  case ("yellow") :
      alert("wait")  
    break;
  case ("green"):
    alert("go")
    break;
  default:
    alert("unknown color")
    break;
}

 
        


