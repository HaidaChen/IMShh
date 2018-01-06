var Accordion = function(el, multiple) {		
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		var items = $('ul.submenu').children('li');
		var signleItems = $('ul.singlesubmenu').children('li');
		
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
		items.on('click', {el: this.el, target: '.submenu'}, this.active);
		signleItems.on('click', {el: this.el, target: '.singlesubmenu'}, this.active);
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
		$this = $(this);
		$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	
	
	Accordion.prototype.active = function(e){
		var $el = e.data.el;
		var target = e.data.target;
		$this = $(this);
		
		$this.addClass('active');
		$el.find(target).children('li').not($this).removeClass('active');
	}	
/*$(function() {
	
	var accordion = new Accordion($('#accordion'), false);
});*/