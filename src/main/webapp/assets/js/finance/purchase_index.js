$(function(){
	var oTable = new TableInit();
	oTable.Init();
	oTable.afterLoad();
	
	
	var opt = operationParam();
	var oOperation = new DataOperation();
	oOperation.init($("#tb_purchase"), opt);
	
	$("#txt_search").change(function(){$("#txt_search_identify").val($("#txt_search").val())});
	$("#txt_search_identify").change(function(){$("#txt_search").val($("#txt_search_identify").val())});

	deliver($("#tb_purchase"));
	payment($("#tb_purchase"));
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
			detailView: true,
			columns: [{
                checkbox: true
            }, {
                field: 'identify',
                title: '采购计划编号'
            }, {
                field: 'orderIdentify',
                title: '关联订单编号'
            }, {
                field: 'createDate',
                title: '创建日期'
            }, {
                field: 'money',
                title: '采购总金额'
            }, {
                field: 'paid',
                title: '已付款'
            }, {
                field: 'balance',
                title: '代付款'
            }, {
                field: 'planStatus',
                title: '采购进展',
                formatter: function(value, row, index){
                	if (value == 1){
                		return '待收货';
                	}else if (value == 2){
                		return '待付款';
                	}else{
                		return '已完成';
                	}
                }
            }],
            onExpandRow: function(index, row, $detail){
            	oTableInit.InitSubTable(index, row, $detail);
            }
		});
	}
	
	oTableInit.InitSubTable = function(index, row, $detail){
		var parentid = row.id;
        var cur_table = $detail.html('<table></table>').find('table');
        $(cur_table).bootstrapTable({
            url: 'loadPurchaseDetail.do',
            method: 'get',
            queryParams: { planId: parentid },
            clickToSelect: true,
            uniqueId: "id",
            columns: [{
                field: 'supplierName',
                title: '供应商'
            }, {
                field: 'materialName',
                title: '品名'
            }, {
                field: 'specification',
                title: '规格'
            }, {
                field: 'unit',
                title: '单位'
            }, {
                field: 'amount',
                title: '数量'
            }, {
                field: 'unitPrice',
                title: '单价'
            }, {
                field: 'totlemnt',
                title: '合计'
            }, {
            	field: 'deliverAmount',
                title: '交付数量'
            }, {
            	field: 'paid',
                title: '已付款'
            }, {
            	field: 'balance',
                title: '代付款'
            }]
        });
	}
	
	oTableInit.queryParams = function(params){
		var search = $("#txt_search").val();
		var Qparams =  {
			pageSize: params.limit,   //页面大小
            pageOffset: params.offset,  //页码
            identify: $("#txt_search_identify").val(),
            orderIdentify: $("#txt_search_orderIdentify").val(),
            planStatus: $("#txt_search_planStatus").val(),
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
			addElement: $("#btn_add"),
			addUrl: "purchase/edit.do",
			updateElement: $("#btn_update"),
			updateUrl: "purchase/edit.do?id=",
			deleteElement: $("#btn_delete"),
			deleteUrl: "delete.do?id="
		}
	return opt;
}

function deliver(table){
	$("#li_opt_deliver").click(function(){
		var selections = table.bootstrapTable('getSelections');
    	if (selections.length == 0){
    		alert("请选择需要相应的采购计划");
    		return;
    	}
    	if (selections.length > 1){
    		alert("一次只能够对一个采购计划接收原材料");
    		return;
    	}
    	var id = selections[0].id;
    	var identify = selections[0].identify;
    	var url = "purchase/deliver.do?id="+id+"&identify="+identify;
    	$(window.parent.document).find("#contentFrame").attr("src", url);
	});	
}

function payment(){
	
}