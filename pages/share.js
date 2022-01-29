import React, { useContext } from "react";
import { fetchUser } from "../services/twitter";

function TwitterCard(props) {
  console.log(props);
  let profileImageURL = props.twitterInfo.profileImageURL.replace(
    /_normal/g,
    ""
  );

  return (
    <div className="w-auto p-2 overflow-hidden border rounded-md">
      <div className="relative">
        <img className="mx-auto" src={props.twitterInfo.profileBannerURL} />
        <div className="absolute border-4 border-white rounded-full top-14 left-4 lg:top-24">
          <img className="w-24 h-24 rounded-full" src={profileImageURL} />
        </div>
      </div>
      <div className="px-4 mt-28 lg:mt-16">
        <p className="text-lg font-bold leading-6">{props.twitterInfo.name}</p>
        <p className="text-sm text-gray-600">@{props.twitterInfo.screenName}</p>
        <p className="mt-4 text-sm whitespace-pre-wrap">
          {props.twitterInfo.description}
        </p>
      </div>
    </div>
  );
}

export default function Share(props) {
  return (
    <div className="max-w-xs p-2 mx-auto mt-12 lg:max-w-md">
      <h2 className="text-2xl font-semibold">Twitter Card</h2>

      <div className="mt-8">
        {!props.twitterInfo ? (
          <p>Couldn't fetch information from Twitter</p>
        ) : (
          <TwitterCard twitterInfo={props.twitterInfo} />
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log(context.query.searchUser);
  console.log(context.query.cardStyle);

  let twitterHandle = context.query.searchUser;
  let twitterInfo = null;

  const userResponse = await fetchUser(twitterHandle);
  twitterInfo = {
    screenName: userResponse.screen_name,
    name: userResponse.name,
    profileImageURL: userResponse.profile_image_url_https,
    profileBannerURL: userResponse.profile_banner_url,
    description: userResponse.description,
  };

  return {
    props: {
      twitterInfo: twitterInfo,
    },
  };
}
