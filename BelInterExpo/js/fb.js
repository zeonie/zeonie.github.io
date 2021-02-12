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
            access_token: 'EAAWxzUVWDqcBAJy1Evqaq4B4AsOoefmJe6bBziZAcBW7lHaJsAvshSIznzDGN4z7XcRO32lpQFQjNRRZCJaM9nA5iW09oK2Fe4PbSkQZBb2qRLP2E0cYwG1L5tWR9wy3EcDlDXg5RZCZASo16GSVzZCLv3tK3Ca8o7chgZBcaiw0px3Og8p9uYChUGXmVz8ZBVn4CQbqQ9HhywZDZD',
            fields:" full_picture,message,permalink_url,created_time",
            limit: "6"
        },
        function (response) {
            console.log(response);
        }
    );
}