jQuery.extend({
	loadSidemenu:function(module){
		
		$.getJSON("../assets/json/menu.json", function (data){
			
			$.each(data, function(index, obj) {
				if (module == obj.module){
					if ($('#accordion')) $('#accordion').remove();
					if (obj.levels == 1){
						var box = $('<div id="accordion" class="accordion col-xs-3 col-md-2"></div>');
		                var list = $('<ul class="singlesubmenu"></ul>');
		                $.each(obj.menu, function(idx, menu) {
		                	var item = $('<li><a href="' + menu.url + '" target="contentFrame">' + menu.name + '</a></li>');
		                	list.append(item);
		                });
		                box.append(list);	
		                $('body').append(box);
					}
					
					if (obj.levels == 2){
						
						var box = $('<ul id="accordion" class="accordion col-xs-3 col-md-2"></ul>');
						$.each(obj.menu, function(idx, menu){
							var catlist = $('<li></li>');
							var cathead = $('<div class="link">' + menu.name + '<i class="glyphicon glyphicon-chevron-down"></i></div>');
						    var catbox = $('<ul class="submenu"></ul>');
						    $.each(menu.submenu, function(num, submenu) {
						    	var item = $('<li><a href="' + submenu.url + '" target="contentFrame">' + submenu.name + '</a></li>');
						        catbox.append(item);
						    });
						    box.append(catlist);
						    box.append(cathead);
						    box.append(catbox);
						});
						$('body').append(box);
					}
				}
			});
			var accordion = new Accordion($('#accordion'), false);
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
		//var accordion = new Accordion($('#accordion'), false);
	});	
	
	$.loadSidemenu('finance');	
});
