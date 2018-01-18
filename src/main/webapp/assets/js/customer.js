/**
 * 
 */
$(function(){
	$("#import").click(function(){
		var modalwin = $('<div class="modal fade" id="importModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"><div class="modal-dialog" role="document" ></div></div>');
		var modalbox = $('<div class="modal-content"></div>');
		var modalheader = $('<div class="modal-header"></div>');
		var modalcontent = $('<div class="modal-body"></div>');
		var modalfooter = $('<div class="modal-footer"></div>');
		
		var headeroperate = $('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>');
		var headertitle = $('<h4 class="modal-title" id="myModalLabel">请选择Excel文件</h4>  ');
		
		var fileinput = $('<input id="" name="" type="file" class="file" readonly="true">');
		var btnimport = $('<button type="button">上传</button>');
		modalwin.append(modalbox);
		modalbox.append(modalheader);
		modalbox.append(modalcontent);
		modalbox.append(modalfooter);
		
		modalheader.append(headeroperate);
		modalheader.append(headertitle);
		modalcontent.append(fileinput);
		modalfooter.append(btnimport);
		
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
	
	
});