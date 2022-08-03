//cria botão de excluir tarefas
var itens = document.getElementsByTagName("LI"); 
var i;
for (i = 0; i < itens.length; i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7"); //cria um novo nó de texto, esse netódo pode ser utilizado para escapar tags html
    span.className = "close";
    span.appendChild(txt);
    itens[i].appendChild(span)
}

//função botao de fechar
var close = document.getElementsByClassName("close");
var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none"
        }
    }

//tarefa feita!
var list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if (ev.target.tagName === 'LI'){
            ev.target.classList.toggle('checked');
    }
}, false);


//criar um novo item quando o botão é clicado
function newElement() {
    var li = document.createElement("li");
    var inputCaixa = document.getElementById("myInput").value;
    var t = document.createTextNode(inputCaixa);

    li.appendChild(t);
    if (inputCaixa ==='') {
        alert("Insira uma tarefa válida");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";


    //cria botão de excluir tarefas nas novas tarefas 
    var itens = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < itens.length; i++){
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        itens[i].appendChild(span)
}

    //função botao de fechar nas novas tarefas 
    var close = document.getElementsByClassName("close");
    var i;
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none"
            }
        }


}