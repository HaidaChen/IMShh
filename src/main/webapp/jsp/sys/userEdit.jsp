<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/header.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>User Info edit</title>
    
    <link href="<%=basePath %>/thirds/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="<%=basePath %>/thirds/bootstrapvalidator/css/bootstrapValidator.min.css" rel="stylesheet">
    <link href="<%=basePath %>/assets/css/style.css" rel="stylesheet">
</head>
<body>
    <div class="block">
        
        <form id="userform" class="form-horizontal" method="post" role="form" style="text-align:center;" action="save.do">
            <input type="hidden" name="id" value="${user.id }">
            <div class="modal-header">
                <h4 class="modal-title" style="color: black">系统用户信息</h4>
            </div>
            
            <div class="modal-body">
              <div class="form-group">
                <label for="userName" class="col-sm-2 control-label">用户名</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="userName" value="${user.userName }" placeholder="请输入用户名" required="required">
                </div>
              </div>              
              <div class="form-group">
                <label for="password" class="col-sm-2 control-label">密码</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="password" value="${user.password }" placeholder="请输入密码">
                </div>
              </div>
              
              <div class="form-group">
                <label for="fullName" class="col-sm-2 control-label">姓名</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="fullName" value="${user.fullName }" placeholder="请输入姓名">
                </div>
              </div>
              <div class="form-group">
                <label for="email" class="col-sm-2 control-label">eMail</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" name="email" value="${user.email }" placeholder="请输入邮箱">
                </div>
              </div>
              <div class="form-group">
                  <label for="weichat" class="col-sm-2 control-label">微信号</label>
                  <div class="col-sm-10">
                      <input type="text" class="form-control" name="weichat" value="${user.weichat }" placeholder="请输入微信号">
                  </div>
              </div>
              <div class="form-group">
                  <label for="weichat" class="col-sm-2 control-label">所属角色</label>
                  <div class="col-sm-10">
                      <div class="row">
                      	  <div class="col-sm-5">
                      	  	<select id="slt_userRole" multiple="multiple" class="form-control" name="roles" size="5">
                      	  		<c:forEach var="role" items="${userRoles}">
                      	  		    <option value="${role.id}">${role.name}</option>
                      	  		</c:forEach>
                      	  	</select>
                      	  </div>
                      	  <div class="col-sm-1">
                      	    <div class="row">
                      	    	<span><a href="javascript:void(0);" onclick="removeRole()"><i class="glyphicon glyphicon-chevron-right"></i></a></span>
                      	    </div>
                      	    <div class="row">
                      	    	<span><a href="javascript:void(0);" onclick="removeAllRoles()"><i class="glyphicon glyphicon-forward"></i></a></span>
                      	    </div>
                      	    <div class="row">
                      	    	<span><a href="javascript:void(0);" onclick="addRole()"><i class="glyphicon glyphicon-backward"></i></a></span>
                      	    </div>
                      	    <div class="row">
                      	    	<span><a href="javascript:void(0);" onclick="addAllRole()"><i class="glyphicon glyphicon-chevron-left"></i></a></span>
                      	    </div>
                      	  </div>
                      	  <div class="col-sm-5">
                      	    <select id="slt_role" multiple="multiple" class="form-control" name="choiceRoles" size="5">
                      	    	<c:forEach var="role" items="${roles}">
                      	  		    <option value="${role.id}">${role.name}</option>
                      	  		</c:forEach>
                      	  	</select>
                      	  </div>
                      </div>
                  </div>
              </div>
            </div>
            <div class="modal-footer">
              <button id="btn_save" type="submit" class="btn btn-default btn-sm" >
                <span class="glyphicon glyphicon-check"></span>保存
              </button> 
              <button type="button" class="btn btn-default btn-sm" data-dismiss="modal">
                <span class="glyphicon glyphicon-share"></span>关闭
              </button>
            </div>
        </form>  
    </div>
    <script src="<%=basePath %>thirds/jquery/jquery-3.2.1.min.js"></script>
    <script src="<%=basePath %>thirds/bootstrap/js/bootstrap.min.js"></script>
    <script src="<%=basePath %>thirds/bootstrapvalidator/js/bootstrapValidator.min.js"></script>
    <script src="<%=basePath %>assets/js/sys/user_edit.js"></script>
</body>
</html>