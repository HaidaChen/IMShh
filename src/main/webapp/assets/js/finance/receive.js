/**
 * 
 */
var data = [
	       {customer: '兴通快干胶粉', receiveulm: 130000.00, retainageulm: 0, amountcm: null, receivecm: null, retainagecm: null, amount: 130000, receive: 130000, retainage: 0},
	       {customer: '宇兴化工', receiveulm: 326000, retainageulm: 1000000, amountcm: null, receivecm: null, retainagecm: null, amount: 130000, receive: 130000, retainage: 1326000},
	       {customer: '虹翔兰光剂', receiveulm: 11687, retainageulm: 0, amountcm: null, receivecm: null, retainagecm: null, amount: 11687, receive: 11687, retainage: 0},
	       {customer: '绿闪剂刘守如', receiveulm: 27480, retainageulm: 0, amountcm: 1314000, receivecm: 1310000, retainagecm: 4000, amount: 1341480, receive: 1337480, retainage: 4000}
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
        $('#tb_receivedetail').bootstrapTable({
            data: data,                         //请求后台的URL（*）
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            columns: [{
                field: 'customer',
                title: '客户单位'
            }, {
                field: 'receiveulm',
                title: '截止' + date.getFullYear() + '年' + date.getMonth() + '月收款'
            }, {
                field: 'retainageulm',
                title: '截止' + date.getFullYear() + '年' + date.getMonth() + '月尾款'
            }, {
                field: 'amountcm',
                title: date.getFullYear() + '年' + (date.getMonth() + 1) + '月金额'
            }, {
                field: 'receivecm',
                title: date.getFullYear() + '年' + (date.getMonth() + 1) + '月收款'
            }, {
                field: 'retainagecm',
                title: date.getFullYear() + '年' + (date.getMonth() + 1) + '月尾款'
            }, {
                field: 'amount',
                title: '截止当前金额'
            }, {
                field: 'receive',
                title: '截止当前收款'
            }, {
                field: 'retainage',
                title: '截止当前尾款'
            }]
        });
    };
    
    
    oTableInit.afterLoad = function(){
		$("#tb_receivedetail").on('load-success.bs.table',function(data){
			adjuster();
		});
	}
    return oTableInit;
};