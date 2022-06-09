Formas de añadir CSS a HTML

Existen tres formas
    Interna, en el archivo de HTML dentro del encabezado "head" podemos añadir una etiqueta que se llama "style" así como justo antes de cerrar la etiqueta de "body" para cargar contenido y después el css. Si se quiere que la página se cea bonita se agrega en "head" si se quiere la optimización de la página se agrega en "body" al final.
    Dentro de style hay que hacer referencia a una etiqueta como "class" se repite y "id" no se puede repetir
    Entre llaves se agregan las propiedades como el 
    color: red; 
<style>
        .rojo {
            color:blue;
        }
        #name1 {
            color: blue;
        }
    </style>
    Una manera de agregar colores es
    rgb (0, 0, 0) sus valores van desde 255 a 0
    #3333 es hexagecimal

    Externa
        Se crea un archico que puede llamarse "styles.css" y posteriormente en el archivo de html se agrega el archivo .css de la siguiente manera:
            <link rel="stylesheet" href="./styles.css">
        En este tipo de archivos se escribe lo de {}, es lo mismo que de forma interna pero en un archivo css


    En línea    
    Se escribe 
        <p class= "rojo" style="color: red">Lorem</p>