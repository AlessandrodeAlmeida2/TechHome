$(document).ready(function () {
    $(".burger").on("click", function () {
        $(this).toggleClass("active");
        // Toggle the navigation menu
        $("nav ul").slideToggle(); // Update the selector here
    });
});