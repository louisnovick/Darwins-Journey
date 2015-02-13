$().ready(function() {
	$('#video-bkg').tubular({
		videoId: 'XREElnb_wlQ',
		start: 4
	}); 
});

(function($) {

	$.fn.slideNav = function(options) {
		
		var self = this;
		var settings = $.extend( {

    }, options);
    
    this.offsetArray = [];
    this.currentIndex = 0;
    this.containerWidth = 0;
    this.sliderOffset = {left: 0, right: 0};
		
		this.createSlider = function() {
		  self.addClass('slide-nav');
      
      var output = '<a href="#" class="slide-nav-prev">◀</a>';
      output += '<div class="slide-nav-slider">';
      
      var count = 0;
      
      self.children('a').each(function(){
        output += '<a href="#" data-index="' + count + '">';
        output += $(this).html();
        output += '</a>';
        count++;
      });
      output += '</div>';
      output += '<a href="#" class="slide-nav-next">▶</a>';
      
      self.html(output);
      
      self.find('.slide-nav-slider a').click(function(e){
        e.preventDefault();
        self.gotoIndex($(this).data('index'));
      });
      
      self.find('.slide-nav-prev').click(function(e){
        e.preventDefault();
        if(self.currentIndex <= 0) {
          self.gotoIndex(self.offsetArray.length - 1);
        }
        else {
          self.gotoIndex(self.currentIndex - 1);
        }
      });
      
      self.find('.slide-nav-next').click(function(e){
        e.preventDefault();
        if(self.currentIndex >= (self.offsetArray.length -1)) {
          self.gotoIndex(0);
        }
        else {
          self.gotoIndex(self.currentIndex + 1);
        }
      });
		};
    
    this.createOffsets = function() {
		  var totalWidth = 0;
      self.find('.slide-nav-slider a').each(function() {
        var itemOffsset = {};
        itemOffsset.left = totalWidth;
        totalWidth += $(this).outerWidth(true);
        itemOffsset.right = totalWidth;
        self.offsetArray.push(itemOffsset);
      });
      self.children('.slide-nav-slider').width(totalWidth);
		};
    
    this.gotoIndex = function(index) {
      self.currentIndex = index;
      self.find('.slide-nav-slider .active').removeClass('active');
      self.find('.slide-nav-slider a[data-index="' + index + '"]').addClass('active');
      
      var leftDelta = -self.offsetArray[index].left;
      
      
      self.children('.slide-nav-slider').css('left', leftDelta);
     
    }
		
    
    self.createSlider();  
    self.createOffsets();
    self.gotoIndex(self.currentIndex);
    
		return this;
	};
})(jQuery);


$(document).ready(function(){
  $('#main-slide-nav').slideNav();
});

