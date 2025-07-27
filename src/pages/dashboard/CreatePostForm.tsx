import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, storage } from "../../services/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../services/config";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  if (!user) return <p className="text-white p-4">Please log in to create a post.</p>;

  const initialValues = {
    caption: "",
    image: null as File | null,
  };

  const validationSchema = Yup.object({
    caption: Yup.string().required("Caption is required"),
    image: Yup.mixed()
      .test("fileSize", "File too large", value => !value || value.size <= 5 * 1024 * 1024)
      .test("fileType", "Unsupported File Format", value =>
        !value || ["image/jpeg", "image/png", "image/webp"].includes(value.type)
      ),
  });

  const handleSubmit = async (values: typeof initialValues, { setSubmitting, resetForm }: any) => {
    try {
      let imageUrl = null;

      // Upload image if exists
      if (values.image) {
        const imageRef = ref(storage, `posts/${user.uid}-${Date.now()}`);
        const snapshot = await uploadBytes(imageRef, values.image);
        imageUrl = await getDownloadURL(snapshot.ref);
      }

      await addDoc(collection(db, "posts"), {
        caption: values.caption,
        mediaUrl: imageUrl,
        createdAt: serverTimestamp(),
        likes: 0,
        commentsCount: 0,
        userId: user.uid,
        username: user.displayName || user.email || "Anonymous",
        userPhoto: user.photoURL || null,
      });

      resetForm();
      alert("✅ Post created!");
      navigate("/dashboard/homefeed");
    } catch (err) {
      console.error("Post error:", err);
      alert("❌ Error creating post");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto text-white">
      <h2 className="text-2xl font-bold mb-4">Create Post as <span className="text-purple-400">{user.displayName || user.email}</span></h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ setFieldValue, isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="caption" className="block mb-1">Caption</label>
              <Field
                name="caption"
                as="textarea"
                rows={3}
                placeholder="What's on your mind?"
                className="w-full p-2 rounded bg-zinc-800 border border-zinc-700 text-white"
              />
              <ErrorMessage name="caption" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div>
              <label htmlFor="image" className="block mb-1">Image (optional)</label>
              <input
                name="image"
                type="file"
                accept="image/*"
                onChange={(e) => setFieldValue("image", e.currentTarget.files?.[0])}
                className="w-full p-2 rounded bg-zinc-800 text-white"
              />
              <ErrorMessage name="image" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-white"
            >
              {isSubmitting ? "Posting..." : "Post"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
