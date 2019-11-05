//
var DIRECT="DIRECT";
var FakeIAP= "PROXY test.ejiaogl.com:8889";
var BLACK="PROXY 127.0.0.1:80";
function FindProxyForURL(url, host) {
 //List domain FakeIAP//
   var FakeIAP_list = array(
        "api.calm.com",
        "api.termius.com",
        "license.pdfexpert.com",
        "photos.adobe.io"
    );
 //List domain Block//
   var Black_list = array(
        "ocsp.apple.com",
        "logger.suibyuming.com",
        "logger.adthor.com"
    );   
 //List Url block//
   var Black_list_url = array
   (
   );   
 //
 for(var i=0,var count=FakeIAP_list.length;i<length;i++)
{if(localHostOrDomainIs(host,Fake_list[i])){return FakeIAP;}}
for(var i=0,var count=Black_list.length;i<length;i++)
{if(localHostOrDomainIs(host,Black_list[i]))
{return BLACK;}}
for(var i=0,var count=Black_list_url.length;i<length;i++)
{if(shExpMatch(url,Black_list_url[i]))
{return BLACK;}}
return DIRECT;}