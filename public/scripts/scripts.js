
//Shows smaller fixed header on scroll
$(window).scroll(function() {
  var top = $(this).scrollTop();
  if (top > 120) {
    $(".headerScroll").slideDown();
  } else {
    $(".headerScroll").hide();
  }
});





// Learn More accordion button functions
$(".schoolAccordion").click(function(){
  $(".accordionShow").hide();
  $(this).parent().next().show();
  scrollFix($(this).parent().next().find('.title-fix-1'))
  console.log($(this).parent().next().find('.title-fix-1').offset().top + ' inside click') // need to pass the position here? ? 
})

// Canada Tabbed Content

function openArea(evt, areaName) {
  // Declare all variables
  var i, tablinks;
  $(".accordionShow").hide();
  // Get all elements with class="tabcontent" and hide them
  $(".tabcontent").hide();
  $("#provinceMap").attr("src", "assets/images/" + areaName + "CanadaMap.png")

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  $("#" + areaName).show().addClass("activeBorder");
  evt.currentTarget.className += " active";
}

function openSubArea(evt, areaName) {
  // Declare all variables
  var i, tablinks;
  $(".accordionShow").hide();
  // Get all elements with class="tabcontent" and hide them
  $(".tabcontent2").hide();

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active2", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  $("#" + areaName).show();
  evt.currentTarget.className += " active2";
}

$(".closeBtn").click(function(){
  $(".accordionShow").hide();
  $(window).off('scroll');
})

//Load and play videos on click instead of on page load
var video_wrapper = $('.video-container');
//  Check to see if youtube wrapper exists
if (video_wrapper.length) {
  // If user clicks on the video wrapper load the video.
  $('.video-container').on('click', function () {
    var url = $(this).attr('dataurl');
    /* Dynamically inject the iframe on demand of the user.
     Pull the youtube url from the data attribute on the wrapper element. */
    $(this).html('<iframe width="450" height="300" frameborder="0" allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="' + url + '"></iframe >');
  });
}

//Fees table width

  let tableWidth = $(".apisMain").width();
  $(".apisSecondary").width(tableWidth);

$(window).resize(function(){
  let tableWidth = $(".apisMain").width();
  $(".apisSecondary").width(tableWidth);
})

//Form 

// $(".mailform").on('submit', function(){
//   $cbx_group = $("input[name='countrySelectionInput']");
//   console.log($cbx_group)
//   $cbx_group.prop('required', true);
//   if($cbx_group.is(":checked")){
//     $cbx_group.prop('required', false);
//   }
// })  


  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
        console.log('valid form')
        //action="/contact" method="post" 
      }, false);
    });
  }, false);

