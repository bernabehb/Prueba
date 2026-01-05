import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

const CustomSwal = MySwal.mixin({
  customClass: {
    confirmButton: "bg-blue-600 text-white px-6 py-2 rounded-lg mx-2 hover:bg-blue-700 transition-colors font-medium",
    cancelButton: "bg-gray-200 text-gray-800 px-6 py-2 rounded-lg mx-2 hover:bg-gray-300 transition-colors font-medium",
    popup: "rounded-2xl border-none shadow-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white p-6",
    title: "text-2xl font-bold mb-4",
    htmlContainer: "text-slate-600 dark:text-slate-400"
  },
  buttonsStyling: false, 
});

export const showAlert = {
  success: (title, text = "") => {
    return CustomSwal.fire({
      icon: 'success',
      title,
      text,
      timer: 2500
    });
  },

  error: (title, text = "") => {
    return CustomSwal.fire({
      icon: 'error',
      title,
      text,
    });
  },


  confirm: async (title, text) => {
    const result = await CustomSwal.fire({
      title,
      text,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    });
    
    return result.isConfirmed;
  }
};
