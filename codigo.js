guias={11:['1','+2','+1'],12:['1','+3','+2'],13:['1','+4','+3'],14:['1','+5','+4'],15:['1','+6','+5'],17:['2','-1','-3'],20:['2','+2','&nbsp;=']}
function cambiaguia() {
    total=document.getElementById('total').value;
    document.getElementById('titulo').innerHTML =total;
    document.getElementById('pos1').innerHTML =guias[total][0];
    document.getElementById('pos2').innerHTML =guias[total][1];
    document.getElementById('pos3').innerHTML =guias[total][1];
    document.getElementById('pos4').innerHTML =guias[total][1];
    document.getElementById('pos5').innerHTML =guias[total][2];
    }
texts={
'ES':{
    'title':'Generador Lighting Addition',
    'total1':'Suma parcial:',
    'total2':'* mejor opci&oacute;n',
    'numrows':'N&uacute;mero de filas:',
    'numcols':'N&uacute;mero de columnas:',
    'numpages':'N&uacute;mero de p&aacute;ginas:',
    'generate':'Generar',},
'EN':{
    'title':'Lighting Addition Generator',
    'total1':'Partial sum:',
    'total2':'* better option',
    'numrows':'Number of rows:',
    'numcols':'Number of columns:',
    'numpages':'Number of pages:',
    'generate':'Generate',},
}
function changelang(lang) {
    document.getElementById('tituloweb').innerHTML=texts[lang]['title'];
    document.getElementById('total').labels[0].innerHTML=texts[lang]['total1'];
    document.getElementById('total2').innerHTML=texts[lang]['total2'];
    document.getElementById('numrows').labels[0].innerHTML=texts[lang]['numrows'];
    document.getElementById('numcols').labels[0].innerHTML=texts[lang]['numcols'];
    document.getElementById('numpages').labels[0].innerHTML=texts[lang]['numpages'];
    document.getElementById('generate').innerHTML=texts[lang]['generate'];
}
document.addEventListener("DOMContentLoaded", function(event) { 
    cambiaguia();
    document.getElementById("generate").addEventListener("click",()=>lightingaddition(
        parseInt(document.getElementById('total').value),
        parseInt(document.getElementById('numcols').value),
        parseInt(document.getElementById('numrows').value),
        parseInt(document.getElementById('numpages').value)));
    var elements = document.getElementsByClassName("enlace");
    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', (e) => changelang(e.target.innerHTML));
        };
  });
