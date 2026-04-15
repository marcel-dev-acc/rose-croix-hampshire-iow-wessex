export default function FAQ() {
  return (
    <>
      <h2 className="text-3xl mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
        Who Can Join?
      </h2>

      <p className="mb-6 leading-relaxed">
        All candidates for membership of the Ancient and Accepted Rite under the jurisdiction of the Supreme Council for England and Wales must:
      </p>

      <ul className="list-disc pl-6 mb-6 space-y-3">
        <li className="leading-relaxed">profess the Trinitarian Christian faith and</li>
        <li className="leading-relaxed">
          have been Master masons for at least one year in UGLE, or have joined a lodge under UGLE from a recognised Grand Lodge.
        </li>
      </ul>

      <p className="mb-6 leading-relaxed">
        Affiliation of candidates owing allegiance to other Supreme Councils is permitted only in exceptional circumstances, subject to prior enquiry to the Grand Secretary General.
      </p>

      <p className="mb-6 leading-relaxed">
        Any Brother wishing to visit a Chapter, or receive a visit from a member of a Chapter, in one of those jurisdictions with which the Supreme Council is in amity, other than Scotland, requires prior approval.
      </p>
    </>
  );
}
