$(function(){
	var oTable = new TableInit();
	oTable.Init();
	oTable.afterLoad();
	
	
	var opt = operationParam();
	var oOperation = new DataOperation();
	oOperation.init($("#tb_cust"), opt);
})

var TableInit = function(){
	var oTableInit = new Object();
	
	oTableInit.Init = function(){
		$("#tb_cust").bootstrapTable({
			url: "loadcust.do",
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
                title: '公司名'
            }, {
                field: 'phone',
                title: '电话'
            }, {
                field: 'email',
                title: '邮箱'
            }, {
                field: 'fax',
                title: '传真'
            }, {
                field: 'contacts',
                title: '联系人'
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
		$("#tb_cust").on('load-success.bs.table',function(data){
			adjuster();
		});
	}
	return oTableInit;
}

function operationParam(){
	var opt = {
			queryElement: $("#span_search"),
			queryUrl: "loadcust.do",
			importElement: $("#btn_import"),
			importUrl: "ajaxUpload.do",
			addElement: $("#btn_add"),
			addUrl: "cust/edit.do",
			updateElement: $("#btn_update"),
			updateUrl: "cust/edit.do?id=",
			deleteElement: $("#btn_delete"),
			deleteUrl: "delete.do?id=",
			exportElement: $("#btn_export"),
			exportUrl: "downloadExcel.do",
			exportParams: {condition: $("#txt_search")}
		}
	return opt;
}

