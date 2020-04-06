$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//click on X to delete li

$("ul").on("click", "span", function (event) {
  $(this) //this  refers to span
    .parent()
    .fadeOut(500, function () {
      $(this).remove(); //this refers to li
    });
  event.stopPropagation; //to stop bubbling
});

//adding todos

$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    //when enter key is pressed
    //grabbing todos
    var todoText = $(this).val();
    $(this).val(""); //clears the input field on enter button pressed
    //creating new li and adding it to ul
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>"
    );
  }
});

//toggling the input

$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle();
});
