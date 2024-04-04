import Link from "next/link";

export default function Reply() {
  return (
    <div>
      <div className="my-10 text-justify">
        <div className="max-w-2xl mx-auto text-lg">
          <Link href="/">
            <button className="text-sky-800 font-bold">Back</button>
          </Link>
          <h2 className="text-xl font-bold mt-8">
            The customer from question 5 replies to your response with the
            below: “I’m so frustrated. I’ve been trying to make this work for
            hours and I just can’t figure it out. It must be a platform issue so
            just fix it for me instead of asking me questions.” Please write a
            follow-up reply to the customer.
          </h2>
          <br />

          <p className="mb-4">*Note: Before responding, it's advisable to check the system to ensure that the Vercel build and deployment processes are running optimally..**</p>
          <div className="max-w-2xl mx-auto">
            <p className="mb-4">Hello customerNname,</p>

            <p className="mb-4">Thanks for your email.</p>

            <p className="mb-4">
              I'm sorry to hear that you're feeling frustrated with this issue,
              and I understand that you've been working on it for a while now. I
              have just did some quick sanity checks and can confirm our build
              and deploy system is up and running optimally as I speak. You can
              also confirm this by checking the{" "}
              <a
                href="https://www.vercel-status.com/"
                className="text-blue-500 underline"
              >
                status page here
              </a>
              .
            </p>

            <p className="mb-4">
              However, it's important to note that my questions are not intended
              to burden you but rather to gather all the necessary information
              to help troubleshoot and identify the root cause of the issue
              you're facing.
            </p>

            <p className="mb-4">
              In some cases, the root cause of a problem may be complex and
              require detailed investigation. By asking these questions, I'm
              able to identify the specific details of your situation and
              provide efficient and effective support.
            </p>

            <p className="mb-4">
              Additionally, I'm here to help and want to ensure that I resolve
              this issue as soon as possible. If you prefer, we can set up a
              call or you can share with me a minimal
              reproducible example to help me better understand the issue
              you're facing.
            </p>

            <p className="mb-4">
              I appreciate your patience and understanding as we work through
              this issue together.
            </p>

            <p className="mb-4">I look forward to your response.</p>

            <p className="mb-4">
              Regards,
              <br />
              Ifunanya Ikemma
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
