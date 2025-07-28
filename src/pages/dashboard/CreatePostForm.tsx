/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  serverTimestamp,
  doc,
  getDoc,
  addDoc,
  collection,
} from "firebase/firestore";
import { db, auth } from "../../services/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export const CreatePost = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const [firestoreUser, setFirestoreUser] = useState<{
    username: string;
  } | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (user) {
        const userDocRef = doc(db, "users", user.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          setFirestoreUser(userDocSnap.data() as { username: string });
        }
      }
    };

    fetchUserDetails();
  }, [user]);

  if (!user)
    return <p className="text-white p-4">Please log in to create a post.</p>;

  const initialValues = {
    caption: "",
  };

  const validationSchema = Yup.object({
    caption: Yup.string().required("Caption is required"),
  });

  const handleSubmit = async (
    values: typeof initialValues,
    { setSubmitting, resetForm }: any
  ) => {
    try {
      await addDoc(collection(db, "posts"), {
        caption: values.caption,
        createdAt: serverTimestamp(),
        likes: [],
        commentsCount: 0,
        userId: user.uid,
        username:
          firestoreUser?.username ||
          user.displayName ||
          user.email ||
          "Anonymous",
      });

      resetForm();
      toast.success("✅ Post created!");
      navigate("/dashboard/homefeed");
    } catch (err) {
      console.error("Post error:", err);
      toast.error("❌ Error creating post");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-white">
      <h2 className="text-2xl font-bold mb-4">
        Create Post as{" "}
        <span className="text-purple-400">
          {firestoreUser?.username || user?.email || "User"}
        </span>
      </h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
       
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="caption" className="block mb-1">
                Caption
              </label>
              <Field
                name="caption"
                as="textarea"
                rows={3}
                placeholder="What's on your mind?"
                className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
              />
              <ErrorMessage
                name="caption"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[var(--Louge-color)] hover:cursor-pointer px-4 py-2 rounded text-white"
            >
              {isSubmitting ? "Posting..." : "Post"}
            </button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
};
