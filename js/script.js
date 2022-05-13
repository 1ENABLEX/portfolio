/* JavaScript com Jquery */


$(document).ready(function () {
    /* Animações inicio 
       Formulário
    */
    $("#portfolio").click(function () {
      $("#carroselshow").slideToggle("slow", function () {
        //Se precisar executar algo após o carregamento da animação colocar aqui.
        $("").slideToggle();
      });
    });
  
    $("#botaoenviar").click(function () {
      $(".containerglassmorph").slideToggle("slow", function () {
        //Se precisar executar algo após o carregamento da animação colocar aqui.
        $('#cliqueAqui').show()
        $('#divForm').hide()
      });
    });
    /* Animações Tópico Enviado */
    $("#cliqueAqui2").click(function () {
      $("#divForm").slideToggle("slow", function () {
        //Se precisar executar algo após o carregamento da animação colocar aqui.
        $("#compartilhe").slideToggle();
        $('.containerglassmorph').hide()
        $('#compartilhe').hide()
        $('#cliqueAqui').slideToggle(function () {
  
        });
      });
    });
    /* Animações final */
  });