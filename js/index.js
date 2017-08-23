(function () {

    var stateMap = {
        slideIndex: 1,
        currentTaglineIndex: 1
    };

    var Scroll = function() {
        var contentTop      =   [];
        var contentBottom   =   [];
        var winTop      =   $(window).scrollTop();
        var rangeTop    =   200;
        var rangeBottom =   500;
        $('.navbar-collapse').find('.scroll a').each(function(){
            contentTop.push( $( $(this).attr('href') ).offset().top);
            contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
        })
        $.each( contentTop, function(i){
            if ( winTop > contentTop[i] - rangeTop ){
                $('.navbar-collapse li.scroll')
                .removeClass('active')
                .eq(i).addClass('active');          
            }
        })
    };

    var bind = function() {
        $(window).scroll(function(event) {
            Scroll();
        });

        $('.navbar-collapse ul li a').on('click', function() {  
            $('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
            return false;
        });

        $('#tohash').on('click', function(){
            $('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
            return false;
        });

        $('.accordion-toggle').on('click', function(){
            $(this).closest('.panel-group').children().each(function(){
            $(this).find('>.panel-heading').removeClass('active');
             });

            $(this).closest('.panel-heading').toggleClass('active');
        });

        $('.progress-bar').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).css('width', $(this).data('width') + '%');
                $(this).unbind('inview');
            }
        });

        $("a[rel^='prettyPhoto']").prettyPhoto({
            social_tools: false
        });

        $('.user-type').on('click', function(e) {
            var $this = $(this);
            var isActive = $this.hasClass('btn-success active');
            if(isActive) {
                return;
                $this.removeClass('btn-success').addClass('btn-primary');
            } else {
                $this.siblings().removeClass('btn-success active').addClass('btn-primary');
                $this.addClass('btn-success active').removeClass('btn-primary');
            }
        });

        // Contact form for php
        // var form = $('#main-contact-form');
        // form.submit(function(event){
        //     event.preventDefault();
        //     var form_status = $('<div class="form_status"></div>');
        //     $.ajax({
        //         url: $(this).attr('action'),
        //         beforeSend: function(){
        //             form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
        //         }
        //     }).done(function(data){
        //         form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
        //     });
        // });
    };

    var sliderInit = function() {
        var time = 7; // time in seconds

        var $progressBar,
          $bar, 
          $elem, 
          isPause, 
          tick,
          percentTime;
     
        //Init the carousel
        $("#main-slider").find('.owl-carousel').owlCarousel({
          slideSpeed : 500,
          paginationSpeed : 500,
          singleItem : true,
          navigation : true,
            navigationText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
            ],
          afterInit : progressBar,
          afterMove : moved,
          startDragging : pauseOnDragging,
          //autoHeight : true,
          transitionStyle : "fadeUp"
        });

        // Slider Private Functions

        //Init progressBar where elem is $("#owl-demo")
        function progressBar(elem){
          $elem = elem;
          //build progress bar elements
          buildProgressBar();
          //start counting
          start();
        }
     
        //create div#progressBar and div#bar then append to $(".owl-carousel")
        function buildProgressBar(){
          $progressBar = $("<div>",{
            id:"progressBar"
          });
          $bar = $("<div>",{
            id:"bar"
          });
          $progressBar.append($bar).appendTo($elem);
        }
     
        function start() {
          //reset timer
          percentTime = 0;
          isPause = false;
          //run interval every 0.01 second
          tick = setInterval(interval, 10);
        };
     
        function interval() {
          if(isPause === false){
            percentTime += 1 / time;
            $bar.css({
               width: percentTime+"%"
             });
            //if percentTime is equal or greater than 100
            if(percentTime >= 100){
              //slide to next item 
              $elem.trigger('owl.next')
            }
          }
        }
     
        //pause while dragging 
        function pauseOnDragging(){
          isPause = true;
        }
     
        //moved callback
        function moved(){
          //clear interval
          clearTimeout(tick);
          //start again
          start();
        }
    };

    var portfolioImagesInit = function() {
        var $portfolio_selectors = $('.portfolio-filter >li>a');
        var $portfolio = $('.portfolio-items');
        $portfolio.isotope({
            itemSelector : '.portfolio-item',
            layoutMode : 'fitRows'
        });
        
        $portfolio_selectors.on('click', function(){
            $portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({ filter: selector });
            return false;
        });
    };

    var mapsInit = function() {
        var latitude = $('#google-map').data('latitude');
        var longitude = $('#google-map').data('longitude');
        function initialize_map() {
            var myLatlng = new google.maps.LatLng(latitude,longitude);
            var mapOptions = {
                zoom: 16,
                scrollwheel: false,
                center: myLatlng
            };
            var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map
            });
        }
        google.maps.event.addDomListener(window, 'load', initialize_map);
    };

    var taglineAnimationInit = function() {
      var $tagline = $('.tag-line');
      $tagline.find('.item-'+stateMap.currentTaglineIndex).addClass('active tagline-fadeUp-in');
      var rotationLength = $('.tag-line > span').length;
      setInterval(function(e){
        $('.tag-line > span').removeClass('active tagline-fadeUp-in');
        stateMap.currentTaglineIndex += 1;
        if(stateMap.currentTaglineIndex > rotationLength) {
          stateMap.currentTaglineIndex = 1;
        }
        $tagline.find('.item-'+stateMap.currentTaglineIndex).addClass('active tagline-fadeUp-in');
      }, 2000);

    };

    var init = function() {
        new WOW().init();
        smoothScroll.init();
        bind();
        portfolioImagesInit();
        sliderInit();
        mapsInit();
        taglineAnimationInit();
    };

    $(function(){
        init();
    });
}());