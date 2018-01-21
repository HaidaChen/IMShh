/**
 * 
 */

$.extend({'loadcust' : function(){
	var cond = $("#txt_search").val();
	var currentPage = parseInt($("#currentPage").val());
	var pageSize = parseInt($("#pageSize").val());
	var pageOffset = (currentPage - 1) * pageSize;
	
	$.ajax({
		type: 'POST',
		url: 'loadcust.do',
		data: {'condition': cond, 'pageOffset': pageOffset, 'pageSize': pageSize},
		success: function(data){
			var $tbody = $("tbody");			
			$tbody.children().remove();
			$.each(data.result, function(i, item){
				var $tr = $('<tr><td>' + item.name + '</td><td>' + item.phone + '</td><td>' + item.email + '</td><td>' + item.fax + '</td><td class="center"><a><i class="glyphicon glyphicon-edit" onclick="$.viewCustomer(' + item.id + ')"></i></a><a><i class="glyphicon glyphicon-remove" onclick="$.delete(' + item.id + ')"></i></a></td></tr>');
				$tbody.append($tr);
			});
			
			$('#rescount').text(data.resultCount);
			$('#pageCount').val(Math.ceil(data.resultCount/pageSize));
			
			var $pageCount = $('#pageCount').val();
			var $pagetool = $('#pagebar').children().find('ul');		
			
			
			$pagetool.children().remove();
			
			$pagetool.append(prebtn);
			if ($pageCount == 0){
				$pagetool.hide();
			}else{				
				var prebtn = $('<li onclick="$.gotoPrevious()"><a aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>');
				$pagetool.append(prebtn);
				for (var i = 0; i < $pageCount; i++){
					var item = null;
					item = $('<li onclick="$.gotoPage(' + (i + 1) + ')" style="display : none"><a>' + (i + 1) + '</a></li>');
					$pagetool.append(item);
				}
				var nextbtn = $('<li onclick="$.gotoNext()"><a aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>');
				$pagetool.append(nextbtn);
				
				var currentPage = $("#currentPage").val();
				var currentItem = $pagetool.children().eq(currentPage);
				currentItem.addClass("active");
				
				prebtn.removeClass("disabled");
				nextbtn.removeClass("disabled");
				if (currentPage == 1){
					prebtn.addClass("disabled");
				}
				
				if (currentPage == $pageCount){
					nextbtn.addClass("disabled");
				}
				
				
				$.displayPage();
				
				$pagetool.show();
			}
			
			var main = $(window.parent.document).find("#contentFrame");
			var thisheight = $(document).height()+30;
			main.height(thisheight);
		},
		error: function(req, e){
			alert(e);
		}
	});
}});

$.extend({'displayPage' : function(){
	var $displayItems = [];
	var $pageTool = $('#pagebar').children().find('ul');
	var $currentPage = parseInt($("#currentPage").val());
	var $pageCount = parseInt($('#pageCount').val());
	var $firstshow = 1;
	
	
	if ($pageCount <= 5){
		for (var i = 1; i < $pageCount + 1; i++){
			$displayItems.push(i);
		}
	}else{
		if ($currentPage - 2 > 0 && $currentPage + 2 <= $pageCount){
			$firstshow = $currentPage - 2;
		}else if ($currentPage - 2 > 0 && $currentPage + 2 > $pageCount){
			$firstshow = $pageCount + 1 - 5;
		}else if ($currentPage - 2 < 0 && $currentPage + 2 < $pageCount + 1){
			$firstshow = 1;
		}
		
		for (var i = $firstshow; i < $firstshow + 5; i++){
			$displayItems.push(i);
		}
	}
	
	$.each ($displayItems, function(index, item){
		$pageTool.children().eq(item).css("display", "");
	});
}});

$.extend({'gotoPage' : function(page){
	if (page < 1 || page > $('#pageCount').val()){
		return;
	}
	$("#currentPage").val(page);
	$.loadcust();	
}});

$.extend({'gotoPrevious' : function(){	
	$.gotoPage($("#currentPage").val() - 1);
}});

$.extend({'gotoNext' : function(){	
	$.gotoPage(parseInt($("#currentPage").val()) + 1);
}});

$.extend({'viewCustomer' : function(id){
	var modalwin = $('<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog" role="document" ></div></div>');
	var modalbox = $('<div class="modal-content"></div>');
	
	modalwin.append(modalbox);
	
	$("body").append(modalwin);
	$("#editModal").modal({
		remote: "edit.do?id="+id
	}).css({width: '600px', 'margin-left': function(){return ($(this).parent().width()/2 - $(this).width()/2);}}); 
}});

$.extend({'delete' : function(id){
	if (confirm('确定删除该记录吗?')){
		$.ajax({
			type: 'POST',
			url: 'delete.do',
			data: {'id': id},
			success: function(){
				$.loadcust();
			},
			error: function(jqXHR, textStatus, errorThrown){
				/*弹出jqXHR对象的信息*/
	            alert(jqXHR.responseText);
	            alert(jqXHR.status);
	            alert(jqXHR.readyState);
	            alert(jqXHR.statusText);
	            /*弹出其他两个参数的信息*/
	            alert(textStatus);
	            alert(errorThrown);
			}
		});
	}
}});

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

function ajaxSubmitForm() {
　　　　var option = {
      　　 url : 'import.do',
     　　  type : 'POST',
      　　 dataType : 'text',
      　　 headers : {"ClientCallMode" : "ajax"}, //添加请求头部
     　　  success : function(data) {
        　　   if("success"==data.resultMessage){
        　　    alert("个人用户已成功升级为企业用户！");
           }
           else{
            alert("企业用户升级失败,请联系管理员！");
            return;
           }
       },
       error: function(data) {
    	   alert(data);
           alert("企业用户升级失败,请联系管理员！");
       }
    };
   $("#form_upload").ajaxSubmit(option);
   return false; //最好返回false，因为如果按钮类型是submit,则表单自己又会提交一次;返回false阻止表单再次提交
}

$(function(){
	$("#import").click(function(){
		var modalwin = $('<div class="modal fade" id="importModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog" role="document" ></div></div>');
		var modalbox = $('<div class="modal-content"></div>');
		var modalheader = $('<div class="modal-header"></div>');
		var modalcontent = $('<div class="modal-body"></div>');
		var modalfooter = $('<div class="modal-footer"></div>');
		
		var headeroperate = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>');
		var headertitle = $('<h4 class="modal-title" id="myModalLabel">请选择Excel文件</h4>  ');
		
		var form = $('<form method="POST"  enctype="multipart/form-data" id="form_upload" action="import.do"></form>');
		var fileinput = $('<input id="upfile" name="upfile" type="file" class="file" readonly="true">');
		var btnimport = $('<input type="submit" onclick="return ajaxSubmitForm()">上传</button>');
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
	});
	
	$("#create").click(function(){
		var modalwin = $('<div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog" role="document" ></div></div>');
		var modalbox = $('<div class="modal-content"></div>');
		
		modalwin.append(modalbox);
		
		$("body").append(modalwin);
		$("#editModal").modal({
			remote: "edit.do"
		}).css({width: '600px', 'margin-left': function(){return ($(this).parent().width()/2 - $(this).width()/2);}});
	});
	
	
	$("#custform").bootstrapValidator({
		message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
			name: {
				validators: {
					notEmpty: {
	                    message: '公司名称不能为空'
	                }
				}
			}
        }
	});
	
	$.loadcust();
	
	$("#btn_search").click(function(){
		$.loadcust();
	});
	
	$("#pageSize").change(function(){
		$.loadcust();
	});
	
	
});