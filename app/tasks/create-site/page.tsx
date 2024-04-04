import Link from "next/link";

export default function CreateSite() {
  return (
    <div>
      <div className="my-10 text-justify">
        <div className="max-w-2xl mx-auto text-lg">
          <Link href="/">
            <button className="text-sky-800 font-bold">Back</button>
          </Link>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mt-8">
              A customer is creating a site and would like their project not to
              be indexed by search engines. Please write a reply to the
              customer. Feel free to add any information about your
              decision-making process after the reply.
            </h2>
            <br />
            <p className="mb-4">Hello customerName,</p>

            <p className="mb-4">Thanks for reaching out to Vercel Support.</p>

            <p className="mb-4">
              If you would like your project not to be indexed by search
              engines, you can add the following code to your site's robots.txt
              file:
            </p>
            <pre className="bg-gray-100 rounded-lg p-2 mb-4">
              <code>
                User-agent: *<br />
                Disallow: /
              </code>
            </pre>
            <p>
              Please note that the index file must be accessible in the root of
              your project. If you are using NextJs, the robots.txt file should
              be located in the root of the /public folder.{" "}
            </p>

            <p className="mb-4">
              By adding the code in the robots.txt file, it tells search engines
              not to index any pages on your site. However, it's important to
              note that while adding the code can help prevent search engines
              from indexing your site, it is still not 100% guaranteed. Some
              search engines may still index your site even if you have this
              code in your robots.txt file.
            </p>

            <p className="mb-4">
              Additionally, If you would like to further improve this, I
              recommend looking into other methods like adding meta tags to your
              site's HTML code. See below for an example:
            </p>
            <pre className="bg-gray-100 rounded-lg p-2 mb-4">
              <code>&lt;meta name="robots" content="noindex"&gt;</code>
            </pre>

            <p className="mb-4">
              To recap further on the above, here are the steps to follow:
            </p>
            <ol className="list-decimal ml-6 mb-4">
              <li>Create a robots.txt file:</li>
              <li>
                In the file, add the following line:{" "}
                <code>User-agent: * Disallow: /</code>
              </li>
              <li>Add the "no index" meta tag:</li>
              <li>
                In the &lt;head&gt; section of your HTML pages, add the
                following meta tag:{" "}
                <code>&lt;meta name="robots" content="noindex"&gt;</code>
              </li>
            </ol>

            <p className="mb-4">
              Let me know if you have any further questions or concerns!
            </p>

            <p className="">
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
