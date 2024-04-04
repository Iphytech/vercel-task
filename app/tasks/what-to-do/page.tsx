import Link from "next/link";

export default function WhatToDo() {
  return (
    <div>
      <div className="my-10 text-justify">
        <div className="max-w-2xl mx-auto text-lg">
          <Link href="/">
            <button className="text-sky-800 font-bold">Back</button>
          </Link>
          <h2 className="text-xl font-bold mt-8">
            What do you want to learn or do more of at work?
          </h2>
          <br />
          <p className="">
            I would like to be involved heavily in building toolings that will
            enhance the internal processes, troubleshooting issues, creating
            tutorials to address frequently occurring issues, improving the
            documentation, and working closely with the product team to
            incorporate feedback based on these recurring issues.
          </p>
        </div>
      </div>
    </div>
  );
}
