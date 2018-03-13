<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/header.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Order Info edit</title>
    
    <link href="<%=basePath %>/thirds/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="<%=basePath %>/thirds/bootstrapvalidator/css/bootstrapValidator.min.css" rel="stylesheet">
    <link href="<%=basePath %>/vendors/bootstrap-table/bootstrap-table.css" rel="stylesheet">
    <link href="<%=basePath %>/vendors/datapicker/bootstrap-datepicker.css" rel="stylesheet">
    <link href="<%=basePath %>/assets/css/style.css" rel="stylesheet">
</head>
<body>
    <div class="block">
        
        <form id="custform" class="form-horizontal" method="post" role="form" style="text-align:center;" action="save.do">
            <input type="hidden" name="id" value="${order.id }">            
            <div class="modal-header">
                <h4 class="modal-title" style="color: black">订单信息</h4>
            </div>
            
            <div class="modal-body">
              <div class="form-group">
                <label for="identify" class="col-sm-2 control-label">订单编号</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" name="identify" value="${order.identify }" placeholder="请输入订单编号" required="required">
                </div>
                
                <label for="custName" class="col-sm-2 control-label">订购客户</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" name="custName" value="${order.custName }" placeholder="请输入公司地址">
                </div>
              </div>              
              
              <div class="form-group">
                <label for="orderDate" class="col-sm-2 control-label">订购日期</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control selectData" name="orderDate" value="<fmt:formatDate value='${order.orderDate }' pattern='yyyy-MM-dd'/>" readonly="readonly" >
                </div>
                
                <label for="amount" class="col-sm-2 control-label">订单金额</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" name="amount" value="${order.amount }" placeholder="请输入订单金额">
                </div>
              </div>      
              
              <div class="form-group">
                <label for="remark" class="col-sm-2 control-label">备注</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="remark" value="${order.remark }" placeholder="备注" >
                </div>
              </div>
            </div>
            
            <div class="panel panel-default">
              <div class="panel-heading">订单明细<div style="float: right"><button id="btn_add_detail" type="button" class="btn btn-sm btn-primary">新增明细</button></div></div>
              
              <table id="tbl_detail" class="table"></table>
            </div>
            
            <div class="modal-footer">
              <button id="btn_save" type="button" class="btn btn-default btn-sm">
                <span class="glyphicon glyphicon-check"></span>保存
              </button> 
              <button id="btn_close" type="button" class="btn btn-default btn-sm" onclick="history.go(-1)">
                <span class="glyphicon glyphicon-share"></span>关闭
              </button>
            </div>
            
        </form>  
    </div>
    <script src="<%=basePath %>thirds/jquery/jquery-3.2.1.min.js"></script>
    <script src="<%=basePath %>thirds/bootstrap/js/bootstrap.min.js"></script>
    <script src="<%=basePath %>thirds/bootstrapvalidator/js/bootstrapValidator.min.js"></script>
    <script src="<%=basePath %>vendors/bootstrap-table/bootstrap-table.js"></script>
    <script src="<%=basePath %>vendors/bootstrap-table/local/bootstrap-table-zh-CN.js"></script>
    <script src="<%=basePath %>vendors/datepicker/bootstrap-datepicker.js"></script>
    <script src="<%=basePath %>assets/js/ins_datepicker.js"></script>
    <script src="<%=basePath %>assets/js/finance/order_edit.js"></script>    
</body>
</html>