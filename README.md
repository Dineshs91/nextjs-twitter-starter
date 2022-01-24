This is a Next.js Twitter starter kit.

## Packages

- [Next.js](https://nextjs.org/docs)
- [Tailwindcss](https://tailwindcss.com/docs)
- [Twitter-lite](https://github.com/draftbit/twitter-lite)

## Getting Started
Create `.env.local` file in the project root and add the following content in it

```
TWITTER_CONSUMER_KEY=
TWITTER_CONSUMER_KEY_SECRET=
TWITTER_BEARER_TOKEN=
TEST_TWITTER_HANDLE=
```

To get the Twitter keys, visit https://developer.twitter.com/en/portal/dashboard and create a standalone app. Fetch the consumer key, secret and bearer token and add it to the `.env.local` file.

Add your twitter handle for `TEST_TWITTER_HANDLE`. This is used in the twitter sample page.

#### App vs. User authentication

Twitter has two different authentication options:

- App: higher rate limits. Great for building your own Twitter App.
- User: lower rate limits. Great for making requests on behalf of a User.

**User** authentication requires:

- `consumer_key`
- `consumer_secret`
- `access_token_key`
- `access_token_secret`

**App** authentication requires:

- `bearer_token`

For the example in this starter, we use App authentication which makes use of the `bearer_token`

#### Install dependencies

```bash
yarn install
```

#### Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

There is a sample API [http://localhost:3000/api/twitter-user](http://localhost:3000/api/twitter-user). This endpoint can be edited in `pages/api/twitter-user.js`.

Test the API from postman, by sending a `POST` request with the request body

```
{
    "twitterHandle": "SDinesh91"
}
```

The response will be 

```
{
    "screen_name": "SDinesh91",
    "name": "Dinesh",
    "profile_image_url": "https://pbs.twimg.com/profile_images/1421346630456922112/fVyiui9f_normal.jpg"
}
```

Make sure the header `Content-Type` is set to `application/json`

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Example page

Navigate to http://localhost:3000/twitter to see an example which displays a Twitter card with a Twitter user's information.

Note: Twitter user is taken from the environment variable `TEST_TWITTER_HANDLE`

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Note

If you would like to make requests on behalf of another user, you will need to generate a separate set of Access Tokens for that user using the 3-legged OAuth flow, and pass that user's tokens with your OAuth 1.0a User Context requests.

Check out [next-auth.js](https://next-auth.js.org/getting-started/introduction) for OAuth.
