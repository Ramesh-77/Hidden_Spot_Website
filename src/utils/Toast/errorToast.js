import { toast } from "react-toastify";
export const errorToast = (toastName) =>
  toast.error(`${toastName}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    // transition: Bounce,
  });
