import Layout from "../components/layout"


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
    const post = posts.data.arr[0]
    return(
        <>
            <Layout title="Detail">
                <div className="w-full sm:w-1/2 flex justify-center mx-auto p-5 sm:flex-row flex-col sm:items-start items-center">
                    <div className="mr-5">
                        <img src={post.fotonime} alt="Thumbnail"/>
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
                            <a className="text-white font-bold w-full p-5 block" href={"/stream/"+item.endpoint}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </Layout>
        </>
    )
}