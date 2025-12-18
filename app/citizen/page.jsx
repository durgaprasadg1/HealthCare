import CitizenOptions from "../Component/Citizens/citizenOptions";
export default function CitizenDashboard() {
  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800">Citizen Dashboard</h1>
        <p className="text-gray-600 mt-1 font-medium text-2xl">
          Access essential health services and emergency support quickly.
        </p>

        <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <CitizenOptions link="/citizen/citizenid/query/new-query" emoji="💬" emojibg="bg-blue-100 text-blue-600 " heading="Register a Health Query" desc="Ask questions and get guidance from certified doctors anytime."  />
          <CitizenOptions link="/citizen/citizenid/wanted-to-donate" emoji="❤️" emojibg="bg-green-100 text-green-600" heading="Become a Donor" desc="Register as a blood or organ donor and help save lives in emergencies."  />
          <CitizenOptions link="/citizen/citizenid/request-for-donation" emoji="🩸" emojibg="bg-red-100 text-red-600" heading="Create Blood / Organ Request" desc="Create a blood or organ requirement request and reach donors instantly."  />
          

          <CitizenOptions link="/citizen/citizenid/my-requests" emoji="📋" emojibg="bg-red-100 text-yellow-600" heading="My Requests" desc="View, update, or cancel your active donation requests.
"  />
          <CitizenOptions link="/citizen/citizenid/query/history" emoji="📚" emojibg="bg-purple-100 text-purple-700" heading="Health Query History" desc="Check previous consultations and chat history with doctors."  />

          <CitizenOptions link="/citizen/citizenid/query/new-query" emoji="🚑" emojibg="bg-blue-100 text-blue-600 " heading="Emergency Help" desc="Quick access to urgent helplines and nearby hospitals."  />
          

          

          

          

          

        </section>

        {/* STATIC INFORMATION SECTION */}
        <section className="mt-16 bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-bold text-gray-800">How This Helps Villagers</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our platform is designed with simplicity and accessibility in mind.
            Whether it's low internet connectivity, lack of medical facilities,
            or urgent blood needs — we ensure villagers get immediate support
            without needing to travel far.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✔ Simple UI easy for villagers to use</li>
            <li>✔ Fast emergency donor connection</li>
            <li>✔ Real doctors ready to answer queries</li>
            <li>✔ No complex medical jargon</li>
            <li>✔ Free and accessible anytime</li>
          </ul>
        </section>

      </div>
    </main>
  );
}
