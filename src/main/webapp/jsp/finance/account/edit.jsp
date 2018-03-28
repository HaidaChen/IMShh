<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/header.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>transaction Info edit</title>
    
    <link href="<%=basePath %>/thirds/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="<%=basePath %>/thirds/bootstrapvalidator/css/bootstrapValidator.min.css" rel="stylesheet">
    <link href="<%=basePath %>/assets/css/style.css" rel="stylesheet">
</head>
<body>
    <div class="block">
        
        <form id="transactionform" class="form-horizontal" method="post" role="form" style="text-align:center;" action="save.do">
            <input type="hidden" name="id" value="${transaction.id }">
            <input type="hidden" name="accountNo" value="${transaction.accountNo }">
            <div class="modal-header">
                <h4 class="modal-title" style="color: black">交易明细</h4>
            </div>
            
            <div class="modal-body">
              <div class="form-group">
                <label for="tranDate" class="col-sm-2 control-label">交易时间</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control selectData" name="tranDate" value="<fmt:formatDate value='${purchase.purchaseDate }' pattern='yyyy-MM-dd hh:mm:ss'/>" readonly="readonly" required="required">
                </div>
                
                <label for="tranType" class="col-sm-2 control-label">交易类型</label>
                <div class="col-sm-4">
                    <select name="tranType" class="form-control">
                        <option value="">----请选择交易类型----</option>
                        <option value="1">转入</option>
                        <option value="2">转出</option>
                        <option value="3">取款</option>
                        <option value="4">存款</option> 
                        <option value="5">其他入</option> 
                        <option value="6">其他出</option>                          
                    </select>
                </div>
              </div>  
                     
              <div class="form-group">
                <label for="tranAmount" class="col-sm-2 control-label">交易金额</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" name="tranAmount" value="${purchase.materialName }" placeholder="请输入原材料" required="required">
                </div>
                
                <label for="tranUser" class="col-sm-2 control-label">交易对方</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="tranUser" value="${purchase.specification }" placeholder="请输入原材料规格">
                </div>
              </div>  
              
              <div class="form-group">
                  <label for="tranBank" class="col-sm-2 control-label">交易对方银行</label>
                  <div class="col-sm-4">
                      <input type="text" class="form-control" name="tranBank" value="${purchase.unit }" placeholder="请输入单位">
                  </div>
                  
                  <label for="tranAccountNo" class="col-sm-2 control-label">交易对方账号</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="tranAccountNo" value="${purchase.quantity }" placeholder="请输入联系人">
                </div>
              </div>
              
              <div class="form-group">
                <label for="orderId" class="col-sm-2 control-label">关联订单</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="orderId" value="${purchase.unitPrice }" placeholder="请输入单价">
                </div>
                
                <label for="purchaseId" class="col-sm-2 control-label">关联采购单</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="purchaseId" value="${purchase.totlemnt }" readonly="readonly">
                </div>
              </div>        
              
              <div class="form-group">
                <label for="remark" class="col-sm-2 control-label">备注</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="remark" value="${purchase.remark }" placeholder="备注" >
                </div>
              </div>
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
    <script src="<%=basePath %>vendors/datepicker/bootstrap-datepicker.js"></script>
    <script src="<%=basePath %>assets/js/ins_datepicker.js"></script>
    <script src="<%=basePath %>assets/js/finance/purchase_edit.js"></script>
</body>
</html>