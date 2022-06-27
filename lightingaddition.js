function lightingaddition(total,cols,rows,pages) {
    const minmax={11:[[0,7],[0,8]],17:[[2,9],[3,9]],20:[[0,7],[0,7]]} // minimos y maximos del numero aleatorio
    const tamfuente={4:145,5:135} // tamaño de la fuente


    var doc = new jspdf.jsPDF({orientation: "landscape",unit: "mm", format:"a4"});
    let widthhpage=doc.internal.pageSize.getWidth()-10 // descuento 10 de margen por cada lado
    let heightpage=doc.internal.pageSize.getHeight()-20 // descuento 10 de margen por cada lado

    doc.setFont("Arial","bold");
    doc.setFontSize(145);

    let poscol=[25]
    while (poscol.length<cols) {
    	poscol.push(poscol.at(-1)+widthhpage/cols);
      }
    let posfila=[50]
    while (posfila.length<rows) {
    	posfila.push(posfila.at(-1)+heightpage/rows);
      }

    console.log(posfila);
    let comb=generate_comb([],rows-1,total);
    
    
    for (let page=0;page<pages;page++) {
        if (page>0) doc.addPage();
        for (let colum=0;colum<cols;colum++) {
            let numeros=rand(comb);
            if (colum==(cols-1)) {
                numeros.splice(rows-2,0,getRndInteger(minmax[total][1][0],minmax[total][1][1]));
            } else {
                numeros.splice(rows-2,0,getRndInteger(minmax[total][0][0],minmax[total][0][1]));
                }
            for (fila=0;fila<rows;fila++) doc.text(numeros[fila].toString(), poscol[colum], posfila[fila]);
            //console.log(numeros);
            }
       }
     
    doc.save("a4.pdf");
}

function generate_comb(val,rows,total) {    
    if ((val.length>0) && (val[0].length===rows)) {
        return val.filter(x=>x.reduce((a, b) => a + b, 0) === total);
    }
    let newval=[];
    for (let num=0;num<10;num++) {
        if (val.length===0) {
            newval.push([num]);
        }else {
            val.forEach(element => {
                newval.push([...element,...[num]]);
            });
        }
    }   
    return generate_comb(newval,rows,total);
}

function rand(items) {
    // "|" for a kinda "int div"
    return items[items.length * Math.random() | 0];
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
