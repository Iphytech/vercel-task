import Link from "next/link";

export default function ChallengeSolved() {
  return (
    <div>
      <div className="my-10 text-justify">
        <div className="max-w-2xl mx-auto text-lg">
          <Link href="/">
            <button className="text-sky-800 font-bold">Back</button>
          </Link>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mt-8">
              Describe how you solved a challenge or technical issue that you
              faced in a previous role (preferably in a previous support role).
              How did you determine that your solution was successful?
            </h2>
            <p className="">
              Owing to a surge in suspicious requests attributed to a possible
              breach, a hotfix was rolled out to block all originating IP
              addresses and require manually allowlisting IP originating IP
              addresses before access to the user&apos;s wallet. Due to the quick
              nature of this, there was a delay between when communication was
              sent to affected customers and when they received this comms. This
              led to a surge in dropped transactions and a barrage of support
              tickets raised that needed attention by my team. To resolve this,
              I prioritized IP whitelisting support requests, sending out a
              self-paced high-fidelity illustrative document to guide users to
              whitelist an application on our platform securely. I also caused
              our in-house documentation to be updated to include these steps to
              ensure they can self-serve without raising support requests. The
              support requests were resolved on first contact as our internal
              dashboard revealed a drop in error logs from IP access errors,
              with no feedback loop on the request and no repeat request for a
              similar type of issue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
