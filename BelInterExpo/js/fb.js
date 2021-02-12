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
            access_token: 'EAAWxzUVWDqcBANEQZBZAjcNjyZBrcm2uh9HnMH9aWjr4cYrcr1C7xKXI9AbGd02xAHYhYcap6NxLtVZBmqk2W9ZA6m0QcHnVUZBW5kmpZBH9w9cjx8ZCmHU3dVIfm3evZCm3Ujz4ghYSS67dj8wrHP4Wg0nMYMg4ZBDOfZCMQGiDaZAvWSRlUohSJHfa9yqElZBZCwKZAbrr4ZAINlPtZCgZDZD',
            fields:" full_picture,message,permalink_url,created_time",
            limit: "6"
        },
        function (response) {
            console.log(response);
        }
    );
}