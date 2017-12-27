var elementos;
document.addEventListener("DOMContentLoaded", function(event) {
	contarElementos();
	function contarElementos(){
		elementos = document.querySelectorAll(".sectionsContent");
		var contador = 0;
		for(var i=0; i<elementos.length; i++){
			contador++;
			elementos[i].setAttribute("id", "abreFecha" + contador);
			elementos[i].setAttribute("onClick", "idElemento(this)");
		}
	}
});

function idElemento(elemento){
	var verificarIdClicado = elemento.id;
	var elementoClicado = document.getElementById(verificarIdClicado);
	var conteudo = elementoClicado.querySelector(".Content");
	
	var conteudosInternos = document.querySelectorAll(".Content");
	for(var i=0; i<conteudosInternos.length; i++){
		conteudosInternos[i].classList.remove("active");
	}
	
	
	var displayPadrao = window.getComputedStyle(conteudo, null).getPropertyValue("display");
	if(displayPadrao == "none"){	
		conteudo.style.display = "block";
		var alturaPadrao = window.getComputedStyle(elementoClicado, null).getPropertyValue("height");
		conteudo.classList.add("animacaoAltura","active");
		conteudo.style.height = "0px";
		conteudo.style.overflow = "hidden";
		setTimeout(function(){ 
			conteudo.style.height = alturaPadrao;
		}, 100);
		esconderOutros();
	}
	
	if(displayPadrao == "block"){
		conteudo.style.height = "0px";
		setTimeout(function(){ 
			conteudo.style.display = "none";
			conteudo.style.height = "auto";
		}, 2000);
		conteudo.classList.remove("active");
	}

}

function esconderOutros(){
	var elementoNAtivo = "";
	var elementosNaoAtivos = document.querySelectorAll(".Content");
	for(var i=0; i< elementosNaoAtivos.length; i++){
		if(elementosNaoAtivos[i].style.display == "block" && !elementosNaoAtivos[i].classList.contains("active")){
			elementosNaoAtivos[i].style.height = "0px";
			elementoNAtivo = elementosNaoAtivos[i];
		}		
	}
	setTimeout(function(){ 
		elementoNAtivo.style.display = "none";
		elementoNAtivo.style.height = "auto";
	}, 2000);
}

