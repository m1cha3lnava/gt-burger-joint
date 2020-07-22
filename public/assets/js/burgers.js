// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".eaten").on("click", function (event) {
    var id = $(this).attr("id");

    var devouredState = {
      devoured: true,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devouredState,

    }).then(function () {
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    
    var newBurger = {
      burger_name: $("#burger").val().trim(),
      devoured: 0,
    };
    
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      location.reload();
      // console.log(newBurger);
    });
  });
});
