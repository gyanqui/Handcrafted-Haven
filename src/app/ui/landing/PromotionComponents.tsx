export function Heading(params: {
  content: string
}) {
  return (
    <h2 className="text-black text-xl font-extrabold md:text-5xl">
      {params.content}
    </h2>
  );
}

export function ArrivalCard() {
  return (
    <div className="w-fit flex flex-col items-center">
      <div className="bg-[#D9D9D9] h-32 w-20 rounded-2xl md:h-52 md:w-36 lg:h-72 lg:w-64"></div>
      <p className="text-black font-medium">Category Name</p>
    </div>
  );
}

export function NewPopularCard() {
  return (
    <section>
      <Heading content="What's New"/>
      <div className="mt-3 flex items-end justify-center gap-3 md:flex-col md:items-start">
        <div className="bg-[#D9D9D9] h-32 w-60 rounded-2xl md:h-52 md:w-[300px] lg:w-[400px] lg:h-80"></div>
        <div>
          <p className="text-black font-medium">[Product Name]</p>
          <p className="text-[#797979] text-sm font-medium">[Product Name]</p>
        </div>
      </div>
    </section>
  );
}