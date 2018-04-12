$(function(){
	var oTable = new TableInit();
	oTable.Init();
	oTable.afterLoad();
	
	
	var opt = operationParam();
	var oOperation = new DataOperation();
	oOperation.init($("#tb_deliver"), opt);	
	
	$("#txt_search").change(function(){$("#txt_search_planIdentify").val($("#txt_search").val())});
	$("#txt_search_planIdentify").change(function(){$("#txt_search").val($("#txt_search_planIdentify").val())});
})

var TableInit = function(){
	var oTableInit = new Object();
	
	oTableInit.Init = function(){
		$("#tb_deliver").bootstrapTable({
			url: "loaddeliverdetail.do",
			queryParams: oTableInit.queryParams,
			method: "get",
			striped: true,
			cache: false,
			pagination: true,
			sidePagination: "server", 
			pageList: [10, 25, 50],
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
	
	oTableInit.queryParams = function(params){
		var search = $("#txt_search").val();
		var Qparams =  {
			pageSize: params.limit,   //页面大小
            pageOffset: params.offset,  //页码
            planIdentify: $("#txt_search_planIdentify").val(),
            supplierName: $("#txt_search_supplierName").val(),
            startDate: $("#txt_search_startDate").val(),
            endDate: $("#txt_search_endDate").val()
		};
		return Qparams;
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

function viewPurchasePlan(){
	$(window.parent.document).find("#contentFrame").attr("src", "purchase/main.do");
}