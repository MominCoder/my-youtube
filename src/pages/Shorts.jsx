import { useEffect, useState } from "react";
import ShortsShimmer from "../components/ShortsShimmer.jsx";
import { SHORTS_API } from "../utils/apiCalls.js";
import ShortCard from "../components/ShortCard.jsx";
import { LeftSideBar } from "../components/LeftSideBar.jsx";
import { useSelector } from "react-redux";

export const Shorts = () => {
  const [shorts, setShorts] = useState([]);

  const fetchShorts = async () => {
    try {
      const res = await fetch(SHORTS_API);
      const data = await res.json();
      setShorts(data?.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchShorts();
  }, []);

  const sideBarOpen = useSelector((store) => store.app.sideBarOpen);

  const classNameString = !sideBarOpen
    ? `bg-black box-border w-[92%] py-4 px-8 ml-[8%] min-h-[92vh] relative  `
    : `bg-black box-border w-[85%] py-4 px-8 ml-[15%] min-h-[92vh] relative  `;

  return shorts?.length === 0 ? (
    <ShortsShimmer />
  ) : (
    <div className="w-[100%] box-border flex  bg-black relative mt-[8vh]">
      <LeftSideBar />
      <section
        className={` ${classNameString} flex flex-col gap-2 justify-start items-center overflow-hidden pt-6 relative`}
      >
        <div className="flex flex-col gap-y-5">
          {shorts?.map((s) => (
            <ShortCard data={s} key={s?.id?.videoId} />
          ))}
        </div>
      </section>
    </div>
  );
};
