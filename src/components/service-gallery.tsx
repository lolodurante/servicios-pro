import Image from "next/image"

interface ServiceGalleryProps {
  images: string[]
}

export function ServiceGallery({ images }: ServiceGalleryProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={`Service image ${index + 1}`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  )
}

