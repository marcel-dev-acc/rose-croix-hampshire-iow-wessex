export default function Home() {
  return (
    <>
      <h2 className="text-3xl mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
        Districts
      </h2>

      <p className="mb-4 leading-relaxed">
        This website serves the Rose Croix Districts of Hampshire & Isle of Wight Wessex and Solent. It brings together information about both Districts, including their Chapters, meeting centres, history, events and contact details.
      </p>

      <p className="mb-4 leading-relaxed">
        Whether you are an existing member, a visiting Prince, or someone wishing to learn more about Rose Croix, the navigation above will guide you to the Wessex District and Solent District pages, along with further information about the Order itself.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <a
          href="wessex-district.html"
          className="inline-flex items-center justify-center px-6 py-3 bg-[#6b1a1a] text-white no-underline border-2 border-[#C9A961] hover:bg-[#5a1515] transition-colors duration-200"
        >
          Wessex District
        </a>
        <a
          href="solent-district.html"
          className="inline-flex items-center justify-center px-6 py-3 bg-[#1a1a1a] text-white no-underline border-2 border-[#C9A961] hover:bg-[#2a2a2a] transition-colors duration-200"
        >
          Solent District
        </a>
      </div>

      <div className="mt-10 pt-8 border-t border-[#C9A961]/20">
        <h2 className="text-3xl mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
          History
        </h2>

        <p className="mb-4 leading-relaxed">
          The Order is generally known as Rose Croix, though it is properly the Ancient & Accepted Rite. It is made up of 33 degrees, of which the Rose Croix is the 18°.
        </p>

        <p className="mb-4 leading-relaxed">
          In England and Wales, the Rite works under the authority of the Supreme Council 33°, which has responsibility for the well-being of the Order and delegates authority to Districts and Chapters.
        </p>

        <p className="mb-4 leading-relaxed">
          Rose Croix is a Christian Order and places emphasis on Brethren who profess the Trinitarian Christian Faith and who have been Master Masons for at least a year. It is valued for its companionship, sincerity and beautiful, thought-provoking ceremony.
        </p>
      </div>
    </>
  );
}
