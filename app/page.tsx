import Link from "next/link";

export default function Home() {
  return (
    <main className="p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Customer Success Engineer Task&nbsp;
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By Ifunanya Ikemma
          </a>
        </div>
      </div>
      <h1 className="my-4 text-xl font-bold border-b-2 py-2">Task List</h1>
      <ul>
        <li className="text-sky-800 font-bold py-4 hover:text-sky-600 transition">
          <Link href="/tasks/rank-favorite">
            1. From this list, rank your 5 most favourite and 5 least favourite
            support tasks. Provide a brief explanation for each.
          </Link>
        </li>
        <li className="text-sky-800 font-bold py-4 hover:text-sky-600 transition">
          <Link href="/tasks/what-to-do">
            2. What do you want to learn or do more of at work?
          </Link>
        </li>
        <li className="text-sky-800 font-bold py-4 hover:text-sky-600 transition">
          <Link href="/tasks/challenge-solved">
            3. Describe how you solved a challenge or technical issue that you
            faced in a previous role (preferably in a previous support role).
            How did you determine that your solution was successful?
          </Link>
        </li>
        <li className="text-sky-800 font-bold py-4 hover:text-sky-600 transition">
          <Link href="/tasks/vercel-functions">
            4. When would you choose to use Edge Functions, Serverless
            Functions, or Edge Middleware with Vercel?
          </Link>
        </li>
        <li className="text-sky-800 font-bold py-4 hover:text-sky-600 transition">
          <Link href="/tasks/build-issues">
            5. Imagine a customer writes in requesting help with a build issue
            on a framework or technology that you&apos;ve not seen before. How would
            you begin troubleshooting this and what questions would you ask the
            customer to understand the situation better?
          </Link>
        </li>
        <li className="text-sky-800 font-bold py-4 hover:text-sky-600 transition">
          <Link href="/tasks/reply">
            6. The customer from question 5 replies to your response with the
            below: “I&apos;m so frustrated. I&apos;ve been trying to make this work for
            hours and I just can&apos;t figure it out. It must be a platform issue so
            just fix it for me instead of asking me questions.” Please write a
            follow-up reply to the customer.
          </Link>
        </li>
        <li className="text-sky-800 font-bold py-4 hover:text-sky-600 transition">
          <Link href="/tasks/helpdesk">
            7. A customer writes in to the Helpdesk asking &apos;How do I do a
            redirect from the /blog path to https://example.com?&apos; Please write a
            reply to the customer. Feel free to add any information about your
            decision making process after the reply.
          </Link>
        </li>
        <li className="text-sky-800 font-bold py-4 hover:text-sky-600 transition">
          <Link href="/tasks/create-site">
            8. A customer is creating a site and would like their project not to
            be indexed by search engines. Please write a reply to the customer.
            Feel free to add any information about your decision making process
            after the reply.
          </Link>
        </li>
        <li className="text-sky-800 font-bold py-4 hover:text-sky-600 transition">
          <Link href="/tasks/common-problems">
            9. What do you think is one of the most common problems which
            customers ask Vercel for help with? How would you help customers to
            overcome common problems, short-term and long-term?
          </Link>
        </li>
        <li className="text-sky-800 font-bold py-4 hover:text-sky-600 transition">
          <Link href="/tasks/improve">
            10. How could we improve or alter this familiarization exercise?
          </Link>
        </li>
      </ul>
    </main>
  );
}
