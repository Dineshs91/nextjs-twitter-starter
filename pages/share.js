import React, { useContext } from "react";
import Image from "next/image";
import { fetchUser } from "../services/twitter";
import { MadeWithTag } from "../components/MadeWithTag";
import { urlObjectKeys } from "next/dist/shared/lib/utils";

// function TwitterCard(props) {
//   console.log(props);
//   let profileImageURL = props.twitterInfo.profileImageURL.replace(
//     /_normal/g,
//     ""
//   );

//   return (
//     <div className="w-auto p-2 overflow-hidden border rounded-md">
//       <div className="relative">
//         <img className="mx-auto" src={props.twitterInfo.profileBannerURL} />
//         <div className="absolute border-4 border-white rounded-full top-14 left-4 lg:top-24">
//           <img className="w-24 h-24 rounded-full" src={profileImageURL} />
//         </div>
//       </div>
//       <div className="px-4 mt-28 lg:mt-16">
//         <p className="text-lg font-bold leading-6">{props.twitterInfo.name}</p>
//         <p className="text-sm text-gray-600">@{props.twitterInfo.screenName}</p>
//         <p className="mt-4 text-sm whitespace-pre-wrap">
//           {props.twitterInfo.description}
//         </p>
//       </div>
//     </div>
//   );
// }

function BasicDefault(props) {
  console.log(props);
  let twitterName = props.twitterInfo.name;
  let twitterScreenName = props.twitterInfo.screenName;
  let twitterDescription = props.twitterInfo.description;
  let profileImageURL = props.twitterInfo.profileImageURL.replace(
    /_normal/g,
    ""
  );
  let textColor = props.textColor;

  return (
    <div
      className={`relative p-8 rounded-lg bg-xlight border-8 hover:cursor-pointer group transition-all duration-150 ease-in-out border-xlight
        `}
    >
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-lg shadow-light/30">
        <div className="w-1/3">
          <Image
            src={profileImageURL}
            width={486}
            height={486}
            className="object-scale-down overflow-hidden rounded-full"
          />
        </div>
        <p className="mb-1 text-2xl font-bold text-dark">{twitterName}</p>
        <p className={`text-base font-semibold tracking-wider ${textColor}`}>
          @{twitterScreenName}
        </p>
        <p className="mb-0 text-sm tracking-wide text-center text-mid">
          {twitterDescription}
        </p>
      </div>
      <MadeWithTag />
    </div>
  );
}

function BasicAlternative(props) {
  console.log(props);
  let twitterName = props.twitterInfo.name;
  let twitterScreenName = props.twitterInfo.screenName;
  let twitterDescription = props.twitterInfo.description;
  let profileImageURL = props.twitterInfo.profileImageURL.replace(
    /_normal/g,
    ""
  );
  let textColor = props.textColor;

  return (
    <div
      className={`bg-xlight relative flex flex-col items-start justify-center p-8 rounded-lg  hover:cursor-pointer border-8 group transition-all duration-150 ease-in-out border-xlight`}
    >
      <div className="grid grid-cols-3 gap-6 p-8 bg-white rounded-lg shadow-lg shadow-light/30">
        <div className="flex items-center h-full col-span-1">
          <Image
            src={profileImageURL}
            width={486}
            height={486}
            className="object-scale-down overflow-hidden rounded-full"
          />
        </div>
        <div className="col-span-2">
          <p className="mb-1 text-2xl font-bold text-dark">{twitterName}</p>
          <p className={`text-base font-semibold tracking-wider ${textColor}`}>
            @{twitterScreenName}
          </p>
          <p className="mb-0 text-sm tracking-wide text-mid">
            {twitterDescription}
          </p>
        </div>
      </div>
      <MadeWithTag />
    </div>
  );
}

function BannerDefault(props) {
  console.log(props);
  let twitterName = props.twitterInfo.name;
  let twitterScreenName = props.twitterInfo.screenName;
  let twitterDescription = props.twitterInfo.description;
  let profileBannerURL = props.twitterInfo.profileBannerURL;
  let profileImageURL = props.twitterInfo.profileImageURL.replace(
    /_normal/g,
    ""
  );
  let textColor = props.textColor;
  let bgColor = props.bgColor;

  return (
    <div
      className={`relative p-8 rounded-lg bg-xlight border-8 hover:cursor-pointer group transition-all duration-150 ease-in-out border-xlight`}
    >
      <div className="relative flex flex-col items-center justify-center p-8 overflow-hidden bg-white rounded-lg shadow-lg shadow-light/30">
        <div
          className={`absolute top-0 w-full overflow-hidden ${bgColor} h-28`}
        >
          <div
            className={`h-full bg-center bg-cover opacity-20`}
            style={{
              backgroundImage: `url(${profileBannerURL})`,
            }}
          ></div>
        </div>
        <div className="w-1/3">
          <div className="bg-white border-2 border-white">
            <Image
              src={profileImageURL}
              width={486}
              height={486}
              className="object-scale-down overflow-hidden rounded-full"
            />
          </div>
        </div>
        <p className="mb-1 text-2xl font-bold text-dark">{twitterName}</p>
        <p className={`text-base font-semibold tracking-wider ${textColor}`}>
          @{twitterScreenName}
        </p>
        <p className="mb-0 text-sm tracking-wide text-center text-mid">
          {twitterDescription}
        </p>
      </div>
      <MadeWithTag />
    </div>
  );
}

function BannerAlternative(props) {
  console.log(props);
  let twitterName = props.twitterInfo.name;
  let twitterScreenName = props.twitterInfo.screenName;
  let twitterDescription = props.twitterInfo.description;
  let profileBannerURL = props.twitterInfo.profileBannerURL;
  let profileImageURL = props.twitterInfo.profileImageURL.replace(
    /_normal/g,
    ""
  );
  let textColor = props.textColor;
  let bgColor = props.bgColor;

  return (
    <div
      className={`bg-xlight relative flex flex-col items-start justify-center p-8 rounded-lg  hover:cursor-pointer border-8 group transition-all duration-150 ease-in-out border-xlight`}
    >
      <div className="relative grid grid-cols-3 gap-6 p-8 bg-white rounded-lg shadow-lg shadow-light/30">
        <div
          className={`absolute top-0 left-0 w-20 h-full overflow-hidden ${bgColor}`}
        >
          <div
            className={`h-full bg-center opacity-20`}
            style={{
              backgroundImage: `url(${profileBannerURL}/mobile_retina)`,
            }}
          ></div>
        </div>
        <div className="flex items-center h-full col-span-1">
          <Image
            src={profileImageURL}
            width={486}
            height={486}
            className="object-scale-down overflow-hidden rounded-full"
          />
        </div>
        <div className="col-span-2">
          <p className="mb-1 text-2xl font-bold text-dark">{twitterName}</p>
          <p className={`text-base font-semibold tracking-wider ${textColor}`}>
            @{twitterScreenName}
          </p>
          <p className="mb-0 text-sm tracking-wide text-mid">
            {twitterDescription}
          </p>
        </div>
      </div>
      <MadeWithTag />
    </div>
  );
}

export default function Share(props) {
  console.log(props);
  return (
    <div className="max-w-xs p-2 mx-auto mt-12 lg:max-w-md">
      <h2 className="text-2xl font-semibold">Twitter Card</h2>

      <div className="mt-8">
        {!props.twitterInfo ? (
          <p>Couldn't fetch information from Twitter</p>
        ) : props.cardStyle === "basic-default" ? (
          <BasicDefault
            twitterInfo={props.twitterInfo}
            textColor={props.textColor}
            bgColor={props.bgColor}
          />
        ) : props.cardStyle === "basic-alt" ? (
          <BasicAlternative
            twitterInfo={props.twitterInfo}
            textColor={props.textColor}
            bgColor={props.bgColor}
          />
        ) : props.cardStyle === "banner-default" ? (
          <BannerDefault
            twitterInfo={props.twitterInfo}
            textColor={props.textColor}
            bgColor={props.bgColor}
          />
        ) : props.cardStyle === "banner-alt" ? (
          <BannerAlternative
            twitterInfo={props.twitterInfo}
            textColor={props.textColor}
            bgColor={props.bgColor}
          />
        ) : null}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // console.log(context.query.searchUser);
  // console.log(context.query.cardStyle);
  // console.log(context.query.textColor);
  // console.log(context.query.bgColor);

  let cardStyle = context.query.cardStyle;
  let textColor = context.query.textColor;
  let bgColor = context.query.bgColor;
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
      cardStyle: cardStyle,
      textColor: textColor,
      bgColor: bgColor,
    },
  };
}
