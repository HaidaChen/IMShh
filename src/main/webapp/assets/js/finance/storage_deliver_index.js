$(function(){
	var oTable = new TableInit();
	oTable.Init();
	oTable.afterLoad();
		
	var opt = operationParam();
	var oOperation = new DataOperation();
	oOperation.init($("#tb_deliver"), opt);
	
	$("#txt_search").change(function(){$("#txt_search_pdtNo").val($("#txt_search").val())});
	$("#txt_search_pdtNo").change(function(){$("#txt_search").val($("#txt_search_pdtNo").val())});
	
})

var TableInit = function(){
	var oTableInit = new Object();
	
	oTableInit.Init = function(){
		$("#tb_deliver").bootstrapTable({
			url: "loaddeliver.do",
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
                field: 'deliverDate',
                title: '出库日期'
            }, {
                field: 'deliverType',
                title: '是否交付订单'
            }, {
                field: 'orderIdentify',
                title: '关联订单号'
            }, {
                field: 'pdtNo',
                title: '货号'
            }, {
                field: 'content',
                title: '含量'
            }, {
                field: 'amount',
                title: '库存'
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

function operationParam(){
	var opt = {
			queryElement: $("#span_search"),
			queryUrl: "loaddeliver.do",
			gradeQueryElement:$("#btn_grade_query"),
			gradeQueryUrl:"loaddeliver.do",
			importElement: $("#btn_import"),
			importUrl: "ajaxUpload.do",
			addElement: $("#btn_add"),
			addUrl: "deliver/edit.do",
			updateElement: $("#btn_update"),
			updateUrl: "deliver/edit.do?id=",
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