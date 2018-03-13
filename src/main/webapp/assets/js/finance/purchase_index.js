$(function(){
	var oTable = new TableInit();
	oTable.Init();
	oTable.afterLoad();
	
	
	var opt = operationParam();
	var oOperation = new DataOperation();
	oOperation.init($("#tb_purchase"), opt);
	
	$("#txt_search").change(function(){$("#txt_search_materialName").val($("#txt_search").val())});
	$("#txt_search_materialName").change(function(){$("#txt_search").val($("#txt_search_materialName").val())});
})

var TableInit = function(){
	var oTableInit = new Object();
	
	oTableInit.Init = function(){
		$("#tb_purchase").bootstrapTable({
			url: "loadpurchase.do",
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
                field: 'purchaseDate',
                title: '采购日期'
            }, {
                field: 'materialName',
                title: '原材料'
            }, {
                field: 'specification',
                title: '规格'
            }, {
                field: 'unit',
                title: '单位'
            }, {
                field: 'quantity',
                title: '数量'
            }, {
                field: 'unitPrice',
                title: '单价'
            }, {
                field: 'totlemnt',
                title: '合计'
            }, {
                field: 'paid',
                title: '已支付'
            }, {
                field: 'balance',
                title: '余额'
            }]
		});
	}
	
	oTableInit.queryParams = function(params){
		var search = $("#txt_search").val();
		var Qparams =  {
			pageSize: params.limit,   //页面大小
            pageOffset: params.offset,  //页码
            materialName: $("#txt_search_materialName").val(),
            supplierName: $("#txt_search_supplierName").val(),
            startDate: $("#txt_search_startDate").val(),
            endDate: $("#txt_search_endDate").val()
		};
		return Qparams;
	}
	
	oTableInit.afterLoad = function(){
		$("#tb_purchase").on('load-success.bs.table',function(data){
			adjuster();
		});
	}
	return oTableInit;
}

function operationParam(){
	var opt = {
			queryElement: $("#span_search"),
			queryUrl: "loadpurchase.do",
			gradeQueryElement:$("#btn_grade_query"),
			gradeQueryUrl:"loadpurchase.do",
			importElement: $("#btn_import"),
			importUrl: "ajaxUpload.do",
			addElement: $("#btn_add"),
			addUrl: "purchase/edit.do",
			updateElement: $("#btn_update"),
			updateUrl: "purchase/edit.do?id=",
			deleteElement: $("#btn_delete"),
			deleteUrl: "delete.do?id=",
			exportElement: $("#btn_export"),
			exportUrl: "downloadExcel.do",
			exportParams: {materialName: $("#txt_search_materialName"),
	            supplierName: $("#txt_search_supplierName"),
	            startDate: $("#txt_search_startDate"),
	            endDate: $("#txt_search_endDate")}
		}
	return opt;
}