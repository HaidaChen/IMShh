/**
 * 基于Bootstrap样式的通用表格，主要包含的功能有：
 * 1、ajax数据加载
 * 2、数据翻页以及每页显示的记录数动态调整
 * 3、表格数据的多条件查询
 * 4、表格数据导入、导出
 * 
 * 使用该表格，需要引入mytable.css
 */



/**
 * 表格构造函数
 * name： 表格名称
 * style：表格样式
 * src： 表格数据来源，对应一个url
 * column：表格的列信息，由显示名、字段、列宽组成如：
 *        [{name: '字段1', field: 'col1', width: 2}, ...]
 *        name:是表格列的名字
 *        value:是指记录中的静态值，如果该属性为空则根据field字段到结果集中获取
 * filter: 过滤字段, 由显示名、字段、字段类型、默认值组成
 */
function Table(name, style, src, column, filter){
	this.name = name;
	this.style = style;
	this.src = src;
	this.column = column;	
	this.filter = filter;
}

Table.prototype.currentPage = 1;
Table.prototype.pageSize = 10;
Table.prototype.dataCount = 0;

/**
 * 
 */
Table.prototype.createTable = function(){
	
	var $box = $('<div class="block"></div>');
	/**
	 * 整个表格由几个部分组成：
	 * 1、表格头部 （表格名称 + toolbar）
	 * 2、表格过滤区间 （每页记录数 + 查询条件）
	 * 3、表格内容
	 * 4、表格分页区间
	 * **/
	var $head = $('<div class="head"></div>');
	var $filter = $('<div class="filter"></div>');
	var $content = $('<div class="content"></div>');
	var $page = $('<div class="page"></div>');
	
	$box.append($head);
	$box.append($filter);
	$box.append($content);
	$box.append($page);
	/****       一级结构构造End      ****/
	
	
	
	/****     1 表头部分构造     ****/
	var $name = $('<div class="title">' + this.name + '</div>');
	var $toolbar = $('<div class="toolbar"><a title="导  入" id="import"><i class="glyphicon glyphicon-log-in"></i></a><a title="新  增" id="create"><i class="glyphicon glyphicon-pencil"></i></a><a title="导  出" id="export" href=""><i class="glyphicon glyphicon-log-out"></i></a></div>');
	$head.append($name);
	$head.append($toolbar);	
	/****     表头部分构造 End    ****/
	
	
	
	/****     2 查询条件部分构造     ****/
	var $condition = null;
	if (this.filter == null){
		var str = '<div class="input-group input-group-sm" style="float: right; width: 200px;">';
		   str += '    <input type="text" id="txt_search" name="condition" value="" class="form-control" placeholder="Search for...">';
		   str += '    <span class="input-group-btn">';
		   str += '        <button class="btn btn-default" id="btn_search" type="button"><i class="glyphicon glyphicon-search"></i></button>';
		   str += '    </span>';
		   str += '</div>';
		$condition = $(str);
	}else{
		
	}
	$pageSize = $('<div class="pageSize"><select id="pageSize" name="pageSize"><option value="10">10</option><option value="20">20</option><option value="50">50</option></select><span>条记录每页</span></div>');
	$filter.append($condition);
	$filter.append($pageSize);
	/****     查询条件部分构造End     ****/
	
	
	/****     3 表体结构的构造(不包含)      ****/
	var $table = $('<table cellpadding="0" cellspacing="0" border="0" class="' + this.style + '"></table>');
	var $t_head = $('<thead><tr></tr></thead>');
	$.each(this.column, function(index, item){
		$t_head.append($('<th class="col-md-' + item.width + '">' + item.name + '</th>'));
	});
	$t_head.append($('<th>操作</th>'));
	var $t_body = $('<tbody></tbody>');
	$table.append($t_head);
	$table.append($t_body);
	$content.append($table);
	/****      表体结构的构造End      ****/
	
	
	/****     4 分页部分构造     ****/
	var str = '<div class="record">共<span id="rescount"></span>条记录</div>';
        str+= '<div class="pager" id="pagebar">';
        str+= '    <input type="hidden" id="currentPage" name="currentPage" value="1">';
        str+= '    <nav aria-label="Page navigation">';
        str+= '        <ul class="pagination pagination-sm">';
        str+= '        </ul>';    
        str+= '    </nav>';
        str+= '</div>';
    var $page_info = $(str);
    $page.append($page_info);
	/****     分页部分构造     ****/
    
    
	$('body').append($box);
	//frushData(this.src, this.column, pageSize);
	this.loadData();
}

//Table.prototype.loadData = frushData;

/**
 * 通过Ajax的方式加载数据，加载数据是主要通过（查询条件、每页显示的数据、当前页）过滤数据 
 */
Table.prototype.loadData = function(){
	
	var filters = $.merge($('div.block').find('input[type="text"]'),$('div.block').find('input[type="hidden"]'));
	filters = $.merge(filters ,$('div.block').find('select'));
	var $param = '';
	$.each(filters, function(index, data){
		$param += '&' + $(data).attr('name') + '=' + $(data).val();
	});
	var $url = this.src + '?' + $param;
	
	var cols = this.column;
	var pageSize = this.pageSize;
	//var loadPageInfo = this.pageInfo;
	$.ajax({
		type: 'POST',
		url: $url,
		success: function(data){			
			var $tbody = $("tbody");			
			$tbody.children().remove();
			$.each(data.result, function(i, item){
				var $tr  = $('<tr></tr>');
				$.each(cols, function(j, col){
					var field = col.field;
					var $td = $('<td>' + item[field] + '</td>');
					$tr.append($td);
				});
				$tr.append($('<td class="center"><a><i class="glyphicon glyphicon-edit" onclick="$.viewCustomer(' + item.id + ')"></i></a><a><i class="glyphicon glyphicon-remove" onclick="$.delete(' + item.id + ')"></i></a></td>'));
				$tbody.append($tr);
			});	
			this.pageInfo(data.resultCount, pageSize);
		}.bind(this)
	});	
}


Table.prototype.pageInfo = function(recordCount, pageSize){
	
	$('#rescount').text(recordCount);
	//$('#pageCount').val(Math.ceil(resultCount/pageSize));
	
	var $pageCount = Math.ceil(recordCount/pageSize);
	var $pagebar = $('#pagebar').children().find('ul');		
	
	$pagebar.children().remove();
	
	if ($pageCount == 0){
		$pagebar.hide();
	}else{				
		var prebtn = $('<li onclick="gotoPrevious()"><a aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>');
		$pagebar.append(prebtn);
		for (var i = 0; i < $pageCount; i++){
			var item = null;
			item = $('<li onclick="this.gotoPage(' + (i + 1) + ')" style="display : none"><a>' + (i + 1) + '</a></li>');
			$pagebar.append(item);
		}
		var nextbtn = $('<li onclick="gotoNext()"><a aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>');
		$pagebar.append(nextbtn);
		
		var currentPage = $("#currentPage").val();
		var currentItem = $pagebar.children().eq(currentPage);
		currentItem.addClass("active");
		
		prebtn.removeClass("disabled");
		nextbtn.removeClass("disabled");
		if (currentPage == 1){
			prebtn.addClass("disabled");
		}
		
		if (currentPage == $pageCount){
			nextbtn.addClass("disabled");
		}		
		
		this.displayPage($pageCount);		
		$pagebar.show();
	}
	
	var main = $(window.parent.document).find("#contentFrame");
	var thisheight = $(document).height()+30;
	main.height(thisheight);
	
}


Table.prototype.displayPage = function(pageCount){
	var $displayItems = [];
	var $pagebar = $('#pagebar').children().find('ul');
	var $currentPage = parseInt($("#currentPage").val());
	var $firstshow = 1;
	
	
	if (pageCount <= 5){
		for (var i = 1; i < pageCount + 1; i++){
			$displayItems.push(i);
		}
	}else{
		if ($currentPage - 2 > 0 && $currentPage + 2 <= pageCount){
			$firstshow = $currentPage - 2;
		}else if ($currentPage - 2 > 0 && $currentPage + 2 > pageCount){
			$firstshow = pageCount + 1 - 5;
		}else if ($currentPage - 2 < 0 && $currentPage + 2 < pageCount + 1){
			$firstshow = 1;
		}
		
		for (var i = $firstshow; i < $firstshow + 5; i++){
			$displayItems.push(i);
		}
	}
	
	$.each ($displayItems, function(index, item){
		$pagebar.children().eq(item).css("display", "");
	});
}



Table.prototype.gotoPage = function(page){
	
	if (page < 1 || page > $('#pageCount').val()){
		return;
	}
	$("#currentPage").val(page);
	
	this.loadData();	
}

Table.prototype.gotoPrevious = function(){
	this.gotoPage($("#currentPage").val() - 1);
}

Table.prototype.gotoNex = function(){
	this.gotoPage($("#currentPage").val() + 1);
}

