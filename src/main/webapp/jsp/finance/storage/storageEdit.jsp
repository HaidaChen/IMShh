<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/header.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Storage Info edit</title>
    
    <link href="<%=basePath %>/thirds/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="<%=basePath %>/thirds/bootstrapvalidator/css/bootstrapValidator.min.css" rel="stylesheet">
    <link href="<%=basePath %>/assets/css/style.css" rel="stylesheet">
</head>
<body>
    <div class="block">
        
        <form id="storageform" class="form-horizontal" method="post" role="form" style="text-align:center;" action="save.do">
            <input type="hidden" name="id" value="${storage.id }">
            <div class="modal-header">
                <h4 class="modal-title" style="color: black">入库信息</h4>
            </div>
            
            <div class="modal-body">
              <div class="form-group">
                <label for="storageDate" class="col-sm-2 control-label">入库日期</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control selectData" name="storageDate" value="<fmt:formatDate value='${storage.storageDate }' pattern='yyyy-MM-dd'/>" readonly="readonly" required="required">
                </div>
                
                <label for="pdtNo" class="col-sm-2 control-label">货号</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" name="pdtNo" value="${storage.pdtNo }" placeholder="请输入货号" required="required">
                </div>
              </div>  
                     
              <div class="form-group">
                <label for="content" class="col-sm-2 control-label">含量</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" name="content" value="${storage.content }" placeholder="请输入含量" required="required">
                </div>
                <label for="amount" class="col-sm-2 control-label">数量</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" name="amount" value="${storage.amount }" placeholder="请输入数量" required="required">
                </div>
              </div>  
              
              <div class="form-group">
                <label for="remark" class="col-sm-2 control-label">备注</label>
                <div class="col-sm-10">
                  <textarea rows="3" class="form-control" name="remark">${storage.remark }</textarea>
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
    <script src="<%=basePath %>assets/js/finance/invoice_edit.js"></script>
</body>
</html>