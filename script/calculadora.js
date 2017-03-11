 var num, acc = 0, op = "";
    var valor, resul, n=0, neg=-1, tecla=0;
    var acu=0, ope="";
    var ans="0";

  function calcular() {
    try{operaciones.value=math.eval(resultado.value.replace(/Ans/gi, ans));
      if (operaciones.value!=="undefined")
      {ans=operaciones.value;}
      
      document.getElementById("Resp").innerHTML="Operación Realizada";
      }
    catch(err) {
      //resultado.value="ERROR";
      document.getElementById("Resp").innerHTML="<strong>ERROR: </strong>"+err.message;
      alert("ERROR DE CALCULO\n"+err.message);}
      resultado.focus()}
  
  function inic ()   {
    resultado.focus();
  }
  function vaciar () {
    operaciones.value="";
    resultado.value="";
    document.getElementById("Resp").innerHTML="";
    resultado.focus();
  } 

  function escribe(num){
      document.getElementById("Resp").innerHTML="";
      resultado.focus();
      r=resultado.value;
      pos=resultado.selectionStart;//resultado.value.slice(0, resultado.selectionStart).length;
      resultado.value=r.substring(0,pos)+num+r.substring(pos,r.length);
      resultado.setSelectionRange(pos+num.length,pos+num.length);
      
  }

  function atras(){
    document.getElementById("Resp").innerHTML="";
    pos=resultado.selectionStart;
    resultado.setSelectionRange(pos-1,pos-1);
    resultado.focus();
    operaciones.value=resultado.selectionStart;
  }
  function adelante(){
    document.getElementById("Resp").innerHTML="";
    pos=resultado.selectionStart;
    resultado.setSelectionRange(pos+1,pos+1);  
    resultado.focus();
    operaciones.value=resultado.selectionStart;


  }
  
  function validar(e){tecla=(document.all) ? e.keyCode: e.which;
              return(tecla>=48 && tecla<=57);} 
                //onkeypress="return validar(event)"
