export default function LatestNews() {
  const newsItems = [
    {
      title: "New Grand Commander's Mercat",
      date: "September 2020",
      content: "The District welcomed the new Grand Commander at a special ceremony held in Southampton. The event was well attended by members from across the Wessex District and featured a beautiful installation ceremony followed by a festive board."
    },
    {
      title: "Sovereign Grand Commander's Message",
      date: "August 2020",
      content: "The Sovereign Grand Commander has issued his annual message to all members of the Ancient and Accepted Rite. In his message, he reflects on the challenges faced by the Order over the past year and looks forward to renewed activity and fellowship in the months ahead."
    },
    {
      title: "Covid-19 Update from The Supreme Council 33°",
      date: "July 2020",
      content: "The Supreme Council has issued updated guidance regarding Chapter meetings and activities in light of the ongoing Covid-19 situation. Chapters are advised to follow local health guidelines and consider virtual alternatives where appropriate. The health and safety of our members remains the top priority."
    },
    {
      title: "Covid-19 Update from The Supreme Council 33° - 4.4.20 2020",
      date: "April 2020",
      content: "In response to the Covid-19 pandemic, the Supreme Council has issued guidance suspending all in-person Chapter meetings until further notice. Members are encouraged to stay connected through phone calls and virtual meetings where possible."
    },
    {
      title: "New District Recorder",
      date: "February 2020",
      content: "The District is pleased to announce the appointment of Ill. Bro. Colin Brown 33° as the new District Recorder. Bro. Brown brings extensive experience and dedication to this important role and looks forward to serving the District."
    }
  ];

  return (
    <>
      <h2 className="text-3xl mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
        Latest News
      </h2>

      <p className="mb-8 leading-relaxed">
        Stay informed about the latest developments, events, and announcements from the District of Hampshire & Isle of Wight Wessex.
      </p>

      <div className="space-y-8">
        {newsItems.map((item, index) => (
          <article key={index} className="border-b border-gray-200 pb-8">
            <h3 className="text-2xl mb-2 text-[#6b1a1a]" style={{ fontFamily: "'Cinzel', serif" }}>
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 mb-4 italic">
              {item.date}
            </p>
            <p className="leading-relaxed">
              {item.content}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12 bg-[#f5f5f0] p-6 rounded">
        <h3 className="text-xl mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
          Submit News
        </h3>
        <p className="leading-relaxed">
          If your Chapter has news or announcements to share with the District, please contact the District Recorder. We welcome stories about ceremonies, social events, charitable activities, and member achievements.
        </p>
      </div>
    </>
  );
}
