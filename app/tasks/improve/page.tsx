import Link from "next/link";

export default function Improve() {
  return (
    <div>
      <div className="my-10 text-justify">
        <div className="max-w-2xl mx-auto text-lg">
          <Link href="/">
            <button className="text-sky-800 font-bold">Back</button>
          </Link>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mt-8">
              How could we improve or alter this familiarisation exercise?
            </h2>
            <p className="mb-4">
              Alignment with Company Culture and Values: The familiarisation
              exercise could be improved by aligning it with the company&apos;s
              culture and values. This could involve incorporating the company&apos;s
              mission, vision, and values into the exercise to help prospective
              candidates understand and embody the company&apos;s core beliefs and
              principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
