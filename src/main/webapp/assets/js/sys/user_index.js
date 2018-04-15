$(function(){
	var oTable = new TableInit();
	oTable.Init();
	oTable.afterLoad();
	
	
	var opt = operationParam();
	var oOperation = new DataOperation();
	oOperation.init($("#tb_user"), opt);
})

var TableInit = function(){
	var oTableInit = new Object();
	
	oTableInit.Init = function(){
		$("#tb_user").bootstrapTable({
			url: "loaduser.do",
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
                field: 'userName',
                title: '用户名'
            }, {
                field: 'password',
                title: '密码'
            }, {
                field: 'fullName',
                title: '姓名'
            }, {
                field: 'email',
                title: '邮箱'
            }, {
                field: 'weichat',
                title: '微信'
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
		$("#tb_user").on('load-success.bs.table',function(data){
			adjuster();
		});
	}
	return oTableInit;
}

function operationParam(){
	var opt = {
			queryElement: $("#span_search"),
			queryUrl: "loaduser.do",
			addElement: $("#btn_add"),
			addUrl: "user/edit.do",
			updateElement: $("#btn_update"),
			updateUrl: "user/edit.do?id=",
			deleteElement: $("#btn_delete"),
			deleteUrl: "delete.do?id="
		}
	return opt;
}

