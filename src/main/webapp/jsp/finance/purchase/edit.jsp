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
                <h4 class="modal-title" style="color: black">采购信息</h4>
            </div>
            
            <div class="modal-body">
              <div class="form-group">
                <label for="purchaseDate" class="col-sm-2 control-label">采购日期</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control selectData" name="purchaseDate" value="<fmt:formatDate value='${purchase.purchaseDate }' pattern='yyyy-MM-dd'/>" readonly="readonly" required="required">
                </div>
                
                <label for="supplierName" class="col-sm-2 control-label">供应商</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" name="supplierName" value="${purchase.supplierName }" placeholder="请输入供应商">
                </div>
              </div>  
                     
              <div class="form-group">
                <label for="materialName" class="col-sm-2 control-label">原材料</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" name="materialName" value="${purchase.materialName }" placeholder="请输入原材料" required="required">
                </div>
                
                <label for="specification" class="col-sm-2 control-label">规格</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="specification" value="${purchase.specification }" placeholder="请输入原材料规格">
                </div>
              </div>  
              
              <div class="form-group">
                  <label for="unit" class="col-sm-2 control-label">单位</label>
                  <div class="col-sm-4">
                      <input type="text" class="form-control" name="unit" value="${purchase.unit }" placeholder="请输入单位">
                  </div>
                  
                  <label for="quantity" class="col-sm-2 control-label">数量</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="quantity" value="${purchase.quantity }" placeholder="请输入联系人">
                </div>
              </div>
              
              <div class="form-group">
                <label for="unitPrice" class="col-sm-2 control-label">单价</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="unitPrice" value="${purchase.unitPrice }" placeholder="请输入单价">
                </div>
                
                <label for="totlemnt" class="col-sm-2 control-label">金额</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="totlemnt" value="${purchase.totlemnt }" readonly="readonly">
                </div>
              </div>
              
              <div class="form-group">
                <label for="paid" class="col-sm-2 control-label">已付款</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="paid" value="${purchase.paid }" placeholder="请输入已付款">
                </div>
                
                <label for="balance" class="col-sm-2 control-label">余额</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="balance" value="${purchase.balance }" readonly="readonly">
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