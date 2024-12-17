import Image from "next/image";

export default function ExploreStyles() {
  const images = [
    { id: 1, src: "/item-category 1.png", alt: "Orange Chair" },
    { id: 2, src: "/Products (1).png", alt: "White Chair 1" },
    { id: 3, src: "/Image (3).png", alt: "Gray Chair" },
    { id: 4, src: "/Image (7).png", alt: "White Chair 2" },
    { id: 5, src: "/Products (2).png", alt: "black gray chair" },
  ];

  return (
    <section className="p-6">
      {/* Title on the left */}
      <div className="flex items-center space-x-4 mb-4">
        <h2 className="text-lg font-medium uppercase text-gray-600">
          Explore New and Popular Styles
        </h2>
      </div>

      {/* Grid for large image and small images horizontally */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Large Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Right Side - 4 Small Images */}
        <div className="grid grid-cols-2 gap-4">
          {images.slice(1).map((image) => (
            <div key={image.id} className="relative w-full h-[300px]">
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}