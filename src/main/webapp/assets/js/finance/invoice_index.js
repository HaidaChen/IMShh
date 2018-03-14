$(function(){
	var oTable = new TableInit();
	oTable.Init();
	oTable.afterLoad();
	
	
	var opt = operationParam();
	var oOperation = new DataOperation();
	oOperation.init($("#tb_invoice"), opt);
	
	$("#txt_search").change(function(){$("#txt_search_customerName").val($("#txt_search").val())});
	$("#txt_search_customerName").change(function(){$("#txt_search").val($("#txt_search_customerName").val())});
})

var TableInit = function(){
	var oTableInit = new Object();
	
	oTableInit.Init = function(){
		$("#tb_invoice").bootstrapTable({
			url: "loadinvoice.do",
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
                field: 'invoiceDate',
                title: '开票日期'
            }, {
                field: 'customerName',
                title: '客户名称'
            }, {
                field: 'amountWithTax',
                title: '价税合计'
            }, {
                field: 'valueAddTax',
                title: '增值税'
            }, {
                field: 'exciseTax',
                title: '消费税'
            }, {
                field: 'constructionTax',
                title: '城建税'
            }, {
                field: 'educationFee',
                title: '教育费'
            }, {
                field: 'totalTax',
                title: '税款合计'
            }, {
                field: 'drawback',
                title: '退税'
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
		$("#tb_invoice").on('load-success.bs.table',function(data){
			adjuster();
		});
	}
	return oTableInit;
}

function operationParam(){
	var opt = {
			queryElement: $("#span_search"),
			queryUrl: "loadinvoice.do",
			gradeQueryElement:$("#btn_grade_query"),
			gradeQueryUrl:"loadinvoice.do",
			importElement: $("#btn_import"),
			importUrl: "ajaxUpload.do",
			addElement: $("#btn_add"),
			addUrl: "invoice/edit.do",
			updateElement: $("#btn_update"),
			updateUrl: "invoice/edit.do?id=",
			deleteElement: $("#btn_delete"),
			deleteUrl: "delete.do?id=",
			exportElement: $("#btn_export"),
			exportUrl: "downloadExcel.do",
			exportParams: {customerName: $("#txt_search_customerName"),
	            startDate: $("#txt_search_startDate"),
	            endDate: $("#txt_search_endDate")}
		}
	return opt;
}