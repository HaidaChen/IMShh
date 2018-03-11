	var Accordion = function(el, multiple) {		
		this.el = el || {};
		this.multiple = multiple || false;

		var links = this.el.find('.link');
		var items = $('ul.level2').children('li').children('ul').children('li');
		var signleItems = $('ul.level1').children('li');
		
		items.on('click', {el: this.el, level: 2}, this.active);
		signleItems.on('click', {el: this.el, level: 1}, this.active);
	}
	
	Accordion.prototype.active = function(e){
		
		var $el = e.data.el;
		$this = $(this);
		$this.addClass('active');
		if (e.data.level == 1){
			$el.children('ul').children('li').not($this).removeClass('active');
		}else if(e.data.level == 2){
			var $parent = $this.parent().parent();
			$parent.addClass('active');
			$el.children('ul').children('li').children('ul').children('li').not($this).removeClass('active');
			$el.children('ul').children('li').not($parent).removeClass('active');
		}		
	}	

jQuery.extend({
	loadSidemenu:function(module){
		$.getJSON("assets/json/menu.json", function (data){
			var $sidebar = $('#sidebar');
			
			$.each(data, function(index, obj) {
				if (module == obj.module){					
					$sidebar.children().remove();
					$level = obj.levels;
					var $list = '';
					if($level == 1)
						$list = $('<ul class="level1"></ul>');
					else
						$list = $('<ul class="level2"></ul>');
					$sidebar.append($list);
					$.each(obj.menu, function(idx1, menu){
						var item = '';
						var listitem = '';
												
						if (idx1 == 0){
							listitem = $('<li class="active"></li>');
						}else{
							listitem = $('<li></li>');
						}
						if (menu.url != ''){
						    item = $('<a href="' + menu.url + '" target="contentFrame">' + menu.name + '</a>');
						}else{							
							item = $('<div><a><i class="' + menu.icon + '"></i>' + menu.name + '</a></div>');							
						}
						listitem.append(item);
						$list.append(listitem);
						if (menu.submenu){
							
							var subbox = $('<ul></ul>');
							$.each(menu.submenu, function(idx2, submenu){
								var subitem = '';
								if (idx1 == 0 && idx2 == 0){
									//listitem.removeClass("active");
									subitem = $('<li class="active"><a href="' + submenu.url + '" target="contentFrame">' + submenu.name + '</a></li>');
								}else{
									subitem = $('<li><a href="' + submenu.url + '" target="contentFrame">' + submenu.name + '</a></li>');
								}
								subbox.append(subitem);
							});
							listitem.append(subbox);
						}
					});					
				}
			});
			var accordion = new Accordion($('#sidebar'), false);
		});
	}
});

$(function(){
	
	var menus = $('#navmenu').children('li');
	menus.on('click', function(e){
		
		var $this = $(this);
		var $tip = $this.attr("data-tip");
		
		$this.addClass('active');
		menus.not($this).removeClass('active');		
		
		$.loadSidemenu($tip);
		$('#contentFrame').attr('src', '');
		//var accordion = new Accordion($('#accordion'), false);
	});	
	
	$.loadSidemenu('finance');		
	
});
