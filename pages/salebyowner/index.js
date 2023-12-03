import React from "react";
import MainHeader from "../../components/MainHeader";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaWrench } from "react-icons/fa";
import { AiOutlineLineChart } from "react-icons/ai";
import { MdPriceChange } from "react-icons/md";
import { MdChecklistRtl } from "react-icons/md";
import { HiShoppingCart } from "react-icons/hi";
import { MdQuiz } from "react-icons/md";
import Image from "next/image";
// import Chatbot from "../../components/Chatbot";

const SBOData = [
  {ref: "/salebyowner/preparationandstaging",title: "Preparation and Staging", para: "Staging is the icing on the cake that gives your home a professional touch. With a few props and the following tips,your home will show like a model.", img: "/ROI.jpg"},
  {ref: "/salebyowner/fsbomarketingchecklist",title: "Marketing Checklist", para: "Successfully marketing your home means much more than putting a for sale sign in your front yard.", img: "/marketing checlist.png"},
  {ref: "/salebyowner/pricing",title: "Pricing", para: `The average Realtor-assisted home sale realizes a 16% higher sale price than does a FSBO. Is that 6%
  commission worth it? You do the math.`, img: "/FSBO pricing.png"},
  {ref: "/salebyowner/safeshowingchecklist",title: "Safe Showing Checklist", para: "Staging is the icing on the cake that gives your home a professional touch. With a few props and the following tips,your home will show like a model.", img: "/safe showing.png"},
  {ref: "/salebyowner/qualifyingthebuyer",title: "Qualifying the Buyer", para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.", img: "/qualifying the buyer for fsbp.png"},
  {ref: "/salebyowner/testquiz",title: "Quiz: Test Your Real Estate IQ", para: "Do you have what it takes to go it alone ? Test your real estate knowledge.", img: "/FSBO IQ.png"}
]

function Salebyowner() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);
  return (
    <div>
      {/* <Chatbot></Chatbot> */}
      <MainHeader page={""}></MainHeader>
      <div className="px-3 sm:py-12 py-3">
        <div className="text-center sm:text-3xl text-2xl  font-header font-medium pb-8">
          For Sale By Owner
        </div>
        <div className="flex w-full justify-center font md:text-2xl  md:font-header text-center">

        Want to get on the lotuss FSBO list?&nbsp;  <Link href={"/salebyowner/fsbolisting"} className="text-custom-yellow"> Click here</Link> , and we&apos;ll help you create engagement for your FSBO listing
        </div>
        {/* <div className=" flex flex-col space-y-10 sm:pt-0 pt-5">
           <div className="flex flex-col space-y-2 sm:px-12 px-3 sm:py-3 py-3 border-2 border-l-0 border-custom-yellow rounded relative">
             <div className="text-5xl absolute sm:h-24 sm:w-24 h-12 w-12   sm:top-4 sm:-left-12 -top-4 -left-4 rounded-full flex justify-center items-center sm:text-6xl  font-threeline  text-custom-yellow bg-white">
               <FaWrench></FaWrench>
             </div>
             <div className="text-2xl font-header font-semibold pl-3">
               Preparation and Staging
             </div>
             <div className="text-lg font-Montserrat pl-3">
               Staging is the icing on the cake that gives your home a
               professional touch. With a few props and the following tips, your
               home will show like a model. <br></br>
               <Link
                 href="/salebyowner/preparationandstaging"
                 className="text-custom-yellow font-semibold underline underline-offset-1"
               >
                 Find out more
               </Link>
             </div>
           </div>
           <div className="flex flex-col space-y-2 sm:px-12 px-3 sm:py-3 py-3 border-2 border-r-0 border-custom-yellow rounded relative">
             <div className="text-5xl absolute sm:h-24 sm:w-24 h-12 w-12   sm:top-4 sm:-right-12 -top-4 -right-4 rounded-full flex justify-center items-center sm:text-6xl  font-threeline  text-custom-yellow bg-white">
               <AiOutlineLineChart></AiOutlineLineChart>
             </div>
             <div className="text-2xl font-header font-semibold pl-3">
               FSBO Marketing Checklist
             </div>
             <div className="text-lg font-Montserrat pl-3">
               Successfully marketing your home means much more than putting a
               for sale sign in your front yard <br></br>
               <Link
                 href="/salebyowner/fsbomarketingchecklist"
                 className="text-custom-yellow font-semibold underline underline-offset-1"
               >
                 Find out more
               </Link>
             </div>
           </div>
           <div className="flex flex-col space-y-2 sm:px-12 px-3 sm:py-3 py-3 border-2 border-l-0 border-custom-yellow rounded relative">
             <div className="text-5xl absolute sm:h-24 sm:w-24 h-12 w-12   sm:top-4 sm:-left-12 -top-4 -left-4 rounded-full flex justify-center items-center sm:text-6xl  font-threeline  text-custom-yellow bg-white">
               <MdPriceChange></MdPriceChange>
             </div>
             <div className="text-2xl font-header font-semibold pl-3">
               Pricing
             </div>
             <div className="text-lg font-Montserrat pl-3">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
               <br></br>
               <Link
                 href="/salebyowner/pricing"
                 className="text-custom-yellow font-semibold underline underline-offset-1"
               >
                 Find out more
               </Link>
             </div>
           </div>
           <div className="flex flex-col space-y-2 sm:px-12 px-3 sm:py-3 py-3 border-2 border-r-0 border-custom-yellow rounded relative">
             <div className="text-5xl absolute sm:h-24 sm:w-24 h-12 w-12   sm:top-4 sm:-right-12 -top-4 -right-4 rounded-full flex justify-center items-center sm:text-6xl  font-threeline  text-custom-yellow bg-white">
               <MdChecklistRtl></MdChecklistRtl>
             </div>
             <div className="text-2xl font-header font-semibold pl-3">
               Safe Showing Checklist
             </div>
             <div className="text-lg font-Montserrat pl-3">
               Staging is the icing on the cake that gives your home a
               professional touch. With a few props and the following tips, your
               home will show like a model.<br></br>{" "}
               <Link
                 href="/salebyowner/safeshowingchecklist"
                 className="text-custom-yellow font-semibold underline underline-offset-1"
               >
                 Find out more
               </Link>
             </div>
           </div>
           <div className="flex flex-col space-y-2 sm:px-12 px-3 sm:py-3 py-3 border-2 border-l-0 border-custom-yellow rounded relative">
             <div className="text-5xl absolute sm:h-24 sm:w-24 h-12 w-12   sm:top-4 sm:-left-12 -top-4 -left-4 rounded-full flex justify-center items-center sm:text-6xl  font-threeline  text-custom-yellow bg-white">
               <HiShoppingCart></HiShoppingCart>
             </div>
             <div className="text-2xl font-header font-semibold pl-3">
               Qualifying the buyer
             </div>
             <div className="text-lg font-Montserrat pl-3">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor incididunt ut labore et dolore magna aliqua.
               <br></br>{" "}
               <Link
                 href="/salebyowner/qualifyingthebuyer"
                 className="text-custom-yellow font-semibold underline underline-offset-1"
               >
                 Find out more
               </Link>
             </div>
           </div>
           <div className="flex flex-col space-y-2 sm:px-12 px-3 sm:py-3 py-3 border-2 border-r-0 border-custom-yellow rounded relative">
             <div className="text-5xl absolute sm:h-24 sm:w-24 h-12 w-12   sm:top-4 sm:-right-12 -top-4 -right-4 rounded-full flex justify-center items-center sm:text-6xl  font-threeline  text-custom-yellow bg-white">
               <MdQuiz></MdQuiz>
             </div>
             <div className="text-2xl font-header font-semibold pl-3">
               Test Your Real Estate IQ Quiz
             </div>
             <div className="text-lg font-Montserrat pl-3">
               Do you have what it takes to go it alone? Test your real estate
               knowledge<br></br>{" "}
               <Link
                 href="/salebyowner/testquiz"
                 className="text-custom-yellow font-semibold underline underline-offset-1"
               >
                 Find out more
               </Link>
             </div>
           </div>
         </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SBOData.map((data,idx)=>(
          <Link href={data.ref} className="shadow-md shadow-custom-light-yellow rounded-lg bg-white" key={idx}>
            <div className="text-center md:text-left p-8 space-y-5">
              <h3 className="w-full text-custom-yellow text-2xl font-header">
                {data.title}
              </h3>
              <p className="font-Montserrat break-words w-full md:w-[75%] mx-auto md:mx-0">
                {data.para}
              </p>
              <h4 className="text-custom-yellow font-semibold hover:underline hover:decoration-4 hover:decoration-custom-light-yellow text-xl">
                  Find Out More ...
              </h4>
            </div>
            <div className="h-[500px] w-full relative">
              <Image
                alt="..."
                fill
                quality={100}
                src={data.img}
                placeholder="blur"
                blurDataURL="data:image/png;base64,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"
                className="object-cover object-bottom rounded-b-md"
              />
            </div>
          </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Salebyowner;
