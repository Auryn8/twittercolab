window.onload = function () {
//Evento para agregar el mensaje escrito//
var button = document.getElementById("button");
button.addEventListener("click", addText); //botton
//Evento para agregar contador de letras//
var textArea = document.getElementById("text");
textArea.addEventListener("keyup", addAccount); //teclado
var size = document.getElementById("text");
size.addEventListener('keyup', autosize);
disableBtn();

};

//Activar o desactivar el boton de Tweet
function disableBtn() {
    document.getElementById("button").disabled = true;
  }
function undisableBtn() {
    document.getElementById("button").disabled = false;
  }

//Creando funcion para addText//
function addText() {
  var length = document.getElementById("text").value.length;
  var textArea = document.getElementById("text").value;
  if(textArea=="" || textArea ===" "){
    return disableBtn();
  }
  else{
    if (length>"0" & length<="140"){
      var container = document.createElement("div");
      var message= document.createElement("div");
      var date = document.createElement("div");
      date.classList.add("fecha");
      date=clock();
      var content = document.createTextNode(textArea + " " +  date);//añadir hora//
      var main = document.getElementById("box-image")
        container.appendChild(message);
        message.appendChild(content);
        message.classList.add ("message");
        main.appendChild(message);
        document.getElementById("text").value="";//borrar mensaje escrito en el input //
        document.getElementById("contador").value="140";
        document.getElementById("contador").style.color="black";
        document.getElementById('text').focus();
      }
    }
  };

//creando funcion para addAccount//
function addAccount (){
  var max = "140";
  var message = document.getElementById("text").value;
  var longitud = message.length;
  var contador=document.getElementById("contador");
    //cambiar el color del contador si cambia la longitud del texto//
    if(longitud>="0" & longitud<"120"){
      contador.style.color="black";
      contador.value = max-longitud;
      return undisableBtn()
    }
    else if(longitud>="120" & longitud<"130"){
      contador.style.color="yellow";
      contador.value = max-longitud;
      return undisableBtn()
    }
    else if(longitud>="130" & longitud<="140"){
      contador.style.color="red";
      contador.value = max-longitud;
      return undisableBtn()
    }
    else if(longitud>"140"){
      contador.value =("-"+(longitud-max));
      return disableBtn()
    }
};
//Creando funcion para determinar si es am y pm
function clock(){
  var day = new Date();
  hour = day.getHours();
  minutes = day.getMinutes();
  var dateTime = "AM";
  if(hour === 12){
      dateTime = "PM";
  } else if(hour > 12){
    dateTime = "PM";
    hour = hour-12;
  }
  if (hour < 10) {
      hour = '0' + hour;
  }
  if (minutes < 10) {
      minutes = '0' + minutes;
  }
  var clockSet = hour + ":" + minutes+ " " +dateTime;
  return clockSet;
};

//Funcion para autoajustar al textArea
myForm.addEventListener('keydown', autosize);
textArea.addEventListener('keydown', autosize);
            
function autosize(){
 var el = this;
 setTimeout(function(){
   el.style.cssText = 'height:auto; padding:0';
   el.style.cssText = 'height:' + el.scrollHeight + 'px';
 },0);
}

//Ubicando el focus en el  textArea//
document.getElementById('text').focus();
