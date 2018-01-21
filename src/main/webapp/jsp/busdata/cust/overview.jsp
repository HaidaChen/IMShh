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
    <link href="<%=basePath %>/thirds/bootstrapvalidator/css/bootstrapValidator.min.css" rel="stylesheet">
</head>
<body>
	<div class="block">
        <div class="head">
            <div class="title">客户信息列表</div>
            <div class="options">
                <a title="导  入" id="import"><i class="glyphicon glyphicon-log-in"></i></a>
                <a title="新  增" id="create"><i class="glyphicon glyphicon-pencil"></i></a>
                <a title="导  出" id="export"><i class="glyphicon glyphicon-log-out"></i></a>
            </div>
        </div>
        
        <div class="table-desc">
            <div class="pagesize">
                <select id="pageSize">
                    <option>10</option>
                    <option>20</option>
                    <option>50</option>
                </select>
                <span>条记录每页</span>
            </div>
            <div class="search">
                <div class="input-group input-group-sm">
                  <input type="text" id="txt_search" class="form-control" placeholder="Search for...">
                  <span class="input-group-btn">
                    <button class="btn btn-default" id="btn_search" type="button"><i class="glyphicon glyphicon-search"></i></button>
                  </span>
                </div>
            </div>
        </div>
        
        <div class="table-body">
            <table cellpadding="0" cellspacing="0" border="0" class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th class="col-md-4">公司名</th>
                        <th class="col-md-2">电话</th>
                        <th class="col-md-3">邮箱</th>
                        <th class="col-md-2">传真</th>
                        <th class="col-md-1">操作</th>
                    </tr>
                </thead>
                <tbody>
                             
                </tbody>
            </table>
        </div>
	
        <div class="table-page">
            <div class="record">共<span id="rescount"></span>条记录</div>
            <div class="pager" id="pagebar">
                <input type="hidden" id="currentPage" value="1">
                <input type="hidden" id="pageCount">
                <nav aria-label="Page navigation">
                    <ul class="pagination pagination-sm">
                        
                    </ul>
                </nav>  
            </div>
        </div>
    </div>
	<script src="<%=basePath %>thirds/jquery/jquery-3.2.1.min.js"></script>
    <script src="<%=basePath %>thirds/jquery/jquery.form.js"></script>
    <script src="<%=basePath %>thirds/bootstrap/js/bootstrap.min.js"></script>
    <script src="<%=basePath %>thirds/bootstrapvalidator/js/bootstrapValidator.min.js"></script>    
    <script src="<%=basePath %>assets/js/customer.js"></script>
    
</body>
</html>