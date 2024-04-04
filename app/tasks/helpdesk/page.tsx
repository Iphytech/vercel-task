import Link from "next/link";

export default function Helpdesk() {
  return (
    <div>
      <div className="my-10 text-justify">
        <div className="max-w-2xl mx-auto text-lg">
          <Link href="/">
            <button className="text-sky-800 font-bold">Back</button>
          </Link>
          <h2 className="text-xl font-bold mt-8">
            A customer writes into the Helpdesk asking &quot;How do I do a redirect
            from the /blog path to https://example.com?&quot; Please write a reply to
            the customer. Feel free to add any information about your
            decision-making process after the reply.
          </h2>
          <br />
          <div className="max-w-2xl mx-auto">
            <p className="mb-4">Hello customerName,</p>

            <p className="mb-4">Thanks for contacting Vercel Support.</p>

            <p className="mb-4">
              In order to redirect from the /blog path to{" "}
              <a href="https://example.com" className="text-blue-500 underline">
                https://example.com
              </a>
              , you can use one of the following methods, depending on your
              framework and environment:
            </p>

            <ol className="list-decimal ml-6 mb-4">
              <li className="mb-2">
                For Next.js Edge functions and middlewares, you can use the
                following code:
              </li>
              <pre className="bg-gray-100 rounded-lg p-2 mb-2 overflow-scroll">
                <code>
                  import &#123; redirect &#125; from &quot;next/navigation&quot;;
                  <br />
                  export const runtime = &apos;edge&apos;;
                  <br />
                  export async function GET(req: Request) &#123;
                  <br />
                  &nbsp;&nbsp;const url = new URL(req.url,
                  `http://$&#123;req.headers.get(&quot;host&quot;)&#125;`);
                  <br />
                  &nbsp;&nbsp;const pathname = url.pathname;
                  <br />
                  <br />
                  &nbsp;&nbsp;if (pathname === &quot;/blog&quot;) &#123;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;redirect(&quot;https://example.com&quot;);
                  <br />
                  &nbsp;&nbsp;&#125;
                  <br />
                  &#125;
                </code>
              </pre>
              <li className="mb-2">
                For the vercel.json file, you can add the following code:
              </li>
              <pre className="bg-gray-100 rounded-lg p-2 mb-2">
                <code>
                  &#123;
                  <br />
                  &nbsp;&nbsp;&quot;redirects&quot;: [<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&#123;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;source&quot;: &quot;/blog&quot;,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;destination&quot;:
                  &quot;https://example.com&quot;,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;permanent&quot;: true
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&#125;
                  <br />
                  &nbsp;&nbsp;]
                  <br />
                  &#125;
                </code>
              </pre>
              <li className="mb-2">
                For the next.config.js file, you can add the following code:
              </li>
              <pre className="bg-gray-100 rounded-lg p-2 mb-2">
                <code>
                  module.exports = &#123;
                  <br />
                  &nbsp;&nbsp;async redirects() &#123;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;return [ &#123;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;source&quot;: &apos;/blog&apos;,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;destination&quot;:
                  &apos;https://example.com&apos;,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;permanent&quot;: true,
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&#125; ]<br />
                  &nbsp;&nbsp;&#125;
                  <br />
                  &#125;
                </code>
              </pre>
            </ol>

            <p className="mb-4">
              Please be aware that each framework has a specific library to
              import redirect from. For other frameworks which do not have
              first-hand library support from Vercel, you can import the
              redirect from:
            </p>
            <pre className=" rounded-lg p-2 mb-4">
              <code>
                import type &#123; VercelRequest &#125; from &apos;@vercel/node&apos;;
              </code>
            </pre>

            <p className="mb-4">
              You can also learn more about URL redirects in our documentation{" "}
              <a
                href="https://vercel.com/docs/edge-network/redirects"
                className="text-blue-500 underline"
              >
                here
              </a>
              .
            </p>

            <p className="mb-4">
              I hope this helps. Let me know if you have any further questions!
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
