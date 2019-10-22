var obj = JSON.parse($response.body);

obj= {
  "status": 200,
  "data": {
    "sandbox": 0,
    "purchaseTime": 1570612492,
    "giftVip": 0,
    "productId": "vip_yearly_3daysfree",
    "appleVip": 1,
    "expireTime": 4095479692,
    "operationVip": 0,
    "errorCode": 0
  },
  "message": "ok",
  "exetime": "1530612927774-1570612930858",
  "serverTime": 1570612930.8581
};

$done({body: JSON.stringify(obj)});

// Descriptions
