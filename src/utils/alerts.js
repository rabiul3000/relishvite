import Swal from "sweetalert2";

const successAlert = (text) => {
  return Swal.fire({
    title: text,
    icon: "success",
  });
};

const errorAlert = (text) => {
  return Swal.fire({
    title: "Error!",
    text: text,
    icon: "error",
  });
};

export { successAlert, errorAlert };
