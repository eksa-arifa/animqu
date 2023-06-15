import Image from "next/image";
import Layout from "./components/layout";
import { useRouter } from "next/router";
import Link from "next/link";


export async function getServerSideProps() {

    const res = await fetch('https://otakudesuapieksa.vercel.app/terbaru')
    const posts = await res.json()
  
    return {
      props: {
        posts,
      },
    }
  }


export default function Home({posts}){

    const router = useRouter()
    

    return(
        <>
            <Layout title="Home">
                <div className="flex justify-center">
                <div className="sm:w-1/2 p-5 w-full">
                    <form className="w-full px-5 sm:px-10 py-4 flex justify-center items-center" action="/search/">
                        <input name="search" placeholder="One Piece..." className="w-3/4 mr-4 py-3 px-4 outline-none"/>
                        <button type="submit" className="w-1/4 bg-teal-600 py-3 rounded-sm">Search</button>
                    </form>

                    <div className="min-h-screen">
                        <h2 className="font-bold text-2xl">Terbaru:</h2>
                        <ul className="flex justify-evenly flex-wrap">
                            {posts.data.arr.map(dats => (
                                    <li className="m-4 sm:w-60 w-32 sticky" key={dats.endpoint}>
                                        <Link href={"/detail/"+dats.endpoint}>
                                            <Image src={dats.thumb} width={500} height={600} alt="thumb"/>
                                            <div className="w-full p-1 sm:p-2 font-bold sm:text-xl text-xs absolute bottom-0 left-0 bg-opacity-40 bg-black backdrop-blur-sm">{dats.judul}</div>
                                            <div className="p-1 sm:p-2 absolute top-1 left-1 bg-teal-600 text-xs sm:text-lg">{dats.episodeBaru}</div>
                                        </Link>
                                    </li>
                            ))}
                        </ul>
                    </div>
                </div>
                </div>

                <div className="w-screen fixed h-screen bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="w-1/2 bg-white rounded-md p-20">
                        Beralihlah ke <a href="https://animazaa.vercel.app">Animazaa</a> versi upgrade dari animqu, web ini sudah tidak dikembangkan...
                    </div>
                </div>
            </Layout>
        </>
    )
}
