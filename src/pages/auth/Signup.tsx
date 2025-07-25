import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router";
import { Signuser, signwithgoogle } from "../../firebase/auth";

export const Signup = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm your password"),
  });
  // values: typeofinitialValues
  const handleSubmit = async (values: typeof initialValues) => {
    try {
      await Signuser(values.email, values.password);
      toast.success("signup successfully");
      navigate("/login"); // or homepage
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
      await signwithgoogle()
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
