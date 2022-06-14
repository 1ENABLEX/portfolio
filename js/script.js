$(document).ready(function () {
    $("#portfolio").click(function () {
        $(".conteudo-sobre").slideToggle("slow", function () {
            //Se precisar executar algo após o carregamento da animação colocar aqui.
            $(".conteudo-principal").slideToggle();
        });
    });
    $("#contato").click(function(){
        $(".forma-contato").slideToggle("slow", function(){
            
        });
    });
    $("#Foto-Anime").click(function () {
        $("#Foto-Human").slideToggle("fast", function (){
            $("#Foto-Anime").slideToggle(); 
        });
    });
    $("#Foto-Human").click(function () {
        $("#Foto-Anime").slideToggle("fast", function (){
            $("#Foto-Human").slideToggle(); 
        });
    });
});

function DarkMode() {
    var darkTheme = document.body;
    var darkBorder = document.querySelector(".conteudo-principal")
    var darkBorder2 = document.querySelector(".conteudo-sobre")
    darkTheme.classList.toggle("dark-mode");
    darkBorder.classList.toggle("dark-border");
    darkBorder2.classList.toggle("dark-border");
}