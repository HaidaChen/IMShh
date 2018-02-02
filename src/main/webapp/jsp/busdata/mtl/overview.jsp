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
    	var column = [{name: '品名', field: 'name', width: 3},
    		          {name: '规格', field: 'specification', width: 2},
    		          {name: '单位', field: 'unit', width: 2},
    		          {name: '分类', field: 'category', width: 2}];
    	table = new Table('原材料列表', 'table table-striped table-bordered', 'loadmtl.do', 'mtl/edit.do', 'save.do', 'delete.do', 'ajaxUpload.do', 'downloadExcel.do', column, null, 1);
    	table.createTable();
    	//table.loadData();
    });
    </script>
    
</body>
</html>