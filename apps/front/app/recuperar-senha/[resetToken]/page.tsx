'use client';

import { ToastContainer } from 'react-toastify';
import RecoveryPasswordForm from 'apps/front/components/recovery-pass-form';

export default function Page({ params }: { params: { resetToken: string } }) {
  return (
    <>
      <RecoveryPasswordForm resetToken={params.resetToken} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
