document.addEventListener("click",showcolor );

document.getElementById("botao"). addEventListener("clik",  shownone);

function showcolor()
{
    document.body.style.backgroundColor ="red";
}

function shownone()
{
    let usuario= document.getElementById("nome").value;
    document.getElementById( "mensagem" ).innerHTML="Meu nome é:" + usuario;
    document.getElementById( "nome" ).value="";
}