insert into T_MENU(id, name, parentId, url, icon)
     values('01', '日常票据', '00', '', 'glyphicon glyphicon-th-list');
insert into T_MENU(id, name, parentId, url, icon)
     values('0101', '订单', '01', 'order/main.do', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('0102', '采购计划', '01', 'purchase/main.do', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('0103', '发货单', '01', 'deliver/main.do', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('0104', '入库单', '01', 'storage/main.do', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('0105', '开票', '01', 'invoice/main.do', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('02', '账务管理', '00', '', 'glyphicon glyphicon-usd');
insert into T_MENU(id, name, parentId, url, icon)
     values('0201', '应收', '02', 'http://localhost:8080/IMShh/jsp/finance/teller/receivable.html', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('0202', '应付', '02', 'http://localhost:8080/IMShh/jsp/finance/teller/payable.html', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('0203', '账户交易', '02', 'http://localhost:8080/IMShh/jsp/finance/account/index.html', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('03', '业务数据', '00', '', 'glyphicon glyphicon-list-alt');  
insert into T_MENU(id, name, parentId, url, icon)
     values('0301', '客户信息', '03', 'cust/main.do', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('0302', '供应商信息', '03', 'supp/main.do', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('0303', '产品信息', '03', 'pdt/main.do', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('0304', '原材料信息', '03', 'mtl/main.do', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('04', '系统管理', '00', '', 'glyphicon glyphicon-cog');  
insert into T_MENU(id, name, parentId, url, icon)
     values('0401', '用户管理', '04', 'user/main.do', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('0402', '角色管理', '04', 'role/main.do', '');