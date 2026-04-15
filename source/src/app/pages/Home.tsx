export default function Home() {
  const archives = [
    'September 2020',
    'August 2020',
    'July 2020',
    'February 2020'
  ];

  return (
    <>
      <h2 className="text-3xl mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
        Welcome from the Inspector General
      </h2>

      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="md:w-64 flex-shrink-0">
          <img
            src="/src/imports/IG.jpg"
            alt="Paul Hillyard 33°"
            className="w-full h-auto border-4 border-[#C9A961]/20"
          />
          <p className="text-center text-sm mt-2 italic text-gray-600">
            Paul Hillyard 33°
          </p>
        </div>

        <div className="flex-1">
          <p className="mb-4 leading-relaxed">
            I am so pleased to record a very warm welcome to you, and introduce our website for the Rose Croix District of Hampshire & Isle of Wight Wessex which I hope will provide you with information and insight into our wonderful Order.
          </p>
          <p className="mb-4 leading-relaxed">
            Although the Order is generally known as 'Rose Croix' it is properly known as the Ancient & Accepted Rite and is made up of 33 degrees of which the Rose Croix is the 18°.
          </p>
          <p className="mb-4 leading-relaxed">
            There are currently 17 Chapters in the Wessex District and full details of these Chapters and their meeting places can be found by clicking on the <span className="font-semibold">CHAPTERS</span> tab and I am sure that you will feel safe to visit us.
          </p>
        </div>
      </div>

      <p className="mb-4 leading-relaxed">
        Rose Croix is a 'Christian' Order and the emphasis is on Brethren who profess the 'Trinitarian Christian Faith' and who have been Master Masons for at least a year. 'Trinitarian' refers to the Holy Trinity which is at the heart of all mainstream Christianity and which is one, anything different or radical.
      </p>

      <p className="mb-4 leading-relaxed">
        All are welcome who are of the Christian Faith and who seek friendliness, companionship and sincerity and who will appreciate a 'beautiful and thought-provoking ceremony'.
      </p>

      <p className="mb-4 leading-relaxed">
        New members are <em>always</em> very welcome so if you are interested in joining us or even just finding out a bit more and talking to somebody about the order, then please contact our District Recorder, Ill. Bro. Colin Brown 33° or any of the District Chapters via their Recorder.
      </p>

      <p className="mb-4 leading-relaxed">
        I am also the Organising and acting P of Orders and one that I have loved from the very day I heartily recommend it to you!
      </p>

      <p className="mb-4 leading-relaxed">
        Thank you for visiting our website, please do so again on a regular basis, and I look forward to seeing you!
      </p>

      <p className="mt-6">
        <strong>VIII Bro. Paul Hillyard 33°</strong>
      </p>

      <p className="text-sm mt-2 text-gray-600">
        Inspector General – District of Hampshire & Isle of Wight Wessex
      </p>

      {/* Archives */}
      <div className="mt-12 pt-8 border-t">
        <h3 className="text-xl mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
          Archives
        </h3>
        <ul className="space-y-2">
          {archives.map((archive, index) => (
            <li key={index}>
              <a href="#" className="text-[#6b1a1a] hover:underline">
                {archive}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div className="mt-8">
        <h3 className="text-xl mb-4" style={{ fontFamily: "'Cinzel', serif" }}>
          Categories
        </h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-[#6b1a1a] hover:underline">
              Announcements
            </a>
          </li>
          <li>
            <a href="#" className="text-[#6b1a1a] hover:underline">
              Uncategorized
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
