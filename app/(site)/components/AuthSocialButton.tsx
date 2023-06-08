import { IconType } from "react-icons";
interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}
const AuthSocilaButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-gray-500 ring-gray-300 hover:bg-gray-300 focus-outline-offset-0 border-color: rgb(71 85 105);
   "
    >
      <Icon />
    </button>
  );
};
export default AuthSocilaButton;
