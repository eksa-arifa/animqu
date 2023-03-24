import Layout from "../components/layout" 

export async function getServerSideProps({query}){

    const res = await fetch('https://otakudesuapieksa.vercel.app/stream/'+query.endpoint)
    const posts = await res.json()
  
    return {
      props: {
        posts,
      },
    }
}

export default function Stream({posts}){
    const post = posts.data.arr[0]

    return(
        <>
            <Layout title="Stream">
                <div className="w-full sm:w-1/2 mx-auto bg-white p-5 my-5 bg-opacity-40 backdrop-blur-sm">
                    <iframe className="w-full h-48 sm:h-96" src={post.iframe} allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
                </div>
                <div className="w-full sm:w-1/2 mx-auto bg-white p-5 my-5 bg-opacity-40 backdrop-blur-sm font-bold text-2xl">
                    {post.judul}
                </div>
                <div className="w-full sm:w-1/2 mx-auto bg-white p-5 my-5 bg-opacity-40 backdrop-blur-sm" dangerouslySetInnerHTML={{__html: post.link}}>
                </div>
            </Layout>
        </>
    )
}