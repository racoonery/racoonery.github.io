jQuery(document).ready(function(){

      $(document).scroll(function(){
        t = (100 - $(this).scrollTop())/100;
        if(t<0)t=.0;
        $('.fixed-bg h1').css({opacity: t})
    });
});

$(document).ready(function() {


    $(function() {
    
    $("h3")
        .wrapInner("<span>")

    $("h3 br")
        .before("<span class='spacer'>")
        .after("<span class='spacer'>");

});

  $( function() {

    var container = document.querySelector('#adventure-container');
    var msnry = new Masonry( container, {
  // options
    columnWidth: 550,
  itemSelector: '.adventure-item'
});
});

});
