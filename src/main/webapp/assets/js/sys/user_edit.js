/**
 * 
 */

$(function(){	
	$("#userform").bootstrapValidator({
		message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
			userName: {
				validators: {
					notEmpty: {
	                    message: '用户名不能为空'
	                },
        			remote: {
        				message: '用户名已经存在，请更换',
        				url: 'existUser.do',
        				type : 'POST',
        				data : {id : $('input[name=id]').val(), userName: $('input[name=userName]').val()},
        				delay: 1000
        			}
				}
			},
			password: {
				validators: {
					notEmpty: {
						message: '密码不能为空'
					}
				}
			},
			fullName: {
				validators: {
					notEmpty: {
						message: '用户姓名不能为空'
					}
				}
			}
        }
	});
	
});

function removeRole(){
	var selecteds = $("#slt_userRole option:selected");
	remove(selecteds);
}

function removeAllRoles(){
	remove($("#slt_userRole").children());
}

function remove(roleOpts){
	var rolePool = $("#slt_role");
	roleOpts.each(function(){
		rolePool.append($(this));
		$(this).remove();
	});
}

function addRole(){
	var selecteds = $("#slt_role option:selected");
	add(selecteds);
}

function addAllRole(){
	add($("#slt_role").children());
}

function add(roleOpts){
	var rolePool = $("#slt_userRole");
	roleOpts.each(function(){
		rolePool.append($(this));
		$(this).remove();
	});
}