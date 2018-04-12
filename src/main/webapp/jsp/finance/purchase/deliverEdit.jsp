<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/header.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>deliver Info edit</title>
    
    <link href="<%=basePath %>/thirds/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="<%=basePath %>/thirds/bootstrapvalidator/css/bootstrapValidator.min.css" rel="stylesheet">
    <link href="<%=basePath %>/assets/css/style.css" rel="stylesheet">
</head>
<body>
    <div class="block">
            <div class="modal-header">
                <h4 class="modal-title" style="color: black">原材料交付信息</h4>
            </div>
            
            <div class="modal-body">
              <form id="deliverform" class="form-horizontal" method="post" role="form" style="text-align:center;" action="saveDeliver.do">
                <input type="hidden" name="id" value="${deliver.id }">
	            <input type="hidden" name="planId" value="${deliver.planId }">
	            <input type="hidden" name="planDetailId" value="${deliver.planDetailId }">
              <div class="form-group">
                <label for="deliverDate" class="col-sm-2 control-label">接收日期</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control selectData" name="deliverDate" value="<fmt:formatDate value='${deliver.deliverDate }' pattern='yyyy-MM-dd'/>" readonly="readonly" required="required">
                </div>
                
                <label for="supplierName" class="col-sm-2 control-label">供应商</label>
                <div class="col-sm-4">
                  <input type="hidden" name="supplierId" value="${deliver.supplierId }">
                  <input type="text" class="form-control" name="supplierName" value="${deliver.supplierName }" placeholder="请输入供应商" required="required">
                </div>
              </div>  
                     
              <div class="form-group">
                <label for="materialName" class="col-sm-2 control-label">原材料</label>
                <div class="col-sm-4">
                	<input type="hidden" name="materialId" value="${deliver.materialId }">
                    <input type="text" class="form-control" name="materialName" value="${deliver.materialName }" placeholder="请输入原材料" readonly="readonly">
                </div>
                
                <label for="specification" class="col-sm-2 control-label">规格</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="specification" value="${deliver.specification }" placeholder="请输入原材料规格" readonly="readonly">
                </div>                 
              </div>  
              
              <div class="form-group">                  
                  <label for="unit" class="col-sm-2 control-label">单位</label>
	              <div class="col-sm-4">
	                  <input type="text" class="form-control" name="unit" value="${deliver.unit }" placeholder="请输入原材料单位" readonly="readonly">
	              </div>
	              <label for="unitPrice" class="col-sm-2 control-label">单价</label>
	              <div class="col-sm-4">
	                  <input type="text" class="form-control" name="unitPrice" value="${deliver.unitPrice }" placeholder="请输入单价" required="required">
	              </div>
              </div>
              
              <div class="form-group">
                <label for="amount" class="col-sm-2 control-label">数量</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="amount" value="${deliver.amount }" placeholder="请输入配送数量" required="required">
                </div>
                <label for="totlemnt" class="col-sm-2 control-label">合计金额</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="totlemnt" value="${deliver.totlemnt }" readonly="readonly">
                </div>
              </div>
              
              <div class="form-group">
                  <label for="remark" class="col-sm-2 control-label">备注</label>
              	  <div class="col-sm-10">
                  	  <textarea class="form-control" name="remark" placeholder="请输入备注" >${deliver.remark }</textarea>
                  </div>
              </div>
              </form>
            </div>
            <div class="modal-footer">
              <button id="btn_save" type="button" class="btn btn-default btn-sm" data-dismiss="modal">
                <span class="glyphicon glyphicon-check"></span>保存
              </button> 
              <button type="button" class="btn btn-default btn-sm"  data-dismiss="modal">
                <span class="glyphicon glyphicon-share"></span>关闭
              </button>
            </div>
          
    </div>
    <script src="<%=basePath %>thirds/jquery/jquery-3.2.1.min.js"></script>
    <script src="<%=basePath %>thirds/jquery/jquery.form.js"></script>
    <script src="<%=basePath %>thirds/bootstrap/js/bootstrap.min.js"></script>
    <script src="<%=basePath %>thirds/bootstrapvalidator/js/bootstrapValidator.min.js"></script>
    <%-- <script src="<%=basePath %>vendors/bootstrap-table/bootstrap-table.js"></script>
    <script src="<%=basePath %>vendors/bootstrap-table/local/bootstrap-table-zh-CN.js"></script> --%>
    <script src="<%=basePath %>vendors/datepicker/bootstrap-datepicker.js"></script>
    <script src="<%=basePath %>assets/js/ins_datepicker.js"></script>
    <script src="<%=basePath %>assets/js/finance/deliver_edit.js"></script>
</body>
</html>