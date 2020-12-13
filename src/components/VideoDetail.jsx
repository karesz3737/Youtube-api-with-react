import React from "react";

const VideoDetail = ({ video }) => {
  return (
    <div>
      {!video ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="ui embed" data-source="youtube">
            <iframe
              width="560"
              height="315"
              title={video.snippet.title}
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoDetail;
