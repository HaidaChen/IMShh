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
 * editurl：增加url
 * saveurl：修改url
 * deleteurl：删除url
 * importurl：导入url
 * exporturl: 导出url
 * column：表格的列信息，由显示名、字段、列宽组成如：
 *        [{name: '字段1', field: 'col1', width: 2}, ...]
 *        name:是表格列的名字
 *        value:是指记录中的静态值，如果该属性为空则根据field字段到结果集中获取
 * filter: 过滤字段, 由显示名、字段、字段类型、默认值组成
 */
function Table(name, style, src, editurl, saveurl, deleteurl, importurl, exporturl,column, filter, modal){
	this.name = name;
	this.style = style;
	this.src = src;
	this.editurl = editurl;
	this.deleteurl = deleteurl;
	this.saveurl = saveurl;
	this.importurl = importurl;
	this.exporturl = exporturl;
	this.column = column;	
	this.filter = filter;
	this.modal = modal;
}

/**
 * 
 */
Table.prototype.createTable = function(){
	
	var $box = $('#block');
	/**
	 * 整个表格由几个部分组成：
	 * 1、表格头部 （表格名称 + toolbar）
	 * 2、表格过滤区间 （每页记录数 + 查询条件）
	 * 3、表格内容
	 * 4、表格分页区间
	 * **/
	var $head = $('#head');
	var $filter = $('#filter');
	var $content = $('#content');
	var $page = $('#page');
	
	$box.append($head);
	$box.append($filter);
	$box.append($content);
	$box.append($page);
	/****       一级结构构造End      ****/
	
	
	
	/****     1 表头部分构造     ****/
	var $name = $('<div class="title">' + this.name + '</div>');
	var $toolbar = $('<div class="toolbar"><a title="导  入" id="import" onclick="createImportModal(\'' + table.importurl + '\')"><i class="glyphicon glyphicon-log-in"></i></a><a title="新  增" id="create" onclick="showEditPage(\'' + table.editurl + '?id=\')"><i class="glyphicon glyphicon-pencil"></i></a><a title="导  出" id="export" href="" onclick="exportData()"><i class="glyphicon glyphicon-log-out"></i></a></div>');
	$head.append($name);
	$head.append($toolbar);	
	/****     表头部分构造 End    ****/
	
	
	
	/****     2 查询条件部分构造     ****/
	var $condition = null;
	if (this.filter == null){
		var str = '<div class="input-group input-group-sm" style="float: right; width: 200px;">';
		   str += '    <input type="text" id="txt_search" name="condition" value="" class="form-control" placeholder="Search for...">';
		   str += '    <span class="input-group-btn">';
		   str += '        <button class="btn btn-default" id="btn_search" type="button" onclick="table.reloadData()"><i class="glyphicon glyphicon-search"></i></button>';
		   str += '    </span>';
		   str += '</div>';
		$condition = $(str);
	}else{
		
	}
	var $pageSize = $('<div class="pageSize"><select id="pageSize" name="pageSize" onchange="table.reloadData()"><option value="10">10</option><option value="20">20</option><option value="50">50</option></select><span>条记录每页</span></div>');
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
        str+= '    <input type="hidden" id="pageCount" value="0">';
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
	var pageSize = $("#pageSize").val();
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
					var content = '';
					if (item[field] != undefined)
						content = item[field];
					var $td = $('<td>' + content + '</td>');
					$tr.append($td);
				});
				$tr.append($('<td class="center"><a><i class="glyphicon glyphicon-edit" onclick="showEditPage(\'' + table.editurl + '?id=' + item.id + '\')"></i></a><a><i class="glyphicon glyphicon-remove" onclick="deleteData(\'' + table.deleteurl + '\',' + item.id + ')"></i></a></td>'));
				$tbody.append($tr);
			});	
			this.pageInfo(data.resultCount, pageSize);
		}.bind(this)
	});	
}


Table.prototype.pageInfo = function(recordCount, pageSize){
	
	$('#rescount').text(recordCount);
	$('#pageCount').val(Math.ceil(recordCount/pageSize));
	
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
			item = $('<li onclick="gotoPage(' + (i + 1) + ')" style="display : none"><a>' + (i + 1) + '</a></li>');
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
	var thisheight = $(document).height();
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

Table.prototype.reloadData = function(){
	$("#currentPage").val("1");
	this.loadData();
}

var gotoPage = function(page){
	
	if (page < 1 || page > $('#pageCount').val()){
		return;
	}
	$("#currentPage").val(page);
	
	table.loadData();	
}

var gotoPrevious = function(){
	gotoPage(parseInt($("#currentPage").val()) - 1);
}

var gotoNext = function(){
	gotoPage(parseInt($("#currentPage").val()) + 1);
}

var exportData = function(){
	$("#export").attr('href', "downloadExcel.do?condition="+$('#txt_search').val());
}

var deleteData = function(_url, id){
	if (confirm('确定删除该记录吗?')){
		$.ajax({
			type: 'POST',
			url: _url,
			data: {'id': id},
			success: function(){
				table.loadData();
			}
		});
	}
}
var table = null;

var showEditPage = function(url){
	if (table.modal == 1){
		$(window.parent.document).find("#contentFrame").attr("src", url);
	}else{
		var modalwin = $('<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog" role="document" ></div></div>');
		var modalbox = $('<div class="modal-content"></div>');
		
		modalwin.append(modalbox);
		
		$("body").append(modalwin);
		$("#editModal").modal({
			remote: url
		}).css({width: '600px', 'margin-left': function(){return ($(this).parent().width()/2 - $(this).width()/2);}});
	}
}

var createImportModal = function(url){
	var modalwin = $('<div class="modal fade" id="importModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog" role="document" ></div></div>');
	var modalbox = $('<div class="modal-content" id="importBox"></div>');
	var modalheader = $('<div class="modal-header"></div>');
	var modalcontent = $('<div class="modal-body"></div>');
	var modalfooter = $('<div class="modal-footer"></div>');
	
	var headeroperate = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>');
	var headertitle = $('<h4 class="modal-title" id="myModalLabel">请选择Excel文件</h4>  ');
	
	var form = $('<form method="POST"  enctype="multipart/form-data" id="form_upload"></form>');
	var fileinput = $('<input id="upfile" name="upfile" type="file" class="file" readonly="true">');
	var btnimport = $('<input type="button" value="导入" onclick="ajaxSubmitForm(\'' + url + '\')">');
	form.append(fileinput);
	form.append(btnimport);
	
	modalwin.append(modalbox);
	modalbox.append(modalheader);
	modalbox.append(modalcontent);
	modalbox.append(modalfooter);
	
	modalheader.append(headeroperate);
	modalheader.append(headertitle);
	modalcontent.append(form);
	
	//modalfooter.append(btnimport);
	
	$("body").append(modalwin);
	
	$("#importModal").modal({'backdrop' : 'static'}).css({width: '360px', 'margin-left': function(){return ($(this).parent().width()/2 - $(this).width()/2);}});
}

function showLoadWin(){
	$("#importModal").modal("hide");
	var win = $('<div id="laodingWind" class="modal fade" data-keyboard="false" data-backdrop="static" data-role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"></div>');
	var load = $('<div id="loading" class="loading">数据导入中...</div>');
	/*load.css("width", "260px");
	load.css("height", "56px"); 
	load.css("line-height", "56px");  
	load.css("color", "#fff");  
	load.css("padding-left", "60px");  
	load.css("font-size", "15px");  
	load.css("background", "#000 url(../assets/images/loader.gif) no-repeat 10px 50%");  
	load.css("opacity", "0.7");  
	load.css("z-index", "9999");  
	load.css("-moz-border-radius", "20px");  
	load.css("-webkit-border-radius", "20px");  
	load.css("border-radius", "20px");  
	*/
	win.append(load);
	$("body").append(win); 
	$("#laodingWind").modal({'backdrop' : 'static'}).css({width: '360px', 'margin-left': function(){return ($(this).parent().width()/2 - $(this).width()/2);}});
	
}

function ajaxSubmitForm(_url) {
	if(checkData()){		
		showLoadWin();
	    setTimeout(function(){
		   var option = {
			      　　 url : _url,
			     　　 // type : 'POST',
			      　　 dataType : 'text',
			      　　 //headers : {"ClientCallMode" : "text"}, //添加请求头部
			     　　  success : function(data) {
			    	 $("#laodingWind").modal("hide");
			    	 $(".modal-backdrop").remove();  
			         $("body").removeClass('modal-open');  
			        　　      table.loadData();	         
			     },
			     error : function(XmlHttpRequest, textStatus, errorThrown){
			    	 $("#laodingWind").modal("hide");
			    	 $("#importModal").modal("show");
			    	 $("#importBox").find(".modal-footer").text("数据导入失败");			  	     
			     }
			    };
			   	$("#form_upload").ajaxSubmit(option);
	    }, 2000);
　　　　 
	}
}

function checkData(){  
    var fileDir = $("#upfile").val();  
    var suffix = fileDir.substr(fileDir.lastIndexOf("."));  
    if("" == fileDir){  
        alert("选择需要导入的Excel文件！");  
        return false;  
    }  
    if(".xls" != suffix && ".xlsx" != suffix ){  
        alert("选择Excel格式的文件导入！");  
        return false;  
    }  
    return true;  
}  
