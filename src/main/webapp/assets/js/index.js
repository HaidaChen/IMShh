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
												
						if (idx1 == 0)
							listitem = $('<li class="active"></li>');
						else
							listitem = $('<li></li>');
						
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
		//var accordion = new Accordion($('#accordion'), false);
	});	
	
	$.loadSidemenu('finance');		
	
	$("#contentFrame").on('load', function(){
		var iframeHeight = $(this).contents().find("body").height(); 

        if( iframeHeight < 500){      
            $(this).attr("height",500) 
        }
        else{
        $(this).attr("height",iframeHeight) 
        }
	});
	
});
