$(function () {

    $('.work-section').each(function () {

        var $container = $(this),
            $navItems = $container.find('.tabs-nav li'),
            $highlight = $container.find('.tabs-highlight');

        $container.tabs({
            hide: { duration: 250 },
            show: { duration: 125 },
            create: moveHighlight,
            activate: moveHighlight
        });

        function moveHighlight (event, ui) {
            var $newTab = ui.newTab || ui.tab,
                left = $newTab.position().left;
            $highlight.animate({ left: left }, 500, 'easeOutExpo');
        }
    });
});

$(function() {
$('.click').click(function() {
        var imgSrc = $(this).children().attr('src');
        $('.bigimg').children().attr('src', imgSrc);
        $('.modal').fadeIn();
        $('body,html').css('overflow-y', 'hidden');
        return false
      });

$('.close-btn').click(function() {
        $('.modal').fadeOut();
        $('body,html').css('overflow-y', 'visible');
        return false
      });
});
$(window).on('load', function(){
  $('body').removeClass('fadeout');
});
$(function() {
  $('a:not([href^="#"]):not([target])').on('click', function(e){
    e.preventDefault();
    url = $(this).attr('href'); 
    if (url !== '') {
      $('body').addClass('fadeout');
      setTimeout(function(){
        window.location = url;
      }, 800);
    }
    return false;
  });
});
