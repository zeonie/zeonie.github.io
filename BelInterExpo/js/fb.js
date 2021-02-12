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
            access_token: 'EAAWxzUVWDqcBABE8oYwEyOqMcOsnGDgCzKwcZAi4JSaBooZBnTNZBoLIBWj1IZCkeyO2Dcx4tDm3AiKLOAIAZCSBwlIdt9ziDyVocqQandfdcqEC3ZAci5QUY86WpZBuMXsecz67PzeQGntxwjYujFtvT65Cy1EK2ePKxh3tYqZBdOxW2KnndNZCW1BZB1nyoIwWdZBNIadlSmmkQZDZD',
            fields:" full_picture,message,permalink_url,created_time",
            limit: "6"
        },
        function (response) {
            console.log(response);
        }
    );
}