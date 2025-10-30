export default function MarriageBiodata() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header / Hero - focused on biodata */}
        <header className="bg-gradient-to-r from-indigo-50 via-pink-50 to-yellow-50 shadow rounded-lg p-6 flex gap-6 items-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-2xl font-bold text-white">PM</div>
          <div className="flex-1">
            <h1 className="text-2xl font-extrabold text-gray-900">Pratik Mondal</h1>
            <p className="text-sm text-gray-500 mt-1 italic">A Journey Toward a Beautiful Beginning</p>
            <div className="mt-3 text-sm text-gray-700 flex items-center gap-3">
              <span className="mr-3"><strong>Current Address:</strong> Kaiserslautern, Germany</span>
              <a href="https://drive.google.com/drive/folders/174ZiQwy6Rok0lTfa8fTp2HAl4tUzzjik?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-sm px-2 py-1 border border-gray-200 rounded text-blue-600 hover:bg-blue-50">Photos</a>
            </div>
          </div>
          {/* header right column removed to avoid duplicate details; details are listed below in Personal Details */}
        </header>

        {/* Main content: personal, family, relatives, education */}
        <main className="mt-6 grid md:grid-cols-3 gap-6">
          <section className="md:col-span-2 bg-white rounded-lg shadow p-6 space-y-4 border-l-4 border-indigo-300">
            <h2 className="text-lg font-semibold text-indigo-700">Personal Details</h2>
            <ul className="text-sm text-gray-700 space-y-1">
              <li><strong>Name:</strong> Pratik Mondal</li>
              <li><strong>Date of Birth:</strong> 6th April 1996</li>
              <li><strong>Religion:</strong> Sanaton</li>
              <li><strong>Complexion:</strong> Light Brown</li>
              <li><strong>Height:</strong> 5'6"+</li>
              <li><strong>Weight:</strong> 79+/- kg</li>
            </ul>

            {/* Education moved to its own section below */}
          </section>

          <aside className="bg-white rounded-lg shadow p-6 border-l-4 border-yellow-300">
            <h3 className="text-md font-semibold text-yellow-700">Quick Facts</h3>
            <ul className="text-sm text-gray-700 mt-3 space-y-2">
              <li><strong>Marital Status:</strong> Unmarried</li>
              <li><strong>Current Location:</strong> Kaiserslautern, Germany</li>
              <li><strong>Family Address:</strong> Moghbazar, Dhaka</li>
              <li><strong>Permanent Address:</strong> Nawabganj, Dhaka</li>
            </ul>
          </aside>
        </main>

        <section id="education" className="mt-6 bg-white rounded-lg shadow p-6 border-l-4 border-purple-300">
          <h2 className="text-lg font-semibold text-purple-700">Education</h2>
          <ul className="list-disc list-inside text-sm text-gray-700 mt-3 space-y-2">
            <li><strong>SSC:</strong> NBPSC — 2012, GPA: 5.00</li>
            <li><strong>HSC:</strong> Rifles College — 2014, GPA: 4.80</li>
            <li><strong>B.Sc. in Computer Science:</strong> AIUB — 2015–2019, CGPA: 3.34</li>
            <li><strong>M.Sc. in Computer Science:</strong> Technical University of Kaiserslautern — 2023–Present</li>
          </ul>
        </section>

        <section className="mt-6 bg-white rounded-lg shadow p-6 border-l-4 border-green-300">
          <h2 className="text-lg font-semibold text-green-700">Family Details</h2>
          <ul className="list-inside list-disc text-sm text-gray-700 mt-3 space-y-1">
            <li><strong>Father:</strong> Sanaton Chandra Mondal — Businessman</li>
            <li><strong>Mother:</strong> Sushma Mondal — Housewife</li>
            <li><strong>Sibling:</strong> One younger brother</li>
          </ul>
        </section>

        <section className="mt-6 bg-white rounded-lg shadow p-6 border-l-4 border-pink-300">
          <h2 className="text-lg font-semibold text-pink-700">Relatives</h2>
          <ul className="list-inside list-disc text-sm text-gray-700 mt-3 space-y-1">
            <li>Ajit Sarkar (Mama) — Principal of a college, Munshiganj</li>
            <li>Shantonu Dey — Cousin sister's husband, BUET, Working at DDC</li>
            <li>Shohag Mondal — Cousin, Working in Malta</li>
            <li>Arup Sarkar — Cousin, Studying in Germany</li>
          </ul>
        </section>

        <section id="contact" className="mt-6 bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
          <h2 className="text-lg font-semibold text-green-700">Contact</h2>
          <p className="text-sm text-gray-700 mt-3">For marriage proposals or family inquiries, please reach out via WhatsApp.</p>
          <div className="mt-4">
            <a href="https://wa.me/4915754255758" target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-green-600 text-white rounded-md text-sm no-underline hover:underline shadow hover:shadow-lg transform hover:-translate-y-0.5">+49 157 5425 5758 (WhatsApp)</a>
          </div>
        </section>

        <footer className="mt-8 text-center text-xs text-gray-500">Information is correct to the best of my knowledge.</footer>
      </div>
    </div>
  );
}
