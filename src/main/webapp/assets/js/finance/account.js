/**
 * 
 */
$(function(){	
	
	$("#div_add_pub").click(function(){
		$("#div_public").append(createNewCard("div_public"));
	});

});

var bankLogos = [{}];

var createNewCard = function(){
	var newCard = $("<div class='col-md-3'>");
	var panel = $("<div class='panel panel-default'>");
	var panelHead = $("<div class='panel-heading'></div>");
	var headRow = $("<div class='row'></div>");
	var bankLogoBox = $("<div class='col-xs-2'>");
	var bankLogo = $("<div class='dropdown'></div>");
	var defaultLogo = $("<span class='dropdown-toggle' id='banklogoMenu' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'><i class='fa fa-image fa-2x'></i></span>");
	
	var logoMenu = $("<ul class='dropdown-menu' style='height:160px;overflow:scroll' aria-labelledby='banklogoMenu'>");
	var cardInfo = $("<div class='col-xs-10'>"); 
	var cardBank = $("<div><input type='text' name='bank' class='form-control' placeholder='请输入开户行' required='required'></div>");
	var cardBrachBank = $("<div><input type='text' name='brachBank' class='form-control' placeholder='请输入支行'></div>");
	var cardNo = $("<div><input type='text' name='cardNo' class='form-control' placeholder='请输入卡号' required='required'></div>");
	var cardUser = $("<div><input type='text' name='cardUser' class='form-control' placeholder='请输入用户名' required='required'></div>");
	var panelFooter = $("<div class='panel-footer'></div>");
	var operate = $("<span class='pull-right' style='cursor:pointer' onclick='removeNewCard(this)'><i class='glyphicon glyphicon-remove'></i>取消</span> <span class='pull-right' style='cursor:pointer' onclick='saveCard(this)'><i class='glyphicon glyphicon glyphicon-ok'></i>保存</span><div class='clearfix'></div>");
	
	newCard.append(panel);
	panel.append(panelHead);
	panel.append(panelFooter);
	panelHead.append(headRow);
	headRow.append(bankLogoBox);
	headRow.append(cardInfo);
	cardInfo.append(cardBank);
	cardInfo.append(cardBrachBank);
	cardInfo.append(cardNo);
	cardInfo.append(cardUser);
	bankLogoBox.append(bankLogo);
	bankLogo.append(defaultLogo);
	bankLogo.append(logoMenu);
	panelFooter.append(operate);	
	
	appendLogoOption(logoMenu);
	
	return newCard;
};

var choseLogo = function(obj){
	obj.parent().prev().html("<img alt='' src='" + obj.find("img").attr("src") + "'>");
}

var appendLogoOption = function(obj){
	var oul = $(obj);
	$.getJSON("../../../assets/json/bankLogo.json", function (data){
		$.each(data, function(index, value){
			var oli = $("<li><a><img alt='' src='../../../assets/images/bank/" + value.icon + ".ico'>" + value.label + "</a></li>");
			oli.click(function(){choseLogo(oli)});
			oul.append(oli);
		});
	});
}

var saveCard = function(obj){
	var card = $(obj).parents("div[class=col-md-3]");
	var panel = card.children();
	var panelCardInfo = card.find("div[class=col-xs-10]");
	var cardBank = panelCardInfo.find("input[name=bank]").val();
	var brachBank = panelCardInfo.find("input[name=brachBank]").val();
	var cardNo = panelCardInfo.find("input[name=cardNo]").val();
	var cardUser = panelCardInfo.find("input[name=cardUser]").val();
	if ($.trim(cardBank) == ''){
		alert("开户行信息不能为空");
		panelCardInfo.find("input[name=bank]").focus();
		return;
	}
	
	if ($.trim(cardNo) == ''){
		alert("卡号不能为空");
		panelCardInfo.find("input[name=cardNo]").focus();
		return;
	}
	
	if ($.trim(cardUser) == ''){
		alert("银行卡用户不能为空");
		panelCardInfo.find("input[name=cardUser]").focus();
		return;
	}
	
	var cardNoMask = cardNo.substr(0, 4) + " **** " + cardNo.substr(cardNo.length - 4);
		
	panel.attr("class", "panel panel-success");
	panelCardInfo.attr("class", "col-xs-9 col-xs-offset-1");
	
	panelCardInfo.html("<div class='lager'>" + cardBank + "</div><div>" + cardNoMask + "</div>");
	
}

var removeNewCard = function(obj){
	$(obj).parents("div[class=col-md-3]").remove();
}

var CreditCard = function(){
	var cardData = {};
	
	var root = $("<div class='col-md-3'>");
	var panel = $("<div class='panel panel-default'>");
	var panelHead = $("<div class='panel-heading'>");
	var panelFooter = $("<div class='panel-footer'>");
	
	var cardInfoArea = $("<div class='row'>");
	var logoArea = $("<div class='col-xs-2'>");
	var bankInfoArea = $("<div class='col-xs-9 col-xs-offset-1'>");
	
	var oOpt_edit = $("<span class='pull-right'><i class='glyphicon glyphicon-edit'></i></span>");
	var oOpt_detail = $("<span class='pull-right'><i class='glyphicon glyphicon-eye-open'></i></span>");
	var oOpt_save = $("<span class='pull-right'><i class='glyphicon glyphicon-floppy-saved'></i></span>");
	var oOpt_remove = $("<span class='pull-right'><i class='glyphicon glyphicon-remove-sign'></i></span>");
	var oOpt_cancel = $("<span class='pull-right'><i class='glyphicon glyphicon-share'></i></span>");
	
	this.createCard = function(container, cardInfo){
		init(container, cardInfo);		
		
		if (cardData.cardNo){
			var cardNoMask = cardData.cardNo.substr(0, 4) + " **** " + cardData.cardNo.substr(cardNo.length - 4);
			
			var oCardLogo = $("<img alt='找不到Logo' src='../../../assets/images/bank/" + cardData.bankLogo + ".ico'>");
			var oBankName = $("<div class='lager'>" + cardData.bankName + "</div>");
			var oCardNo = $("<div>" + carNoMask + "</div>");
			
			
			
			logoArea.append(oCardLogo);
			bankInfoArea.append(oBankName);
			bankInfoArea.append(oCardNo);
		}
		
		
	}	
	
	var init = function(container, cardInfo){
		container.append(root);
		root.append(panel);
		panel.append(panelHead);
		panel.append(panelFooter);
		panelHead.append(cardInfoArea);
		cardInfoArea.append(logoArea);
		cardInfoArea.append(bankInfoArea);	
		
		if (cardInfo){
			cardData = cardInfo;			
		}
		
		
		oOpt_edit.click(function(){
			editCard();
		});
		
		oOpt_detail.click(function(){
			
		});
		
		oOpt_save.click(function(){
			
		});
		
		oOpt_remove.click(function(){
			
		});
		
		oOpt_cancel.click(function(){
			
		});
	}
	
	var viewCard = function(){
		var cardNoMask = cardData.cardNo.substr(0, 4) + " **** " + cardData.cardNo.substr(cardNo.length - 4);
		
		var oCardLogo = $("<img alt='找不到Logo' src='../../../assets/images/bank/" + cardData.bankLogo + ".ico'>");
		var oBankName = $("<div class='lager'>" + cardData.bank + "</div>");
		var oCardNo = $("<div>" + carNoMask + "</div>");
				
		clearCard();
		
		logoArea.append(oCardLogo);
		bankInfoArea.append(oBankName);
		bankInfoArea.append(oCardNo);
		
		panelFooter.append(oOpt_edit);
		panelFooter.append(oOpt_detail);
	}
	
	var editCard = function(){
		var bankLogo = $("<div class='dropdown'></div>");
		var defaultLogo = $("<span class='dropdown-toggle' id='banklogoMenu' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'><i class='fa fa-image fa-2x'></i></span>");
		
		var logoMenu = $("<ul class='dropdown-menu' style='height:160px;overflow:scroll' aria-labelledby='banklogoMenu'>");
		
		var cardNoMask = cardData.cardNo.substr(0, 4) + " **** " + cardData.cardNo.substr(cardNo.length - 4);
		
		var oLogoMenu = $("<div class='dropdown'>");
		var oLogoMenuBox = $("<span class='dropdown-toggle' id='banklogoMenu' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>");
		var oLogo =  $("<img alt='找不到Logo' src='../../../assets/images/bank/" + cardData.bankLogo + ".ico'>");
		
		var oCardBank = $("<div><input type='text' name='bank' class='form-control' placeholder='请输入开户行' value='" + cardData.bank + "' required='required'></div>");
		var oCardBrachBank = $("<div><input type='text' name='brachBank' value='" + cardData.brachBank + "' class='form-control' placeholder='请输入支行'></div>");
		var oCardNo = $("<div><input type='text' name='cardNo' value='" + cardData.cardNo + "' class='form-control' placeholder='请输入卡号' required='required'></div>");
		var oCardUser = $("<div><input type='text' name='cardUser' value='" + cardData.cardUser + "' class='form-control' placeholder='请输入用户名' required='required'></div>");
				
		clearCard();
		
		oLogoMenu.append(oLogoMenuBox);
		oLogoMenuBox.append(oLogo);		
		loadLogoOptions(oLogo);
		
		logoArea.append(oLogoMenu);
		bankInfoArea.attr("class", "col-xs-10");
		bankInfoArea.append(oCardBank);
		bankInfoArea.append(oCardBrachBank);
		bankInfoArea.append(oCardNo);
		bankInfoArea.append(oCardUser);
		
		panelFooter.append(oOpt_save);
		panelFooter.append(oOpt_cancel);
		if (cardData.No)
			panelFooter.append(oOpt_remove);
		
		
	}
	
	var loadLogoOptions = function(obj){
		var oul = $(obj);
		$.getJSON("../../../assets/json/bankLogo.json", function (data){
			$.each(data, function(index, value){
				var oli = $("<li><a><img alt='' src='../../../assets/images/bank/" + value.icon + ".ico'>" + value.label + "</a></li>");
				oli.click(function(){
					oul.prev().html("<img alt='' src='" + oli.attr("src") + "'>");
				});
				oul.append(oli);
			});
		});
	}
	
	var clearCard = function(){
		logoArea.html("");
		bankInfoArea.html("");
		panelFooter.html("");
		bankInfoArea.attr("class", "col-xs-9 col-xs-offset-1");
	}
};
