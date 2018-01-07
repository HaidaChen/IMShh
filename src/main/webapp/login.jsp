<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="header.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
 	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>华辉烟花信息管理系统</title>
	
	<link href="<%=basePath %>thirds/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link href="<%=basePath %>assets/css/style.css" rel="stylesheet">
	<link href="<%=basePath %>assets/css/login.css" rel="stylesheet">
</head>
<body>
  
    <div class="container">
  	    <div class="row header">
  		    <h2>华辉烟花信息管理系统</h2>
  		    <p>v1.0</p>
  	    </div>
    
  	    <div class="row">
	  		<div class="col-sm-4 col-sm-offset-4 login-box">
	  			<div class="title">
			  		<span>用户登录</span>
			  	</div>
			  	<div class="form">
			  		<form action="jsp/index.html">
				        <input type="text" name="uname" placeholder="用户名">
				        <input type="password" name="password" placeholder="密    码">			      
				      
				        <div class="operator">
				          <input type="submit" value="登录">
				        </div>
				      
				    </form>
			  	</div>
	  		</div>
  		</div>
	</div>

    <div class="footer">
    	<div class="container">
        	<p class="text-muted">Copyright &copy; 2018 DouNiu,Inc. All rights reserved</p>
        </div>
    </div>
    <script src="<%=basePath %>thirds/jquery/jquery-3.2.1.min.js"></script>
    <script src="<%=basePath %>thirds/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>