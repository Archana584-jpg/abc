import React from "react";
import { s3BucketUrl } from "utils/config";

const LoadingVideo = () => {
   return (
      <div className="loading-video-container">
         <video autoPlay loop muted playsInline className="tw-w-full tw-h-full tw-object-cover">
            <source src={`${s3BucketUrl}/xToDetails/loading.mp4`} type="video/mp4" />
         </video>
      </div>
   );
};

export default LoadingVideo;
