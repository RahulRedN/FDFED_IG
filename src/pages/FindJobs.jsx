import { useRef } from "react";
import FindJobCard from "../components/FindJobCard";

const FindJobs = () => {

    const filter = useRef(null);
    const jobs = useRef(null);

    return (
        <div className="m-6 bg-zinc-100 flex relative">
            <div ref={filter} className="bg-yellow-100 h-fit sticky flex-[3]">
                d
            </div>
            <div ref={jobs} className="bg-zinc-100 m-1 items-center justify-center flex-[9] flex flex-wrap gap-2">
                <FindJobCard />
                <FindJobCard />
                <FindJobCard />
                <FindJobCard />
                <FindJobCard />
                <FindJobCard />
            </div>
        </div>
    )
}

export default FindJobs
