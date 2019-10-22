var obj = JSON.parse($response.body);

obj= {
  "request_date_ms": 1564945639879,
  "request_date": "2019-08-04T19:07:19Z",
  "subscriber": {
    "first_seen": "2019-08-04T19:03:30Z",
    "original_application_version": "169",
    "other_purchases": {
    },
    "subscriptions": {
      "video.mojo.pro.yearly": {
        "is_sandbox": false,
        "period_type": "trial",
        "billing_issues_detected_at": null,
        "unsubscribe_detected_at": null,
        "expires_date": "2099-09-04T19:06:30Z",
        "original_purchase_date": "2019-08-04T19:06:30Z",
        "purchase_date": "2019-08-04T19:06:30Z",
        "store": "app_store"
      }
    },
    "entitlements": {
      "pro": {
        "expires_date": "2019-09-04T19:06:30Z",
        "product_identifier": "video.mojo.pro.yearly",
        "purchase_date": "2019-08-04T19:06:30Z"
      }
    },
    "original_app_user_id": "iiVz37G5i9az15Vfr5lskGOvhkf1",
    "non_subscriptions": {
    }
  }
};

$done({body: JSON.stringify(obj)});

// Descriptions
