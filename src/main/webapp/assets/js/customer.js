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
		},
		error: function(req, e){
			alert(e);
		}
	});
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
			success: function(data){
				$.loadcust();
			},
			error: function(req, e){
				alert(e);
			}
		});
	}
}});

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
	
	$.loadcust();

});