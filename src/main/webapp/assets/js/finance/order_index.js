/**
 * 
 */
$(function () {

    var oTable = new TableInit();
    oTable.Init();
    oTable.afterLoad();
   
    var opt = operationParam();
	var oOperation = new DataOperation();
	oOperation.init($("#tb_orders"), opt);		
	
	$("#txt_search").change(function(){$("#txt_search_orderNo").val($("#txt_search").val())});
	$("#txt_search_orderNo").change(function(){$("#txt_search").val($("#txt_search_orderNo").val())});
});


var TableInit = function () {
    var oTableInit = new Object();
    var oInit = new Object();    
    
    //初始化Table
    oTableInit.Init = function () {
        $('#tb_orders').bootstrapTable({
            url: '../order/loadOrder.do',         //请求后台的URL（*）
            method: 'get',                      //请求方式（*）
            toolbar: '#toolbar',                //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: false,                     //是否启用排序
            sortOrder: "asc",                   //排序方式
            queryParams: oTableInit.queryParams,//传递参数（*）
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
            minimumCountColumns: 2,             //最少允许的列数
            clickToSelect: true,                //是否启用点击选中行
            height: 500,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            exportDataType : "all",             //
            uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
            cardView: false,                    //是否显示详细视图
            detailView: true,                   //是否显示父子表
            columns: [{
                checkbox: true
            }, {
                field: 'identify',
                title: '订单编号'
            }, {
                field: 'custName',
                title: '订单客户'
            }, {
                field: 'orderDate',
                title: '订单日期'
            }, {
                field: 'amount',
                title: '订单金额'
            }, ],
            onExpandRow: function(index, row, $detail){
            	oInit.InitSubTable(index, row, $detail);
            }
        });
    };

    oInit.InitSubTable = function (index, row, $detail) {
        var parentid = row.id;
        var cur_table = $detail.html('<table></table>').find('table');
        $(cur_table).bootstrapTable({
            url: 'loadOrderDetail.do',
            method: 'get',
            queryParams: { orderId: parentid },
            clickToSelect: true,
            detailView: false,//父子表
            uniqueId: "id",
            pageSize: 10,
            pageList: [10, 25],
            columns: [{
                checkbox: false
            }, {
                field: 'pdtNo',
                title: '货号'
            }, {
                field: 'pdtName',
                title: '品名'
            }, {
                field: 'content',
                title: '含量'
            }, {
                field: 'quantity',
                title: '数量'
            }, {
                field: 'priceRMB',
                title: '人民币单价'
            }, {
                field: 'priceDollar',
                title: '美元单价'
            }, {
                field: 'totlemnt',
                title: '合计'
            }]
        });
    };
    
    //得到查询的参数
    oTableInit.queryParams = function (params) {
    	
    	var temp = {   //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
        	pageSize: params.limit,   //页面大小
            pageOffset: params.offset,  //页码
            identify: $("#txt_search_orderNo").val(),
            custName: $("#txt_search_cust").val(),
            startDate: $("#txt_search_startDate").val(),
            endDate: $("#txt_search_endDate").val()
        };
        
        return temp;
    };
    
    oTableInit.afterLoad = function(){
		$("#tb_orders").on('load-success.bs.table',function(data){
			adjuster();
		});
	}
    return oTableInit;
};

function operationParam(){
	var opt = {
			queryElement: $("#span_search"),
			queryUrl: "loadOrder.do",
			gradeQueryElement:$("#btn_grade_query"),
			gradeQueryUrl:"loadOrder.do",
			importElement: $("#btn_import"),
			importUrl: "ajaxUpload.do",
			addElement: $("#btn_add"),
			addUrl: "order/enterEdit.do",
			updateElement: $("#btn_update"),
			updateUrl: "order/enterEdit.do?id=",
			deleteElement: $("#btn_delete"),
			deleteUrl: "delete.do?id=",
			exportElement: $("#btn_export"),
			exportUrl: "downloadExcel.do",
			exportParams: {identify: $("#txt_search_orderNo"), 
				custName: $("#txt_search_cust"), 
				startDate: $("#txt_search_startDate"),
				endDate: $("#txt_search_endDate")}
			}
	return opt;
}

