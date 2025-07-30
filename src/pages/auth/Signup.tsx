/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Signuser, signwithgoogle } from "../../services/auth";

export const Signup = () => {
  const navigate = useNavigate();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string()
      .required("Required")
      .min(6, "username at least must be 4 character"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Minimum 8 characters")
      .matches(/[A-Z]/, "At least one uppercase letter")
      .matches(/[a-z]/, "At least one lowercase letter")
      .matches(/[0-9]/, "At least one number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "At least one special character")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm your password"),
  });
  // values: typeofinitialValues
  const handleSubmit = async (values: typeof initialValues) => {
    try {
      await Signuser(values.username, values.email, values.password);
      toast.success("signup successfully");
      setTimeout(() => {
        navigate("/login");
      },1500);
      // or homepage
    } catch (error: any) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("email is already exits. Try again later.");
      } else {
        console.log("something wrong", error);
        toast.error("Signup failed. Try again later.");
      }
    }
  };

  const signinwithgoogle = async () => {
    try {
      await signwithgoogle();
      toast.success("Signed in with Google");
      navigate("/dashboard");
    } catch (error) {
      console.error("Google sign-in error:", error);
      toast.error("Signup failed. Try again later.");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#580A55] to-black text-white">
        <div className="w-full max-w-md bg-black bg-opacity-60 rounded-xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Create Your UniLounge Account
          </h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-4">
              <div>
                <label htmlFor="username" className="block mb-1">
                  Username
                </label>
                <Field
                  type="text"
                  name="username"
                  className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-1">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600"
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block mb-1">
                  Confirm Password
                </label>
                <Field
                  type="password"
                  name="confirmPassword"
                  className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="p"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[var(--Louge-color)] py-2 rounded font-medium"
              >
                Sign Up
              </button>

              <div className="text-center">or</div>

              <button
                type="button"
                onClick={signinwithgoogle}
                className="font-semibold text-md px-4 py-2 rounded-md bg-white text-black flex items-center mx-auto gap-2"
                aria-label="Sign in with Google"
              >
                <FcGoogle size={20} />
                Continue With Google
              </button>
            </Form>
          </Formik>
          <p className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/login" className="text-[var(--Louge-color)] underline">
              Login
            </a>
          </p>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
