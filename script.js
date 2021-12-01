let url = window.location.href;
let caixa = document.getElementById("substituir");

if (url.includes("confirmation")){
    caixa.innerHTML = "<h2>Cadastro concluído com sucesso</h2><p>Mas agora você precisa conferir a sua caixa de entrada e clicar no link de confirmação. Pode ser que o e-mail tenha caído na caixa de spam, então dê uma conferida por lá.</p>";
}
