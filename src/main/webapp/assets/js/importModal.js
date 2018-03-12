/**
 * 
 */
var ImportModal = function(url, callback_success, table, refreshUrl){
	var importModal = new Object();
	
	importModal.url = url;
	importModal.callback_success = callback_success;
	importModal.table = table;
	importModal.refreshUrl = refreshUrl;
	
	importModal.createModal = function(){
		var modalwin = $('<div class="modal fade" id="importModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog" role="document" ></div></div>');
		var modalbox = $('<div class="modal-content" id="importBox"></div>');
		var modalheader = $('<div class="modal-header"></div>');
		var modalcontent = $('<div class="modal-body"></div>');
		var modalfooter = $('<div class="modal-footer"></div>');
		
		var headeroperate = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>');
		var headertitle = $('<h4 class="modal-title" id="myModalLabel">请选择Excel文件</h4>  ');
		
		var form = $('<form method="POST"  enctype="multipart/form-data" id="form_upload"></form>');
		var fileinput = $('<input id="upfile" name="upfile" type="file" class="file" readonly="true">');
		var btnimport = $('<input type="button" value="导入" >');
		form.append(fileinput);
		form.append(btnimport);
		
		modalwin.append(modalbox);
		modalbox.append(modalheader);
		modalbox.append(modalcontent);
		modalbox.append(modalfooter);
		
		modalheader.append(headeroperate);
		modalheader.append(headertitle);
		modalcontent.append(form);
		
		$("body").append(modalwin);
		btnimport.click(function(){
			importModal.importData()
		});
		$("#importModal").modal({'backdrop' : 'static'}).css({width: '360px', 'margin-left': function(){return ($(this).parent().width()/2 - $(this).width()/2);}});
	}
	
	
	importModal.importData = function(){
		if(checkData()){		
			showLoadWin();
		    setTimeout(function(){
			   var option = {
				      　　 url : importModal.url,
				     　　  dataType : 'text',
				      　　 success : function(data) {
				    	 $("#laodingWind").modal("hide");
				    	 $(".modal-backdrop").remove();  
				         $("body").removeClass('modal-open');  	 
				         importModal.callback_success(importModal.table, importModal.refreshUrl);
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
	
	return importModal;
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

function showLoadWin(){
	$("#importModal").modal("hide");
	var win = $('<div id="laodingWind" class="modal fade" data-keyboard="false" data-backdrop="static" data-role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"></div>');
	var load = $('<div id="loading" class="loading">数据导入中...</div>');
	
	win.append(load);
	$("body").append(win); 
	$("#laodingWind").modal({'backdrop' : 'static'}).css({width: '360px', 'margin-left': function(){return ($(this).parent().width()/2 - $(this).width()/2);}});
	
}