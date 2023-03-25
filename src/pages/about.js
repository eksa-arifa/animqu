import Layout from "./components/layout";

export default function About(){
    return(
        <>
            <Layout title="About">
                <div className="sm:w-1/2 p-4 m-auto h-screen">
                    <div className="font-bold text-2xl">About:</div>
                    <div className="my-5 bg-white bg-opacity-40 backdrop-blur-sm p-5">
                        Hai, enjoy this app guys, app ini aku buat untuk kalian yg mau
                        nonton anime gratis tanpa iklan. Karena tanpa iklan, otomatis aku nggak dapat penghasilan 
                        dari app ini. Olehkarena itu, demi keberlangsungan hidup app ini, aku nggak maksa, tapi yang mau dan punya
                        uang lebih silahkan bisa donasi ke aku. Kalo kalian mau kasih saran juga
                        bisa kirimin aja email ke admin. Oh ya, admin kasih tau aja, kalo sebenernya data dari app ini admin ambil
                        dari web otakudesu, karena dana yang kurang, jadi hanya itu yang bisa admin lakukan, jadi jika anime yang kalian
                        cari tidak ada, jangan salahkan admin. Jangan lupa kritik
                        dan sarannya guyys <i className="fa fa-heart text-pink-600"></i>...
                    </div>
                    <div className="w-full text-center font-bold">
                        Email: animqu@gmail.com
                    </div>
                </div>
            </Layout>
        </>
    )
}