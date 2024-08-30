import React from "react";
import "./add.css";
import clientPromise from "@/lib/mongobd";

const addpost = () => {
  const create = async (formData) => {
    "use server";
    const title = formData.get("title");
    const body = formData.get("body");

    // const client = await clientPromise;
    // const db = client.db();
    // const res = await db.collection("posts").insertOne({ title, body });
    // console.log(title, body);
    // console.log(res);
  };

  return (
    <div className="cont">
      <form className="form mx-auto" action={create}>
        <div class="form-group">
          <label for="title" className="title text-light">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            placeholder="write post title"
            name="title"
          />
        </div>

        <div class="form-group">
          <label for="body" className="Body text-light">
            Body
          </label>
          <textarea
            class="form-control"
            id="body"
            placeholder="write post body"
            rows="3"
            name="body"></textarea>
        </div>

        <button type="submit" className="btn btnnnn mb-2 mt-5 mx-auto ">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default addpost;

//################################################################################################
// "use client";
// import React, { useState } from "react";
// import "./add.css";

// const addpost = () => {
//   const [formData, setForData] = useState({});
//   const handleChange = (e) => {
//     const key = e.target.name;
//     const value = e.target.value;

//     setForData((formData) => ({ ...formData, [key]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch("http://localhost:3000/api/posts", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//       },
//       body: JSON.stringify(formData),
//     });
//     console.log(res);
//   };
//   return (
//     <div className="cont">
//       <form className="form mx-auto" onSubmit={handleSubmit}>
//         <div class="form-group">
//           <label for="title" className="title text-light">
//             Title
//           </label>
//           <input
//             onChange={handleChange}
//             type="text"
//             class="form-control"
//             id="title"
//             placeholder="write post title"
//             name="title"
//           />
//         </div>

//         <div class="form-group">
//           <label for="body" className="Body text-light">
//             Body
//           </label>
//           <textarea
//             onChange={handleChange}
//             class="form-control"
//             id="body"
//             placeholder="write post body"
//             rows="3"
//             name="body"></textarea>
//         </div>

//         <button type="submit" className="btn btnnnn mb-2 mt-5 mx-auto ">
//           Add Post
//         </button>
//       </form>
//     </div>
//   );
// };

// export default addpost;
