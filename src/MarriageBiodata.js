export default function MarriageBiodata() {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800 font-sans bg-white shadow-xl rounded-xl space-y-8">
      {/* Header */}
      <header className="text-center border-b pb-4">
        <h1 className="text-4xl font-extrabold text-indigo-700 tracking-wide">Pratik Mondal</h1>
        <p className="text-sm text-pink-600 italic mt-1">A Journey Toward a Beautiful Beginning</p>
        <p className="text-sm mt-2 text-blue-600">
          <a href="https://drive.google.com/drive/folders/174ZiQwy6Rok0lTfa8fTp2HAl4tUzzjik?usp=sharing" target="_blank" rel="noopener noreferrer" className="underline">Click here to view photos</a>
        </p>
      </header>

      {/* Personal Info Section */}
      <section className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold text-indigo-600 mb-2">Personal Details</h2>
          <ul className="text-sm space-y-1">
            <li><strong>Name:</strong> Pratik Mondal</li>
            <li><strong>Date of Birth:</strong> 6th April 1996</li>
            <li><strong>Height:</strong> 5'6"+</li>
            <li><strong>Weight:</strong> 79+/- kg</li>
            <li><strong>Complexion:</strong> Light Brown</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-indigo-600 mb-2">Address</h2>
          <p className="text-sm">
            <strong>Permanent Address:</strong> Nawabganj, Dhaka<br />
            <strong>Family Address:</strong> Moghbazar, Dhaka<br /><strong>Current Address:</strong> Kaiserslautern, Germany
          </p>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-lg font-semibold text-indigo-600 mb-2">Education</h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>SSC: NBPSC, 2012 GPA: 5.00</li>
          <li>HSC: Rifles College, 2014 GPA: 4.80</li>
          <li>B.Sc. in Computer Science: AIUB, 2015–2019, CGPA: 3.34</li>
          <li>M.Sc. in Computer Science: Technical University of Kaiserslautern, Germany (2023–Present)</li>
        </ul>
      </section>

      {/* Profession */}
      <section>
        <h2 className="text-lg font-semibold text-indigo-600 mb-2">Profession</h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Research Assistant Java Developer at Fraunhofer IEE, Germany (2024*, Part-time)</li>
          <li>Software Engineer at greenable GmbH, Germany (2023)</li>
          <li>Software Engineer at BRAC IT, Dhaka, Bangladesh (2019–2022)</li>
        </ul>
      </section>

      {/* Family Details */}
      <section>
        <h2 className="text-lg font-semibold text-indigo-600 mb-2">Family Details</h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Father: Sanaton Chandra Mondal (Businessman)</li>
          <li>Mother: Sushma Mondal (Housewife)</li>
          <li>Sibling: Pulak Mondal (Younger Brother), Textile Engineer, AUST, currently working at DBL Group</li>
        </ul>
      </section>

      {/* Relatives */}
      <section>
        <h2 className="text-lg font-semibold text-indigo-600 mb-2">Relatives</h2>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>Ajit Sarkar (Mama, Principal of a college, Munshiganj)</li>
          <li>Shantonu Dey (Cousin sister's husband, BUET, Working at DDC)</li>
          <li>Shohag Mondal (Cousin, Working in Malta)</li>
          <li>Arup Sarkar (Cousin, Studying in Germany)</li>
        </ul>
      </section>
    </div>
  );
}
