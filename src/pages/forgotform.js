import React, { useState } from 'react';
import ForgotEmail from './forgot_email';
import ForgotName from './forgot_name';
import ForgotError from './forgot_error';
import myTheme from '../core-ui/theme';
import { ThemeProvider } from '@mui/material/styles';

const ForgorForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNext = (data) => {
    // บันทึกข้อมูลและขั้นตอนถัดไป
    setFormData((prevData) => ({ ...prevData, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <ThemeProvider theme={myTheme}>
      {step === 1 && <ForgotEmail onNext={handleNext} />}
      {step === 2 && (
        <ForgotName
          email={formData.email}
          onNext={handleNext}
        />
      )}
      {step === 3 && <ForgotError />}
      {/* เพิ่มขั้นตอนถัดไปตรงนี้ */}
    </ThemeProvider>
  );
};

export default ForgorForm;
