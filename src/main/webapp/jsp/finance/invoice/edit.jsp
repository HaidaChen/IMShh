<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/header.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Invoice Info edit</title>
    
    <link href="<%=basePath %>/thirds/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="<%=basePath %>/thirds/bootstrapvalidator/css/bootstrapValidator.min.css" rel="stylesheet">
    <link href="<%=basePath %>/assets/css/style.css" rel="stylesheet">
</head>
<body>
    <div class="block">
        
        <form id="invoiceform" class="form-horizontal" method="post" role="form" style="text-align:center;" action="save.do">
            <input type="hidden" name="id" value="${invoice.id }">
            <div class="modal-header">
                <h4 class="modal-title" style="color: black">开票信息</h4>
            </div>
            
            <div class="modal-body">
              <div class="form-group">
                <label for="invoiceDate" class="col-sm-2 control-label">开票日期</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control selectData" name="invoiceDate" value="<fmt:formatDate value='${invoice.invoiceDate }' pattern='yyyy-MM-dd'/>" readonly="readonly" required="required">
                </div>
                
                <label for="customerName" class="col-sm-2 control-label">客户名称</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" name="customerName" value="${invoice.customerName }" placeholder="请输入客户名称">
                </div>
              </div>  
                     
              <div class="form-group">
                <label for="amountWithTax" class="col-sm-2 control-label">价税合计</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" name="amountWithTax" value="${invoice.amountWithTax }" placeholder="请输入价税合计" required="required">
                </div>
                
                <label for="valueAddTax" class="col-sm-2 control-label">增值税</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="valueAddTax" value="${invoice.valueAddTax }" readonly="readonly">
                </div>
              </div>  
              
              <div class="form-group">
                  <label for="exciseTax" class="col-sm-2 control-label">消费税</label>
                  <div class="col-sm-4">
                      <input type="text" class="form-control" name="exciseTax" value="${invoice.exciseTax }" readonly="readonly">
                  </div>
                  
                  <label for="constructionTax" class="col-sm-2 control-label">城建税</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="constructionTax" value="${invoice.constructionTax }" readonly="readonly">
                </div>
              </div>
              
              <div class="form-group">
                <label for="educationFee" class="col-sm-2 control-label">教育费</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="educationFee" value="${invoice.educationFee }" readonly="readonly">
                </div>
                
                <label for="totalTax" class="col-sm-2 control-label">税款合计</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="totalTax" value="${invoice.totalTax }" readonly="readonly">
                </div>
              </div>
              
              <div class="form-group">
                <label for="drawback" class="col-sm-2 control-label">退税</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="drawback" value="${invoice.drawback }" readonly="readonly">
                </div>
                <label for="remark" class="col-sm-2 control-label">备注</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" name="remark" value="${invoice.remark }" placeholder="请输入备注" >
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