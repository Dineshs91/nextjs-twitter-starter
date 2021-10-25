var Twit = require('twit')

export const fetchUser = async (screen_name) => {
  var T = new Twit({
    consumer_key:         process.env.TWITTER_CONSUMER_KEY,
    consumer_secret:      process.env.TWITTER_CONSUMER_KEY_SECRET,
    app_only_auth:        true
  })

  return T.get('users/show', { screen_name: screen_name });
}