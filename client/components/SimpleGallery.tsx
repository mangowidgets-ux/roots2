interface SimpleGalleryProps {
  images: string[];
  title: string;
}

export function SimpleGallery({ images, title }: SimpleGalleryProps) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section id="gallery" className="mb-16">
      <h2 className="text-3xl font-bold mb-0" style={{ color: "rgb(35, 35, 35)" }}>Gallery</h2>
      <div className="flex py-[15px]">
        <span className="w-[65%] border-t-[3px] border-solid" style={{ borderTopColor: "rgb(0, 50, 162)" }}></span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden border border-gray-100 shadow-md aspect-square hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <img
              src={img}
              alt={`${title} - Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
