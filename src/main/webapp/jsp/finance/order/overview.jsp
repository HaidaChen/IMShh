<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/header.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Order Info Overview</title>
	
	<link href="<%=basePath %>/thirds/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="<%=basePath %>/vendors/bootstrap-table/bootstrap-table.css" rel="stylesheet">
    <link href="<%=basePath %>/assets/css/style.css" rel="stylesheet">
    <link href="<%=basePath %>/assets/css/mytable.css" rel="stylesheet">
</head>
<body>
    
    <div class="panel-body" style="padding-bottom: 0px">
        <div class="panel panel-default">
            <div class="panel-heading">查询条件
            	<button type="button" id="btn_collapse" class="btn btn-default btn-circle" style="float : right; "><i class="glyphicon glyphicon-chevron-up"></i></button>
            </div>
            <div class="panel-body" id="panel_condition">
                <form id="formSearch" class="form-horizontal">
                    <div class="form-group" style="margin-top:15px">
                        <label class="control-label col-sm-2" for="txt_search_orderNo">订单编号</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="txt_search_orderNo" name="identify">
                        </div>
                        <label class="control-label col-sm-2" for="txt_search_cust">客户名称</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="txt_search_cust" name="custName">
                        </div>                        
                    </div>
                    <div class="form-group" style="margin-top:15px">
                        <label class="control-label col-sm-2" for="txt_search_startDate">开始日期</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control selectData" id="txt_search_startDate" name="startDate">
                        </div>
                        <label class="control-label col-sm-2" for="txt_search_endDate">结束日期</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control selectData" id="txt_search_endDate" name="endDate">
                        </div>                        
                    </div>
                    <div class="form-group" style="margin-top:15px">
                        <div class="col-sm-1 col-sm-offset-11">
                            <button type="button" id="btn_query" class="btn btn-primary">查询</button>
                        </div>                        
                    </div>
                    
                </form>
            </div>
        </div>
        
        <div id="toolbar" class="btn-group">
            <button id="btn_import" type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-import" aria-hidden="true"></span>导入
            </button>
            <button id="btn_add" type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>新增
            </button>
            <button id="btn_edit" type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>修改
            </button>
            <button id="btn_export" type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-export" aria-hidden="true"></span>导出
            </button>
            <button id="btn_delete" type="button" class="btn btn-default">
                <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除
            </button>
        </div>
        
        <table id="tb_orders"></table>
    </div>
    
    
    
	<script src="<%=basePath %>thirds/jquery/jquery-3.2.1.min.js"></script>
    <script src="<%=basePath %>thirds/jquery/jquery.rotate.js"></script>
    <script src="<%=basePath %>thirds/bootstrap/js/bootstrap.min.js"></script>
    <script src="<%=basePath %>vendors/bootstrap-table/bootstrap-table.js"></script>
    <script src="<%=basePath %>vendors/bootstrap-table/local/bootstrap-table-zh-CN.js"></script>
    <script src="<%=basePath %>vendors/bootstrap-table/tableExport.js"></script>
    <script src="<%=basePath %>vendors/bootstrap-table/tableExport.min.js"></script>
    <script src="<%=basePath %>vendors/datepicker/bootstrap-datepicker.js"></script>
    <script src="<%=basePath %>assets/js/ins_datepicker.js"></script>
    <script src="<%=basePath %>assets/js/iframeAdjuster.js"></script>
    <script src="<%=basePath %>assets/js/orderIndex.js"></script>
</body>
</html>