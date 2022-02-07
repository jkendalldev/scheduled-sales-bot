const {TwitterApi} = require('twitter-api-v2');

const client = new TwitterApi({
    appKey: process.env.CONSUMER_KEY,
    appSecret: process.env.CONSUMER_SECRET,
    accessToken: process.env.ACCESS_TOKEN_KEY,
    accessSecret: process.env.ACCESS_TOKEN_SECRET,
});


async function tweet(tweetText) {
  const { data: createdTweet } = await client.v2.tweet(tweetText);
  console.log('Tweet', createdTweet.id, ':', createdTweet.text);
  }

module.exports = {
    tweet: tweet
};