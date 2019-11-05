var obj = JSON.parse($response.body);

obj.subscription= {
  "granted": true
};
obj.verified_type= "subscribed";
$done({body: JSON.stringify(obj)});

// Mô tả
