var obj = JSON.parse($response.body);
obj=
{
 "data": {
  "errorCode": 0,
  "sandbox": 0,
  "purchaseTime": 1571682188,
  "expireTime": 4096532852,
  "productId": "VIP_yearly_29.99",
  "appleVip": 1,
  "operationVip": 0,
  "giftVip": 0
 },
 "status": 200,
 "message": "ok",
 "serverTime": 157192473.9075,
 "exetime": "1571924739075-4096532852866"
};
$done({body: JSON.stringify(obj)});
