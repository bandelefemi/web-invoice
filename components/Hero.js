import { closePaymentModal, useFlutterwave } from 'flutterwave-react-v3';
import { useRouter } from 'next/router';
import React from 'react'

const Hero = ({ui, frontend, backend,phone, email, name}) => {

  const total = ui + frontend + backend
  const route = useRouter()




  const config = {
    public_key: "FLWPUBK-4b4012f64446ccc8708cb63741daed58-X",
    tx_ref: Date.now(),
    amount: total,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: email,
      phone_number: phone,
      name: name,
    },
    customizations: {
      title: "Your Web Project",
      description: "Part/full payment for web development services",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config)




  return (
    <div className=' bg-[#222222] h-full p-6 md:p-12'>
        
        
        {/* header */}
        <div className=' flex items-center'>
            <div className=" text-white text-4xl md:text-7xl md:py-2 md:px-4 px-3 py-1  border border-orange ">
                B
            </div>

            {/* heading */}
            <div className=' flex flex-col mx-auto'>
                <p className=' text-white text-lg md:text-xl tracking-wide font-light'>
                  Invoice <span>|</span> <span>{name}</span>
                </p>
                <p className=' text-[#999999] font-extralight text-sm md:mt-2'>
                  <span className=' font-normal'>No.</span>  <span>0032</span> <span>|</span> <span className=' font-normal'>Date: </span> <span>{new Date().toJSON().slice(0, 10)}</span>
                </p>
            </div>
        </div>

        {/* address area */}
        <div className=' mt-10 flex justify-center tracking-wide gap-20 '>
          <div className=' text-white'>
            <p className=' text-white text-lg'>
              From
            </p>
            <p className=' text-xs font-light'>
              Bandele Femi
            </p>
            <p className=' text-xs font-thin'>
              Abuja, Nigeria 
            </p>
            <p className=' text-xs font-thin'>
              bandelefemi@gmail.com
            </p>
          </div>
          <div className=' text-white'>
          <p className=' text-white text-lg'>
              To
            </p>
            <p className=' text-xs font-light'>
              {name}
            </p>
            <p className=' text-xs font-thin'>
              Abuja, Nigetia 
            </p>
            <p className=' text-xs font-thin'>
              {email}
            </p>
          </div>
        </div>


        {/* invoice table */}
        <div className=' flex items-center md:items-start mt-16 flex-col md:flex-row'>


          <div className=' mb-6 md:mb-0 w-full items-center md:items-start md:w-40 flex md:flex-col gap-4 text-sec'>
            <div className="">
              <p className=' text-orange text-sm'>
                INFO
              </p>
            </div>
            <div className=" text-xs">
              <p>
                Account name
              </p>
              <p className=' font-extralight mt-1'>
                Bandele Femi
              </p>
            </div>
            <div className=" text-xs">
            <p>
                Account Number
              </p>
              <p className=' font-extralight mt-1'>
                0171031235
              </p>
            </div>
            <div className=" text-xs">
            <p>
                Bank name
              </p>
              <p className=' font-extralight mt-1'>
                GTBank
              </p>
            </div>
          </div>

          {/* table data */}
          
          <div className=' md:ml-5 flex flex-col w-full'>

          <div className=' border border-highlight rounded-xl overflow-hidden'>
            <div className=''>
              <table className=' text-white w-full text-left'>
                <thead className=' text-sm rounded-xl bg-gray-700/20'>

                <tr className=' '>
                  <th className=' px-6 py-2'>
                      Description      
                  </th>
                  <th className=' px-6 py-2 text-end'>
                      Amount   
                  </th>
                </tr>
                </thead>
                <tbody className=' text-xs'>
                  <tr className=' border-b border-highlight'>
                    <td className=' px-6 py-2'>
                      <p>UI / UX</p>
                      <p className=' font-extralight'>
                      The visual and interactive elements, overall experience, ensuring that the product is useful, usable, and enjoyable for its intended users
                      </p>
                    </td>
                    <td className=' px-6 py-2 text-end'>
                    &#8358;{ui.toLocaleString("en-US")}
                    </td>
                  </tr>
                  <tr className=' border-b border-highlight'>
                    <td className=' px-6 py-2'>
                      <p>Frontend</p>
                      <p className=' font-extralight'>
                        Implementing the user-facing using HTML, CSS, and JavaScript. Creating visually appealing, interactive, and responsive interfaces that ensure a seamless user experience.</p>
                    </td>
                    <td className=' px-6 py-2 text-end'>
                    &#8358;{frontend.toLocaleString("en-US")}
                    </td>
                  </tr>
                  <tr className='  border-highlight'>
                    <td className=' px-6 py-2'>
                      <p>Backend</p>
                      <p className=' font-extralight'>
                      Creating the server-side logic and infrastructure that powers websites, handling data storage, processing, and communication between the front-end and databases.
                      </p>
                    </td>
                    <td className=' px-6 py-2 text-end'>
                    &#8358;{backend.toLocaleString("en-US")}
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
            
          </div>
          <div className=' mt-10 bg-primary p-7 border border-highlight rounded-xl text-white flex justify-end gap-28 font-light text-xs'>
              <div>
                <p>sub Total</p>
                <p>vat -</p>
              </div>
              <div>
                <p>&#8358;{total.toLocaleString("en-US")}</p>
                <p>-</p>
              </div>
          </div>


          <div className=' mt-10  border-highlight rounded-xl text-white flex justify-end gap-20 font-light text-xs'>
              <div className=' flex items-center font-normal text-base uppercase'>
                <p>Total</p>
              </div>
              <div className=' px-6 py-2 border-orange flex items-center rounded-2xl text-orange font-medium border-2'>
                <p>&#8358; {total.toLocaleString("en-US")}</p>
              </div>
          </div>
         <div className=' flex justify-end mt-4'>
          <div 
            onClick={()=> handleFlutterPayment({
              callback: (res) => {
                console.log(res);
                closePaymentModal()
                if(res.status === "successful"){
                  route.push('/success')
                }
              }
            })}
            className=' cursor-pointer transition ease-in-out duration-500 text-white py-2 px-6 border border-orange rounded-2xl hover:bg-orange uppercase text-sm'>
            pay online now
          </div>
         </div>

          </div>


        </div>
    </div>
  )
}

export default Hero