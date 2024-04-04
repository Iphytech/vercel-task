import Link from "next/link";

export default function CommonProblems() {
  return (
    <div>
      <div className="my-10 text-justify">
        <div className="max-w-2xl mx-auto text-lg">
          <Link href="/">
            <button className="text-sky-800 font-bold">Back</button>
          </Link>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mt-8">
              What do you think is one of the most common problems that
              customers ask Vercel for help with? How would you help customers
              to overcome common problems, short-term and long-term?
            </h2>
            <p>
              Deployment issues are one of the most common problems that Vercel
              customers might encounter while hosting and deploying their
              websites and web applications.
            </p>

            <p className="mt-4 mb-2">
              As a customer success engineer, I would follow these steps to
              assist customers in overcoming common deployment problems:
            </p>

            <h3 className="font-bold mt-4 mb-2">Short-term approach:</h3>
            <ol className="list-decimal ml-6 mb-4">
              <li>
                <strong>Prompt response and Continuos Update:</strong> I would continually update the customer on the progress of their issue and provide timely responses to their queries. This would help build trust and confidence in the support process and reassure the customer that their problem is being addressed.

              </li>
              <li>
                <strong>Gather information:</strong> I would ask the customer to
                provide relevant information about their project, such as the
                framework/language used, the version of Vercel CLI, and any
                error messages or logs they encounter during the deployment
                process.
              </li>
              <li>
                <strong>Troubleshoot common issues:</strong> I would try to
                identify and troubleshoot common deployment issues based on the
                information provided. For example, I would check if the project
                is correctly configured for Vercel, ensure the project's
                dependencies are up-to-date and compatible with the target
                environment, verify that the project's build script is working
                correctly and not producing any errors, and check for any
                changes in the project's code or configuration that might be
                causing conflicts with Vercel's deployment process.
              </li>
              <li>
                <strong>Provide step-by-step guidance:</strong> If the issue can
                be resolved through specific steps or configuration changes, I
                would provide clear and detailed instructions to the customer,
                explaining each step and its purpose.
              </li>
              <li>
                <strong>Escalate if necessary:</strong> If I am unable to
                resolve the issue or if it requires further investigation, I
                would escalate the case to a more experienced team member or the
                Vercel technical team, providing them with all the relevant
                information collected from the customer.
              </li>
            </ol>

            <h3 className="font-bold mt-4 mb-2">Long-term approach:</h3>
            <ol className="list-decimal ml-6 mb-4">
              <li>
                <strong>Knowledge base and documentation:</strong> I would
                maintain a comprehensive knowledge base or documentation that
                covers common deployment issues, troubleshooting steps, and best
                practices for deploying on Vercel. This would empower customers
                to resolve issues independently and reduce the need for support
                requests.
              </li>
              <li>
                <strong>Training and workshops:</strong> I would conduct regular
                training sessions or workshops for customers, covering topics
                such as Vercel deployment workflow, configuration management,
                and debugging techniques. This would help customers gain a
                deeper understanding of the platform and be better prepared to
                handle issues on their own.
              </li>
              <li>
                <strong>Community forums and Q&A:</strong> I would encourage
                customers to participate in community forums or Q&A platforms
                specifically for Vercel users. This would foster knowledge
                sharing, allow customers to learn from each other's experiences,
                and potentially crowdsource solutions to common problems.
              </li>
              <li>
                <strong>Proactive monitoring and alerts:</strong> I would
                implement proactive monitoring and alerting systems that can
                detect potential deployment issues before they impact customers.
                This would allow for preemptive troubleshooting and minimize
                downtime or disruptions.
              </li>
              <li>
                <strong>Continuous improvement:</strong> I would regularly
                analyze support requests, deployment logs, and customer feedback
                to identify recurring issues or pain points. I would also share
                this information with the product to improve the deployment
                process, update documentation, or enhance the platform's
                functionality to address these problems proactively.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
