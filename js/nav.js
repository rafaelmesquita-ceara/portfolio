

(function () {
  var menu = document.getElementById('header'); // colocar em cache
  window.addEventListener('scroll', function () {
      if (window.scrollY > 0) menu.classList.add('menuFixo'); // > 0 ou outro valor desejado
      else menu.classList.remove('menuFixo');
  });
})();

(function () {
  window.addEventListener('scroll', function () {
      console.log(window.scrollY);
      if (window.scrollY > 0){
        $("#conteudo").css("margin-top", `${window.scrollY}px`);
        $("#conteudo").css("opacity", `${(1000 - window.scrollY*2.5)/1000}`);
      }
      if (window.scrollY > 400) $("#conteudo").css("display", `none`);
      if (window.scrollY <= 400){
        $("#conteudo").css("display", `initial`);
       
      }else{
        $("#conteudo").css("opacity", `1`);
      }
    });
})();

