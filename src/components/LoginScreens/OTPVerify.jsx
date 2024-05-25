import React, { useState, useEffect, useRef } from "react";
import arrowLeft from "../../assets/LoginScreen/arrowLeft.png";
import { useNavigate } from "react-router";
import verifyOTP from "../../actions/LoginScreens/verifyOTP";
import selfVerifyOTP from "../../actions/LoginScreens/selfVerifyOTP";
import { useForm } from "react-hook-form";
import resendOTP from "../../actions/LoginScreens/resendOTP";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OTPVerify() {
  const navigate = useNavigate();
  const { register, handleSubmit, setValue, watch } = useForm();
  const [errors, setErrors] = useState({});
  const [resendTimer, setResendTimer] = useState(0);

  const inputRefs = useRef([]);

  const verifyOtpSchema = Yup.object({
    firstDigit: Yup.string()
      .required("Code is required")
      .matches(/^\d$/, "OTP must be a single digit"),
    secondDigit: Yup.string()
      .required("Code is required")
      .matches(/^\d$/, "OTP must be a single digit"),
    thirdDigit: Yup.string()
      .required("Code is required")
      .matches(/^\d$/, "OTP must be a single digit"),
    fourthDigit: Yup.string()
      .required("Code is required")
      .matches(/^\d$/, "OTP must be a single digit"),
  });

  useEffect(() => {
    let timer;
    if (resendTimer > 0) {
      timer = setInterval(() => {
        setResendTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [resendTimer]);

  const otpVerifyHandler = async (formData) => {
    setErrors("");
    try {
      await verifyOtpSchema.validate(formData, { abortEarly: false });
      setErrors({});

      const otp =
        formData.firstDigit +
        formData.secondDigit +
        formData.thirdDigit +
        formData.fourthDigit;

      const data = {
        usercode: "i9lBY5euU0vw",
        user_id: "1",
        sub_user_id: "0",
        student_id: "234",
        otp: otp,
        exam_id: "2",
      };

      const response = await verifyOTP(data);

      if (response.success) {
        navigate("/dashboard");
      } else {
        setErrors({ general: "Invalid OTP" });
      }
    } catch (error) {
      console.log("Error while verifying OTP :: ", error);
      if (error.inner) {
        const newErrors = {};
        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      } else {
        toast.error("Enter valid otp");
      }
    }
  };

  const resendOTPHandler = async (event) => {
    try {
      const data = {
        id_self_student: "6",
      };
      await resendOTP(data);
    } catch (error) {
      console.log("Error while resending OTP :: ", error);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      setValue(e.target.name, value);
      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else {
      setValue(e.target.name, "");
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="w-1/4 bg-white right-64 absolute rounded-3xl border h-2/3 p-4 z-[1]">
      <div className="flex justify-between items-center">
        <img
          src={arrowLeft}
          alt=""
          className="bg-[#1C4481] w-6 h-6 rounded-full"
          onClick={handleBack}
        />
        <div className="flex flex-col items-end">
          <span className="font-semibold text-[#AFAFAF]">Candidate</span>
          <span className="font-semibold text-[#555555]">Panel</span>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(otpVerifyHandler)}
        className="flex flex-col mt-14 items-center gap-6"
      >
        <span className="text-sm font-medium">
          Enter 4 digit code sent to your mobile phone
        </span>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            {["firstDigit", "secondDigit", "thirdDigit", "fourthDigit"].map(
              (name, index) => (
                <div
                  key={name}
                  className="w-12 h-12 flex items-center justify-center"
                >
                  <input
                    type="text"
                    className="h-12 appearance-none enabled:appearance-none w-12 p-4 text-xl font-medium border-blue-700 border rounded outline-none"
                    maxLength="1"
                    inputMode="numeric"
                    {...register(name)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    onChange={(e) => handleInputChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                </div>
              )
            )}
          </div>
          {errors.firstDigit ||
          errors.secondDigit ||
          errors.thirdDigit ||
          errors.fourthDigit ? (
            <div className="error flex text-red-600 font-medium text-sm">
              Please enter a valid 4-digit code.
            </div>
          ) : null}
          {errors.general && (
            <div className="error flex text-red-600 font-medium text-sm">
              {errors.general}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="bg-[#1C4481] rounded-3xl w-full h-10 font-medium text-white"
        >
          Submit
        </button>
        <button
          onClick={resendOTPHandler}
          className="text-sm text-[#50B4ED]"
          disabled={resendTimer > 0}
        >
          {resendTimer > 0 ? `Resend (${resendTimer}s)` : "Resend"}
        </button>
      </form>
    </div>
  );
}

export default OTPVerify;
