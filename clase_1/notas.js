/*
HTML no es un lenguaje procedural, con lo cual no tenemos que darle ciertas instrucciones
para realizar ciertas acciones, por el contrario, ES UN LENGUAJE DE ETIQUETA: vamos a 
usar estas etiquetas o tags, para darle un formato determinado a nuestra pagina web
que luego sera reenderizada por nuestro browser  

HTML es el lenguaje de etiquetado para la 
creación de Páginas Web.
• HTML viene de Hyper Text Markup Language
• HTML describe la estructura de una Página Web
• HTML consiste en una serie de elementos
• Los elementos HTML le dicen al browser cómo mostrar el 
contenido
• Los elementos HTML están representados por etiquetas (tags)
• Las HTML tags etiquetan partes del contenido como por ejemplo 
"heading", "paragraph", "table", etc.
• Los browsers no muestran las tags HTML, pero las usan para 
renderizar el contenido de la página

Estructura básica de un documento HTML
• <!DOCTYPE html> define que el documento es de tipo HTML5
• <html> es el elemento raíz de una página HTML
• <head> contiene meta información sobre el documento
• <title> especifica el título del documento (title bar)
• <body> posee el contenido visible de la página
• <h1> define un encabezado grande
• <p> define un párrafo
• <!– y --> apertura y cierre de código comentado

<img> inserta una imagen en el documento, no lleva closing tag y posee los siguientes atributos:
src origen de la imagen, puede ser un archivo local o un archivo remoto
alt texto alternativo que se muestra cuando la imagen no logra cargarse
title texto que se muestra al hacer un hover over en la imagen
width y height ancho y alto respectivamente para cambiar el tamaño de forma manual. Si no se especifica ninguno, la imagen se muestra en 
tamaño original

Trabajando con listas
• <ul> define una lista desordenada
• list-style-type es una propiedad CSS que define el tipo de 
viñeta 
• <ol> define una lista ordenada
• type es un atributo que define el tipo de numeración
• <li> corresponde a un list item o elemento de lista
• <dl> define una lista de descripción
• <dt> corresponde a un término
• <dd> corresponde a la descripción de un término
• Las listas pueden anidarse entre sí
• Las listas pueden contener otros elementos HTML
• Se pueden usar las propiedades CSS float:left o 
display:inline para mostrar una lista de manera horizontal

Dando formato al texto
• <b> define texto en negrita
• <strong> define texto importante
• <i> define texto en cursiva
• <em> define texto enfatizado
• <small> define texto mas pequeño
• <mark> define texto resaltado
• <del> define texto tachado
• <ins> define texto subrayado
• <sub> define texto en subíndice
• <sup> define texto en superíndice

Elementos de bloque
• <div> define una sección en un documento (block-level). Este 
elemento es utilizado a menudo como contenedor de otros 
elementos HTML.
• <span> define una sección en un documento (inline). Este 
elemento es utilizado a menudo como contenedor de texto.
Nota: Ambos elementos se utilizan con atributos de tipo style, 
class y id.
Un elemento de tipo block-level comienza siempre en una nueva 
línea y ocupa todo el ancho disponible (se extiende hacia la 
izquierda y hacia la derecha todo lo que pueda). Ej.: <address> 
<article> <aside> <dd> <div> <dl> <dt> <footer> <form> 
<h1>-<h6> <header> <hr> <li> <main> <nav> <ol> <p> 
<section> <table> <ul>
Un elemento de tipo inline no comienza en una nueva línea y 
ocupa sólo el ancho que sea necesario. Ej.: <a> <b> <br> 
<button> <cite> <code> <em> <i> <img> <input> <label> 
<q> <script> <select> <small> <span> <strong> <sub> 
<sup> <textarea>


Tablas
• <table> define una tabla
• <caption> define el título de una tabla
• <tr> define una fila de tabla
• <th> define una celda de encabezado de tabla
• <td> define una celda de tabla
• <thead> agrupa el contenido del header en una tabla
• <tbody> agrupa el contenido del body en una tabla
• <tfoot> agrupa el contenido del footer en una tabla
Nota: Los atributos colspan y rowspan permiten hacer que una 
columna o fila abarque mas de una columna o fila respectivamente

Head
• <head> define información sobre el documento
• <title> especifica el título del documento (title bar) 
• <base> define una dirección/destino por defecto para todos los 
links relativos de la página
• <link> especifica una relación entre el documento y un recurso 
externo
• <meta> define metadata sobre un documento HTML
• <script> define un script client-side
• <style> especifica estilos para un documento


*/