import Header from "@/components/component/global/Header";
import MainFooter from "@/components/component/global/MainFooter";
import Sidebar from "@/components/component/global/Sidebar";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [isMainDivScrolling, setIsMainDivScrolling] = useState(false);
  const router = useRouter()
  

  // Add a scroll event listener to the main div
  useEffect(() => {
    const handleScroll = () => {
      // Check if the main div is scrolled
      if (document.querySelector(".main-div").scrollTop > 0) {
        setIsMainDivScrolling(true);
      } else {
        setIsMainDivScrolling(false);
      }
    };

    // Attach the scroll event listener
    document
      .querySelector(".main-div")
      .addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
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

  // Check if the Component has a getLayout method
  if (Component.getLayout) {
    // Call getLayout and pass the Component with pageProps as its argument
    return Component.getLayout(<Component {...pageProps} />);
  } else {
    // If there's no getLayout method, use a default layout
    return (
      <div className="w-full h-screen flex overflow-hidden gap-2 p-2 bg-primary">
        {/* sidebar */}
        <div className="relative flex-[22%] w-full h-full rounded-lg">
          <Sidebar />
        </div>
        {/* main div */}
        <div className="main-div relative scrollbar-hidden flex-[78%] w-full h-full bg-secondary rounded-lg overflow-y-scroll z-0">
            <Header isSticky={isMainDivScrolling} />
          <div className="relative z-0  custom-scroll">
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
