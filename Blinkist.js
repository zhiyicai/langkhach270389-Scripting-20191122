let obj=JSON.parse($response.body)
let url = $request.url;
obj["user_access"]= {
    "marketplace": "itunes",
    "can_start_trial": false,
    "id": "5dbc4525d32d7a0013ea828f",
    "valid_until": "2099-11-07T19:26:12.000+00:00",
    "type": "premium",
    "will_renew": false,
    "premium": "softpaywall",
    "etag": 15730018458950
  };
$done({body: JSON.stringify(obj)});