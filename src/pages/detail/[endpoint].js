import Layout from "../components/layout"
import Image from "next/image"
import { useRouter } from "next/router"


export async function getServerSideProps({query}){

    const res = await fetch('https://otakudesuapieksa.vercel.app/detail/'+query.endpoint)
    const posts = await res.json()
  
    return {
      props: {
        posts,
      },
    }
}

export default function Detail({posts}){
    const router = useRouter()
    const post = posts.data.arr[0]
    return(
        <>
            <Layout title="Detail">
                <div className="w-full sm:w-1/2 flex justify-center mx-auto p-5 sm:flex-row flex-col sm:items-start items-center">
                    <div className="sm:mr-5">
                        <Image src={post.fotonime} width={500} height={600} alt="Thumbnail"/>
                    </div>
                    <div className="my-2 sm:my-0">
                        <div className="font-bold text-2xl">{post.judul}</div>
                        <div>{post.skor}</div>
                        <div>{post.produser}</div>
                        <div>{post.status}</div>
                        <div>{post.totaleps}</div>
                        <div>{post.studio}</div>
                        <div>{post.genre}</div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2 mx-auto p-5 bg-white bg-opacity-40 backdrop-blur-sm">
                    {post.sinopsis}
                </div>
                <ul className="w-full sm:w-1/2 mx-auto mt-5 p-5 bg-white bg-opacity-40 backdrop-blur-sm">
                    {post.episodelist.map((item)=>(
                        <li className="text-center rounded-md bg-teal-500 my-5" key={item.endpoint}>
                            <button className="text-white font-bold w-full p-5 block" onClick={()=> router.push("/stream/"+item.endpoint)}>{item.title}</button>
                        </li>
                    ))}
                </ul>
            </Layout>
        </>
    )
}