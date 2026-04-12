const TRANSPORT_OPTIONS = [
  {
    id: 'road',
    title: 'ROAD',
    description: 'Easy road access to Shivamogga City from Bengaluru, Mysuru, Mangaluru, and Hubballi—buses are well connected too.',
    image: 'https://cdn.builder.io/api/v1/image/assets%2F350c85029eed47748b7045d4f507277c%2F9d2086c43a434b389651c86161f7e08e?format=webp&width=800&height=1200'
  },
  {
    id: 'rail',
    title: 'RAIL',
    description: 'Direct rail connections to Shivamogga Railway Station from Bengaluru, Mysuru, Chennai, and Tirunelveli.',
    image: 'https://images.pexels.com/photos/12203067/pexels-photo-12203067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'air',
    title: 'AIR',
    description: 'Fly to Shivamogga Airport with connections from Bengaluru, Goa, Hyderabad, Tirupati, Chennai, and Jharsuguda.',
    image: 'https://images.pexels.com/photos/1172541/pexels-photo-1172541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
];

export function GettingHerePreview() {
  return (
    <section
      id="getting-here"
      className="py-[60px] px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-[1366px] mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h2
            className="text-[30px] font-bold mb-0"
            style={{
              color: 'rgb(35, 35, 35)',
              letterSpacing: '-1px',
              lineHeight: '30px'
            }}
          >
            Getting Here
          </h2>
          {/* Decorative accent line */}
          <div className="flex py-[15px]">
            <div
              className="w-[65%] border-t-[3px] border-solid"
              style={{ borderColor: 'rgb(0, 50, 162)' }}
            ></div>
          </div>
          <p className="text-lg md:text-xl" style={{ color: '#232323' }}>
            Multiple ways to reach Shivamogga. Choose what works best for you.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TRANSPORT_OPTIONS.map((option) => (
            <div 
              key={option.id}
              className="rounded-[24px] overflow-hidden flex flex-col" 
              style={{ border: '3px solid #232323' }}
            >
              {/* Image Section with Overlay */}
              <div className="relative h-[400px] md:h-[450px]">
                <img
                  src={option.image}
                  alt={`${option.title} transport option`}
                  className="w-full h-full object-cover"
                />
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-wide">
                    {option.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
