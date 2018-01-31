<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/header.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Supplier Info Overview</title>
	
	<link href="<%=basePath %>/thirds/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="<%=basePath %>/assets/css/mytable.css" rel="stylesheet">
</head>
<body>
    <div class="block" id="block">
        <div class="head" id="head"></div>
        <div class="filter" id="filter"></div>
        <div class="content" id="content"></div>
        <div class="page" id="page"></div>
    </div>
	
	<script src="<%=basePath %>thirds/jquery/jquery-3.2.1.min.js"></script>
    <script src="<%=basePath %>thirds/jquery/jquery.form.js"></script>
    <script src="<%=basePath %>thirds/bootstrap/js/bootstrap.min.js"></script>
    <script src="<%=basePath %>thirds/bootstrapvalidator/js/bootstrapValidator.min.js"></script>    
    <script src="<%=basePath %>assets/js/mytable.js"></script>
    
    <script>
    $(function(){
    	var column = [{name: '产品编码', field: 'code', width: 2}, 
    		          {name: '产品名称', field: 'name', width: 2},
    		          {name: '规格', field: 'specification', width: 3},
    		          {name: '型号', field: 'model', width: 2},
    		          {name: '上线日期', field: 'lineDate', width: 1},
    		          {name: '下线日期', field: 'downlineDate', width: 1}];
    	table = new Table('产品列表', 'table table-striped table-bordered', 'loadpdt.do', 'edit.do', 'save.do', 'delete.do', 'ajaxUpload.do', 'downloadExcel.do', column);
    	table.createTable();
    	//table.loadData();
    });
    </script>
    
</body>
</html>