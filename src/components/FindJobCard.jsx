import { PackageSearch, TrendingUp, MapPin, Home, CalendarRange, Coins, Hourglass, History } from 'lucide-react';



const FindJobCard = () => {

    const isLocation = true;
    const Posted = false;
  
  return (
    <div className="shadow-xl w-[33vw] min-h-min p-4 border border-gray-200">
    <div className=" min-h-min">
      <div className="max-w-fit border border-gray-300 rounded-md flex items-center gap-2 p-1">
        <TrendingUp strokeWidth={2.30} size={16} color='#059669' />
        <p className='text-sm'>
          Hiring
        </p>
      </div>
      <div className='flex justify-between items-center mt-5'>
        <div className="flex flex-col gap-1">
          <h2 className='tracking-wide text-xl font-bold'>Position</h2>
          <h6 className='text-sm text-gray-400 font-bold tracking-wide'>Company name</h6>
        </div>
        <PackageSearch size={26} />
      </div>

      <div className="mt-5">
        {!isLocation ? (
          <div className="flex items-center gap-2">
            <MapPin size={18} />
            <p className='text-sm'>Location</p>
          </div>
        ) : (
          <div className="flex gap-1">
            <Home size={16} />
            <p className='text-sm tracking-wide'>Work from home</p>
          </div>
        )
        }

        <div className="flex flex-wrap mt-5 gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <CalendarRange size={17} color="#60a5fa" />
              <span className='text-sm text-zinc-500 tracking-wider'>Joining Date</span>
            </div>
            <h1 className='text-sm font-thin'>15/11/2024</h1>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <Coins size={17} color="gold" />
              <span className='text-sm text-zinc-500 tracking-wider'>Salary</span>
            </div>
            <h1 className='text-sm font-thin tracking-wide'> ₹ 5000000</h1>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-1">
              <Hourglass size={16} color="#000000" />
              <span className='text-sm text-zinc-500 tracking-wider'>Experience</span>
            </div>
            <h1 className='text-sm font-thin'>5 years</h1>
          </div>
        </div>




        <div className="flex mt-5 gap-3 items-stretch flex-wrap">
          {!Posted ? (
            <div className="max-w-fit rounded flex items-center gap-1 p-1 bg-green-100">
              <History strokeWidth={2} size={16} color='#4ade80' />
              <p className='text-sm text-green-400'>
                2 days ago
              </p>
            </div>
          ) :
            (<div className="max-w-fit rounded flex items-center gap-1 p-1 bg-sky-100">
              <History strokeWidth={2} size={16} color='#60a5fa' />
              <p className='text-sm text-blue-400'>
                2 days ago
              </p>

            </div>)
          }
          <p className='text-sm p-1 bg-gray-300 text-gray-500 rounded'>Role</p>
          <p className='text-sm p-1 bg-gray-300 text-gray-500 rounded'>React</p>
          <p className='text-sm p-1 bg-gray-300 text-gray-500 rounded'>CSS</p>
          <p className='text-sm p-1 bg-gray-300 text-gray-500 rounded'>Java</p>
        </div>

        <hr className='my-5 text-black' />
        <div className="flex justify-end">
          <button className="bg-zinc-700 hover:bg-zinc-900 text-white tracking-wider py-2 px-4 rounded focus:outline-none focus:shadow-outline
          ">VIEW DETAILS
          </button>

        </div>

      </div>
    </div>
  </div>
  )
}

export default FindJobCard
