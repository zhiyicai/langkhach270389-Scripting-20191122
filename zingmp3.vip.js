var obj = JSON.parse($response.body);
var url = $request.url;
var cons = "getUserInfo";
if(url.indexOf(cons) != -1)
{
obj["data"]["lastVipExpireTime"]= 253378108800;
}
$done({body: JSON.stringify(obj)});

// Descriptions