/**
 * 
 */
var data = [];

$(function(){
	
	initOrderDetail();
	
	
	$("#btn_add_detail").click(function(){
		var myTable = $("#tbl_detail");
		var rows = myTable.bootstrapTable('getData');
		var index = rows.length;		
		addRow(index);		
	});
	
	
	$("#btn_save").click(function(){
		var $form = $("form");
		$("input[name=details]").val(JSON.stringify(data));
		$.each(data, function(index, e){
			$form.append('<input type="hidden" name="details['+index+'].pdtNo" value="' + e.pdtNo + '">');
			$form.append('<input type="hidden" name="details['+index+'].pdtName" value="' + e.pdtName + '">');
			$form.append('<input type="hidden" name="details['+index+'].content" value="' + e.content + '">');
			$form.append('<input type="hidden" name="details['+index+'].quantity" value="' + e.quantity + '">');
			$form.append('<input type="hidden" name="details['+index+'].priceRMB" value="' + e.priceRMB + '">');
			$form.append('<input type="hidden" name="details['+index+'].priceDollar" value="' + e.priceDollar + '">');
			$form.append('<input type="hidden" name="details['+index+'].totlemnt" value="' + e.totlemnt + '">');			
		});
		$form.submit();
	});
	
});

function loadDetail(){
var $orderId = $("#id").val();
	
	$("#tbl_detail").bootstrapTable({
		data: data,
		cache: false,
		columns: [
			{field: 'pdtNo', title: '货号', formatter: function(value, row, index){return colContent(row, index, 'pdtNo')}}, 
			{field: 'pdtName', title: '品名', formatter: function(value, row, index){return colContent(row, index, 'pdtName')}}, 
			{field: 'content', title: '含量', formatter: function(value, row, index){return colContent(row, index, 'content')}}, 
			{field: 'quantity', title: '数量', formatter: function(value, row, index){return colContent(row, index, 'quantity')}}, 
			{field: 'priceRMB', title: '人民币单价', formatter: function(value, row, index){return colContent(row, index, 'priceRMB')}}, 
			{field: 'priceDollar', title: '美元单价', formatter: function(value, row, index){return colContent(row, index, 'priceDollar')}}, 
			{field: 'totlemnt', title: '合计', formatter: function(value, row, index){return colContent(row, index, 'totlemnt')}},
			{field: '', title: '操作', width: '60', formatter: function(value,row,index){
				var strHtml = '<a href="javascript:void(0);" onclick="saveDetail('+index+', this)">';
				if (!data[index]["saved"]){
					strHtml += '<i class="glyphicon glyphicon-floppy-saved"></i>';
				}else{
					strHtml += '<i class="glyphicon glyphicon-edit"></i>';
				}
				
				strHtml += '</a>&nbsp;<a href="javascript:deleteDetail(' + index + ')"><i class="glyphicon glyphicon-floppy-remove"></a>';
				return strHtml;
			}}
		]
	});
}

function addRow(index){	
    data[index] = {"id":"","pdtNo":"","pdtName":"","content":"","quantity":0,"priceRMB":0.0,"priceDollar":0.0,"totlemnt":0.0};
    var params = {index:index, row:data[index]};
    $('#tbl_detail').bootstrapTable('insertRow', params);
}

function saveDetail(index, obj){
	var row = {"id":"","pdtNo":"","pdtName":"","content":"","quantity":"","priceRMB":"","priceDollar":"","totlemnt":""};
	var currentTr = $("tr[data-index=" + index + "]");
	if ($(obj).html() == '<i class="glyphicon glyphicon-floppy-saved"></i>'){
		data[index].id=index;
		data[index]["saved"] = true;
		$(obj).html('<i class="glyphicon glyphicon-edit"></i>');		
	}else{
		data[index]["saved"] = false;
		$(obj).html('<i class="glyphicon glyphicon-floppy-saved"></i>');
	}
	//$("#tbl_detail").bootstrapTable('refreshOptions', {data: data, cache: false});
	currentTr.children("td").eq(0).html(colContent(row, index, "pdtNo"));
	currentTr.children("td").eq(1).html(colContent(row, index, "pdtName"));
	currentTr.children("td").eq(2).html(colContent(row, index, "content"));
	currentTr.children("td").eq(3).html(colContent(row, index, "quantity"));
	currentTr.children("td").eq(4).html(colContent(row, index, "priceRMB"));
	currentTr.children("td").eq(5).html(colContent(row, index, "priceDollar"));
	currentTr.children("td").eq(6).html(colContent(row, index, "totlemnt"));
	
}

function deleteDetail(index){
	data.splice(index, 1);
	$("#tbl_detail").bootstrapTable('refreshOptions', {data: data, cache: false});
	
}

function colContent(row, index, key){
	if (data[index]["saved"]){
		return data[index][key];
	}else{
		return "<input type=\"text\" name=\"" + key + "\" class='form-control input-sm' value=\"" + data[index][key] + "\" onchange='reloadRowData($(this), " + JSON.stringify(row) + ", \"" + key + "\", " + index + ")' />";
	}
}


function reloadRowData(obj, row, key, index){
    row[key] = obj.val();
    $('#tbl_detail').bootstrapTable('getOptions').data[index][key] = obj.val();
}

function initOrderDetail(){
    var orderId = $("input[name=id]").val();    
	if (orderId != ""){
		$.ajax({url: "loadOrderDetail.do?orderId="+orderId, success: function(result){
			data = result;
			$.each(data, function(){
				this.saved = true;
			});
			loadDetail();
		}});
	}
}
