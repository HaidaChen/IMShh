$(function(){
	var oTable = new TableInit();
	oTable.Init();
	oTable.afterLoad();
	
	
	var opt = operationParam();
	var oOperation = new DataOperation();
	oOperation.init($("#tb_transaction"), opt);
	
	$("#txt_search").change(function(){$("#txt_search_tranUser").val($("#txt_search").val())});
	$("#txt_search_tranUser").change(function(){$("#txt_search").val($("#txt_search_customerName").val())});
})

var TableInit = function(){
	var oTableInit = new Object();
	
	oTableInit.Init = function(){
		$("#tb_transaction").bootstrapTable({
			url: "loadtransaction.do",
			queryParams: oTableInit.queryParams,
			method: "get",
			striped: true,
			cache: false,
			pagination: true,
			sidePagination: "server", 
			pageList: [10, 25, 50],
			columns: [{
                checkbox: true
            }, {
                field: 'tranDate',
                title: '交易日期'
            }, {
                field: 'tranType',
                title: '交易类型'
            }, {
                field: 'tranAmount',
                title: '交易金额'
            }, {
                field: 'tranUser',
                title: '对方名称'
            }, {
                field: 'tranBank',
                title: '对方开户行'
            }, {
                field: 'tranAccountNo',
                title: '对方账号'
            }]
		});
	}
	
	oTableInit.queryParams = function(params){
		var Qparams =  {
			pageSize: params.limit,   //页面大小
            pageOffset: params.offset,  //页码
            customerName: $("#txt_search_customerName").val(),
            startDate: $("#txt_search_startDate").val(),
            endDate: $("#txt_search_endDate").val()
		};
		return Qparams;
	}
	
	oTableInit.afterLoad = function(){
		$("#tb_transaction").on('load-success.bs.table',function(data){
			adjuster();
		});
	}
	return oTableInit;
}

function operationParam(){
	var accountId = $("input[name=accountId]").val();
	var opt = {
			queryElement: $("#span_search"),
			queryUrl: "loadinvoice.do",
			gradeQueryElement:$("#btn_grade_query"),
			gradeQueryUrl:"loadinvoice.do",
			addElement: $("#btn_add"),
			addUrl: "transaction/edit.do",
			updateElement: $("#btn_update"),
			updateUrl: "transaction/edit.do?accountNo=" +  + "&id=",
			deleteElement: $("#btn_delete"),
			deleteUrl: "delete.do?id="
		}
	return opt;
}