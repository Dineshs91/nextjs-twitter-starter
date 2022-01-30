import { fetchUser } from "../../services/twitter";

const isValid = (data) => {
  if (!data?.twitterHandle) {
    return false;
  }

  return true;
};

export default async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method Not Allowed" });
  } else {
    let data = req.body;

    if (!data) {
      console.log("Error found");
      res.status(400).json({ message: "invalid request body" });
    }

    if (!isValid(data)) {
      res.status(400).json({ message: "twitterHandle field is required" });
    } else {
      let twitterHandle = data.twitterHandle;

      try {
        const userResponse = await fetchUser(twitterHandle);
        let twitterInfo = {
          screen_name: userResponse.screen_name,
          name: userResponse.name,
          profile_image_url: userResponse.profile_image_url_https,
        };
        console.log("User found");

        res.status(200).json(twitterInfo);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "User not found on Twitter" });
      }
    }
  }
};
