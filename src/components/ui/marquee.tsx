export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative flex w-full overflow-hidden text-gray-600  bg-none   font-medium">
      <div className="animate-marquee whitespace-nowrap py-5">
        {items.map((item) => {
          return (
            <span key={item} className="mx-4 text-1xl">
              {item}
            </span>
          )
        })}
      </div>

      <div className="absolute top-0 animate-marquee2 whitespace-nowrap py-12">
        {items.map((item) => {
          return (
            <span key={item} className="mx-4 text-4xl">
              {item}
            </span>
          )
        })}
      </div>

      {/* must have both of these in order to work */}
    </div>
  )
}
