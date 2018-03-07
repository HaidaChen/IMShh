/**
 * 
 */
var data = [];
$(function(){
	var $orderId = $("#id").val();
	
	$("#tbl_detail").bootstrapTable({
		url: data,
		queryParams: {orderId : $orderId},
		columns: [
			{field: 'pdtNo', title: '货号', formatter: function(value, row, index){return colContent(value, row, index, 'pdtNo')}}, 
			{field: 'pdtName', title: '品名', formatter: function(value, row, index){return colContent(value, row, index, 'pdtName')}}, 
			{field: 'content', title: '含量', formatter: function(value, row, index){return colContent(value, row, index, 'content')}}, 
			{field: 'quantity', title: '数量', formatter: function(value, row, index){return colContent(value, row, index, 'quantity')}}, 
			{field: 'priceRMB', title: '人民币单价', formatter: function(value, row, index){return colContent(value, row, index, 'priceRMB')}}, 
			{field: 'priceDollar', title: '美元单价', formatter: function(value, row, index){return colContent(value, row, index, 'priceDollar')}}, 
			{field: 'totlemnt', title: '合计', formatter: function(value, row, index){return colContent(value, row, index, 'totlemnt')}},
			{field: '', title: '操作', width: '60', formatter: function(value,row,index){
				var strHtml = '<a href="javascript:saveDetail('+index+')"><i class="glyphicon glyphicon-floppy-saved"></i></a>';
				strHtml += '&nbsp;<a href="javascript:deleteDetail()"><i class="glyphicon glyphicon-floppy-remove"></a>';
				return strHtml;
			}}
		]
	});
	
	$("#btn_add_detail").click(function(){
		var myTable = $("#tbl_detail");
		var rows = myTable.bootstrapTable('getData');
		var index = rows.length;
		
		
		addRow(index);
		
	});
});


function addRow(index){	
    data[index] = {"id":"","pdtNo":"","pdtName":"","content":"","quantity":"","priceRMB":"","priceDollar":"","totlemnt":""};
    var params = {index:index, row:data[index]};
    $('#tbl_detail').bootstrapTable('insertRow', params);
    console.log(JSON.stringify($('#tbl_detail').bootstrapTable('getOptions').data));
}

function saveDetail(index){
	var currentRow = $("tr[data-index=" + index +"]");
	var id = currentRow.find("[name=id]").val();
	var pdtNo = currentRow.find("[name=pdtNo]").val();
	var pdtName = currentRow.find("[name=pdtName]").val();
	var content = currentRow.find("[name=content]").val();
	var quantity = currentRow.find("[name=quantity]").val();
	var priceRMB = currentRow.find("[name=priceRMB]").val();
	var priceDollar = currentRow.find("[name=priceDollar]").val();
	var totlemnt = currentRow.find("[name=totlemnt]").val();
	
	
	
}

function deleteDetail(value,row,index, key){
	
}

function colContent(value, row, index, key){	
	if (row["saved"]){
		return value;
	}else{
		return "<input type=\"text\" name=\"" + key + "\" class='form-control input-sm' value=\"" + value + "\" onchange='reloadRowData($(this), " + JSON.stringify(row) + ", \"" + key + "\", " + index + ")' />";
	}
}


function reloadRowData(obj, row, key, index){
    row[key] = obj.val();
    //alert(JSON.stringify(row));
    $('#tbl_detail').bootstrapTable('getOptions').data[index][key] = obj.val();
    //$('#tbl_detail').bootstrapTable('getOptions').data.splice(index, 1, row);
    //alert(JSON.stringify($('#tbl_detail').bootstrapTable('getOptions').data));
}


