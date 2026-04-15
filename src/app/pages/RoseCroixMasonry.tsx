export default function RoseCroixMasonry() {
  return (
    <>
      <h2 className="text-3xl mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
        King Edward VII CoI
      </h2>

      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <div className="md:w-64 flex-shrink-0">
          <div className="bg-white border-4 border-[#C9A961]/20 p-4">
            <img
              src="/src/imports/Screenshot_2026-04-14_at_10.05.47.png"
              alt="10 Duke Street, St. James's, London"
              className="w-full h-auto"
            />
            <p className="text-center text-sm mt-3 italic text-gray-600">
              10 Duke Street,
            </p>
            <p className="text-center text-sm italic text-gray-600">
              St. James's, London
            </p>
          </div>
        </div>

        <div className="flex-1">
          <p className="mb-4 leading-relaxed">
            Under the authority of the Supreme Council 33° of the Ancient and Accepted Rite for England and Wales and its Districts and Chapters Overseas, <a href="#" className="text-[#6b1a1a] hover:underline">King Edward VII Rose Croix Chapter of Improvement</a> meets at 10 Duke Street, St. James's, London, SW1Y 6BS, on the first Thursday of every month throughout the year with the exception of August, at 5.30pm for a prompt start at 5.45pm.
          </p>

          <p className="mb-4 leading-relaxed">
            The preferred dress code is formal casual. Regalia is not required, but visitors should be duly vouched for. The Enthronement Ceremony is rehearsed in lieu of the Third Point at the January, July, and October meetings.
          </p>
        </div>
      </div>

      <p className="mb-4 leading-relaxed">
        All Princes, particularly those who are about to take office or who are currently in office, are encouraged to attend the regular meetings of the Chapter of Improvement. The Chapter of Improvement provides excellent opportunities for Princes to reach a good standard of ritual and floor work. Under the Ritings, at the end of each regular meeting, the Princes are separated in volunteer for an office for the next regular meeting or subsequent meetings. If requested, the Second Point can be split for two Princes to share the office.
      </p>
    </>
  );
}
