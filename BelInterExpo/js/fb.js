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
            access_token: 'EAAWxzUVWDqcBAAHZAm0UcZBM1bBZAkFEpCOi8ERkP8hkyuLCz4HxoISL1XGHKQ3c9KtYXIdhd0D00eEQ6nK0eahxMLrkEw3Oh5rLM7byuezrYZAtQZAmRKRPZCyEqEoZCmjEvrSmKJZAPY4YNYsdUcNOgICnMFwpy60pxyTY4MhCygi4RypObEaW',
            fields:" full_picture,message,permalink_url",
            limit: "4"
        },
        function (response) {
            let $ = jQuery;
            let need_data = response.data;
            for ( let i = 0; i < need_data.length; i++ ) {
                if ( need_data[i].message.length > 88 ) {
                    need_data[i].message = need_data[i].message.substr(0, 88) + '...';
                }
                $('#facebook_list').append(`<div class="event-wrap"><div class="event"><div class="image-wrap" style="background-image: url('${need_data[i].full_picture}');"></div><div class="event-text"><p>${need_data[i].message}</p></div><a href="${need_data[i].permalink_url}" target="_blank" class="arrow-right">Read more</a></div></div>`);
            }
        }
    );
}