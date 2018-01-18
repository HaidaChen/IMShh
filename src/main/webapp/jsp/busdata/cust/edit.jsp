<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@include file="/header.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Customer Info edit</title>
    
    <link href="<%=basePath %>/thirds/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <link href="<%=basePath %>/assets/css/style.css" rel="stylesheet">
</head>
<body>
    <div class="block">
        
        <form class="form-horizontal" method="post" role="form" style="text-align:center;" action="save.do">
            <input type="hidden" name="id" value="">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <h4 class="modal-title" style="color: black">客户信息</h4>
            </div>
            
            <div class="modal-body">
              <div class="form-group">
                <label for="name" class="col-sm-2 control-label">公司名称</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="name" value="" placeholder="请输入名字">
                </div>
              </div>              
              <div class="form-group">
                <label for="lastname" class="col-sm-2 control-label">地址</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="mobile" value="" placeholder="请输入电话">
                </div>
              </div>
              
              <div class="form-group">
                <label for="lastname" class="col-sm-2 control-label">联系电话</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="address" value="" placeholder="请输入住址">
                </div>
              </div>
              <div class="form-group">
                <label for="lastname" class="col-sm-2 control-label">Emai</label>
                <div class="col-sm-10">
                  
                    <select class="form-control" name="prospective" >
                      <option value="0">普通在客户</option>
                      <option value="1">潜在客户</option>
                      <option value="2">网单客户</option>
                    </select>                
                  
                </div>
              </div>
              <div class="form-group">
                  <label for="dtp_input2" class="col-sm-2 control-label">传真</label>
                  <div class="input-group date form_date col-sm-10" data-date="" data-date-format="dd MM yyyy" data-link-field="dtp_input2" data-link-format="yyyy-mm-dd" style="padding-left: 15px; padding-right: 15px">
                      <span style="position: relative; z-index: 1000001;">
                          <input class="form-control" id="createDate" name="createDate" type="text" value="" readonly>
                      </span>
                      <span class="input-group-addon" style="position: relative; z-index: 1000001;">
                          <span class="glyphicon glyphicon-calendar"></span>
                      </span>
                  </div>
                  <input type="hidden" id="dtp_input2" value="" /><br/>
              </div>
              <div class="form-group">
                <label for="lastname" class="col-sm-2 control-label">联系人</label>
                <div class="col-sm-10">
                  <select class="form-control" name="weichat">
                      <option value="0">未添加</option>
                      <option value="1">已添加</option>
                    </select>
                </div>
              </div>
              <div class="form-group">
                <label for="lastname" class="col-sm-2 control-label">备注</label>
                <div class="col-sm-10">
                  <input type="text" class="form-control" name="remark" value="" placeholder="备注" >
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button id="btn_save" type="submit" class="btn btn-default btn-sm">
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
</body>
</html>