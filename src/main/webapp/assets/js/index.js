$(function(){
	var menus = $('#navmenu').children('li');
	menus.on('click', function(e){
		var $this = $(this);
		$this.addClass('active');
		menus.not($this).removeClass('active');
		
	});
});
