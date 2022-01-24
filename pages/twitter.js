import { fetchUser } from '../services/twitter'

function TwitterCard(props) {
  let profileImageURL = props.twitterInfo.profileImageURL.replace(/_normal/g, "");
  
  return (
    <div className="p-2 border rounded-md w-auto overflow-hidden">
      <div className="relative">
        <img className="mx-auto" src={props.twitterInfo.profileBannerURL} />
        <div className="top-14 absolute left-4 lg:top-24 border-4 border-white rounded-full">
          <img className="rounded-full h-24 w-24" src={profileImageURL} />
        </div>
      </div>
      <div className="mt-28 lg:mt-16 px-4">
        <p className="font-bold text-lg leading-6">{props.twitterInfo.name}</p>
        <p className="text-sm text-gray-600">@{props.twitterInfo.screenName}</p>
        <p className="mt-4 text-sm whitespace-pre-wrap">{props.twitterInfo.description}</p>
      </div>
    </div>
  )
}

export default function Twitter(props) {
  return (
    <div className="p-2 max-w-xs lg:max-w-md mx-auto mt-12">
      <h2 className="text-2xl font-semibold">Twitter Card</h2>

      <div className="mt-8">
        {
          (!props.twitterInfo)? <p>Couldn't fetch information from Twitter</p>: <TwitterCard twitterInfo={props.twitterInfo} />
        }
      </div>
    </div>
  )
}

export async function getServerSideProps(context) {
  let twitterHandle = process.env.TEST_TWITTER_HANDLE
  let twitterInfo = null

  const userResponse = await fetchUser(twitterHandle)
  twitterInfo = {
    'screenName': userResponse.screen_name,
    'name': userResponse.name,
    'profileImageURL': userResponse.profile_image_url_https,
    'profileBannerURL': userResponse.profile_banner_url,
    'description': userResponse.description
  }

  return {
    props: {
      "twitterInfo": twitterInfo
    },
  }
}
