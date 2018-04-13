$(function(){
	var stgTable = new StorageTableInit();
	stgTable.Init();
	stgTable.afterLoad();
	
	var stgdtlTable = new StorageDetailTableInit();
	stgdtlTable.Init();
	stgdtlTable.afterLoad();
	
	var opt = operationParam();
	var oOperation = new DataOperation();
	oOperation.init($("#tb_storagedt"), opt);
	
	$("#txt_search").change(function(){$("#txt_search_pdtNo").val($("#txt_search").val())});
	$("#txt_search_pdtNo").change(function(){$("#txt_search").val($("#txt_search_pdtNo").val())});
	
	$("#span_search_stat").click(function(){
		$("#tb_storage").bootstrapTable('refresh', {cache: false});
	});

})

var StorageTableInit = function(){
	var oTableInit = new Object();
	
	oTableInit.Init = function(){
		$("#tb_storage").bootstrapTable({
			url: "loadstatistics.do",
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
                field: 'pdtNo',
                title: '货号'
            }, {
                field: 'content',
                title: '含量'
            }, {
                field: 'amount',
                title: '库存'
            }]
		});
	}
	
	oTableInit.queryParams = function(params){
		var Qparams =  {
			pageSize: params.limit,   //页面大小
            pageOffset: params.offset,  //页码
            pdtNo: $("#spdtNo").val()
		};
		return Qparams;
	}
	
	oTableInit.afterLoad = function(){
		$("#tb_storage").on('load-success.bs.table',function(data){
			adjuster();
		});
	}
	return oTableInit;
}


var StorageDetailTableInit = function(){
	var oTableInit = new Object();
	
	oTableInit.Init = function(){
		$("#tb_storagedt").bootstrapTable({
			url: "loadstorage.do",
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
                field: 'storageDate',
                title: '发货日期'
            },{
                field: 'pdtNo',
                title: '货号'
            }, {
                field: 'content',
                title: '含量'
            }, {
                field: 'amount',
                title: '数量'
            }, {
                field: 'remark',
                title: '备注'
            }]
		});
	}
	
	oTableInit.queryParams = function(params){
		var Qparams =  {
			pageSize: params.limit,   //页面大小
            pageOffset: params.offset,  //页码
            pdtNo: $("#txt_search_pdtNo").val(),
            startDate: $("#txt_search_startDate").val(),
            endDate: $("#txt_search_endDate").val()
		};
		return Qparams;
	}
	
	oTableInit.afterLoad = function(){
		$("#tb_storage").on('load-success.bs.table',function(data){
			adjuster();
		});
	}
	return oTableInit;
}

function operationParam(){
	var opt = {
			queryElement: $("#span_search"),
			queryUrl: "loadstorage.do",
			gradeQueryElement:$("#btn_grade_query"),
			gradeQueryUrl:"loadstorage.do",
			importElement: $("#btn_import"),
			importUrl: "ajaxUpload.do",
			addElement: $("#btn_add"),
			addUrl: "storage/edit.do",
			updateElement: $("#btn_update"),
			updateUrl: "storage/edit.do?id=",
			deleteElement: $("#btn_delete"),
			deleteUrl: "delete.do?id=",
			exportElement: $("#btn_export"),
			exportUrl: "downloadExcel.do",
			exportParams: {pdtNo: $("#txt_search_pdtNo"),
	            startDate: $("#txt_search_startDate"),
	            endDate: $("#txt_search_endDate")}
		}
	return opt;
}