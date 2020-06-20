$(function() {
  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    var newBurg = {
      name: $("#newBurg").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurg,
    }).then(function() {
      console.log("New burger Added!");
      location.reload(); // Refresh Page
    });
  });

  $(".devour").on("click", function(event) {
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then(function() {
      console.log("Burger has been devoured!");
      location.reload();
    });
  });
});