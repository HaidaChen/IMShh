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
</head>
<body>
	<div class="box">
	    <div class="row">
	    	<div class="col-md-3 col-md-offset-9">
	    	    <div class="input-group">
			        <input type="text" class="form-control" placeholder="Search for...">
			        <span class="input-group-btn">
			        	<button class="btn btn-default" type="button">Go!</button>
			     	</span>
			    </div><!-- /input-group -->
	    	</div>
	    </div>
	</div>
	<script src="<%=basePath %>thirds/jquery/jquery-3.2.1.min.js"></script>
    <script src="<%=basePath %>thirds/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>