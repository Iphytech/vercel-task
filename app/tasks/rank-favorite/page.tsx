import Link from "next/link";

export default function RankFavorite() {
  return (
    <div className="my-10 text-justify">
      <div className="max-w-2xl mx-auto text-lg">
        <Link href="/">
          <button className="text-sky-800 font-bold">Back</button>
        </Link>
        <br />
        <h2 className="text-xl font-bold mb-4">
          Rank your 5 most favourite and 5 least favourite support tasks:
        </h2>
        <h3 className="font-semibold mb-2">Most Favorite:</h3>
        <ol className="list-decimal ml-6">
          <li>
            Dig through logs to troubleshoot a customer&apos;s broken project:{" "}
            <span className="">
              I find the process of investigating and resolving technical issues
              to be intellectually stimulating and rewarding. Troubleshooting
              challenges me to think critically and apply my problem-solving
              skills.
            </span>
          </li>
          <li>
            Act as a dedicated CSE for a handful of key customers to ensure
            their success using Vercel:{" "}
            <span className="">
              I find this task rewarding as it involves building relationships
              with customers and helping them achieve their goals using Vercel.
            </span>
          </li>
          <li>
            Work with the product team to develop a new feature based on
            feedback from customers:{" "}
            <span className="">
              I appreciate the opportunity to collaborate with other teams and
              directly contribute to the product&apos;s evolution based on customer
              insights. This allows me to play a role in enhancing the overall
              user experience.
            </span>
          </li>
          <li>
            Create video tutorials to help teach users a specific feature or use
            case:{" "}
            <span className="">
              Producing educational content challenges me to break down complex
              concepts into digestible formats, which not only benefits
              customers but also reinforces my own understanding.
            </span>
          </li>
          <li>
            Analyze hundreds of support tickets to spot trends the product team
            can use:{" "}
            <span className="">
              Identifying recurring patterns and trends in customer issues
              enables me to provide valuable insights to the product team,
              potentially leading to improvements that benefit a broader user
              base.
            </span>
          </li>
        </ol>
        <br />
        <h3 className="font-semibold mb-2">Least Favorite:</h3>
        <ol className="list-decimal ml-6">
          <li>
            Help resolve billing issues for customers:{" "}
            <span className="">
              While important, billing-related tasks feel less aligned with my
              technical interests and strengths.
            </span>
          </li>
          <li>
            Find and recruit teammates for the support team:{" "}
            <span className="">
              Recruitment and hiring activities are less appealing to me as I
              prefer to focus more on technical and customer-facing aspects of
              the role.
            </span>
          </li>
          <li>
            Respond to 50+ support requests via email dail:{" "}
            <span className="">
              While responding to support requests is essential, this could
              indicate a process flow in the company&apos;s workflow that needs
              urgent attention. Handling a large volume of emails daily can be
              overwhelming and may lead to decreased effectiveness in addressing
              each inquiry thoroughly. Maintaining quality and attention to
              detail under time constraints may also be challenging.
            </span>
          </li>
          <li>
            Respond to queries on Twitter, Reddit, Hacker News and other 3rd
            party sites:{" "}
            <span className="">
              While important for customer engagement, managing multiple
              communication channels can be challenging and potentially
              distracting from more technically-focused tasks.
            </span>
          </li>
          <li>
            Run ticket review sessions to make sure tone is consistent:{" "}
            <span className="">
              While I understand the importance of consistent communication,
              dedicated sessions focused solely on tone and phrasing feel less
              engaging compared to more technically-oriented tasks.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}
