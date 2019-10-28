const path1="/users.get?";
const path2="/config.get?";
const url=$request.url;
let obj=JSON.parse($response.body);

if(url.indexOf(path1)!=-1){

  let usrauth=obj.message.body.user;
    
  usrauth.active_products=[
     {
      "product_id": "com.musixmatch.offers.removeads.autorenewable.oneyear",
      "product_type": "subscription",
      "creation_date": "2019-10-27T16:27:38.000Z",
      "start_date": "2019-10-27T16:27:38.000Z",
      "end_date": "2029-11-03T17:27:38.000Z",
      "credits": 999,
      "features": {
       "no_ads": 1,
       "lyrics_offline": 1,
       "clean_metadata": 1
      }
     }
    ];
}


if(url.indexOf(path2)!=-1){
  

  let usr=obj.message.body;

  usr.app_config.active_products=[
          {
            "product_id" : "com.musixmatch.offers.removeads.autorenewable.oneyear",
            "start_date" : "2019-10-27T16:27:38.000Z",
            "creation_date" : "2019-10-27T16:27:38.000Z",
            "credits" : 10,
            "end_date" : "2029-11-03T17:27:38.000Z",
            "product_type" : "subscription",
            "features" : {
              "no_ads" : 1,
              "clean_metadata" : 1,
              "lyrics_offline" : 1
            }
          }
        ];

  usr.app_config.appstore_products=[
          {
            "product_id" : "com.musixmatch.offers.removeads.autorenewable.oneyear.1563369990183",
            "product" : {
              "autorenewable" : true,
              "product_type" : "subscription",
              "unit" : "d",
              "duration" : 365
            },
            "purchasable" : true,
            "features" : {
              "pay_wall" : 1,
              "party_mode" : 1,
              "no_ads" : 1,
              "free_trial" : 0,
              "lyrics_offline" : 1
            },
            "product_platform" : "ios"
          },
          {
            "product_id" : "com.musixmatch.offers.removeads.autorenewable.onemonths.1528103529169",
            "product" : {
              "autorenewable" : true,
              "product_type" : "subscription",
              "unit" : "d",
              "duration" : 30
            },
            "purchasable" : true,
            "product_platform" : "ios"
          }
        ];
       
}

$done({body: JSON.stringify(obj)});
//by miao