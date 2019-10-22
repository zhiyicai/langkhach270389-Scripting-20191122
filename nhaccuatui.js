var obj = JSON.parse($response.body);

obj.data.VIPExpire= "27/03/9999 00:00:00";
obj.data.isVIP= true;
$done({body: JSON.stringify(obj)});
