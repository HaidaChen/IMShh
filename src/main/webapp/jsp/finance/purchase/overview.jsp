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
</head>
<body>
	<div class="container-fluid">
		<div class="row vertical-spacing">
	    	<div class="well title">采购计划列表</div>
	    </div>
	    <div id="toolbar" class="row vertical-spacing">
	    	<div class="btn-group col-sm-6" role="group">
	    		<button type="button" class="btn btn-default" id="btn_add">
	    			<i class="glyphicon glyphicon-plus"></i>新增
	    		</button>
	    		<button type="button" class="btn btn-default" id="btn_update">
	    			<i class="glyphicon glyphicon-pencil"></i>修改
	    		</button>    		
	    		<button type="button" class="btn btn-default" id="btn_delete">
	    			<i class="glyphicon glyphicon-remove"></i>删除
	    		</button>
	    	</div>
	    	
	    	<div class="col-sm-4 col-sm-offset-2 pull-right">
	    		<div class="input-group "  id="block_search">
		    	    <input type="text" id="txt_search" name="condition" class="form-control" placeholder="采购计划编号">
		    	    <span class="input-group-addon" id="span_search">
		    	        <i class="glyphicon glyphicon-search"></i>
		    	    </span>
		    	    <span class="input-group-addon" id="span_search_more" data-toggle="modal" data-target="#grandQueryModal">
		    	        <i class="glyphicon glyphicon-zoom-in"></i>
		    	    </span>
		    	    <span></span>
		    	    <span class="input-group-addon" id="span_search_more">
		    	        <div class="dropdown">
						  <!-- <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
						    <span class="caret"></span>
						  </button> -->
						  <i class="glyphicon glyphicon-list dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true"></i>
						  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
						    <li id="li_opt_deliver"><a href="#">收货</a></li>
						    <li id="li_opt_payment"><a href="#">付款</a></li>						    
						  </ul>
						</div>
		    	    </span>
		    	    
		    	</div>
	    	</div>
	    	
		</div>    
	    <div class="row vertical-spacing">
	    	<table id="tb_purchase" ></table>
	    </div>
	</div>
    <div class="modal fade" id="grandQueryModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">  
	    <div class="modal-dialog" role="document">  
	        <div class="modal-content">  
	            <div class="modal-header">  
	                <button type="button" class="close" data-dismiss="modal" aria-label="Close">  
	                    <span aria-hidden="true">×</span>  
	                </button>  
	                <h4 class="modal-title" id="myModalLabel">查询条件</h4>  
	            </div>  
	            <div class="modal-body">  
	                <form id="formSearch" class="form-horizontal">
	                    <div class="form-group" style="margin-top:15px">
	                        <label class="control-label col-sm-3" for="txt_search_identify">采购计划编号</label>
	                        <div class="col-sm-8">
	                            <input type="text" class="form-control" id="txt_search_identify" name="identify">
	                        </div>	                                                
	                    </div>
	                    <div class="form-group" style="margin-top:15px">
 							<label class="control-label col-sm-3" for="txt_search_orderIdentify">关联订单编号</label>
	                        <div class="col-sm-8">
	                            <input type="text" class="form-control" id="txt_search_orderIdentify" name="orderIdentify">
	                        </div>
	                    </div>
	                    <div class="form-group" style="margin-top:15px">
 							<label class="control-label col-sm-3" for="txt_search_planStatus">采购进展</label>
	                        <div class="col-sm-8">
	                            <select id="txt_search_planStatus" name="planStatus" class="form-control">
	                            	<option value="0">----请选择采购进展----</option>
			                        <option value="1">待收货</option>
			                        <option value="2">待付款</option>
			                        <option value="3">已完成</option>
	                            </select>
	                        </div>
	                    </div>	                    
	                    <div class="form-group" style="margin-top:15px">
	                    	<label class="control-label col-sm-3" for="txt_search_startDate">开始日期</label>
	                        <div class="col-sm-8">
	                            <input type="text" class="form-control selectData" id="txt_search_startDate" name="startDate">
	                        </div>
	                    </div>
	                    <div class="form-group" style="margin-top:15px">
	                    	<label class="control-label col-sm-3" for="txt_search_endDate">结束日期</label>
	                        <div class="col-sm-8">
	                            <input type="text" class="form-control selectData" id="txt_search_endDate" name="endDate">
	                        </div> 
	                    </div>
	                </form>  
	            </div>  
	            <div class="modal-footer">  
	                
	                <button id="btn_grade_query" type="button" class="btn btn-primary">查询</button>  
	                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>  
	            </div>  
	        </div>  
	    </div> 
	    	    
	</div>  
    
    
    
	<script src="<%=basePath %>thirds/jquery/jquery-3.2.1.min.js"></script>
    <script src="<%=basePath %>thirds/jquery/jquery.form.js"></script>
    <script src="<%=basePath %>thirds/bootstrap/js/bootstrap.min.js"></script>
    <script src="<%=basePath %>vendors/bootstrap-table/bootstrap-table.js"></script>
    <script src="<%=basePath %>vendors/bootstrap-table/local/bootstrap-table-zh-CN.js"></script>

    <script src="<%=basePath %>vendors/datepicker/bootstrap-datepicker.js"></script>
    <script src="<%=basePath %>assets/js/ins_datepicker.js"></script>
    <script src="<%=basePath %>assets/js/importModal.js"></script>
    <script src="<%=basePath %>assets/js/iframeAdjuster.js"></script>
    <script src="<%=basePath %>assets/js/table_operation.js"></script>
    <script src="<%=basePath %>assets/js/finance/purchase_index.js"></script>
</body>
</html>