import Link from "next/link";

export default function BuildIssues() {
  return (
    <div>
      <div className="my-10 text-justify">
        <div className="max-w-2xl mx-auto text-lg">
          <Link href="/">
            <button className="text-sky-800 font-bold">Back</button>
          </Link>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mt-8">
              Imagine a customer writes in requesting help with a build issue on
              a framework or technology that you've not seen before. How would
              you begin troubleshooting this and what questions would you ask
              the customer to understand the situation better?
            </h2>
            <p className="">
              If a customer writes in requesting help with a build issue on a
              framework or technology that I'm not familiar with, I would start
              by taking the following troubleshooting steps:
            </p>

            <ol className="list-decimal ml-6">
              <li>
                <p>
                  Firstly,it's important for me to read and understand the issue
                  raised as this would help with asking the right questions,and
                  then check for the information the customer provided in the
                  escalation to understand what additional information to
                  request.
                </p>
              </li>
              <li>
                <p>
                  Then, I would ask the following questions:
                </p>
                <ul className="list-disc ml-6">
                  <li>
                    What operating system (OS) and version are they running on?
                  </li>
                  <li>
                    What command or process are they using to build the
                    application or project?
                  </li>
                  <li>
                    At what step in the build process does the issue occur?
                  </li>
                  <li>
                    What is the exact error message or behavior they are
                    observing?
                  </li>
                  <li>
                    Ask if they could share the build logs or error message?
                  </li>
                  <li>
                    Ask them to share the screenshot of their build container
                    resources?
                  </li>
                  <li>
                    If there are no clear reproduction steps, Ask how I can
                    reproduce the issue.
                  </li>
                  <li>Ask what should happen when the build is successful?</li>
                  <li>
                    Ask if they have been able to build the project or application
                    successfully in a previous build? If so, ask what has changed
                    since the last successful build?
                  </li>
                  <li>
                    Ask if there are any recent changes made to the codebase,
                    dependencies, or configurations?
                  </li>
                </ul>
              </li>
            </ol>

            <p className="">
              While waiting for the customer to provide additional information,
              I would quickly search our records/knowledgebase to check if a similar case have
              been raised and how it was resolved. This may help me in
              replicating the issue and identifying the root cause. If, after
              gathering all the necessary information, I am still unable to
              determine the root cause or provide a solution, I would escalate
              the issue to a team member who is more familiar with the
              technology or framework for further guidance and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
