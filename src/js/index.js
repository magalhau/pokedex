const botaoalterartema = document.getElementById("botao-alterar-tema")

const body =  document.querySelector("body")

const imagembotaotrocadetema = document.querySelector(".imagem-botao")



botaoalterartema.addEventListener("click", () => {
    const modoescuroestaativo = body.classList.contains("modo-escuro")
    body.classList.toggle("modo-escuro")
  
    if(modoescuroestaativo) {
        
        imagembotaotrocadetema.setAttribute("src", "./src/imagens/sun.png")
    }else{
        
        imagembotaotrocadetema.setAttribute("src", "./src/imagens/lua.png")
    } 

})