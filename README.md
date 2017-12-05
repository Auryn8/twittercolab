# Twitter

## Objetivo

En este reto, vamos a replicar el newsfeed de Twitter, para ello vamos a seguir un flujo de versiones que te guiarán para enfocarte de una manera más eficiente :)

Puedes adaptar el diseño como mejor te parezca, pero no tardes mucho definiendo los colores o fuentes. Por último puedes replicar el diseño de la página oficial :)


## Maquetar proyecto

![maqueta Twitter](assets/images/twitter.png)

## Crear HTML

1. Arquitectar estructura del proyecto

2. Enlazar documentos para estilos y javascript

3. Enlazar iconos


## Estilos CSS y SASS

1. Definir el margen de "body"

2. Posicionar logo en "header"

3. Posicionar "section" y dar estilo al contenido

4. Posicionar y dar estilo a "form" y "textarea"

5. Posicionar y dar estilo al botón.


## Desarrollo JS

1. *Evento para agregar el mensaje escrito*
  `var button = document.getElementById("button");`
  `button.addEventListener("click", addText);`
2. *Evento para agregar contador de letras*
  `var text = document.getElementById("text");`
  `text.addEventListener("keyup", addAccount);`
   
3. *Creando funcion para addText que añade debajo el mensaje escrito*
  `function addText() {`
  `var container = document.createElement("div");`
  `var message= document.createElement("p");`
    `container.appendChild(message);`
  `};`
4. *Creando funcion para addAccount que añade contador de caracteres*
  `function addAccount(){`
  `var max = "140";`
  `var message = document.getElementById("text").value;`
  `var longitud = message.length;`
    `if(longitud<"140"){`
    `contador.value =longitud-max;`
    `}`
  `};`

## Resultado

![Twitter newafeed1](assets/twitter-1.png)
![Twitter newafeed2](assets/twiteer-2.png)
