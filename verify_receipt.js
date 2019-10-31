var obj = JSON.parse($response.body);
if(obj.status == 0)
{
obj.receipt.in_app[0].expires_date = "2099-05-02 06:35:04 Etc/GMT",
obj.receipt.in_app[0].expires_date_pst = "2099-05-01 23:35:04 America/Los_Angeles";
obj.receipt.in_app[0].expires_date_ms = "4081386904000";
obj.latest_receipt_info[0].expires_date = "2099-05-02 06:35:04 Etc/GMT";
obj.latest_receipt_info[0].expires_date_pst = "2099-05-01 23:35:04 America/Los_Angeles";
obj.latest_receipt_info[0].expires_date_ms = "4081386904000";
}
$done({body: JSON.stringify(obj)});
//Magi+, kunicam, kinemaster, filmr, intromaker, snell, gemini, Manly