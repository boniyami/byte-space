import React from 'react';

export default function Partners() {
  const partners = [
    { id: 1, name: 'Wave', icon: '/assets/icons/logoipsum-1.svg' },
    { id: 2, name: 'Sunburst', icon: '/assets/icons/logoipsum-2.svg' },
    { id: 3, name: 'Flash', icon: '/assets/icons/logoipsum-3.svg' },
    { id: 4, name: 'Flower', icon: '/assets/icons/logoipsum-4.svg' },
    { id: 5, name: 'Concentric', icon: '/assets/icons/logoipsum-5.svg' },
  ];

  return (
    <section className="partners-section" aria-label="Partner Organizations">
      <div className="container">
        <div className="partners-row">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-item">
              <img src={partner.icon} alt={`Partner ${partner.name}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
