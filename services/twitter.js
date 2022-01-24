import Twitter from 'twitter-lite';

export const fetchUser = async (screen_name) => {
  const client = new Twitter({
    version: "1.1",
    bearer_token: process.env.TWITTER_BEARER_TOKEN
  });

  return client.get('users/show', { screen_name: screen_name });
}