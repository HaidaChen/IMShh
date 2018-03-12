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
 
</head>
<body>
    <nav class="navbar navbar-default navbar-fixed-top">
  		<div class="container-fluid">
	    
		    <div class="navbar-header">
		      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapse-modules" aria-expanded="false">
		        <span class="sr-only">Toggle navigation</span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		        <span class="icon-bar"></span>
		      </button>
		      <a class="navbar-brand" ><img alt="brand..." src="<%=basePath %>assets/images/hhlogo.png" style="max-width:155px;max-height:51px; margin:-17px;"></a>
                
		    </div>

    		
		    <div class="collapse navbar-collapse" id="collapse-modules">
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
		        <ul class="nav navbar-nav navbar-right">
                    <li class="dropdown">
                        <a href="#" role="button" class="dropdown-toggle" data-toggle="dropdown"> <i class="glyphicon glyphicon-user"></i> Vincent Gabriel <i class="caret"></i>

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
		      
		    </div>
	    </div>
	</nav>
	
    <div class="page-content">
        <div class="row">
            <div class="col-md-2">
                <div class="sidebar" style="display: block; " id="sidebar" >
                </div>
            </div>
            
            <div class="col-md-10" id="content" style="padding: 0; margin: 0" >
                <div class="container-fluid">
                    <iframe id="contentFrame" name="contentFrame"  src="" width="100%" scrolling="no" frameborder="0" ></iframe>
                    
                </div>
            </div>
        </div>
    </div>
	
	<script src="<%=basePath %>thirds/jquery/jquery-3.2.1.min.js"></script>
    <script src="<%=basePath %>thirds/bootstrap/js/bootstrap.min.js"></script>
    <script src="<%=basePath %>assets/js/index.js"></script>
</body>
</html>