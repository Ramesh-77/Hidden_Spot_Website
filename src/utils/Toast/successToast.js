import { toast } from "react-toastify";
export const successToast = (toastName) =>
  toast.success(`${toastName}`, {
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
