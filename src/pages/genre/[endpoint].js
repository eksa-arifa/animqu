import Link from "next/link";
import Layout from "../components/layout";

export async function getServerSideProps({query}){
    const res = await fetch('https://otakudesuapieksa.vercel.app/genres/'+query.endpoint)
    const posts = await res.json()
  
    return {
      props: {
        posts,
      },
    }
}

export default function Genre({posts}){
    const postList = posts.data.arr
    return(
        <>
        <Layout title="Genre">
            <div className="flex justify-center">
                <div className="sm:w-1/2 p-5 w-full">
                    <div className="font-bold text-2xl">
                        Genre:
                    </div>
                    <div className="min-h-screen">
                        <ul className="flex justify-evenly flex-wrap">
                        {postList.map((item)=>(
                                <li className="m-4 sm:w-60 w-32 sticky" key={item.endpoint}>
                                <Link href={"/detail/"+item.endpoint}>
                                    <img src={item.thumb} className="w-full" alt="thumb"/>
                                    <div className="w-full sm:p-2 p-1 font-bold sm:text-xl text-xs absolute bottom-0 left-0 bg-opacity-40 bg-black backdrop-blur-sm">{item.nama}</div>
                                    <div className="p-1 sm:p-2 absolute top-1 left-1 bg-teal-600 text-xs sm:text-lg">{item.rating}</div>
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