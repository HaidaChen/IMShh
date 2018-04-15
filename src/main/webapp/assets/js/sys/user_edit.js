/**
 * 
 */

$(function(){	
	$("#custform").bootstrapValidator({
		message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
			name: {
				validators: {
					notEmpty: {
	                    message: '公司名称不能为空'
	                }
				}
			}
        }
	});
	
});