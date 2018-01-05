$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		var items = $('ul.submenu').children('li');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
		items.on('click', {el: this.el}, this.active);
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
		$this = $(this),
		$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	
	
	Accordion.prototype.active = function(e){
		var $el = e.data.el;
		$this = $(this),
		
		$this.addClass('active');
		$el.find('.submenu').children('li').not($this).removeClass('active');
	}

	var accordion = new Accordion($('#accordion'), false);
	
	
	
});