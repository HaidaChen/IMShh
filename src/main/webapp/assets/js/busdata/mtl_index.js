$(function(){
	var oTable = new TableInit();
	oTable.Init();
	oTable.afterLoad();
	
	
	var opt = operationParam();
	var oOperation = new DataOperation();
	oOperation.init($("#tb_mtl"), opt);
})

var TableInit = function(){
	var oTableInit = new Object();
	
	oTableInit.Init = function(){
		$("#tb_mtl").bootstrapTable({
			url: "loadmtl.do",
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
                field: 'name',
                title: '品名'
            }, {
                field: 'specification',
                title: '规格'
            }, {
                field: 'unit',
                title: '单位'
            }, {
                field: 'category',
                title: '分类'
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
		$("#tb_mtl").on('load-success.bs.table',function(data){
			adjuster();
		});
	}
	return oTableInit;
}

function operationParam(){
	var opt = {
			queryElement: $("#span_search"),
			queryUrl: "loadmtl.do",
			importElement: $("#btn_import"),
			importUrl: "ajaxUpload.do",
			addElement: $("#btn_add"),
			addUrl: "mtl/edit.do",
			updateElement: $("#btn_update"),
			updateUrl: "mtl/edit.do?id=",
			deleteElement: $("#btn_delete"),
			deleteUrl: "delete.do?id=",
			exportElement: $("#btn_export"),
			exportUrl: "downloadExcel.do",
			exportParams: {condition: $("#txt_search")}
		}
	return opt;
}