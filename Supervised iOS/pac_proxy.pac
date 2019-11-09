var DIRECT="DIRECT";
var FakeIAP= "PROXY test.ejiaogl.com:8889";
var BLACK="PROXY 127.0.0.1:80";
function FindProxyForURL(url, host) {
   var FakeIAP_list = array(
        "api.calm.com",
        "api.termius.com",
        "license.pdfexpert.com",
        "photos.adobe.io"
    );
   var Black_list = array(
        "ocsp.apple.com",
        "logger.suibyuming.com",
        "logger.adthor.com"
    );   
 for(var i=0,var count=FakeIAP_list.length;i<length;i++)
{if(localHostOrDomainIs(host,Fake_list[i])){return FakeIAP;}}
for(var i=0,var count=Black_list.length;i<length;i++)
{if(localHostOrDomainIs(host,Black_list[i]))
{return BLACK;}}
return DIRECT;}