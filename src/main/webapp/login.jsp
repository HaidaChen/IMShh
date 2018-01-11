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
<body class="cm-login">
    <div class="text-center" style="padding:90px 0 30px 0;background:#fff;border-bottom:1px solid #ddd">
      <img src="<%=basePath %>assets/images/hhlogo.png" width="260" height="85">
    </div>
    
    <div class="col-sm-6 col-md-4 col-lg-3" style="margin:40px auto; float:none;">
      <form method="post" action="index.jsp">
    <div class="col-xs-12">
          <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon"><i class="glyphicon glyphicon-user"></i></div>
          <input type="text" name="username" class="form-control" placeholder="用户名">
        </div>
          </div>
          <div class="form-group">
        <div class="input-group">
          <div class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></div>
          <input type="password" name="password" class="form-control" placeholder="密码">
        </div>
          </div>
        </div>
    <div class="col-xs-6">
          
    </div><div class="col-xs-6">
          <button type="submit" class="btn btn-block btn-primary">登    录</button>
        </div>
      </form>
    </div>

    <script src="<%=basePath %>thirds/jquery/jquery-3.2.1.min.js"></script>
    <script src="<%=basePath %>thirds/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>