import PrintGreeting from "@/components/component/global/Greeting";
import GlobalMusic from "@/components/component/home/GlobalMusic";
import MusicVideoForYou from "@/components/component/home/MusicVideoForYou";
import todaysMusic from '@/json/music-for-today.json'
// import bestOfBts from '@/json/best-of-bts.json'
import exploreLatestVideos from '@/json/explore-latest-videos.json'
import FamousGroups from "@/components/component/home/FamousGroups";
import FamousKpopGroup from "@/json/famous-kpop.json"
import FamousArtists from "@/components/component/home/FamousArtists";
import FamousKpopArtists from "@/json/famous-artist.json"

function Home() {
  
  return (
    <>
      <div className="relative w-full z-0">
        <GlobalMusic />
      </div>
      {/*  */}
      <div className="relative -mt-[175px] z-100 py-10 px-5">
        {/* Greeting */}
        <div className="relative w-full mb-6">
          <PrintGreeting />
        </div>

        {/* Play For You */}
        <div className="w-full mb-20">
          <article className="text-[#ccc] hover:text-[#fff] text-xl font font-semibold mb-8 cursor-pointer">Trending Music Videos.</article>
          <MusicVideoForYou music_video={todaysMusic} />
        </div>

        {/* Play For You */}
        {/* <div className="w-full mb-20">
          <article className="text-[#ccc] hover:text-[#fff] text-xl font font-semibold mb-8 cursor-pointer">Watch Famous Music Videos Of BTS</article>
          <MusicVideoForYou music_video={bestOfBts}/>
        </div> */}

        {/* Play For You */}
        <div className="w-full mb-20">
          <article className="text-[#ccc] hover:text-[#fff] text-xl font font-semibold mb-8 cursor-pointer">Explore Latest Music Videos</article>
          <MusicVideoForYou music_video={exploreLatestVideos} />
        </div>

        {/* Play For You */}
        <div className="w-full mb-20">
          <article className="text-[#ccc] hover:text-[#fff] text-xl font font-semibold mb-8 cursor-pointer">Featuring Most Famous Kpop Group</article>
          <FamousGroups Groups={FamousKpopGroup} />
        </div>

        {/* Play For You */}
        <div className="w-full mb-10">
          <article className="text-[#ccc] hover:text-[#fff] text-xl font font-semibold mb-8 cursor-pointer">Most Famous Kpop Artist</article>
          <FamousArtists Artists={FamousKpopArtists} />
        </div>
      </div>
    </>
  );
}

export default Home;
