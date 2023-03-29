import Link from "next/link"
import { useState } from "react"
import Layout from "../components/layout"

export async function getServerSideProps({query}){
    const res = await fetch(`https://otakudesuapieksa.vercel.app/search/${query.search}`)
    const posts = await res.json()
  
    return {
      props: {
        posts,
      },
    }
}

export default function Search({posts}){

    const post = posts.data.arr



    return(
        <>
            <Layout title="Home">
                <div className="flex justify-center">
                <div className="sm:w-1/2 p-5 w-full">
                    <form className="w-full px-5 sm:px-10 py-4 flex justify-center items-center">
                        <input name="search" placeholder="One Piece..." className="w-3/4 mr-4 py-3 px-4 outline-none"/>
                        <button type="submit" className="w-1/4 bg-teal-600 py-3 rounded-sm">Search</button>
                    </form>

                    <div className="min-h-screen">
                        <h2 className="font-bold text-2xl">Hasil pencarian:</h2>
                        <ul className="flex justify-evenly flex-wrap">
                            {      

                                (post.length != 0)? (
                                    post.map((item)=>(
                                        <li className="m-4 sm:w-60 w-32 sticky" key={item.endpoint}>
                                        <Link href={"/detail/"+item.endpoint}>
                                            <img src={item.thumb} className="w-full" alt="thumb"/>
                                            <div className="w-full sm:p-2 p-1 font-bold sm:text-xl text-xs absolute bottom-0 left-0 bg-opacity-40 bg-black backdrop-blur-sm">{item.nama}</div>
                                            <div className="p-1 sm:p-2 absolute top-1 left-1 bg-teal-600 text-xs sm:text-lg">{item.rating}</div>
                                        </Link>
                                        </li>
                                    ))
                                ) : (<div className="h-screen flex justify-center items-center font-bold">Data Tidak Diketemukan</div>)
                             
                            }
                        </ul>
                    </div>
                </div>
                </div>
            </Layout>
        </>
    )
}