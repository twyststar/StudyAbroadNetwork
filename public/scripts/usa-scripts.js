var scrollFix = function(fixNode){
  // get initial position of the element
  // when intersecting the header, fix element at 40p from top
  // when we scroll up past original position, put it back where it was originally
  // add a close button when visible
  $(window).on("scroll.fixMe",function () {
    var currentScroll = $(window).scrollTop(); 
    var setOriginal = $(fixNode).parent().offset().top;
    var scrollTop = $(window).scrollTop(),
    elementOffset = $(fixNode).offset().top,
    distance = (elementOffset - scrollTop);
    if(distance <= 100){
      $(fixNode).css({ 
        'position': 'fixed',
        'top': '40px',
        'border-bottom':'1px solid #0a3170',
        'background-color': 'white',
        'text-align': 'center',
        'width': '90%'
      });
    } 
    if (currentScroll < setOriginal){
      $(fixNode).attr('style','position:relative');
    }
  });
}