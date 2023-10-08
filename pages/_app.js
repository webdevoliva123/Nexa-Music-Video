import Header from "@/components/component/global/Header";
import MainFooter from "@/components/component/global/MainFooter";
import Sidebar from "@/components/component/global/Sidebar";
import { useMaximizeScreen } from "@/store_management/player_manager";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [isMainDivScrolling, setIsMainDivScrolling] = useState(false);
  const router = useRouter();
  const screenFull =  useMaximizeScreen((state) => state.screenFull)

  useEffect(() => {
    const handleScroll = () => {
      if (document.querySelector(".main-div").scrollTop > 100) {
        setIsMainDivScrolling(true);
      } else {
        setIsMainDivScrolling(false);
      }
    };

    document
      .querySelector(".main-div")
      .addEventListener("scroll", handleScroll);

    return () => {
      document
        .querySelector(".main-div")
        .removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const mainDiv = document.querySelector(".main-div");
    mainDiv.scrollTop = 0;
  }, [router]);

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    return (
      <div className="w-full h-screen flex flex-col sm:flex-row overflow-hidden p-2 bg-primary gap-2">
        {/* sidebar */}
        <div className={`relative sm:flex-shrink-0 sm:w-[22%] h-full rounded-lg hidden sm:block`}>
          <Sidebar />
        </div>
        {/* main div */}
        <div className="main-div relative flex-1 w-full h-full bg-secondary rounded-lg overflow-y-scroll z-0">
          <Header isSticky={isMainDivScrolling} />
          <div className="relative z-0 custom-scroll">
            <div className="w-full min-h-screen">
              <Component {...pageProps} />
            </div>
            <MainFooter />
          </div>
        </div>
      </div>
    );
  }
}
