import Footer from "../../components/Footer";
import Hero from "../../components/Hero";


export default function Home() {

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

