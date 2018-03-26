/**
 * 
 */
var data = [
	       {purchase: '兴通快干胶粉', arrearsulm: 0.00, paidulm: 1000.00, arrearscm: null, paidcm: null, arrears: 0.00},
	       {purchase: '宇兴化工', arrearsulm: 13260.00, paidulm: null, arrearscm: null, paidcm: null, arrears: 13260.00},
	       {purchase: '虹翔兰光剂', arrearsulm: 11687.00, paidulm: null, arrearscm: null, paidcm: null, arrears: 11687.00},
	       {purchase: '绿闪剂刘守如', arrearsulm: 27480.00, paidulm: 1000.00, arrearscm: 14820, paidcm: null, arrears: 42300.00}
	];

$(function(){
	var oTable = new TableInit();
    oTable.Init();
    oTable.afterLoad();	
});


var TableInit = function () {
    var date = new Date();
	
	var oTableInit = new Object();
    var oInit = new Object();    
    
    //初始化Table
    oTableInit.Init = function () {
        $('#tb_paydetail').bootstrapTable({
            data: data,                         //请求后台的URL（*）
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            columns: [{
                field: 'purchase',
                title: '往来单位'
            }, {
                field: 'arrearsulm',
                title: '截止' + date.getFullYear() + '年' + date.getMonth() + '月欠款'
            }, {
                field: 'paidulm',
                title: '截止' + date.getFullYear() + '年' + date.getMonth() + '月付款'
            }, {
                field: 'arrearscm',
                title: date.getFullYear() + '年' + (date.getMonth() + 1) + '月欠款'
            }, {
                field: 'paidcm',
                title: date.getFullYear() + '年' + (date.getMonth() + 1) + '月付款'
            }, {
                field: 'arrears',
                title: '截止当前欠款'
            }]
        });
    };
    
    
    oTableInit.afterLoad = function(){
		$("#tb_paydetail").on('load-success.bs.table',function(data){
			adjuster();
		});
	}
    return oTableInit;
};