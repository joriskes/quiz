// Import the Cloudinary class
import { Cloudinary } from "@cloudinary/url-gen";

// Create your instance
const cld = new Cloudinary({
  cloud: {
    cloudName: "marijn",
  },
  url: {
    secure: true, // force https, set to false to force http
  },
});

export default cld;