import React from 'react';
import { useState } from 'react';

const Blog = () => {
    const Item = ({ title, children }) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div className="border rounded shadow-sm">
                <button
                    type="button"
                    aria-label="Open item"
                    title="Open item"
                    className="flex items-center justify-between w-full p-4 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <p className="text-lg font-medium">{title}</p>
                    <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                        <svg
                            viewBox="0 0 24 24"
                            className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                                }`}
                        >
                            <polyline
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                points="2,7 12,17 22,7"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </button>
                {isOpen && (
                    <div className="p-4 pt-0">
                        <p className="text-gray-700">{children}</p>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div>
            <h2 className='text-center text-2xl mt-4'>Blog about React Authentication</h2>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mb-10 border-t border-b divide-y">
                    <div className="grid py-8 sm:grid-cols-4">

                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-2xl font-bold leading-none sm:text-4xl xl:text-4xl">
                                        What is CORS?
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                                <br />
                                In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
                            </p>
                        </div>
                    </div>
                    <div className="grid py-8 sm:grid-cols-4">
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-2xl font-bold leading-none sm:text-4xl xl:text-4xl">
                                        Why are you using firebase? What other options do you have to implement authentication?
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity. <br /> <br />
                                Some alternatives of Firebase:
                                <ol>
                                    <li>AuthO</li>
                                    <li>MongoDB</li>
                                    <li>Amazon Cognito</li>
                                    <li>Back4App</li>
                                    <li>Backendless</li>
                                    <li>Parse</li>
                                </ol>
                            </p>
                        </div>
                    </div>
                    <div className="grid py-8 sm:grid-cols-4">
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-2xl font-bold leading-none sm:text-4xl xl:text-4xl">
                                        How does the private route work?
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                            </p>
                        </div>
                    </div>
                    <div className="grid py-8 sm:grid-cols-4">
                        <div className="sm:col-span-3 lg:col-span-2">
                            <div className="mb-3">
                                <a
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-2xl font-bold leading-none sm:text-4xl xl:text-4xl">
                                        What is Node? How does Node work?
                                    </p>
                                </a>
                            </div>
                            <p className="text-gray-700">
                                Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.<br />
                                It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;