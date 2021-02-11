window.fbAsyncInit = function() {
    FB.init({
        appId: '1602870073233063',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v9.0'
    });
    FB.api(
        '/belinterexpo.by/posts',
        'GET',
        {
            access_token: 'EAAWxzUVWDqcBAFtvQI3qdYCxbjEZBFNsxXsxhCxsxp9OVgOjtSyedKAcWqmMZCSjFfpgJq4mQ5qCqE6BZBPqob1zChhaaZBZCfZCZAZB6sseua8gSaoETdlz3MQfZBaQRzdxZAoOW39mpQcHkpRD3nLriddZC5MPBYQqBhvZAupwGZAQyQ18qlzH6OZBhrqI9vnu3bdu115Pl0xQbRXAZDZD',
            fields:" full_picture,message,permalink_url,created_time",
            limit: "6"
        },
        function (response) {
            console.log(response);
        }
    );
}