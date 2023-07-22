import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import { useEffect } from "react";


export default function Home() {

  const router = useRouter()

  useEffect(()=> {
    router.push('/404')
  }, [])

  // const {data: session} = useSession()
  return (
    <div className=" h-full">
      <Hero 
        ui={0} 
        frontend={0} 
        backend={0} 
        name={""}
        phone ={''}
        email= {""} />
      <Footer />
    </div>
  )
}

