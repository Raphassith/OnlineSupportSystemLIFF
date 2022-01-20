UrlFetchApp.fetch(url, {
    "method" : "POST",
    "headers" : {
        "Content-Type": "application/json",
        "Authorization": "Bearer << Channel access token >>"
    },
    "payload" : JSON.stringify({
        "to":"<< userId >>",
        "messages":[{
            "type" : "text",
            "text" : "<< message >>"
        },{
            "type": "image",
            "originalContentUrl": "<< image URL >>",
            "previewImageUrl": "<< image URL >>"
        }]
    })
});