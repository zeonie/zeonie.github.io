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
            access_token: 'EAAWxzUVWDqcBAM8dPRHVowLUgvdKlKykZBM6kauzWfyh5XZCRDoiqcGx8yrELIYWBz6FVHRmSsGU8EDfj7WtIdHjd8ues6RC5UUKPm6pAvYeXR1cG32g3gy235TAvv0VaZAI6KegIL2W3gcwUKsNosVud4MFAb9VOhvxxXzNdn8Ce4nWItrXZBnZCXuqEjMMZD',
            fields:" full_picture,message,permalink_url,created_time",
            limit: "6"
        },
        function (response) {
            console.log(response);
        }
    );
}