<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/header.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Customer Info edit</title>
    
    <link href="<%=basePath %>/thirds/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="<%=basePath %>/thirds/bootstrapvalidator/css/bootstrapValidator.min.css" rel="stylesheet">
    <link href="<%=basePath %>/vendors/datapicker/bootstrap-datepicker.css" rel="stylesheet">
    <link href="<%=basePath %>/assets/css/style.css" rel="stylesheet">
</head>
<body>
    <div class="block">
        
        <form id="custform" class="form-horizontal" method="post" role="form" style="text-align:center;" action="save.do">
            <input type="hidden" name="id" value="${pdt.id }">
            <div class="modal-header">
                <h4 class="modal-title" style="color: black">产品信息</h4>
            </div>
            
            <div class="modal-body">
              <div class="form-group">
                <label for="name" class="col-sm-2 control-label">产品编号</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" name="code" value="${pdt.code }" placeholder="请输入产品编号" required="required">
                </div>
                
                <label for="address" class="col-sm-2 control-label">产品名称</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" name="name" value="${pdt.name }" placeholder="请输入产品名称">
                </div>
              </div>              
              
              
              <div class="form-group">
                <label for="phone" class="col-sm-2 control-label">规格</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" name="specification" value="${pdt.specification }" placeholder="请输入产品规格">
                </div>
                
                <label for="email" class="col-sm-2 control-label">型号</label>
                <div class="col-sm-4">
                    <input type="text" class="form-control" name="model" value="${pdt.model }" placeholder="请输入产品型号">
                </div>
              </div>
              
              
              <div class="form-group">
                  <label for="fax" class="col-sm-2 control-label">上线日期</label>
                  <div class="col-sm-4">
                      <input type="text" class="form-control selectData" name="lineDate" value="<fmt:formatDate value='${pdt.lineDate }' pattern='yyyy-MM-dd'/>" readonly="readonly" >
                  </div>
                  
                  <label for="contacts" class="col-sm-2 control-label">下线日期</label>
                  <div class="col-sm-4">
                      <input type="text" class="form-control selectData" name="downlineDate" value="<fmt:formatDate value='${pdt.downlineDate }' pattern='yyyy-MM-dd'/>" readonly="readonly" >
                  </div>
              </div>
              
              <div class="form-group">                
                  <label for="remark" class="col-sm-2 control-label">备注</label>
                  <div class="col-sm-10">
                    <textarea class="form-control" name="remark" placeholder="备注" rows="3">${pdt.remark }</textarea>
                  </div>
              </div>
              
            </div>
            <div class="modal-footer">
              <button id="btn_save" type="submit" class="btn btn-default btn-sm">
                <span class="glyphicon glyphicon-check"></span>保存
              </button> 
              <button type="button" class="btn btn-default btn-sm" onclick="history.back(-1)">
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
    <script src="<%=basePath %>assets/js/selfAdaption.js"></script>
    <script src="<%=basePath %>assets/js/product.js"></script>
</body>
</html>