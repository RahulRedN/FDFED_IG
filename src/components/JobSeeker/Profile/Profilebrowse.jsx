import ProfileNavbar from "./ProfileNavbar";
import UpdateInfoProfile_Job from "./UpdateInfoProfile_Job";

const Profilebrowse = () => {
  return (
    <div className="flex-[4] max-h-screen overflow-y-auto scrollbar-none">
      <ProfileNavbar />
      <UpdateInfoProfile_Job />
    </div>
  );
};

export default Profilebrowse;
