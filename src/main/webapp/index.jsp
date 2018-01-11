<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="header.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title>华辉烟花信息管理系统</title>
	
	<link href="<%=basePath %>thirds/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<link href="<%=basePath %>assets/css/index.css" rel="stylesheet">
  <%-- <link href="<%=basePath %>assets/css/style.css" rel="stylesheet">
	
	<link href="<%=basePath %>assets/css/accordion.css" rel="stylesheet"> --%>
</head>
<body>
	<nav class="navbar navbar-fixed-top">
        <div class="navbar-inner">
            <div class="container-fluid">
                <button class="navbar-toggle collapsed" data-toggle="collapse" data-target=".nav-collapse"> 
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            
                <a class="brand" href="#">华辉烟花</a>
                <div class="nav-collapse collapse">
                    <ul class="nav pull-right">
                        <li class="dropdown">
                            <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"> <i class="icon-user"></i> Vincent Gabriel <i class="caret"></i>
    
                            </a>
                            <ul class="dropdown-menu">
                                <li>
                                    <a tabindex="-1" href="#">Profile</a>
                                </li>
                                <li class="divider"></li>
                                <li>
                                    <a tabindex="-1" href="login.html">Logout</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul id="navmenu" class="nav navbar-nav">
                        <li class="active" data-tip="finance"><a>财务</a></li>
                        <li><a>仓管</a></li>
                        <li><a>人事</a></li>
                        <li data-tip="busData"><a>业务数据</a></li>
                        <li>
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">系统管理 <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a>系统用户</a></li>
                                <li><a>权限管理</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </nav>
        <!-- <div class="container-fluid"> -->
            
			<!-- <div class="navbar-header">
				<a class="navbar-brand">华辉烟花</a>
			</div>
			<ul class="nav navbar-nav navbar-right">
            	<li><a><span class="glyphicon glyphicon-off"></span>退出</a></li>
            </ul>
			<ul id="navmenu" class="nav navbar-nav">
				<li class="active" data-tip="finance"><a>财务</a></li>
				<li><a>仓管</a></li>
				<li><a>人事</a></li>
				<li data-tip="busData"><a>业务数据</a></li>
				<li>
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">系统管理 <span class="caret"></span></a>
					<ul class="dropdown-menu">
						<li><a>系统用户</a></li>
						<li><a>权限管理</a></li>
					</ul>
				</li>
			</ul> -->
		<!-- </div> -->
	</div>
	
	<!-- 
	<iframe id="contentFrame" name="contentFrame" class="col-md-10 col-md-offset-2 col-xs-9 col-xs-offset-3" src="" width="100%" height="100%" scrolling="auto" frameborder="0" ></iframe>
	 -->
	<script src="<%=basePath %>thirds/jquery/jquery-3.2.1.min.js"></script>
    <script src="<%=basePath %>thirds/bootstrap/js/bootstrap.min.js"></script>
    <%-- <script src="<%=basePath %>assets/js/accordion.js"></script>
    <script src="<%=basePath %>assets/js/index.js"></script> --%>
</body>
</html>