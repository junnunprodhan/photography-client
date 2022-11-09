import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle('blog')
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-10 border-t border-b divide-y">
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                Database
              </a>
              <p className="text-gray-600">5 Jan 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  Difference between SQL and NoSQL
                </p>
              </a>
            </div>
            <p className="text-gray-700">
              1.SQL is RELATIONAL DATABASE MANAGEMENT SYSTEM, NoSQL
              Non-relational or distributed database system.
              <br />
              2.SQL databases have fixed or static or predefined schema, NoSQL
              have dynamic schema
              <br />
              3.SQL databases are not suited for hierarchical data storage.
              NoSQL databases are best suited for hierarchical data storage.
              <br />
              4.SQL databases are best suited for complex queries, NoSQL
              databases are not so good for complex queries
              <br />
              5.SQL database Examples: MySQL, PostgreSQL, Oracle, MS-SQL Server
              etc, NoSQL database Examples: MongoDB, GraphQL, HBase, Neo4j,
              Cassandra etc
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                JWT
              </a>
              <p className="text-gray-600">15 Sep 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  What is JWT, and how does it work?
                </p>
              </a>
            </div>
            <p className="text-gray-700">
              JWT or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.A JWT is a string made
              up of three parts, separated by dots (.), and serialized using
              base64. In the most common serialization format, compact
              serialization, the JWT looks something like this:
              xxxxx.yyyyy.zzzzz. Once decoded, you will get two JSON strings:The
              JOSE (JSON Object Signing and Encryption) header contains the type
              of token — JWT in this case — and the signing algorithm. The
              payload contains the claims. This is displayed as a JSON string,
              usually containing no more than a dozen fields to keep the JWT
              compact. This information is typically used by the server to
              verify that the user has permission to perform the action they are
              requesting. There are no mandatory claims for a JWT, but
              overlaying standards may make claims mandatory. For example, when
              using JWT as bearer access token under OAuth2.0, iss, sub, aud,
              and exp must be present. some are more common than others. The
              signature ensures that the token hasn’t been altered. The party
              that creates the JWT signs the header and payload with a secret
              that is known to both the issuer and receiver, or with a private
              key known only to the sender. When the token is used, the
              receiving party verifies that the header and payload match the
              signature.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                NodeJs and JavaScript
              </a>
              <p className="text-gray-600">28 Dec 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  What is the difference between javascript and NodeJS?
                </p>
              </a>
            </div>
            <p className="text-gray-700">
              1. Javascript is a programming language that is used for writing
              scripts on the website. NodeJS is a Javascript runtime
              environment.
              <br />
              2.Javascript can only be run in the browsers, We can run
              Javascript outside the browser with the help of NodeJS.
              <br />
              3.It is basically used on the client-side. nodejs is mostly used
              on the server-side.
              <br />
              4.Javascript is capable enough to add HTML and play with the DOM.
              Nodejs does not have capability to add HTML tags.
              <br />
              5.Javascript can run in any browser engine as like JS core in
              safari and Spidermonkey in Firefox.V8 is the Javascript engine
              inside of node.js that parses and runs Javascript.
            </p>
          </div>
        </div>
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
              <a
                href="/"
                className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                aria-label="Category"
              >
                NodeJS
              </a>
              <p className="text-gray-600">28 Dec 2022</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="mb-3">
              <a
                href="/"
                aria-label="Article"
                className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  How does NodeJS handle multiple requests at the same time?
                </p>
              </a>
            </div>
            <p className="text-gray-700">
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them.NodeJS server uses
              an EventQueue, which queues incoming client requests and an
              EventLoop which is an infinite loop that receives requests and
              processes them. This EventLoop is single threaded and acts as a
              listener for the EventQueue which processes incoming requests
              based on FIFO policy. When a new request comes in, NodeJS checks
              if it requires any blocking IO operations, if not, the EventLoop
              processes it and sends the response back to the client directly.
              If yes, then the request is forwarded to the thread manager, which
              then based on an algorithm, picks up an idle thread from the pool
              and lets it process the request. After completion of the request
              processing operation, the thread, returns the response back to the
              EventLoop which is then forwarded to the client. Thus, even if an
              incoming request needs blocking IO, the thread pool allows it to
              run asynchronously in the background without blocking the
              EventLoop and it gives a seamless experience of NodeJS handling
              multiple incoming requests concurrently without any persistent
              delays or bottlenecks.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
