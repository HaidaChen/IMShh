var baseURL = "";

$(function(){	
	getBaseURL();
	loadAccounts();
	
	$("#div_add_pub").click(function(){
		var card = new CreditCard();
		card.createCard($("#div_public"));
	});
	$("#div_add_pri").click(function(){
		var card = new CreditCard();
		card.createCard($("#div_private"));
	});
});

var getBaseURL = function(){
	var fullPath = window.location.pathname;
	baseURL = fullPath.substr(0, fullPath.indexOf("IMShh") + 6);
}

var loadAccounts = function(){
	$.ajax({
		url: baseURL+"account/query.do",
		success: function(result){
			var accounts = result;
			
			$.each(accounts, function(index, account){
				account.bankLogo
				var card = new CreditCard();
				if (account.accountType == 1){
					card.createCard($("#div_public"), account);
				}
				
				if (account.accountType == 2){
					card.createCard($("#div_private"), account);
				}
			});
		}
	});
}

var CreditCard = function(){
	var cardData = {};
	
	var cardRoot = $("<div class='col-md-3'>");
	var panel = $("<div class='panel panel-default'>");
	var panelHead = $("<div class='panel-heading'>");
	var panelFooter = $("<div class='panel-footer'>");
	
	var cardInfoArea = $("<div class='row'>");
	var logoArea = $("<div class='col-xs-2'>");
	var bankInfoArea = $("<div class='col-xs-9 col-xs-offset-1'>");
	
	this.createCard = function(container, cardInfo){
		init(container, cardInfo);		
		
		if (cardData.accountNo){
			viewCard();
		}else{
			editCard();
		}
	}	
	
	var init = function(container, cardInfo){
		container.append(cardRoot);
		cardRoot.append(panel);
		panel.append(panelHead);
		panel.append(panelFooter);
		panelHead.append(cardInfoArea);
		cardInfoArea.append(logoArea);
		cardInfoArea.append(bankInfoArea);	
		
		if (container.attr("id") == "div_public"){
			cardData.accountType = 1;
		}else{
			cardData.accountType = 2;
		}
		
		if (cardInfo){
			cardData = cardInfo;
		}
	}
	
	var createOptEdit = function(){
		var oOpt_edit = $("<span class='pull-right tool'><a><i class='glyphicon glyphicon-edit'></i></a></span>");
		oOpt_edit.click(function(){
			editCard();
		});
		return oOpt_edit;
	}
	
	var createOptDetail = function(){
		var oOpt_detail = $("<span class='pull-right tool'><a><i class='glyphicon glyphicon-eye-open'></i></a></span>");
		oOpt_detail.click(function(){
			$(window.parent.document).find("#contentFrame").attr("src", baseURL + "transaction/main.do?accountId=" + cardData.id + "&accountNo=" + cardData.accountNo + "&bank=" + cardData.bank);
		});
		return oOpt_detail;
	}
	
	var createOptSave = function(){
		var oOpt_save = $("<span class='pull-right tool'><a><i class='glyphicon glyphicon-floppy-saved'></i></a></span>");
		oOpt_save.click(function(){
			saveCardInfo();
		});
		return oOpt_save;
	}
	
	var createOptRemove = function(){
		var oOpt_remove = $("<span class='pull-right tool'><a><i class='glyphicon glyphicon-remove-sign'></i></a></span>");
		oOpt_remove.click(function(){
			bootbox.confirm("确定要删除银行卡吗？", function(){
				$.ajax({
					url: baseURL+"account/delete.do?id=" + cardData.id,
					success: function(result){
						cardRoot.remove();
					}
				});
				
			});
		});
		return oOpt_remove;
	}
	
	var createOptCancel = function(){
		var oOpt_cancel = $("<span class='pull-right tool'><a><i class='glyphicon glyphicon-share'></i></a></span>");
		oOpt_cancel.click(function(){
			if (cardData.accountNo){
				viewCard();
			}else{
				cardRoot.remove();
			}
		});
		return oOpt_cancel;
	}
	
	var viewCard = function(){
		var bankLogo = "";
		var cardBank = "";
		var cardNoMask = "";
		
		if(cardData.accountNo){
			bankLogo = cardData.bankLogo;
			cardBank = cardData.bank;
			cardNoMask = cardData.accountNo.substr(0, 4) + " **** " + cardData.accountNo.substr(cardData.accountNo.length - 4);
		}
		
		var oCardLogo = $("<img alt='找不到Logo' src='../../../assets/images/bank/" + bankLogo + ".ico'>");
		var oBankName = $("<div class='lager'>" + cardBank + "</div>");
		var oCardNo = $("<div>" + cardNoMask + "</div>");
				
		clearCard();
		
		logoArea.append(oCardLogo);
		bankInfoArea.append(oBankName);
		bankInfoArea.append(oCardNo);
		
		panelFooter.append(createOptEdit());
		panelFooter.append(createOptDetail());
		panel.attr("class", "panel panel-success");
		clearFix();
	}
	
	var editCard = function(){
		var cardBank = "";
		var cardBrachBank = "";
		var cardNo = "";
		var cardUser = "";
		if(cardData.accountNo){
			cardBank = cardData.bank;
			cardBrachBank = cardData.brachBank;
			cardNo = cardData.accountNo;
			cardUser = cardData.accountUser;
		}
		
		var oLogoMenu = $("<div class='dropdown'>");
		var oLogoMenuBox = $("<span class='dropdown-toggle' id='banklogoMenu' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>");
		var oLogo =  $("<img alt='Logo' src='../../../assets/images/bank/" + cardData.bankLogo + ".ico'>");
		var oLogoOptions = $("<ul class='dropdown-menu' style='height:160px;overflow:scroll' aria-labelledby='banklogoMenu'>");
			
		var oCardBank = $("<div><input type='text' name='bank' class='form-control' placeholder='请输入开户行' value='" + cardBank + "' required='required'></div>");
		var oCardBrachBank = $("<div><input type='text' name='brachBank' value='" + cardBrachBank + "' class='form-control' placeholder='请输入支行'></div>");
		var oCardNo = $("<div><input type='text' name='accountNo' value='" + cardNo + "' class='form-control' placeholder='请输入卡号' required='required'></div>");
		var oCardUser = $("<div><input type='text' name='accountUser' value='" + cardUser + "' class='form-control' placeholder='请输入用户名' required='required'></div>");
				
		clearCard();
		
		oLogoMenu.append(oLogoMenuBox);
		oLogoMenu.append(oLogoOptions);
		oLogoMenuBox.append(oLogo);		
		loadLogoOptions(oLogoOptions);
		
		logoArea.append(oLogoMenu);
		bankInfoArea.attr("class", "col-xs-10");
		bankInfoArea.append(oCardBank);
		bankInfoArea.append(oCardBrachBank);
		bankInfoArea.append(oCardNo);
		bankInfoArea.append(oCardUser);		
		
		panelFooter.append(createOptCancel());
		if (cardData.id)
			panelFooter.append(createOptRemove());
		panelFooter.append(createOptSave());
		
		clearFix();
	}
	
	var loadLogoOptions = function(oul){
		
		$.getJSON("../../../assets/json/bankLogo.json", function (data){
			$.each(data, function(index, value){
				var oli = $("<li><a><img alt='' src='../../../assets/images/bank/" + value.icon + ".ico'>" + value.label + "</a></li>");
				oli.click(function(){
					oul.prev().html("<img alt='' src='../../../assets/images/bank/" + value.icon + ".ico'>");
					cardData.bankLogo = value.icon;
				});
				oul.append(oli);
			});
		});
	}
	
	var saveCardInfo = function(){
		var cardBank = bankInfoArea.find("input[name=bank]").val();
		var brachBank = bankInfoArea.find("input[name=brachBank]").val();
		var cardNo = bankInfoArea.find("input[name=accountNo]").val();
		var cardUser = bankInfoArea.find("input[name=accountUser]").val();
		if ($.trim(cardBank) == ''){
			alert("开户行信息不能为空");
			panelCardInfo.find("input[name=bank]").focus();
			return;
		}
		
		if ($.trim(cardNo) == ''){
			alert("卡号不能为空");
			panelCardInfo.find("input[name=accountNo]").focus();
			return;
		}
		
		if ($.trim(cardUser) == ''){
			alert("银行卡用户不能为空");
			panelCardInfo.find("input[name=accountUser]").focus();
			return;
		}		
		cardData.bank = cardBank;
		cardData.brachBank = brachBank;
		cardData.accountNo = cardNo;
		cardData.accountUser = cardUser;
		
		$.ajax({
			url: baseURL+"account/save.do",
			type: "POST",
			data: cardData,
			success: function(result){
				cardData.id = result;
				viewCard();
			}
		});		
	}
	
	var clearCard = function(){
		logoArea.html("");
		bankInfoArea.html("");
		panelFooter.html("");
		bankInfoArea.attr("class", "col-xs-9 col-xs-offset-1");
	}
	
	var clearFix = function(){
		panelFooter.append($("<div class='clearfix'></div>"));
	}
};
