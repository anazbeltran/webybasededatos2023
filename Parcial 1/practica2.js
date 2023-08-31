$(document).ready(function () {
  $("#boton1").click(function (e) {
    alert("Evento click boton 1");
  });

  $("#div1").on("dbclick", function (){
    alert("Evento doble click");
  });

    $("#input1").focus(function (e) {
      console.log("Métodos focus al dar click en input");
    });

    $("#texto1").hover(function (){
        $("#texto1").css("bakcground-color", "blue");
    }, function (){
        $("#texto1").css("bakcground-color", "red");
    }
    );

    $("#input2").keydown(function (e){
        console.log("key down");
        $("#input2").css("background-color", "yellow");
    });
});