import styles from "./NavCardProfile.module.css";

const NavCardProfile = ({ Icons, text }) => {
  return (
    <div className={"w-full hover:bg-[#4f6be4] p-4 " + styles.card}>
      <div
        className={
          "flex items-center ml-10 gap-3"
        }
      >
        {text !== "Back to Home" && <Icons
          size={32}
          className={`fill-white text-[#455cc6] ` + styles.icon}
        />}
        {text === "Back to Home" && <Icons size={32} className="text-white" />}
        <h1 className="text-white text-xl tracking-wide">{text}</h1>
      </div>
    </div>
  );
};

export default NavCardProfile;
