var obj = JSON.parse($response.body);

obj= {
  "status": "OK",
  "userLevel": "6",
  "expirationDate": "06-08-2019",
  "idPeriod": "360",
  "token": "e23d5c91f815744271d6dd1aa6a47f29",
  "userType": "2"
};

$done({body: JSON.stringify(obj)});

// Descriptions
