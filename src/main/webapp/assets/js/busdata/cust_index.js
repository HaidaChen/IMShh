$(function(){
	var oTable = new TableInit();
	oTable.Init();
})

var TableInit = function(){
	var oTableInit = new Object();
	
	oTableInit.Init() = function(){
		$("#tb_cust").bootstrapTable({
			url: "loadcust.do",
			queryParams: oTableInit.queryParams,
			method: "post",
			striped: true,
			cache: false,
			pagination: true,
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
	
	oTableInit.queryParams = function(){
		
	}
	
	return oTableInit;
}
