/**
 * 
 */
var data = [];

$(function(){
	
	initPurchaseDetail();
	
	
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
			$form.append('<input type="hidden" name="details['+index+'].supplierName" value="' + e.supplierName + '">');
			$form.append('<input type="hidden" name="details['+index+'].materialName" value="' + e.materialName + '">');
			$form.append('<input type="hidden" name="details['+index+'].specification" value="' + e.specification + '">');
			$form.append('<input type="hidden" name="details['+index+'].unit" value="' + e.unit + '">');
			$form.append('<input type="hidden" name="details['+index+'].amount" value="' + e.amount + '">');
			$form.append('<input type="hidden" name="details['+index+'].unitPrice" value="' + e.unitPrice + '">');
			$form.append('<input type="hidden" name="details['+index+'].totlemnt" value="' + e.totlemnt + '">');	
			$form.append('' + e.deliverAmount + '');
			$form.append('' + e.paid + '');
			$form.append('' + e.balance + '');			
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
			{field: 'supplierName', title: '供应商', formatter: function(value, row, index){return colContent(row, index, 'supplierName')}}, 
			{field: 'materialName', title: '品名', formatter: function(value, row, index){return colContent(row, index, 'materialName')}}, 
			{field: 'specification', title: '规格', formatter: function(value, row, index){return colContent(row, index, 'specification')}}, 
			{field: 'unit', title: '单位', formatter: function(value, row, index){return colContent(row, index, 'unit')}}, 
			{field: 'amount', title: '数量', formatter: function(value, row, index){return colContent(row, index, 'amount')}}, 
			{field: 'unitPrice', title: '单价', formatter: function(value, row, index){return colContent(row, index, 'unitPrice')}}, 
			{field: 'totlemnt', title: '合计', formatter: function(value, row, index){return data[index]['totlemnt']}},
			{field: 'deliverAmount', title: '交付数量', formatter: function(value, row, index){return data[index]['deliverAmount']}},
			{field: 'paid', title: '已付款', formatter: function(value, row, index){return data[index]['paid']}},
			{field: 'balance', title: '待付款', formatter: function(value, row, index){return data[index]['balance']}},
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
    data[index] = {"id":"","supplierName":"","materialName":"","specification":"","unit":"","amount":0,"unitPrice":0.0,"totlemnt":0.0,"deliverAmount":0,"paid":0.0,"balance":0.0};
    var params = {index:index, row:data[index]};
    $('#tbl_detail').bootstrapTable('insertRow', params);
}

function saveDetail(index, obj){
	var row = {"id":"","supplierName":"","materialName":"","specification":"","unit":"","amount":"","unitPrice":"","totlemnt":"","deliverAmount":"","paid":"","balance":""};
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
	currentTr.children("td").eq(0).html(colContent(row, index, "supplierName"));
	currentTr.children("td").eq(1).html(colContent(row, index, "materialName"));
	currentTr.children("td").eq(2).html(colContent(row, index, "specification"));
	currentTr.children("td").eq(3).html(colContent(row, index, "unit"));
	currentTr.children("td").eq(4).html(colContent(row, index, "amount"));
	currentTr.children("td").eq(5).html(colContent(row, index, "unitPrice"));
	currentTr.children("td").eq(6).html(colContent(row, index, "totlemnt"));
	currentTr.children("td").eq(6).html(colContent(row, index, "deliverAmount"));
	currentTr.children("td").eq(6).html(colContent(row, index, "paid"));
	currentTr.children("td").eq(6).html(colContent(row, index, "balance"));
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

function initPurchaseDetail(){
    var planId = $("input[name=id]").val(); 
    if (planId != ""){
		$.ajax({url: "loadPurchaseDetail.do?planId="+planId, success: function(result){
			data = result;
			$.each(data, function(){
				this.saved = true;
			});
			loadDetail();
		}});
	}
}
