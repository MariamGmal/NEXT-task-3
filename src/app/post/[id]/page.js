import React from "react";
import "./page.css";
import Link from "next/link";
import { notFound } from "next/navigation";
const page = async ({ params }) => {
  // const postJson = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${params.id}`
  // );
  // const post = await postJson.json();

  const { id } = params;
  // const newsJson = await fetch(`http://localhost:3000/api/onePost?id=${id}`);
  // let post = await newsJson.json();
  // post = post[0];
  // const nextPost = parseInt(id) + 1;
  // const prevPost = parseInt(id) - 1;

  return (
    <div className="divdetails">
      <div class="row row-cols-1 row-cols-md-3 g-4 ">
        <div className="col mx-auto mt-5 ">
          <div className="card h-100 colcont">
            <div className="card-body">
              {/* <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p> */}
            </div>
            {/* <Link
              className="text-dark mb-2 text-center w-75 mx-auto lin"
              href={`/post/${prevPost}`}>
              Previous Post
            </Link>
            <Link
              className=" mb-2 text-dark text-center  w-75 mx-auto lin"
              href={`/post/${nextPost}`}>
              Next Post
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
