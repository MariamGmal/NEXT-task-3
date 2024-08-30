import clientPromise from "@/lib/mongobd";
import Link from "next/link";
import Card from "../../components/Card";
import React from "react";
export const fetchCache = "force-no-store";
//SSR fetching new data every time
const page = async () => {
  // const client = await clientPromise;
  // const db = client.db();
  // const news = await db.collection("news").find({}).toArray();
  // const newsJson = await fetch("http://localhost:3000/api/posts");
  // const news = await newsJson.json();
  return (
    <>
      <h1 className="text-center">posts</h1>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        {/* {news.map((ele) => (
          <Card key={ele.id} id={ele.id} title={ele.title} body={ele.body} />
        ))} */}
      </div>
    </>
  );
};

export default page;
