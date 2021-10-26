This is a Next.js Twitter starter kit.

## Packages

- [Next.js](https://nextjs.org/docs)
- [Tailwindcss](https://tailwindcss.com/docs)
- [Twit](https://github.com/ttezel/twit)

## Getting Started
Create `.env.local` file in the project root and add the following content in it

```
TWITTER_CONSUMER_KEY=
TWITTER_CONSUMER_KEY_SECRET=
TEST_TWITTER_HANDLE=
```

To get the Twitter keys, visit https://developer.twitter.com/en/portal/dashboard and create a standalone app. Fetch the consumer key and secret and add it to the `.env.local` file.

Add your twitter handle for `TEST_TWITTER_HANDLE`. This is used in the twitter sample page.

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

There is a sample API [http://localhost:3000/api/twitter-user](http://localhost:3000/api/twitter-user). This endpoint can be edited in `pages/api/twitter-user.js`.

Do a post request to this API with the request body

```
{
    "twitter_handle": "SDinesh91"
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

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Example app

Navigate to http://localhost:3000/twitter to see an example which displays a Twitter card with a user's information.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
