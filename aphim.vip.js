var obj = JSON.parse($response.body);

obj= {"status":true,"code":0,"message":"Th\u00e0nh c\u00f4ng!","data":{"fullname":"Hi\u1ec7p V\u0103n Kim","facebook":{"id":"1173794369334016","email":"hiepkimcdtk55@gmail.com"},"email":"hiepkimcdtk55@gmail.com","avatar":"https:\/\/graph.facebook.com\/1173794369334016\/picture?type=large","phone":"0987870209","birthday":"","gender":"male","registerDate":1477245465,"updatedDate":1477245465,"lastLogin":1570671242,"verified":true,"invite_code":"1dd2edc6","expiry_date":1483568093,"total_coin":0,"current_coin":0,"spent":0,"session_login":["53afb6de44bf364ceeaa7b8e0e515bf987a1677e"],"google":{"id":"110908879098175541848","email":"hiepkimcdtk55@gmail.com"},"username":"kimhiep89","password":"58b2whz2ioY2k","userId":"580cfa19026ecbf173fa7436","isVip":true,"using_code":false,"type":"user","total_view_vip":0,"recent":145,"favourite":1},"total_record":0,"is_review":false};

$done({body: JSON.stringify(obj)});

// Descriptions
