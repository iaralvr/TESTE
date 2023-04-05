document.addEventListener("click",showcolor );

document.getElementById("botão"). addEventListener("clik",  shownone);

function showcolor()
{
    document.body.style.backgroundColor ="red";
}

function shownone()
{
    let usuario= document.getElementById("nome").value;
    document.getElementById("mensagem").innerText="Meu nome é:" + usuario;
}