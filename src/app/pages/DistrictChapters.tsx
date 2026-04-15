export default function DistrictChapters() {
  const chapters = [
    {
      name: "Chapter of Improvement No. 1",
      number: "1",
      location: "Southampton",
      meetingPlace: "Freemasons' Hall, Southampton",
      description: "The premier Chapter of the district, meeting regularly for ceremonies and instruction."
    },
    {
      name: "Royal Sussex Chapter",
      number: "2",
      location: "Portsmouth",
      meetingPlace: "Freemasons' Hall, Portsmouth",
      description: "A historic Chapter serving the Portsmouth area with a strong tradition of excellence."
    },
    {
      name: "Winchester Chapter",
      number: "3",
      location: "Winchester",
      meetingPlace: "Winchester Masonic Hall",
      description: "Based in the ancient capital of England, this Chapter has a distinguished history."
    },
    {
      name: "Isle of Wight Chapter",
      number: "4",
      location: "Newport, Isle of Wight",
      meetingPlace: "Newport Masonic Hall",
      description: "Serving Brethren on the Isle of Wight with beautiful ceremonies and warm fellowship."
    },
    {
      name: "New Forest Chapter",
      number: "5",
      location: "Lymington",
      meetingPlace: "Lymington Masonic Hall",
      description: "A welcoming Chapter in the heart of the New Forest."
    }
  ];

  return (
    <>
      <h2 className="text-3xl mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
        District Chapters
      </h2>

      <p className="mb-6 leading-relaxed">
        The District of Hampshire & Isle of Wight Wessex is proud to be home to 17 active Chapters of the Rose Croix. Each Chapter offers the same beautiful ceremonies and warm fellowship, while maintaining its own unique character and traditions.
      </p>

      <div className="bg-[#f5f5f0] p-6 rounded mb-8">
        <h3 className="text-lg mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
          Finding Your Local Chapter
        </h3>
        <p className="leading-relaxed mb-3">
          Below is a selection of our Chapters. For complete contact information, meeting schedules, or to find the Chapter nearest you, please contact our District Recorder:
        </p>
        <p className="font-semibold">
          Ill. Bro. Colin Brown 33°
        </p>
      </div>

      <div className="space-y-8 mb-12">
        {chapters.map((chapter, index) => (
          <div key={index} className="border-l-4 border-[#6b1a1a] pl-6 py-2">
            <h3 className="text-2xl mb-2 text-[#6b1a1a]" style={{ fontFamily: "'Cinzel', serif" }}>
              {chapter.name}
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Chapter No. {chapter.number} • {chapter.location}
            </p>
            <p className="mb-2 leading-relaxed">
              {chapter.description}
            </p>
            <p className="text-sm">
              <strong>Meeting Place:</strong> {chapter.meetingPlace}
            </p>
          </div>
        ))}

        <div className="border border-gray-300 p-6 rounded bg-white">
          <p className="text-center italic text-gray-600">
            Additional Chapters throughout Hampshire and the Isle of Wight...
          </p>
          <p className="text-center mt-3">
            <a href="/contact-us" className="text-[#6b1a1a] hover:underline font-semibold">
              Contact us
            </a> for information about all 17 Chapters in our District
          </p>
        </div>
      </div>

      <section className="mb-8">
        <h3 className="text-2xl mb-4 border-b-2 border-[#6b1a1a] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
          Visiting a Chapter
        </h3>

        <p className="mb-4 leading-relaxed">
          Members of the Rose Croix in good standing are welcome to visit our Chapters. If you are a visiting member from another District or jurisdiction, please contact the Chapter Recorder in advance to arrange your visit.
        </p>

        <p className="mb-4 leading-relaxed">
          All visitors should bring:
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Current Grand Lodge certificate or dues card</li>
          <li>Rose Croix membership certificate</li>
          <li>Appropriate regalia for the degree being worked</li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl mb-4 border-b-2 border-[#6b1a1a] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
          Starting a New Chapter
        </h3>

        <p className="mb-4 leading-relaxed">
          If you are interested in founding a new Chapter in an area not currently served, or would like information about the process, please contact the Inspector General through the District Recorder.
        </p>

        <p className="leading-relaxed">
          The formation of a new Chapter requires:
        </p>

        <ul className="list-disc pl-6 mt-3 space-y-2">
          <li>A minimum number of qualified members</li>
          <li>Approval from the Supreme Council</li>
          <li>A suitable meeting place</li>
          <li>Officers prepared to fulfill the various roles</li>
        </ul>
      </section>
    </>
  );
}
