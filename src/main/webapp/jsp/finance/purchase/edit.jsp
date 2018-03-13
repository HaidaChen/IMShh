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
    <link href="<%=basePath %>/assets/css/style.css" rel="stylesheet">
</head>
<body>
    <div class="block">
        
        <form id="custform" class="form-horizontal" method="post" role="form" style="text-align:center;" action="save.do">
            <input type="hidden" name="id" value="${cust.id }">
            <div class="modal-header">
                <h4 class="modal-title" style="color: black">采购信息</h4>
            </div>
            
            <div class="modal-body">
              <div class="form-group">
                <label for="name" class="col-sm-2 control-label">公司名称</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="name" value="${cust.name }" placeholder="请输入公司名称" required="required">
                </div>
              </div>              
              <div class="form-group">
                <label for="address" class="col-sm-2 control-label">公司地址</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="address" value="${cust.address }" placeholder="请输入公司地址">
                </div>
              </div>
              
              <div class="form-group">
                <label for="phone" class="col-sm-2 control-label">联系电话</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="phone" value="${cust.phone }" placeholder="请输入联系电话">
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="col-sm-2 control-label">eMail</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="email" value="${cust.email }" placeholder="请输入邮箱">
                </div>
              </div>
              <div class="form-group">
                  <label for="fax" class="col-sm-2 control-label">传真</label>
                  <div class="col-sm-10">
                      <input type="text" class="form-control" name="fax" value="${cust.fax }" placeholder="请输入传真">
                  </div>
              </div>
              <div class="form-group">
                <label for="contacts" class="col-sm-2 control-label">联系人</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="contacts" value="${cust.contacts }" placeholder="请输入联系人">
                </div>
              </div>
              <div class="form-group">
                <label for="remark" class="col-sm-2 control-label">备注</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="remark" value="${cust.remark }" placeholder="备注" >
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button id="btn_save" type="submit" class="btn btn-default btn-sm">
                <span class="glyphicon glyphicon-check"></span>保存
              </button> 
              <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">
                <span class="glyphicon glyphicon-share"></span>关闭
              </button>
            </div>
        </form>  
    </div>
    <script src="<%=basePath %>thirds/jquery/jquery-3.2.1.min.js"></script>
    <script src="<%=basePath %>thirds/bootstrap/js/bootstrap.min.js"></script>
    <script src="<%=basePath %>thirds/bootstrapvalidator/js/bootstrapValidator.min.js"></script>
    <script src="<%=basePath %>assets/js/busdata/cust_edit.js"></script>
</body>
</html>