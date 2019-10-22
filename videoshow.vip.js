var obj = JSON.parse($response.body);
obj= { 	"original_transaction_id": "310000409847203", 	"product_id": "vip_privilege_monthly", 	"is_trial_period": "true", 	"status": "0", 	"current_date": "2019-05-02 13:15:02", 	"expires_date": "2020-04-29 01:25:28 Etc/GMT", 	"isBlacklist": "0", 	"cancellation_date": "", 	"purchase_date": "2019-04-26 01:25:28 Etc/GMT", 	"msg": "验证成功", 	"transaction_id": "310000409847203" };
$done({body: JSON.stringify(obj)});
