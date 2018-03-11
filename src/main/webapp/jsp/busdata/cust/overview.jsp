<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/header.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Customer Info Overview</title>
	
	<link href="<%=basePath %>/thirds/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link href="<%=basePath %>/assets/css/style.css" rel="stylesheet">
    <%-- <link href="<%=basePath %>/assets/css/mytable.css" rel="stylesheet"> --%>
</head>
<body>
    <div class="well title">客户列表</div>
    <table id="tb_cust" data-toolbar="#toolbar"></table>
    <div id="toolbar">
    	<div class="btn-group" role="group">
    		<button type="button" class="btn btn-default">
    			<i class="glyphicon glyphicon-import"></i>导入
    		</button>
    		<button type="button" class="btn btn-default">
    			<i class="glyphicon glyphicon-plus"></i>新增
    		</button>
    		<button type="button" class="btn btn-default">
    			<i class="glyphicon glyphicon-pencil"></i>修改
    		</button>    		
    		<button type="button" class="btn btn-default">
    			<i class="glyphicon glyphicon-remove"></i>删除
    		</button>
    		<button type="button" class="btn btn-default">
    			<i class="glyphicon glyphicon-export"></i>导出
    		</button>
    	</div>
    	
    	<div class="input-group" style="width: 260px; float: right">
    	    <input type="text" class="form-control col-sm-2" placeholder="查询条件">
    	    <span class="input-group-addon">
    	        <i class="glyphicon glyphicon-search"></i>
    	    </span>
    	</div>
    </div>
    
    
    <!-- <div class="block" id="block">
        <div class="head" id="head"></div>
        <div class="filter" id="filter"></div>
        <div class="content" id="content"></div>
        <div class="page" id="page"></div>
    </div> -->
	
	<script src="<%=basePath %>thirds/jquery/jquery-3.2.1.min.js"></script>
    <script src="<%=basePath %>thirds/jquery/jquery.form.js"></script>
    <script src="<%=basePath %>thirds/bootstrap/js/bootstrap.min.js"></script>
    <%-- <script src="<%=basePath %>thirds/bootstrapvalidator/js/bootstrapValidator.min.js"></script>    
    <script src="<%=basePath %>assets/js/mytable.js"></script> --%>
    
    <script>
    $(function(){
    	var column = [{name: '公司名', field: 'name', width: 3}, 
    		          {name: '电话', field: 'phone', width: 2},
    		          {name: '邮箱', field: 'email', width: 2},
    		          {name: '传真', field: 'fax', width: 2},
    		          {name: '联系人', field: 'contacts', width: 2}];
    	table = new Table('客户信息列表', 'table table-striped table-bordered', 'loadcust.do', 'edit.do', 'save.do', 'delete.do', 'ajaxUpload.do', 'downloadExcel.do', column);
    	table.createTable();
    	//table.loadData();
    });
    </script>
    
</body>
</html>