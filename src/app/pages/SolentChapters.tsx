export default function SolentChapters() {
  return (
    <>
      <h2 className="text-3xl mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
        Solent District Chapters
      </h2>

      <p className="mb-6 leading-relaxed">
        The Solent District comprises multiple active Chapters meeting throughout the region. Each Chapter maintains the beautiful traditions and ceremonies of the Rose Croix while developing its own unique character and fellowship.
      </p>

      <section className="mb-10">
        <h3 className="text-2xl mb-4 border-b-2 border-[#6b1a1a] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
          Chapter Organisation
        </h3>

        <p className="mb-4 leading-relaxed">
          Each Chapter is led by its Most Wise Sovereign and supported by a team of officers who ensure the ceremonies are conducted with dignity and precision. Chapters typically meet several times a year for ceremonies, business meetings, and festive boards.
        </p>

        <div className="bg-[#f5f5f0] p-6 rounded mb-6">
          <h4 className="text-lg mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
            Chapter Officers
          </h4>
          <ul className="space-y-2">
            <li><strong>Most Wise Sovereign:</strong> The presiding officer of the Chapter</li>
            <li><strong>Senior Warden:</strong> Assists the Most Wise Sovereign</li>
            <li><strong>Junior Warden:</strong> Supports the ceremonial work</li>
            <li><strong>Recorder:</strong> Maintains records and correspondence</li>
            <li><strong>Treasurer:</strong> Manages Chapter finances</li>
            <li><strong>Director of Ceremonies:</strong> Ensures smooth running of ceremonies</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl mb-4 border-b-2 border-[#6b1a1a] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
          Finding a Chapter
        </h3>

        <p className="mb-4 leading-relaxed">
          To find a Chapter near you or to learn about meeting times and locations, please contact the District Recorder who will be happy to recommend a Chapter based on your location and preferences.
        </p>
      </section>

      <section>
        <h3 className="text-2xl mb-4 border-b-2 border-[#6b1a1a] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
          Joining a Chapter
        </h3>

        <p className="mb-4 leading-relaxed">
          If you are interested in joining one of our Chapters, you will need to:
        </p>

        <ol className="list-decimal pl-6 mb-6 space-y-2">
          <li>Meet the membership requirements (see our <a href="/about-the-order/faq" className="text-[#6b1a1a] hover:underline">Who can join?</a> page)</li>
          <li>Contact the District Recorder or a Chapter Recorder directly</li>
          <li>Be proposed and recommended by existing members</li>
          <li>Complete the joining process as guided by the Chapter Recorder</li>
        </ol>

        <div className="bg-white border-l-4 border-[#6b1a1a] p-6">
          <p className="mb-2">
            <strong>Contact:</strong> District Recorder
          </p>
          <p className="text-sm text-gray-600">
            For information about joining a Chapter or transferring from another District
          </p>
        </div>
      </section>
    </>
  );
}
