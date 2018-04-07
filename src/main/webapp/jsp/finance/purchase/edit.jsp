<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/header.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>purchaseomer Info edit</title>
    
    <link href="<%=basePath %>/thirds/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="<%=basePath %>/thirds/bootstrapvalidator/css/bootstrapValidator.min.css" rel="stylesheet">
    <link href="<%=basePath %>/assets/css/style.css" rel="stylesheet">
</head>
<body>
    <div class="block">
        
        <form id="purchaseform" class="form-horizontal" method="post" role="form" style="text-align:center;" action="save.do">
            <input type="hidden" name="id" value="${purchase.id }">
            <div class="modal-header">
                <h4 class="modal-title" style="color: black">采购计划</h4>
            </div>
            
            <div class="modal-body">
              <div class="form-group">
                <label for="createDate" class="col-sm-2 control-label">创建日期</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control selectData" name="createDate" value="<fmt:formatDate value='${purchase.createDate }' pattern='yyyy-MM-dd'/>" readonly="readonly" required="required">
                </div>
                
                <label for="identify" class="col-sm-2 control-label">采购计划编号</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" name="identify" value="${purchase.identify }" placeholder="请输入采购计划编号">
                </div>
              </div>  
                     
              <div class="form-group">
                <label for="orderIdentify" class="col-sm-2 control-label">关联订单</label>
                <div class="col-sm-4">
                  <input type="hidden" name="orderId" value="${purchase.orderId}">
                  <div class="input-group">
                  	<input type="text" class="form-control" name="orderIdentify" value="${purchase.orderIdentify }" placeholder="请输入关联订单编号" >
                  	<span class="input-group-btn">
                  		<button class="btn btn-default" type="button"><i class="glyphicon glyphicon-fullscreen"></i></button>
                  	</span>
                  </div>
                </div>
                
                <label for="money" class="col-sm-2 control-label">采购总金额</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="money" value="${purchase.money }" >
                </div>
              </div>  
              
              <div class="form-group">
                  <label for="paid" class="col-sm-2 control-label">已付款</label>
                  <div class="col-sm-4">
                      <input type="text" class="form-control" name="paid" value="${purchase.paid }" >
                  </div>
                  
                  <label for="balance" class="col-sm-2 control-label">待付金额</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="quantity" value="${purchase.balance }">
                </div>
              </div>
                            
              <div class="form-group">
                <label for="remark" class="col-sm-2 control-label">备注</label>
                <div class="col-sm-10">
                  <textarea class="form-control" name="remark" rows="3">${purchase.remark }</textarea>
                </div>
              </div>
            </div>
            
            <div class="panel panel-default">
              <div class="panel-heading">采购明细<div style="float: right"><button id="btn_add_detail" type="button" class="btn btn-sm btn-primary">新增明细</button></div></div>
              
              <table id="tbl_detail" class="table"></table>
            </div>
            
            <div class="modal-footer">
              <button id="btn_save" type="submit" class="btn btn-default btn-sm">
                <span class="glyphicon glyphicon-check"></span>保存
              </button> 
              <button type="button" class="btn btn-default btn-sm" onclick="history.go(-1)">
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
    <script src="<%=basePath %>assets/js/finance/purchase_edit.js"></script>
</body>
</html>