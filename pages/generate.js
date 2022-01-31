import React, { useContext, useEffect, useRef } from "react";

import Image from "next/image";
import Head from "next/head";
import { fetchUser } from "../services/twitter";
import { MadeWithTag } from "../components/MadeWithTag";
import MainLayout from "../components/MainLayout";
import { urlObjectKeys } from "next/dist/shared/lib/utils";

import { UserContext } from "./_app";
import { GoBackStep } from "../components/StartAgainButton";

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

const BasicDefault = React.forwardRef((props, ref) => {
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
      ref={ref}
      className={`w-128 relative p-8 rounded-lg bg-xlight hover:cursor-pointer group transition-all duration-150 ease-in-out border-xlight
        `}
    >
      <div className="relative flex flex-col items-center justify-center p-8 bg-white rounded-lg">
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
});

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
      <div className="relative grid grid-cols-3 gap-6 p-8 overflow-hidden bg-white rounded-lg shadow-lg shadow-light/30">
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
            width={102}
            height={102}
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
  const basicDefaultRef = useRef();

  console.log(props);
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    dispatch({
      type: "set-count",
      payload: 4,
    });
  }, []);

  return (
    <main className="flex flex-col w-full p-12 ml-80">
      <Head>
        <title>holr | Share Your Shoutout</title>
        <meta name="description" content="Twitter shoutout machine" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GoBackStep newCount={1} />
      <h1 className="mb-2 text-4xl">Share your Shoutout</h1>
      <p className="mb-6 text-lg">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>

      {!props.twitterInfo ? (
        <p>Couldn't fetch information from Twitter</p>
      ) : props.cardStyle === "basic-default" ? (
        <div className="flex">
          <article>
            <BasicDefault
              ref={basicDefaultRef}
              twitterInfo={props.twitterInfo}
              textColor={props.textColor}
              bgColor={props.bgColor}
            />
          </article>
          <article className="flex flex-col ml-4">
            <p className="mb-6 text-lg">
              We've generated an image for you to share in your shoutout. Simply
              download it as a JPG and tweet it out!
            </p>
            <button
              className="self-start p-3.5 font-bold text-white rounded-lg bg-brand"
              onClick={async () => {
                const { exportComponentAsJPEG } = await import(
                  "react-component-export-image"
                );
                exportComponentAsJPEG(basicDefaultRef);
              }}
            >
              Export As JPEG
            </button>
          </article>
        </div>
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
    </main>
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

Share.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
