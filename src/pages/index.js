import Layout from "./components/layout";


export async function getStaticProps() {

    const res = await fetch('https://otakudesuapieksa.vercel.app/terbaru')
    const posts = await res.json()
  
    return {
      props: {
        posts,
      },
    }
  }


export default function Home({posts}){
    

    return(
        <>
            <Layout title="Home">
                <div className="flex justify-center">
                <div className="sm:w-1/2 p-5 w-full">
                    <form className="w-full px-5 sm:px-10 py-4 flex justify-center items-center">
                        <input name="search" placeholder="One Piece..." className="w-3/4 mr-4 py-3 px-4 outline-none"/>
                        <button type="submit" className="w-1/4 bg-teal-600 py-3 rounded-sm">Search</button>
                    </form>

                    <div>
                        <h2 className="font-bold text-2xl">Terbaru:</h2>
                        <ul className="flex justify-evenly flex-wrap">
                            {posts.data.arr.map(dats => (
                                    <li className="m-4 w-60 relative" key={dats.endpoint}>
                                        <a href={"/detail/"+dats.endpoint}>
                                            <img className="w-full" src={dats.thumb} alt="thumbnail"/>
                                            <div className="w-full p-2 font-bold text-xl absolute bottom-0 left-0 bg-opacity-40 bg-black backdrop-blur-sm">{dats.judul}</div>
                                            <div className="p-2 absolute top-1 left-1 bg-teal-600">{dats.episodeBaru}</div>
                                        </a>
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