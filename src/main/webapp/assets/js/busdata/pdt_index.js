$(function(){
	var oTable = new TableInit();
	oTable.Init();
	oTable.afterLoad();
	
	
	var opt = operationParam();
	var oOperation = new DataOperation();
	oOperation.init($("#tb_pdt"), opt);
})

var TableInit = function(){
	var oTableInit = new Object();
	
	oTableInit.Init = function(){
		$("#tb_pdt").bootstrapTable({
			url: "loadpdt.do",
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
                field: 'code',
                title: '编码'
            }, {
                field: 'name',
                title: '产品名称'
            }, {
                field: 'specification',
                title: '规格'
            }, {
                field: 'model',
                title: '型号'
            }, {
                field: 'lineDate',
                title: '上线日期'
            }, {
                field: 'downlineDate',
                title: '下线日期'
            }]
		});
	}
	
	oTableInit.queryParams = function(params){
		var search = $("#txt_search").val();
		var Qparams =  {
			pageSize: params.limit,   //页面大小
            pageOffset: params.offset,  //页码
            condition: search
		};
		return Qparams;
	}
	
	oTableInit.afterLoad = function(){
		$("#tb_pdt").on('load-success.bs.table',function(data){
			adjuster();
		});
	}
	return oTableInit;
}

function operationParam(){
	var opt = {
			queryElement: $("#span_search"),
			queryUrl: "loadpdt.do",
			importElement: $("#btn_import"),
			importUrl: "ajaxUpload.do",
			addElement: $("#btn_add"),
			addUrl: "pdt/edit.do",
			updateElement: $("#btn_update"),
			updateUrl: "pdt/edit.do?id=",
			deleteElement: $("#btn_delete"),
			deleteUrl: "delete.do?id=",
			exportElement: $("#btn_export"),
			exportUrl: "downloadExcel.do",
			exportParams: {condition: $("#txt_search")}
		}
	return opt;
}

