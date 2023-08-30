$(document).ready(function  (){
  //alert("Funciona jquery");
  $("#boton1").on("click", function(){
       $("#texto1").html("emoficado")
  });

  $("#texto1").hover(function (){
       $(this).css("background-color", "purple");
       $(this).css("font-size", "50px");
  },function (){
    $(this).css("background-color", "blue");
    $(this).css("font-size", "30px");
  }
  );

  $("#boton2").click(function (e) {
    $("#imagen1").fadeToggle("slow");
  });
});