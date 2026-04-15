export default function Events() {
  const upcomingEvents = [
    {
      title: "District Meeting",
      date: "15th May 2026",
      time: "6:30 PM",
      location: "Southampton Masonic Hall",
      description: "Annual District Meeting with reports from all Chapters and election of District officers. All members are encouraged to attend.",
      dresscode: "Full regalia"
    },
    {
      title: "Installation Ceremony",
      date: "3rd June 2026",
      time: "7:00 PM",
      location: "Winchester Masonic Hall",
      description: "Installation of the new Most Wise Sovereign of Winchester Chapter. Visiting members welcome.",
      dresscode: "Full regalia"
    },
    {
      title: "District Social Evening",
      date: "20th July 2026",
      time: "7:30 PM",
      location: "Portsmouth Masonic Hall",
      description: "Informal social gathering for members and their families. An opportunity to socialize and strengthen our bonds of fellowship.",
      dresscode: "Smart casual"
    }
  ];

  const pastEvents = [
    {
      title: "Annual Divine Service",
      date: "12th March 2026",
      description: "Members gathered for the annual Divine Service at Winchester Cathedral, a beautiful and moving ceremony."
    },
    {
      title: "Charity Fundraiser",
      date: "8th February 2026",
      description: "Successful charity dinner raising funds for local hospices. Over £5,000 was raised for worthy causes."
    }
  ];

  return (
    <>
      <h2 className="text-3xl mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
        Events
      </h2>

      <p className="mb-8 leading-relaxed">
        The Wessex District hosts various events throughout the year, from formal ceremonies to social gatherings. All members are encouraged to participate in District activities to strengthen our fellowship and enjoy the company of Brethren from across Hampshire and the Isle of Wight.
      </p>

      <section className="mb-12">
        <h3 className="text-2xl mb-6 border-b-2 border-[#6b1a1a] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
          Upcoming Events
        </h3>

        <div className="space-y-6">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="bg-white border-l-4 border-[#6b1a1a] p-6 shadow-sm">
              <h4 className="text-xl mb-2 text-[#6b1a1a]" style={{ fontFamily: "'Cinzel', serif" }}>
                {event.title}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3 text-sm">
                <p>
                  <strong>Date:</strong> {event.date}
                </p>
                <p>
                  <strong>Time:</strong> {event.time}
                </p>
                <p>
                  <strong>Location:</strong> {event.location}
                </p>
                <p>
                  <strong>Dress Code:</strong> {event.dresscode}
                </p>
              </div>
              <p className="leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-[#f5f5f0] p-6 rounded">
          <p className="leading-relaxed">
            <strong>Note:</strong> Individual Chapters hold their own regular meetings in addition to these District events. Contact your Chapter Recorder for your Chapter's meeting schedule.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl mb-6 border-b-2 border-[#6b1a1a] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
          Past Events
        </h3>

        <div className="space-y-4">
          {pastEvents.map((event, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <h4 className="text-lg mb-1 text-[#6b1a1a]" style={{ fontFamily: "'Cinzel', serif" }}>
                {event.title}
              </h4>
              <p className="text-sm text-gray-500 mb-2 italic">
                {event.date}
              </p>
              <p className="leading-relaxed text-gray-700">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl mb-4 border-b-2 border-[#6b1a1a] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
          Annual Events
        </h3>

        <p className="mb-4 leading-relaxed">
          The District typically hosts the following annual events:
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li>
            <strong>District Meeting:</strong> Annual business meeting for all members
          </li>
          <li>
            <strong>Divine Service:</strong> Christian service held at a local cathedral or church
          </li>
          <li>
            <strong>District Social Events:</strong> Informal gatherings throughout the year
          </li>
          <li>
            <strong>Charity Fundraisers:</strong> Events supporting local and national charities
          </li>
          <li>
            <strong>Educational Lectures:</strong> Presentations on Rose Croix history, symbolism, and ceremonies
          </li>
        </ul>

        <p className="mt-6 leading-relaxed">
          For more information about upcoming events or to suggest an event, please contact the District Recorder.
        </p>
      </section>
    </>
  );
}
