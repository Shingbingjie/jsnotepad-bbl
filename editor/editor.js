/* exported $editor */
var $editor = (function() {
    var $DOM = $(''
        + '<div class="notepad-editor">'
          + '<textarea spellcheck="false"></textarea>'
        + '</div>');
  
    var $textArea = $DOM.find('textarea');
 
  
    function resize(isBig) {
      if(isBig) {
        $DOM.css({bottom: '21px'});
      } else {
        $DOM.css({bottom: '0'});
      }
    }

    var styleValue={
      'fontFamily':'',
      'fontWeight':'',
      'fontStyle':'',
      'fontSize':0,
    };

    $textArea.on('change keyup paste', function() {
      styleValue.fontFamily=localStorage.getItem('fontFamily');
      styleValue.fontWeight=localStorage.getItem('fontWeight');
      styleValue.fontStyle=localStorage.getItem('fontStyle');
      styleValue.fontSize=localStorage.getItem('fontSize');
      console.log(styleValue);
      console.log('111sty')
      $textArea.css({fontFamily:styleValue.fontFamily}) ;
      $textArea.css({fontWeight:styleValue.fontWeight}) ;
      $textArea.css({fontStyle:styleValue.fontStyle}) ;
      $textArea.css({fontSizey:styleValue.fontSize}) ;
      console.log('1222sty')
      // your code here
  
  });
  
    function show() {
      $('body').append($DOM);
      $textArea.trigger('focus');  
    }
  
    return {show: show, resize: resize};
  }());