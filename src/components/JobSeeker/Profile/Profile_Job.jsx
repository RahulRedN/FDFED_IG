import { useEffect, useRef, useState } from "react";
import Profilebrowse from "./Profilebrowse";
import Sidebar from "./Sidebar";
import LoadingBar from 'react-top-loading-bar'

const Profile_Job = () => {

  const [progress, setProgress] = useState(0);
  const ref= useRef(null);

  
  useEffect(() => {
    const handleScroll = () => {
      const scrollableDiv = ref.current;
      if (scrollableDiv) {
        const scrollPosition = scrollableDiv.scrollTop;
        const maxScroll = scrollableDiv.scrollHeight - scrollableDiv.clientHeight;
        const scrollPercentage = (scrollPosition / maxScroll) * 100;
        console.log(scrollPercentage);

        // Ensure progress is between 0 and 100
        const newProgress = Math.min(100, Math.max(0, scrollPercentage));
        setProgress(newProgress);
      }
    };

    const scrollableDiv = ref.current;
    if (scrollableDiv) {
      scrollableDiv.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener("scroll", handleScroll);
      }
    };
  }, []); 

  return (
    <div className="flex">
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Sidebar />
      <Profilebrowse ref={ref}/>
    </div>
  );
};

export default Profile_Job;
