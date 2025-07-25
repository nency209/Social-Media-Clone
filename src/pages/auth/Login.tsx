import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import { doc, getDoc } from "firebase/firestore";
import { Loginuser } from "../../firebase/auth";
import {db} from '../../firebase/config'

export const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
  });

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      const user=await Loginuser(values.email,values.password)
      const docref=doc(db,'users',user.uid)
      const docsnap=await getDoc(docref)
      if (docsnap.exists()) {
      navigate("/dashboard");
    } else {
      toast.error("Account not found , please sign up first.");
      navigate("/signup");
    }
      // or homepage
    } catch (error)
         {
          console.log("something wrong",error)
          toast.error("Signup failed. Try again later.");
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
