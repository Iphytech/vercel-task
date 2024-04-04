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
              When would you choose to use Edge Functions, Serverless Functions,
              or Edge Middleware with Vercel?
            </h2>
            <br />
            <p className="">
              I would consider each use case when deciding between Edge
              Functions, Serverless Functions, or Edge Middleware with Vercel.
            </p>

            <p className="mb-4">
              Edge Functions are a good choice when running a JavaScript,
              TypeScript, or Web Assembly function that needs to be fast and
              located close to the user's region. This function can be used to
              fetch data or run processes like image optimization. Still, it's
              not advisable to use it to fetch data from a database in a
              different region, as this would increase latency and negate the
              benefits of the Edge Function.
            </p>

            <p className="mb-4">
              Serverless Functions, on the other hand, are ideal for running
              heavy computations that would otherwise increase request latency,
              such as image or video processing, newsletter mail processing, or
              purchase order processing. Unlike Edge Functions, Serverless
              Functions are triggered by events and focus on processing data
              within a short period of time before shutting down. Each
              Serverless Function performs only one kind of process and returns
              its response either through an event or as an HTTP response.
            </p>

            <p className="mb-4">
              Finally, Edge Middleware is a good choice when you need to run a
              code before a request is processed. As a middleware, it serves as
              an intermediary between the request and the resource being
              accessed. Here, you can implement logic like authentication,
              logging, rewriting headers or responses, performing redirection,
              and more. Edge Middleware is a flexible option for customizing
              HTTP request/response handling and implementing advanced routing
              and security features at the edge.
            </p>

            <p className="">
              In summary, I would choose Edge Functions for optimizing
              performance and executing code at Vercel's edge network,
              Serverless Functions for backend logic, API endpoints, and dynamic
              content generation, and Edge Middleware for customizing HTTP
              request/response handling and implementing advanced routing and
              security features at the edge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
