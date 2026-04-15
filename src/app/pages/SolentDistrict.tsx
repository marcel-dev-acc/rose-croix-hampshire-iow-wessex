export default function SolentDistrict() {
  return (
    <>
      <h2 className="text-3xl mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
        Solent District
      </h2>

      <p className="mb-6 leading-relaxed">
        The Solent District is a vibrant and active district within the Supreme Council 33° for England and Wales. Our district encompasses Chapters throughout the Solent region, providing opportunities for Brethren across the area to participate in the beautiful ceremonies and fellowship of the Rose Croix.
      </p>

      <section id="master" className="mb-12 scroll-mt-8">
        <h3 className="text-2xl mb-4 border-b-2 border-[#6b1a1a] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
          District Leadership
        </h3>

        <div className="mb-6">
          <h4 className="text-xl mb-3 text-[#6b1a1a]" style={{ fontFamily: "'Cinzel', serif" }}>
            Inspector General
          </h4>
          <p className="mb-2">
            <strong>VIII Bro. [Name] 33°</strong>
          </p>
          <p className="leading-relaxed text-gray-700">
            As Inspector General of the District, the Inspector General provides leadership and guidance to all Chapters within the Solent District. He is responsible for overseeing the work of the Order and ensuring that the ceremonies and traditions are maintained to the highest standards.
          </p>
        </div>

        <div className="mb-6">
          <h4 className="text-xl mb-3 text-[#6b1a1a]" style={{ fontFamily: "'Cinzel', serif" }}>
            District Recorder
          </h4>
          <p className="mb-2">
            <strong>Ill. Bro. [Name] 33°</strong>
          </p>
          <p className="leading-relaxed text-gray-700">
            The District Recorder handles administrative matters for the district and serves as the primary point of contact for those interested in joining the Order or seeking information about our Chapters.
          </p>
        </div>
      </section>

      <section id="chapters" className="mb-12 scroll-mt-8">
        <h3 className="text-2xl mb-4 border-b-2 border-[#6b1a1a] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
          Our Chapters
        </h3>

        <p className="mb-6 leading-relaxed">
          The Solent District is home to multiple active Chapters, each with its own unique character and history. Our Chapters meet at various locations throughout the Solent region, making it convenient for Brethren across the area to participate.
        </p>

        <div className="bg-[#f5f5f0] p-6 rounded mb-6">
          <p className="leading-relaxed">
            For a complete list of all Chapters in the Solent District, including meeting times and locations, please see our <a href="/solent-district/chapters" className="text-[#6b1a1a] font-semibold hover:underline">Chapters</a> page.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-2xl mb-4 border-b-2 border-[#6b1a1a] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
          District Activities
        </h3>

        <p className="mb-4 leading-relaxed">
          In addition to the regular meetings of individual Chapters, the Solent District organizes various activities throughout the year, including:
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>District meetings and ceremonies</li>
          <li>Social events and festive boards</li>
          <li>Educational presentations and lectures</li>
          <li>Joint meetings with other districts</li>
          <li>Charity fundraising activities</li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl mb-4 border-b-2 border-[#6b1a1a] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
          Contact the District
        </h3>

        <p className="mb-4 leading-relaxed">
          If you would like more information about the Solent District or are interested in joining one of our Chapters, please contact:
        </p>

        <div className="bg-white border-l-4 border-[#6b1a1a] p-6">
          <p className="mb-2">
            <strong>District Recorder:</strong> Ill. Bro. [Name] 33°
          </p>
          <p className="text-sm text-gray-600">
            For membership inquiries, general questions, or to be put in touch with your local Chapter
          </p>
        </div>
      </section>
    </>
  );
}
