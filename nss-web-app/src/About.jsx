import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4 font-body">
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 font-heading">About National Service Scheme (NSS)</h2>
        <p>
          The National Service Scheme (NSS) is a Central Sector Scheme of the Government of India, Ministry of Youth Affairs & Sports. It provides opportunities for students at various educational levels to participate in community service activities and programs, with the primary objective of developing their personality and character through voluntary community service.
        </p>
        <p>
          NSS was launched in 1969 in 37 universities involving about 40,000 volunteers. It has now spread over 657 universities and 51 +2 Councils/Directorates, covering 20,669 colleges/technical institutions and 11,988 senior secondary schools. Since its inception, over 7.4 crore students have benefited from NSS.
        </p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 font-heading">The NSS Badge: Proud to Serve the Nation</h3>
        <div className="flex items-center mb-4">
          <img src="nss-badge.png" alt="NSS Badge" className="w-16 h-16 mt-4" />
          <div>
            <p>
              All youth volunteers who opt to serve the nation through the NSS-led community service wear the NSS badge with pride and a sense of responsibility towards helping the needy.
            </p>
            <ul className="list-disc ml-6 mt-2">
              <li>The Konark wheel in the NSS badge with 8 bars signifies the 24 hours of a day, reminding the wearer to be ready for service round the clock.</li>
              <li>Red color signifies the energy and spirit displayed by NSS volunteers.</li>
              <li>Blue color signifies the cosmos, of which the NSS is a tiny part, ready to contribute to the welfare of mankind.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 font-heading">Motto</h3>
        <p className="text-lg font-bold font-heading">The motto of National Service Scheme is "NOT ME BUT YOU"</p>
      </section>

      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2 font-heading">Benefits of Being an NSS Volunteer</h3>
        <p>
          An NSS volunteer who takes part in community service programs could either be a college-level or a senior secondary-level student. Being an active member, these student volunteers would have the exposure and experience to be:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>An accomplished social leader</li>
          <li>An efficient administrator</li>
          <li>A person who understands human nature</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
