/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import { doc, getDoc } from "firebase/firestore";
import { Loginuser } from "../../services/auth";
import {db} from '../../services/config'

export const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(8, "Minimum 8 characters")
      .matches(/[A-Z]/, "At least one uppercase letter")
      .matches(/[a-z]/, "At least one lowercase letter")
      .matches(/[0-9]/, "At least one number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "At least one special character")
      .required("Required"),
  });

const handleSubmit = async (values: typeof initialValues) => {
  try {
    const user = await Loginuser(values.email, values.password);

    // Get user profile document from Firestore
    const docRef = doc(db, 'users', user.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      toast.success("Login successful");
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
      
    } 

  } catch (error: any) {
  console.error("Login Error:", error.code);

  if (error.code === "auth/invalid-credential") {
    toast.error("Please sign up first or Wrong password");
    // navigate("/signup");
  } 
   else {
    toast.error("Login failed. Try again later.");
  }
}
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#580A55] to-black text-white">
      <div className="w-full max-w-md bg-black bg-opacity-60 rounded-xl p-8 shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login to UniLounge</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <Field type="email" name="email" className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600" />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1">Password</label>
              <Field type="password" name="password" className="w-full px-3 py-2 rounded bg-gray-800 border border-gray-600" />
              <ErrorMessage name="password" component="p" className="text-red-500 text-sm mt-1" />
            </div>
            <button type="submit" className="w-full bg-[var(--Louge-color)] py-2 rounded font-medium">
             Login
            </button>
          </Form>
        </Formik>
        <p className="mt-4 text-center text-sm">
          Don’t have an account? <a href="/signup" className="text-[var(--Louge-color)] underline">Sign up</a>
        </p>
      </div>
      <ToastContainer/>
    </div>
  );
};
