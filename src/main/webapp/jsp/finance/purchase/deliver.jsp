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
    <input type="hidden" name="planId" value="${purchase.id }">
    <input type="hidden" name="deliver" value="${deliver}">
	<div class="well title"><a href="#">${purchase.identify }</a>采购计划</div>
    <table id="tb_deliver" data-toolbar="#toolbar"></table>
    
    <div id="toolbar">
    	<div class="btn-group" role="group">
    		<button type="button" class="btn btn-default" id="btn_add">
    			<i class="glyphicon glyphicon-plus"></i>新增
    		</button>
    		<button type="button" class="btn btn-default" id="btn_update">
    			<i class="glyphicon glyphicon-pencil"></i>修改
    		</button>
    	</div>
    </div>
    
    <script src="<%=basePath %>thirds/jquery/jquery-3.2.1.min.js"></script>
    <script src="<%=basePath %>thirds/jquery/jquery.form.js"></script>
    <script src="<%=basePath %>thirds/bootstrap/js/bootstrap.min.js"></script>
    <script src="<%=basePath %>vendors/bootstrap-table/bootstrap-table.js"></script>
    <script src="<%=basePath %>vendors/bootstrap-table/local/bootstrap-table-zh-CN.js"></script>

    <script src="<%=basePath %>vendors/datepicker/bootstrap-datepicker.js"></script>
    <script src="<%=basePath %>assets/js/ins_datepicker.js"></script>
    <script src="<%=basePath %>assets/js/importModal.js"></script>
    <script src="<%=basePath %>assets/js/iframeAdjuster.js"></script>
    <script src="<%=basePath %>assets/js/table_operation.js"></script>
    <script src="<%=basePath %>assets/js/finance/purchase_deliver.js"></script>
</body>
</html>