export default function FeatureCards({emoji, heading, desc , btnclasses}) {
  return (
    <div className="">

      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
        <div className={`h-14 w-14 flex items-center justify-center rounded-xl  text-xl font-bold ${btnclasses}`}>
          {emoji}
        </div>

        <h3 className="mt-4 text-lg font-semibold text-gray-800">
         {heading} 
        </h3>

        <p className="mt-2 text-sm text-gray-600 text-justify">
          {desc}
        </p>        
      </div>
    </div>
  );
}
