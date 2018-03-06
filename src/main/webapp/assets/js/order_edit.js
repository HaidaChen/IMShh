/**
 * 
 */
$(function(){
	var $orderId = $("#id").val();
	
	var theTable = $("#tbl_detail").bootstrapTable({
		url: "loadOrderDetail.do",
		queryParams: {orderId : $orderId},
		columns: [
			{field: 'pdtNo', title: '货号'}, 
			{field: 'pdtName', title: '品名'}, 
			{field: 'content', title: '含量'}, 
			{field: 'quantity', title: '数量'}, 
			{field: 'priceRMB', title: '人民币单价'}, 
			{field: 'priceDollar', title: '美元单价'}, 
			{field: 'totlemnt', title: '合计'},
			{field: '', title: '操作', formatter: function(){
				var strHtml = '<a href="BootstrapTable.insertRow()">修改</a>';
				strHtml += '<a href="">删除</a>';
				return strHtml;
			}}
		]
	});
	
	$("#btn_add_detail").click(function(){
		theTable.insertRow() = function(params){
			alert(1);
		};
	});
});



