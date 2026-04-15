export default function UsefulLinks() {
  const links = [
    {
      category: "Supreme Council",
      items: [
        {
          title: "Supreme Council 33° for England and Wales",
          url: "#",
          description: "Official website of the Supreme Council"
        },
        {
          title: "Grand Secretary's Office",
          url: "#",
          description: "Contact information and administrative resources"
        }
      ]
    },
    {
      category: "United Grand Lodge of England",
      items: [
        {
          title: "UGLE Official Website",
          url: "#",
          description: "The official website of the United Grand Lodge of England"
        },
        {
          title: "Provincial Grand Lodge of Hampshire and Isle of Wight",
          url: "#",
          description: "Provincial Grand Lodge covering our region"
        }
      ]
    },
    {
      category: "Related Orders",
      items: [
        {
          title: "Mark Master Masons",
          url: "#",
          description: "Information about the Mark degree"
        },
        {
          title: "Royal Arch",
          url: "#",
          description: "Holy Royal Arch - Supreme Order"
        },
        {
          title: "Knights Templar",
          url: "#",
          description: "United Religious, Military and Masonic Orders"
        }
      ]
    },
    {
      category: "Educational Resources",
      items: [
        {
          title: "Masonic Library and Museum",
          url: "#",
          description: "Research materials and historical resources"
        },
        {
          title: "Quatuor Coronati Lodge",
          url: "#",
          description: "Premier Lodge of Masonic Research"
        }
      ]
    },
    {
      category: "Charity",
      items: [
        {
          title: "Masonic Charitable Foundation",
          url: "#",
          description: "Supporting Freemasons and their families"
        },
        {
          title: "Royal Masonic Trust for Girls and Boys",
          url: "#",
          description: "Supporting young people's education"
        }
      ]
    }
  ];

  return (
    <>
      <h2 className="text-3xl mb-6" style={{ fontFamily: "'Cinzel', serif" }}>
        Useful Links
      </h2>

      <p className="mb-8 leading-relaxed">
        Below you will find links to related Masonic organizations, educational resources, and charitable foundations. These websites provide additional information about Freemasonry and the various Orders within the Craft.
      </p>

      <div className="space-y-8">
        {links.map((section, index) => (
          <section key={index}>
            <h3 className="text-2xl mb-4 border-b-2 border-[#6b1a1a] pb-2" style={{ fontFamily: "'Cinzel', serif" }}>
              {section.category}
            </h3>
            <div className="space-y-4">
              {section.items.map((link, linkIndex) => (
                <div key={linkIndex} className="border-l-4 border-[#C9A961]/40 pl-4 py-2">
                  <h4 className="text-lg mb-1">
                    <a href={link.url} className="text-[#6b1a1a] hover:underline font-semibold">
                      {link.title}
                    </a>
                  </h4>
                  <p className="text-sm text-gray-600">
                    {link.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 bg-[#f5f5f0] p-6 rounded">
        <h3 className="text-xl mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
          Disclaimer
        </h3>
        <p className="leading-relaxed text-sm">
          The links provided on this page are for informational purposes only. The District of Hampshire & Isle of Wight Wessex is not responsible for the content of external websites. If you have a link you think should be included here, please contact the District Recorder.
        </p>
      </div>

      <div className="mt-6 bg-white border border-gray-300 p-6 rounded">
        <h3 className="text-xl mb-3" style={{ fontFamily: "'Cinzel', serif" }}>
          Suggest a Link
        </h3>
        <p className="leading-relaxed">
          If you know of a useful website that should be included on this page, please let us know. Contact the District Recorder with the website URL and a brief description of why it would be helpful to our members.
        </p>
      </div>
    </>
  );
}
