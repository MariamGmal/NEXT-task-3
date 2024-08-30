// import clientPromise from "@/lib/mongobd";

// export async function GET(request) {
//   const id = +request.nextUrl.searchParams.get("id");

//   const client = await clientPromise;
//   const db = client.db();
//   const news = await db.collection("news").find({ id: id }).toArray();
//   console.log(news);
//   return new Response(JSON.stringify(news), { status: 200 });
// }
