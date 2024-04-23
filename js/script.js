// Customize appointment page
$(document).ready(function () {
    // Read More

    // Choicebtn
    var $radioButtons = $('.choicebtn input[type="radio"]');
    $radioButtons.click(function () {
        $radioButtons.each(function () {
            $(this).parent().toggleClass('checked11', this.checked);
        });
    });

    // Date and Time page
    $("#datepicker").datepicker({
        startDate: new Date(),
    });
});
// customize appt
var buttons = document.querySelectorAll('.read-more');
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        var paragraph = this.previousElementSibling;
        if (paragraph.style.height === 'auto') {
            paragraph.style.height = '22px';
            this.textContent = '....Read More';
        } else {
            paragraph.style.height = 'auto';
            this.textContent = 'Read Less';
        }
    });
});
// Home page
$("#closeButton").click(function () {
    $(".collapse.navbar-collapse.show").removeClass("show");
});
$(document).click(function (event) {
    if (!$(event.target).closest('.navbar-nav li').length) {
        $(".collapse.navbar-collapse.show").removeClass("show");
    }
});
// Show/Hide Pwd
$(".pwd-show-btn").click(function () {
    var input = $(this).siblings("input");
    var inputValue = input.val().trim();
    if (inputValue !== "") {
        var buttonText = $(this).text();
        if (buttonText === "Show") {
            $(this).text("Hide");
            input.attr("type", "text");
        } else {
            $(this).text("Show");
            input.attr("type", "password");
        }
    }
});
//therapist View button
$(document).ready(function () {
    $('.profilepopup').click(function (a) {
        $('.locmapmain').addClass('showme');
        a.stopPropagation();
    });
    var closeSidebar = function () {
        $('.locmapmain').removeClass('showme');
        open = false;
    }
    $(document).click(function (event) {
        if (!$(event.target).closest('.innerpad').length) {
            closeSidebar();
        }
    });
    $('.cancel i').click(function () {
        $('.locmapmain').removeClass('showme');
    });
});
