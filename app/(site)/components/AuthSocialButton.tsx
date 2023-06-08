import { IconType } from "react-icons";
interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
  children: React.ReactNode;
}
const AuthSocilaButton: React.FC<AuthSocialButtonProps> = ({
  icon: Icon,
  onClick,
  children,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full justify-center rounded-md bg-gray-100 px-4 py-2 text-gray-500 ring-gray-300 hover:bg-gray-300 focus-outline-offset-2 items-center gap-2
   "
    >
      <Icon /> {children}
    </button>
  );
};
export default AuthSocilaButton;
