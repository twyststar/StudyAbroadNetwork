
//Shows smaller fixed header on scroll
$(window).scroll(function() {
  var top = $(this).scrollTop();
  if (top > 120) {
    // $(".headerStandard").slideUp();
    $(".headerScroll").slideDown();
  } else {
    // $(".headerStandard").slideDown();
    $(".headerScroll").hide();
  }
});


var scrollFix = function(fixNode){
  // var fixmeTop = $('.title-fix-1').offset().top;       // get initial position of the element
  //find original position of element when it becomes visible
  // when intersecting the header, fix element at 40p from top
  // when we scroll up past original position, put it back where it was originally
  // add a close button when visible
  $(window).scroll(function () {                  // assign scroll event listener
    var currentScroll = $(window).scrollTop(); 
    // console.log(currentScroll)
    // console.log(fixmeTop) // get current position
    // if ($('.title-fix-1').is(":visible")) {
      var setOriginal = $(fixNode).parent().offset().top;
      var scrollTop = $(window).scrollTop(),
        elementOffset = $(fixNode).offset().top,
        distance = (elementOffset - scrollTop);
        console.log('scroll top = ' + scrollTop)
        console.log("Element Offset = " + elementOffset)
        console.log("Distance = " + distance)
    console.log('distance is < 100 = ' + (distance <= 100))
      if(distance <= 100){
        console.log('hit the header')
        $(fixNode).css({                      // scroll to that element or below it
          'position': 'fixed',
          'padding-right': '10%',
          'top': '40px',
          'border-bottom':'1px solid #0a3170',
          //this is where I'll want them to stay on USA 
          'background-color': 'white',
          'text-align': 'center',
          'width': '100%'
        });
      }      // apply position: fixed if you
      if (currentScroll < setOriginal){
        console.log('scrolled past original position')                                  // apply position: relative
        $(fixNode).attr('style',                     // if you scroll above it
          'position:relative'
        );
      
    }
  });
}


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