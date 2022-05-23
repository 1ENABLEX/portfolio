$(document).ready(function () {
  $("#portfolio").click(function () {
      $("#carroselshow").slideToggle("slow", function () {
          //Se precisar executar algo após o carregamento da animação colocar aqui.
          $(".homeshow").slideToggle();
      });                
  });
});
$(document).ready(function () {
  $("#sobre").click(function () {
      $(".sobreshow1").slideToggle("slow", function () {
          //Se precisar executar algo após o carregamento da animação colocar aqui.
          $(".homeshow").slideToggle();
      });
      $("#carroselshow").hide();
  });
});
$(document).ready(function () {
  $("#home").click(function () {
      $(".homeshow").show();
      $("#carroselshow").hide();
      $(".sobreshow1").hide();
  });
});

const dark = document.getElementById('dark')
const back = document.body
const btnChange = document.querySelectorAll('.pulse')
dark.addEventListener('click', () => {
  dark.classList.toggle('dark')
  back.classList.toggle('dark')
  btnChange.forEach(elemento => elemento.classList.toggle('btn-change'))
})

// fundo de acordo com horario

const data = new Date() // recebe data pc
const hours = data.getHours() // recebe horas da data atual

function changeBackground(hx){
  document.querySelector('body').style.backgroundColor = hx
}

if(hours <= 12) {
  // document.querySelector('body').style.backgroundColor = `#d2f9f9`
  // document.querySelector('body').style.color = `#80df20`
  
  changeBackground(`#FAF7FD`)
}else if(hours <= 18){
  changeBackground(`#b7adeb`)
}else if(hours <= 23){
  changeBackground(`#050000`)
}

console.log(hours)