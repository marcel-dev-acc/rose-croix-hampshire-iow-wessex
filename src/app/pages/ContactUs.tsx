export default function ContactUs() {
  return (
    <>
      <h2 className="text-3xl mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
        Contact Us
      </h2>

      <p className="mb-8 leading-relaxed">
        We welcome inquiries from Master Masons interested in learning more about the Rose Croix, as well as from existing members and visitors. Please use the contact information below to get in touch with the appropriate person.
      </p>

      <section className="mb-10">
        <h3 className="text-2xl mb-4 border-b-2 border-[#6b1a1a] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
          District Officers
        </h3>

        <div className="space-y-6">
          <div className="bg-white border-l-4 border-[#6b1a1a] p-6 shadow-sm">
            <h4 className="text-xl mb-2 text-[#6b1a1a]" style={{ fontFamily: "'Cinzel', serif" }}>
              Inspector General
            </h4>
            <p className="mb-3">
              <strong>VIII Bro. Paul Hillyard 33°</strong>
            </p>
            <p className="text-sm leading-relaxed text-gray-700">
              The Inspector General oversees the work of the District and provides leadership to all Chapters. For matters concerning District policy, ceremonial guidance, or significant administrative issues, please contact through the District Recorder.
            </p>
          </div>

          <div className="bg-white border-l-4 border-[#6b1a1a] p-6 shadow-sm">
            <h4 className="text-xl mb-2 text-[#6b1a1a]" style={{ fontFamily: "'Cinzel', serif" }}>
              District Recorder
            </h4>
            <p className="mb-3">
              <strong>Ill. Bro. Colin Brown 33°</strong>
            </p>
            <p className="text-sm leading-relaxed text-gray-700 mb-4">
              The District Recorder is your primary point of contact for:
            </p>
            <ul className="text-sm list-disc pl-6 space-y-1 text-gray-700">
              <li>General inquiries about the Rose Croix</li>
              <li>Membership applications and eligibility questions</li>
              <li>Information about specific Chapters</li>
              <li>Administrative matters</li>
              <li>Website feedback or corrections</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl mb-4 border-b-2 border-[#6b1a1a] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
          Joining the Rose Croix
        </h3>

        <p className="mb-4 leading-relaxed">
          If you are interested in joining the Rose Croix, we would be delighted to hear from you. To be eligible, you must:
        </p>

        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Be a Master Mason in good standing</li>
          <li>Have been a Master Mason for at least one year</li>
          <li>Profess the Trinitarian Christian Faith</li>
        </ul>

        <p className="mb-4 leading-relaxed">
          Please contact the District Recorder who will be happy to answer your questions and put you in touch with the Recorder of your nearest Chapter.
        </p>

        <div className="bg-[#f5f5f0] p-6 rounded">
          <p className="leading-relaxed">
            When contacting us about membership, please provide:
          </p>
          <ul className="list-disc pl-6 mt-3 space-y-1 text-sm">
            <li>Your name and contact information</li>
            <li>Your Craft Lodge name and number</li>
            <li>How long you have been a Master Mason</li>
            <li>Your general location (to help match you with a nearby Chapter)</li>
          </ul>
        </div>
      </section>

      <section className="mb-10">
        <h3 className="text-2xl mb-4 border-b-2 border-[#6b1a1a] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
          Visiting Members
        </h3>

        <p className="mb-4 leading-relaxed">
          Members of the Rose Croix from other Districts or jurisdictions are welcome to visit our Chapters. To arrange a visit:
        </p>

        <ol className="list-decimal pl-6 mb-4 space-y-2">
          <li>Contact the District Recorder to identify which Chapter(s) might suit your schedule</li>
          <li>Contact the Chapter Recorder directly to confirm meeting dates and times</li>
          <li>Provide details of your membership for verification</li>
        </ol>

        <p className="leading-relaxed">
          Please bring your current Grand Lodge certificate or dues card and your Rose Croix membership certificate when visiting.
        </p>
      </section>

      <section>
        <h3 className="text-2xl mb-4 border-b-2 border-[#6b1a1a] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
          General Inquiries
        </h3>

        <p className="mb-4 leading-relaxed">
          For any other questions or comments about the District of Hampshire & Isle of Wight Wessex, please contact the District Recorder.
        </p>

        <div className="bg-white border border-gray-300 p-6 rounded">
          <p className="mb-3 leading-relaxed">
            <strong>Please note:</strong> For privacy and security reasons, email addresses and phone numbers are not published on this website. All inquiries should be directed through official Masonic channels or by contacting the District Recorder through your own Lodge Secretary.
          </p>
          <p className="text-sm text-gray-600">
            If you are not a Freemason and are interested in joining Freemasonry, please visit the United Grand Lodge of England website or contact your local Masonic Hall.
          </p>
        </div>
      </section>
    </>
  );
}
