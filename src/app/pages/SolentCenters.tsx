export default function SolentCenters() {
  const centers = [
    {
      name: "Solent Masonic Centre",
      address: "Example Street, Southampton, SO14 2XX",
      description: "The main Masonic centre serving the Solent area with multiple meeting rooms and facilities."
    },
    {
      name: "Coastal Masonic Hall",
      address: "Harbour Road, Portsmouth, PO1 2XX",
      description: "Historic Masonic hall serving Chapters throughout the coastal region."
    },
    {
      name: "Maritime Masonic Hall",
      address: "Dockyard Road, Southampton, SO14 3XX",
      description: "A well-equipped hall serving the maritime district."
    }
  ];

  return (
    <>
      <h2 className="text-3xl mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
        Masonic Centers
      </h2>

      <p className="mb-8 leading-relaxed">
        The Chapters of the Solent District meet at various Masonic centres throughout the region. Below are the principal meeting locations.
      </p>

      <div className="space-y-6">
        {centers.map((center, index) => (
          <div key={index} className="border-l-4 border-[#6b1a1a] pl-6 py-3">
            <h3 className="text-2xl mb-2 text-[#6b1a1a]" style={{ fontFamily: "'Cinzel', serif" }}>
              {center.name}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              <strong>Address:</strong> {center.address}
            </p>
            <p className="leading-relaxed">
              {center.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-[#f5f5f0] p-6 rounded">
        <h3 className="text-xl mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
          Visiting a Centre
        </h3>
        <p className="leading-relaxed">
          If you plan to visit one of our Masonic centres, please contact the Chapter Recorder in advance to confirm meeting times and arrangements. Visitors should bring appropriate identification and proof of membership.
        </p>
      </div>
    </>
  );
}
