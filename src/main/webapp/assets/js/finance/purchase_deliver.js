var delivers = [];
$(function(){
	delivers = $("input[name=deliver]").val();
	var oTable = new TableInit();
	oTable.Init();
	oTable.afterLoad();
	
	
	var opt = operationParam();
	var oOperation = new DataOperation();
	oOperation.init($("#tb_deliver"), opt);	
})

var TableInit = function(){
	var oTableInit = new Object();
	
	oTableInit.Init = function(){
		$("#tb_deliver").bootstrapTable({
			data: delivers,
			method: "get",
			striped: true,
			cache: false,
			columns: [{
                checkbox: true
            }, {field: 'supplierName', title: '供应商'}, 
			{field: 'materialName', title: '品名'}, 
			{field: 'specification', title: '规格'}, 
			{field: 'unit', title: '单位'}, 
			{field: 'amount', title: '交付数量'}, 
			{field: 'unitPrice', title: '单价'}, 
			{field: 'totlemnt', title: '合计'},
			{field: 'deliverDate', title: '交付日期'}]
		});
	}
	
	
	oTableInit.afterLoad = function(){
		$("#tb_deliver").on('load-success.bs.table',function(data){
			adjuster();
		});
	}
	return oTableInit;
}

function operationParam(){
	var planId = $("input[name=planId]")
	var opt = {
			addElement: $("#btn_add"),
			addUrl: "purchase/editDeliver.do?planId="+planId,
			updateElement: $("#btn_update"),
			updateUrl: "purchase/editDeliver.do?id="			
		}
	return opt;
}