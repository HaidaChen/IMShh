insert into T_USER(id, username, password, fullname, email, weichat, status, modifyDate)
      value('01', 'admin', 'admin', 'admin', '', '', '1', now());


insert into T_MENU(id, name, parentId, url, icon)
     values('01', '�ճ�Ʊ��', '0', '', 'glyphicon glyphicon-th-list');
insert into T_MENU(id, name, parentId, url, icon)
     values('0101', '����', '01', 'order/main.do', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('0102', '�ɹ��ƻ�', '01', 'purchase/main.do', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('0103', '������', '01', 'deliver/main.do', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('0104', '��ⵥ', '01', 'storage/main.do', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('0105', '��Ʊ', '01', 'invoice/main.do', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('02', '�������', '0', '', 'glyphicon glyphicon-usd');
insert into T_MENU(id, name, parentId, url, icon)
     values('0201', 'Ӧ��', '02', 'http://localhost:8080/IMShh/jsp/finance/teller/receivable.html', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('0202', 'Ӧ��', '02', 'http://localhost:8080/IMShh/jsp/finance/teller/payable.html', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('0203', '�˻�����', '02', 'http://localhost:8080/IMShh/jsp/finance/account/index.html', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('03', 'ҵ������', '0', '', 'glyphicon glyphicon-list-alt');  
insert into T_MENU(id, name, parentId, url, icon)
     values('0301', '�ͻ���Ϣ', '03', 'cust/main.do', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('0302', '��Ӧ����Ϣ', '03', 'supp/main.do', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('0303', '��Ʒ��Ϣ', '03', 'pdt/main.do', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('0304', 'ԭ������Ϣ', '03', 'mtl/main.do', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('04', 'ϵͳ����', '0', '', 'glyphicon glyphicon-cog');  
insert into T_MENU(id, name, parentId, url, icon)
     values('0401', '�û�����', '04', 'user/main.do', '');
insert into T_MENU(id, name, parentId, url, icon)
     values('0402', '��ɫ����', '04', 'role/main.do', '');
     

insert into T_AUTHORITY(id, name, parentId, action, dependents, remark)
     values('01', '�ճ�Ʊ��', '0', '', '', '');
insert into T_AUTHORITY(id, name, parentId, action, dependents, remark)
     values('0101', '����', '01', 'order/main.do', '', 'ӵ�ж�������Ȩ�ޣ����Բ鿴��¼�룬�޸ĺ�ɾ������');
insert into T_AUTHORITY(id, name, parentId, action, dependents, remark)
     values('0102', '�ɹ��ƻ�', '01', 'purchase/main.do', '', 'ӵ�вɹ��ƻ�Ȩ�ޣ����Բ鿴��¼�룬�޸ĺ�ɾ���ɹ��ƻ�');
insert into T_AUTHORITY(id, name, parentId, action, dependents, remark)
     values('0103', '������', '01', 'deliver/main.do', '', 'ӵ�з�����Ȩ�ޣ����Բ鿴��¼�룬�޸ĺ�ɾ��������');
insert into T_AUTHORITY(id, name, parentId, action, dependents, remark)
     values('0104', '��ⵥ', '01', 'storage/main.do', '', 'ӵ����ⵥȨ�ޣ����Բ鿴��¼�룬�޸ĺ�ɾ����ⵥ');
insert into T_AUTHORITY(id, name, parentId, action, dependents, remark)
     values('0105', '��Ʊ', '01', 'invoice/main.do', '', 'ӵ�п�ƱȨ�ޣ����Բ鿴��¼�룬�޸ĺ�ɾ���뿪Ʊ��Ϣ');
insert into T_AUTHORITY(id, name, parentId, action, dependents, remark)
     values('02', '�������', '0', '', '', '');
insert into T_AUTHORITY(id, name, parentId, action, dependents, remark)
     values('0201', 'Ӧ��', '02', 'http://localhost:8080/IMShh/jsp/finance/teller/receivable.html', '', 'ӵ��Ӧ��Ȩ�ޣ����Բ鿴Ӧ�����');
insert into T_AUTHORITY(id, name, parentId, action, dependents, remark)
     values('0202', 'Ӧ��', '02', 'http://localhost:8080/IMShh/jsp/finance/teller/payable.html', '', 'ӵ��Ӧ��Ȩ�ޣ����Բ鿴Ӧ�����');
insert into T_AUTHORITY(id, name, parentId, action, dependents, remark)
     values('0203', '�˻�����', '02', 'http://localhost:8080/IMShh/jsp/finance/account/index.html', '', 'ӵ���˻�����Ȩ�ޣ�����ά�������˻�������¼�뽻����ϸ');
insert into T_AUTHORITY(id, name, parentId, action, dependents, remark)
     values('03', 'ҵ������', '0', '', '', '');
insert into T_AUTHORITY(id, name, parentId, action, dependents, remark)
     values('0301', '�ͻ���Ϣ', '03', 'cust/main.do', '', 'ӵ�пͻ���ϢȨ�ޣ����Բ鿴��¼�룬�޸ĺ�ɾ���ͻ���Ϣ');
insert into T_AUTHORITY(id, name, parentId, action, dependents, remark)
     values('0302', '��Ӧ����Ϣ', '03', 'supp/main.do', '', 'ӵ��Ӧ����ϢȨ�ޣ����Բ鿴��¼�룬�޸ĺ�ɾ����Ӧ����Ϣ');
insert into T_AUTHORITY(id, name, parentId, action, dependents, remark)
     values('0303', '��Ʒ��Ϣ', '03', 'pdt/main.do', '', 'ӵ�в�Ʒ��ϢȨ�ޣ����Բ鿴��¼�룬�޸ĺ�ɾ����Ʒ��Ϣ');
insert into T_AUTHORITY(id, name, parentId, action, dependents, remark)
     values('0304', 'ԭ������Ϣ', '03', 'mtl/main.do', '', 'ӵ��ԭ������ϢȨ�ޣ����Բ鿴��¼�룬�޸ĺ�ɾ��ԭ������Ϣ');
insert into T_AUTHORITY(id, name, parentId, action, dependents, remark)
     values('04', 'ϵͳ����', '0', '', '', '');
insert into T_AUTHORITY(id, name, parentId, action, dependents, remark)
     values('0401', '�û�����', '04', 'user/main.do', '', 'ӵ���û�����Ȩ�ޣ����Բ鿴���������޸ĺ�ɾ���û���Ϣ����Ϊ������ɫ');
insert into T_AUTHORITY(id, name, parentId, action, dependents, remark)
     values('0402', '��ɫ����', '04', 'role/main.do', '', 'ӵ�н�ɫ����Ȩ�ޣ����Բ鿴���������޸ĺ�ɾ����ɫ��Ϣ����Ϊ�����Ȩ��');
