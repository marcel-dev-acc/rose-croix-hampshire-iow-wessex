export default function WessexCenters() {
  const centers = [
    {
      name: "Southampton Masonic Centre",
      address: "Bugle Street, Southampton, SO14 2AH",
      description: "The main Masonic centre serving the Southampton area with multiple meeting rooms and facilities."
    },
    {
      name: "Portsmouth Masonic Hall",
      address: "Prince George Street, Portsmouth, PO1 2LJ",
      description: "Historic Masonic hall in the heart of Portsmouth, home to several Chapters."
    },
    {
      name: "Winchester Masonic Hall",
      address: "St. Peter Street, Winchester, SO23 8BN",
      description: "Located in the ancient capital, this hall serves Chapters throughout the Winchester area."
    },
    {
      name: "Newport Masonic Hall",
      address: "High Street, Newport, Isle of Wight, PO30 1JL",
      description: "The principal Masonic centre on the Isle of Wight."
    }
  ];

  return (
    <>
      <h2 className="text-3xl mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
        Masonic Centers
      </h2>

      <p className="mb-8 leading-relaxed">
        The Chapters of the Wessex District meet at various Masonic centres throughout Hampshire and the Isle of Wight. Below are the principal meeting locations.
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
