/* exported $dlgFont */
/* global comList: true */
var $dlgFont = (function() {
    var $dlg = $(''
        + '<div class="notepad-dlg-mask notepad-dlg-font">'
          + '<div class="dialogbox notepad-dlgbox">'
            + '<div class="notepad-dlg-titlebar">'
              + '<p class="title">字体</p>'
              + '<span class="close-btn">✖</span>'
            + '</div>'
            + '<div class="main notepad-dlg-main">'
              + '<div class="font-family"><p>字体(F):</p></div>'
              + '<div class="font-style"><p>字形(Y):</p></div>'
              + '<div class="font-size"><p>大小(S):</p></div>'
              + '<fieldset class="sample">'
                + '<legend>示例</legend>'
                + '<p class="pp">AaBbYyZz</p>'
              + '</fieldset>'
              + '<div class="script">'
                + '<label>'
                  + '脚本(R):<br>'
                  + '<select>'
                    + '<option value="西欧语言">西欧语言</option>'
                    + '<option value="中文 GB2312">中文 GB2312</option>'
                  + '</select>'
                + '</label>'
              + '</div>'
              + '<input class="btn-ok btn" type="button" value="确定">'
              + '<input class="btn-cancel btn" type="button" value="取消">'
            + '</div>'
          + '</div>'
        + '</div>');
  
    var $btnOk = $dlg.find('.btn-ok'),
        $btnClose = $dlg.find('.close-btn'),
        $btnCancel = $dlg.find('.btn-cancel'),
        $titleBar = $dlg.find('.notepad-dlg-titlebar'),
        $sample=$dlg.find('.pp');
    
    var styleValue={
      'fontFamily':'',
      'fontWeight':'',
      'fontStyle':'',
      'fontSize':0,
    };
    
    function locstor(){
      console.log(styleValue);
      localStorage.setItem('fontFamily',styleValue.fontFamily);
      localStorage.setItem('fontStyle',styleValue.fontStyle);
      localStorage.setItem('fontWeight',styleValue.fontWeight);
      localStorage.setItem('fontSize',styleValue.fontSize);
      console.log('ok');
      $dlg.remove();
    }
  
    function init() {
      var fonts = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'],
          styles = ['常规', '斜体', '粗体', '粗偏斜体'],
          stlylesCSS=['normal','italic','bold'],
          sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];
  
      var l1 = new comList();
      l1.show({
        container: '.notepad-dlg-font .font-family',
        width: '176px',
        list: fonts,
        isFont: true,
        selectHandler: function(e) { console.log(fonts[e]);
          $sample.css({fontFamily:fonts[e]}) ;
          styleValue.fontFamily=fonts[e];
          console.log(styleValue)}
      });
  
      var l2 = new comList();
      l2.show({
        container: '.notepad-dlg-font .font-style',
        select: 3,
        width: '132px',
        list: styles,
        isFontStyle: true,
        selectHandler: function(e) { console.log(styles[e]);
          if(e==0){
            styleValue.fontStyle=stlylesCSS[0];
            styleValue.fontWeight='';
          }
          if(e==1){
            styleValue.fontStyle=stlylesCSS[1];
            styleValue.fontWeight='';
          }
          if(e==2){
            styleValue.fontStyle=stlylesCSS[0];
            styleValue.fontWeight=stlylesCSS[2];
          }
          if(e==3){
            styleValue.fontStyle=stlylesCSS[1];
            styleValue.fontWeight=stlylesCSS[2];
          }
          console.log(styleValue)
          $sample.css({fontStyle:styleValue.fontStyle}) ;
          $sample.css({fontWeight:styleValue.fontWeight}) ;
          }
      });
  
      var l3 = new comList();
      l3.show({
        container: '.notepad-dlg-font .font-size',
        width: '64px',
        list: sizes,
        selectHandler: function(e) { console.log(sizes[e]);
          styleValue.fontSize=parseInt(sizes[e]); 
          $sample.css({fontSize:styleValue.fontSize})
          console.log(styleValue)}
      });
    }

    function destory() { $dlg.remove(); }
    function show() {
      $('body').append($dlg);
      init();
      $dlg.find('.dialogbox').draggable({handle: $titleBar});
  
      $btnClose.click(destory);
      $btnCancel.click(destory);
      $btnOk.click(locstor);
    }
  
    return {show: show};
  }());