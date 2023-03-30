import Link from "next/link";
import Layout from "./components/layout";

export async function getServerSideProps(){
    const res = await fetch('https://otakudesuapieksa.vercel.app/genrelist')
    const posts = await res.json()
  
    return {
      props: {
        posts,
      },
    }
}


export default function genreList({posts}){
    const postList = posts.data.arr
    return(
        <>
        <Layout title="genreList">
            <div className="flex justify-center">
                <div className="sm:w-1/2 p-5 w-full">
                    <div className="font-bold text-2xl">
                        Genres:
                    </div>
                    <div className="min-h-screen">
                        <ul className="px-5 py-8 flex justify-evenly flex-wrap">
                            {postList.map((result)=>(
                                <li key={result.id}>
                                    <Link title={`Genre ${result.nama}`} href={`/genre/${result.endpoint}`} className="block m-2 bg-teal-600 px-5 py-3 font-bold hover:bg-teal-800">
                                          {result.nama}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )
}