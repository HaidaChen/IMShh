jQuery.extend({
	loadSidemenu:function(module){
		
		$.getJSON("assets/json/menu.json", function (data){
			var $sidebar = $('#tsidebar');
			
			$.each(data, function(index, obj) {
				if (module == obj.module){					
					$sidebar.children().remove();					
					$.each(obj.menu, function(idx1, menu){
						var item = '';
						var listitem = '';
						var haschild = menu.url;
						
						if (idx1 == 0)
							listitem = $('<li class="active"></li>');
						else
							listitem = $('<li></li>');
						
						if (haschild)
							listitem = $('<li class="submenu"></li>');
						
						
						if (menu.url != '')
						    item = $('<a href="' + menu.url + '" target="contentFrame">' + menu.name + '</a>');
						else
							item = $('<a><i class="' + menu.icon + '"></i>' + menu.name + '</a>');
						listitem.append(item);
						$sidebar.append(listitem);
						if (menu.submenu){
							
							var subbox = $('<ul></ul>');
							$.each(menu.submenu, function(idx2, submenu){
								var subitem = '';
								if (idx1 == 0 && idx2 == 0){
									listitem.removeClass("active");
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
		//var accordion = new Accordion($('#accordion'), false);
	});	
	
	$.loadSidemenu('finance');	
});
