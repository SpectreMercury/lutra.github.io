/**
 * Created by francis on 2017/5/24.
 */

var secondText = ['从', '2011', '到', '2017', '，','</br>', '从', '唐', '岛', '湾', '的', '初', '吻', '，','</br>', '六', '年', '的', '分', '分', '合', '合', '，','</br>', '到', '现', '在', '的', '相', '隔', '10000', '公里', '，','</br>', '我', '们', '经', '历', '的', '好', '像', '比', '任', '何', '人', '都', '多']

function init() {
  _init.page();
  _init.event();
}

var _init = {
  page: function () {
    _method._startProcess();
  },
  event: function () {

  }
}

var _method = {
  /*
   第一个页面的过度
   */
  _startProcess: function () {
    $('.marry-me-first').delay(3000).fadeOut(1000);
    setTimeout(function () {
      $('.marry-me-container .marry-me-second').show();
      _method._processChangeBackground();
    }, 5000);
    setTimeout(function () {
      _method._processOneDateChange();
    }, 6000);
    setTimeout(function () {
      _method._processFontToTop();
    }, 9000);
    setTimeout(function () {
      _method._processShowSecondText();
    }, 11000);
  },
  /*
   2011-2017 数字动画
   */
  _processOneDateChange: function () {
    var countYear = new CountUp($('.marry-me-old-date .year')[0], 2011, 2017, 0, 4);
    countYear.start();
  },
  /*
   渐入粉色背景
   */
  _processChangeBackground: function () {
    $('.marry-me-container .pink-mask').addClass('active');
  },
  /*
   日期文字上移
   */
  _processFontToTop: function () {
    $('.marry-me-container .marry-me-second .marry-me-old-date').addClass('active');
  },
  /*
   仿造输入事件
   */
  _processShowSecondText: function () {
    var i = 0;
    var fakeSentence = '';
    var sentenceLen = secondText.length;
    $('.media-container').html('<audio autoplay src="media/aixia.mp3"></audio>');
    var fakeType = setInterval(function () {
      if (i >= sentenceLen) {
        _method._processShowNextBtn();
        clearInterval(fakeType);
      } else {
        fakeSentence += secondText[i];
        $('.marry-me-container .marry-me-second .marry-me-second-text').html(fakeSentence);
        i++;
      }
    }, 300);
  },

  /*
   动画汇总
   //TODO: 需要优化，整体改为css3,或者在头部引入一个总得状态机
   */


  _processShowNextBtn: function () {
    $('.marry-me-second-btn').show();
    $('body').on('keydown', _method._onclickStartCartoon);
  },
  _onclickStartCartoon: function () {
    $('.marry-me-second').fadeOut();
    $('body').off('keydown', 'body');
    /*
     动画一：话剧

     此处是为了两个画面不会出现交集
     */
    setTimeout(function () {
      $('.marry-me-third').fadeIn();
    }, 2000);
    /*
     多展示一秒，续一秒（逃
     */
    setTimeout(function () {
      $('.marry-me-third .marry-me-drama').addClass('drama-animation');
      $('.marry-me-third .marry-me-drama-text').addClass('drama-text-animation');
    }, 4000);

    /*
     *  动画二：唐岛湾，下雨天
     *
     *  此处需要一个很短的交集
     */
    setTimeout(function () {
      $('.marry-me-fourth').fadeIn(1000);
    }, 7000);

    /*
     *  多展示一秒，续一秒（逃
     */

    setTimeout(function () {
      $('.marry-me-fourth .marry-me-rain').addClass('rain-animation');
      $('.marry-me-fourth .marry-me-rain-text').addClass('rain-text-animation');
    }, 10500);

    /*
     *  动画三：分手
     *
     *  只使用css3
     */
    setTimeout(function () {
      $('.marry-me-fifth').fadeIn(1222);
    }, 14000);
    setTimeout(function() {
      $('.marry-me-fifth .marry-me-broke').addClass('broke-animation');
      $('.marry-me-fifth .marry-me-broke-text').addClass('broke-text-animation');
    }, 17000);
    setTimeout(function() {
      $('.marry-me-sixth').fadeIn(1222);
    }, 22000);
    setTimeout(function() {
      $('.marry-me-seventh').fadeIn(1222);
    }, 29000);

    setTimeout(function () {
      $('.marry-me-seventh .marry-me-graduate').addClass('graduate-animation');
      $('.marry-me-seventh .marry-me-graduate-text').addClass('graduate-text-animation');
    }, 35000);

    setTimeout(function() {
      $('.marry-me-eighth').fadeIn(1222);
    }, 40000);
    setTimeout(function() {
      $('.marry-me-final').fadeIn(1222);
      $('.pink-mask').removeClass('active');
    }, 48000);
  }

}

var _helper = {}

init()