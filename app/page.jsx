import Image from "next/image";
import FeatureCard from './Component/Others/Card'
import Footer from "./Component/Others/Footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-linear-to-br from-[#1a497e] via-[#0b2a4d] to-[#071a2f] flex items-center justify-center p-6">
      <div className="w-full max-w-7xl bg-linear-to-br from-[#2b5c92] to-[#3b73b9] rounded-3xl shadow-2xl overflow-hidden relative">
        <section className="flex flex-col lg:flex-row items-center px-10 py-16 relative">
          <div className="lg:w-1/2 text-white z-10">
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight">
              Nurturing Lives <br />
              through <br />
              <span className="font-bold">Empathetic Care</span>
            </h1>

            <p className="mt-5 text-blue-100 max-w-md">
              Our dedicated healthcare professionals are committed to providing
              compassionate and personalized care, ensuring your well-being is
              our top priority.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mr-7">
              <FeatureCard emoji="💬" heading="Consult a Doctor" desc="Ask health-related questions and consult certified doctors via chat,
              audio, or video without traveling to far distance."  btnclasses="bg-blue-100 text-blue-700"/>
              <FeatureCard emoji="🩸" heading=" Emergency Blood & Organ Help" desc="Create or respond to emergency blood and organ donation requests
              and connect instantly with donors."  btnclasses="bg-red-100 text-red-600"/>
              <FeatureCard emoji=" 🕒" heading="Anytime, Anywhere" desc="Access healthcare guidance and emergency support even in remote
              villages with low internet connectivity."  btnclasses= "bg-green-100 text-green-700"/> 
            </div>
            
            <div className="mt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 mg  items-center justify-center">
                  
                
             
            </div>
            <Link href='/citizen'>
              <Button className="w-full  mt-2 bg-[#0b468a] hover:bg-[#0b2a4d] ">
                Get Started
              </Button>
            </Link>
            
          </div>
          <div className="lg:w-1/2 relative flex justify-center mt-10 lg:mt-0">
            
              <Image width={520} height={420}
              src="/IMG.png"
              alt="A description of the image for accessibility"
            />
              
          </div>
        </section>

        <div className="bg-white py-4 text-center font-semibold text-gray-800 tracking-wide">
          ✦ Wellness Initiative ✦ Health Care ✦ Wellness Initiative ✦ Health
          Care ✦
        </div>
        <br />
         <section className="bg-[#f5f9ff] py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold text-blue-700">100+</h3>
            <p className="mt-2 text-gray-600">Verified Doctors</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-700">24 x 7</h3>
            <p className="mt-2 text-gray-600">Medical Guidance</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-700">Fast</h3>
            <p className="mt-2 text-gray-600">Emergency Blood Support</p>
          </div>
        </div> */}

        <div className="my-14 h-px bg-gray-200"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">
              Why This Platform Matters
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              In many villages, access to doctors and emergency healthcare is
              limited. Our platform bridges this gap by digitally connecting
              patients with trusted medical professionals and enabling quick
              response during emergencies like blood or organ requirements.
            </p>

            <p className="mt-3 text-gray-600 leading-relaxed">
              We focus on simplicity, accessibility, and trust — ensuring that
              healthcare guidance reaches everyone, regardless of location.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-md">
            <ul className="space-y-4 text-gray-700">
              <li>✔ Verified doctors with real credentials</li>
              <li>✔ Simple interface for rural users</li>
              <li>✔ Emergency donor connections</li>
              <li>✔ No unnecessary medical complexity</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
        

      </div>
      
    </main>
    <Footer/>
    
    </>
  );
}
