<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/header.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Product Info Overview</title>
	
	<link href="<%=basePath %>/thirds/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="<%=basePath %>/vendors/bootstrap-table/bootstrap-table.css" rel="stylesheet">
    <link href="<%=basePath %>/assets/css/style.css" rel="stylesheet">
</head>
<body>
    <div class="well title">产品列表</div>
    <table id="tb_pdt" data-toolbar="#toolbar" ></table>
    <div id="toolbar">
        <div class="btn-group" role="group">
            <button type="button" class="btn btn-default" id="btn_import">
                <i class="glyphicon glyphicon-import"></i>导入
            </button>
            <button type="button" class="btn btn-default" id="btn_add">
                <i class="glyphicon glyphicon-plus"></i>新增
            </button>
            <button type="button" class="btn btn-default" id="btn_update">
                <i class="glyphicon glyphicon-pencil"></i>修改
            </button>           
            <button type="button" class="btn btn-default" id="btn_delete">
                <i class="glyphicon glyphicon-remove"></i>删除
            </button>
            <button type="button" class="btn btn-default" id="btn_export">
                <i class="glyphicon glyphicon-export"></i>导出
            </button>
        </div>
        
        <div class="input-group" style="width: 260px; float: right" id="block_search">
            <input type="text" id="txt_search" name="condition" class="form-control col-sm-2" placeholder="查询条件">
            <span class="input-group-addon" id="span_search">
                <i class="glyphicon glyphicon-search"></i>
            </span>
        </div>
    </div>
    
    <script src="<%=basePath %>thirds/jquery/jquery-3.2.1.min.js"></script>
    <script src="<%=basePath %>thirds/jquery/jquery.form.js"></script>
    <script src="<%=basePath %>thirds/bootstrap/js/bootstrap.min.js"></script>
    <script src="<%=basePath %>vendors/bootstrap-table/bootstrap-table.js"></script>
    <script src="<%=basePath %>vendors/bootstrap-table/local/bootstrap-table-zh-CN.js"></script>
    <script src="<%=basePath %>assets/js/importModal.js"></script>
    <script src="<%=basePath %>assets/js/iframeAdjuster.js"></script>
    <script src="<%=basePath %>assets/js/table_operation.js"></script>
    <script src="<%=basePath %>assets/js/busdata/pdt_index.js"></script>
    
    <script>
    $(function(){
    	var column = [{name: '编码', field: 'code', width: 1}, 
    		          {name: '产品名称', field: 'name', width: 2},
    		          {name: '规格', field: 'specification', width: 2},
    		          {name: '型号', field: 'model', width: 2},
    		          {name: '上线日期', field: 'lineDate', width: 2},
    		          {name: '下线日期', field: 'downlineDate', width: 2}];
    	table = new Table('产品列表', 'table table-striped table-bordered', 'loadpdt.do', 'pdt/edit.do', 'save.do', 'delete.do', 'ajaxUpload.do', 'downloadExcel.do', column, null, 1);
    	table.createTable();
    	//table.loadData();
    });
    </script>
    
</body>
</html>