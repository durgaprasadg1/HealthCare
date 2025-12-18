import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-[#071a2f] text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h3 className="text-xl font-semibold text-white">
            GrameenCare<span className="text-blue-400">+</span>
          </h3>
          <p className="mt-4 text-sm leading-relaxed">
            A digital healthcare platform focused on connecting villagers
            with doctors and enabling fast emergency medical support.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/doctor" className="hover:text-white">Doctors</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Doctor Consultation</li>
            <li>Health Queries</li>
            <li>Blood Donation Requests</li>
            <li>Emergency Assistance</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Disclaimer</h4>
          <p className="text-sm leading-relaxed">
            This platform provides preliminary medical guidance and emergency
            connectivity. It does not replace in-person diagnosis or treatment.
          </p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} GrameenCare+
        <br /> All rights reserved.
      </div>
    </footer>
  );
}
