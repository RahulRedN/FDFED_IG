import { Filter, SearchCode, Navigation,ArrowDown10 } from 'lucide-react';
import { useState } from 'react';
import { FaHouse } from "react-icons/fa6";
import { Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Tooltip } from "@chakra-ui/react"

const Filters = () => {

    const [isClicked, setIsClicked] = useState(false);
    const [isClickedLoc, setIsClickedLoc] = useState(false);
    const [sliderValue, setSliderValue] = useState(5)
    const [showTooltip, setShowTooltip] = useState(false)

    return (
        <div className="w-[20vw] h-[70vh] p-3 sticky flex-[2] shadow-xl border border-gray-100">


            <div className="mt-5 flex justify-center items-center gap-1">
                <Filter size={25} color='#60a5fa' />
                <h1 className='text-zinc-800 font-[600] tracking-wider'>Filters</h1>
            </div>

            <div className="mt-5">
                <label className='font-[600]'>Search by Position</label>
                <div className="relative flex items-center">
                    <SearchCode size={20} className="absolute left-2 top-[0.95rem]" />
                    <input
                        type="text"
                        placeholder="Search Job..."
                        className="mt-1 border border-zinc-400 p-2 pl-8 w-[95%] rounded-md hover:border-blue-500 focus:border-blue-500 outline-none placeholder:text-zinc-600"
                    />
                </div>
            </div>

            <div className="mt-5">
                <label className='font-[600]'>Search by Location</label>
                <div className="relative flex items-center">
                    <Navigation size={20} className="absolute left-2 top-[0.95rem] text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search Location..."
                        className="mt-1 border border-zinc-400 p-2 pl-8 w-[95%] rounded-md hover:border-blue-500 focus:border-blue-500 outline-none placeholder:text-zinc-600"
                    />
                </div>
            </div>


            <div onClick={() => { setIsClicked(!isClicked); }}
                className={`mt-5 p-2 w-fit flex items-center border-2 font-[600] gap-2 cursor-pointer border-sky-500 rounded-md ${isClicked ? "bg-sky-500 text-white" : "text-sky-500 bg-white"} transition-colors duration-500 ease-in-out`}>
                <FaHouse size={18} />
                <h1 className='font-[600]'>Work from home</h1>
            </div>


            <div onClick={() => { setIsClickedLoc(!isClickedLoc); }}
                className={`mt-5 p-2 w-fit flex items-center border-2 font-[600] cursor-pointer gap-2 border-green-500 rounded-md ${isClickedLoc ? "bg-green-500 text-white" : "text-green-500 bg-white"} transition-colors duration-500 ease-in-out`}>
                <ArrowDown10 size={25} />
                <h1 className='font-[600] tracking-wide'>Sort by salary</h1>
            </div>


            <div className="mt-5 w-full">
                <h1 className='font-[600]'>Annual Salary(in lakhs)</h1>
                <div className="w-full p-2">
                    <Slider
                        id='slider'
                        defaultValue={0}
                        step={20}
                        min={0}
                        max={100}
                        colorScheme='blue'
                        onChange={(v) => setSliderValue(v)}
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                        direction='rtl'
                    >
                        <br></br>
                        <SliderMark value={0} mt='1' fontSize='sm'>
                            0
                        </SliderMark>
                        <SliderMark value={20} mt='1' ml="-1" fontSize='sm'>
                            20
                        </SliderMark>
                        <SliderMark value={40} mt='1' ml="-1" fontSize='sm'>
                            40
                        </SliderMark>
                        <SliderMark value={60} mt='1' ml="-1" fontSize='sm'>
                            60
                        </SliderMark>
                        <SliderMark value={80} mt='1' ml="-1" fontSize='sm'>
                            80
                        </SliderMark>
                        <SliderTrack>
                            <SliderFilledTrack />
                        </SliderTrack>
                        <Tooltip
                            hasArrow
                            bg='blue.500'
                            color='white'
                            placement='top'
                            isOpen={showTooltip}
                            label={`${sliderValue}`}
                        >
                            <SliderThumb />
                        </Tooltip>
                    </Slider>
                </div>
                

            </div>
        </div>
    )
}

export default Filters
