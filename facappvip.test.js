let headers = $response.headers;
    let status = $response.status;
    let obj = JSON.parse($response.body);

    {
    obj = {"subscription_apple":{"subscription_exp":99999999999,"product_id":"y"},"subscription_google":null};
    $done({body: JSON.stringify(obj)});
}
    {
    status = 200;
    $done({status});
}
    {
    delete headers['X-FaceApp-ErrorCode'];
    $done({headers});
}
