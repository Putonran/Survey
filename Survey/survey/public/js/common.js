$(function () {
  //HEADER
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $('.navbar').addClass('active');
      $('.navbar').removeClass('index-navbar');
      $('.header').removeClass('index-header');
    } else {
      $('.navbar').removeClass('active');
      $('.navbar').addClass('index-navbar');
      $('.header').addClass('index-header');
    }
  });

  // NAVBAR
  $(document).on('click', '.navbar-toggler', function (e) {
    e.preventDefault();
    $(this).toggleClass('show');
  });

  /* SIDEBAR */
  $(document).on('click', '.sidebar .category-btn', function (e) {
    e.preventDefault();
    $(this).toggleClass('show');
    $('.category-content').toggleClass('show');
  });

  //TABLE
  if ($('.table').length) {
    var th_data;
    $('.table').each(function () {
      var _table = $(this);
      $(this)
        .find('th')
        .each(function (index) {
          var index_th = index;
          th_data = $(this).text();
          _table.find('tr').each(function () {
            $(this)
              .find('td')
              .each(function (index) {
                var index_td = index;
                if (index_th == index_td) {
                  $(this).attr('data-content', th_data);
                }
              });
          });
        });
    });
  }

  //AOS
  AOS.init({
    duration: 1000,
    once: true,
  });

  //SHARE
  $(document).on('click', '.share .button', function () {
    $('.share .nav').toggleClass('active');
  });

  // QUANTITY
  $("input[type='number']").inputSpinner();
  var $changedInput = $("#changedInput");
  var $valueOnInput = $("#valueOnInput");
  $changedInput.on("input", function (event) {
    $valueOnInput.html($(event.target).val());
  });

  //SCROLLUP
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<img src="images/scrollup.svg">', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
});
