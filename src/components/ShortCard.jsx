// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

const ShortCard = ( {data} ) => {
//   const [showOptions, setShowOptions] = useState(false);
//   const watchLater = useSelector((store) => store.library.watchLater);
  //   const isVideoSetToWatchLater = watchLater?.find((vid) => vid.id === id);

//   const dispatch = useDispatch();

  return (
    <div key={data?.id?.videoId}>
      <iframe
        className="rounded-3xl"
        width="290"
        height="490"
        // autoFocus
        src={"https://www.youtube.com/embed/" + data?.id?.videoId + "?autoplay=0&mute=1"}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
      {/* <section
        style={{ display: !showOptions ? "none" : "" }}
        className={`w-[15vw]
rounded-md absolute right-8 top-5 bg-stone-800 ${
          searchFeedVideo && !relatedCard && "top-1 right-28"
        } ${searchFeedVideo && sideBarOpen && "top-1 right-32"} `}
      >
        {likedVideosCard && (
          <span
            onClick={(e) => {
              e.stopPropagation();
              dispatch(removeFromLikedVideos(id));
            }}
            className="flex py-[10px]  rounded-md px-2 hover:bg-stone-700 hover:cursor-pointer items-center  gap-2 z-10"
          >
            <AiOutlineDislike size={18} />
            <p className="m-0">Dislike Video</p>
          </span>
        )}
        <span
          onClick={(e) => {
            e.stopPropagation();
            !isVideoSetToWatchLater
              ? dispatch(addToWatchLaterVideos(s))
              : dispatch(removeFromWatchLaterVideos(videoId));
            setShowOptions(false);
          }}
          className="flex py-[10px]  rounded-md px-2 hover:bg-stone-700 hover:cursor-pointer items-center  gap-2 z-10"
        >
          <MdOutlineWatchLater size={18} />
          <p className="m-0">
            {isVideoSetToWatchLater ? "Remove from" : "Add to"} watch later
          </p>
        </span>
        <span
          onClick={(e) => {
            e.stopPropagation();
            navigator.clipboard.writeText(
              `https://www.youtube.com/watch?v=${id}`
            );
            setShowOptions(false);
            toast.success("Link copied to clipboard!");
          }}
          className="flex py-[10px] rounded-md  hover:bg-stone-700 hover:cursor-pointer items-center gap-2 px-2 "
        >
          <FaShare size={18} />
          <p className="m-0">Share</p>
        </span>
      </section> */}
    </div>
  );
};

export default ShortCard;
