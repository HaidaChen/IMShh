<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/header.jsp" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Role Info Overview</title>
	
	<link href="<%=basePath %>/thirds/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="<%=basePath %>/thirds/jstree/themes/default/style.min.css" rel="stylesheet">
	<link href="<%=basePath %>/assets/css/style.css" rel="stylesheet">
</head>
<body>
    <div class="well title">系统角色管理</div>
    
    <div>
    	<div class="row vertical-spacing">
    		<div class="col-md-3">
    			<div class="row">
    			    <div class="col-md-12 pull-right">
    			    	<button type="button" class="btn btn-default" data-toggle="modal" data-target="#roleEditModal">
    			    		<i class="glyphicon glyphicon-plus"></i>
    			    	</button>
    			    	<button id="btn_delete" type="button" class="btn btn-default">
    			    		<i class="glyphicon glyphicon-minus"></i>
    			    	</button>
    			    </div>    			    
    			</div>
    			<div class="row">
    				<div class="col-md-12">
    					<select id="select_role" size="10" class="form-control">
    						<c:forEach var="role" items="${roles}">
    							<option value="${role.id}" remark="${role.remark}">${role.name}</option>
    						</c:forEach>
    					</select>
    				</div>
    			</div>
    		</div>
    		
    		<div id="sideAuthority" class="col-md-7" style="display: none;">
    			<div class="row">
    				<div class="col-md-12">
    					<p id="remark" class="bg-info" style="padding: 8px"></p>
    				</div>
    			</div>
    			<div class="row vertical-spacing">
    				<div class="col-md-12">
    					<button id="btn_save_authortiy"><i class="glyphicon glyphicon-floppy-saved"></i>保存</button>
    				</div>
    			</div>
    			<div class="row">
    				<div class="col-md-12">
    					<div id="authorityTree"></div>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    
    <div class="modal fade" id="roleEditModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">  
	    <div class="modal-dialog" role="document">  
	        <div class="modal-content">  
	            <div class="modal-header">  
	                <button type="button" class="close" data-dismiss="modal" aria-label="Close">  
	                    <span aria-hidden="true">×</span>  
	                </button>  
	                <h4 class="modal-title" id="myModalLabel">新的角色</h4>  
	            </div>  
	            <div class="modal-body">  
	                <form id="formRole" method="post" role="form" class="form-horizontal" action="save.do">
	                    <div class="form-group" style="margin-top:15px">
	                        <label class="control-label col-sm-3" for="txt_name">角色名称</label>
	                        <div class="col-sm-8">
	                            <input type="text" class="form-control" id="txt_name" name="name" required="required">
	                        </div>	                                                
	                    </div>
	                    <div class="form-group" style="margin-top:15px">
	                        <label class="control-label col-sm-3" for="txt_remark">备注</label>
	                        <div class="col-sm-8">
	                        	<textarea rows="4" class="form-control" id="txt_remark" name="remark"></textarea>
	                        </div>	                                                
	                    </div>  	                    
	                </form>  
	            </div>  
	            <div class="modal-footer">
	                <button id="btn_save" type="button" class="btn btn-primary">保存</button>  
	                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>  
	            </div>  
	        </div>  
	    </div>  
	</div>
    
	<script src="<%=basePath %>thirds/jquery/jquery-3.2.1.min.js"></script>
    <script src="<%=basePath %>thirds/jquery/jquery.form.js"></script>
    <script src="<%=basePath %>thirds/jstree/jstree.min.js"></script>
    <script src="<%=basePath %>thirds/bootstrap/js/bootstrap.min.js"></script>
    <script src="<%=basePath %>assets/js/iframeAdjuster.js"></script>
    <script src="<%=basePath %>assets/js/sys/role_index.js"></script>    
</body>
</html>