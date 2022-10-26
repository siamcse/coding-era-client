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
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div class="flex flex-col mb-16 sm:text-center">
                    
                    <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                        <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span class="relative inline-block">
                                <svg
                                    viewBox="0 0 52 24"
                                    fill="currentColor"
                                    class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                >
                                    <defs>
                                        <pattern
                                            id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                                            x="0"
                                            y="0"
                                            width=".135"
                                            height=".30"
                                        >
                                            <circle cx="1" cy="1" r=".7" />
                                        </pattern>
                                    </defs>
                                    <rect
                                        fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                                        width="52"
                                        height="24"
                                    />
                                </svg>
                                <span class="relative">Frequently</span>
                            </span>{' '}
                            Asked Question
                        </h2>
                        <p class="text-base text-gray-700 md:text-lg">
                            
                        </p>
                    </div>
                </div>
                <div class="space-y-4">
                    <Item title="What is CORS?">
                        CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.
                        <br />
                        In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.
                    </Item>
                    <Item title="Why are you using firebase?">
                        Firebase provides detailed documentation and cross-platform SDKs to help you build and ship apps on Android, iOS, the web, C++, and Unity.
                    </Item>
                    <Item title="What other options do you have to implement authentication?">
                        <ol>
                            <li>AuthO</li>
                            <li>MongoDB</li>
                            <li>Amazon Cognito</li>
                            <li>Back4App</li>
                            <li>Backendless</li>
                            <li>Parse</li>
                        </ol>
                    </Item>
                    <Item title="How does the private route work?">
                        The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                    </Item>
                    <Item title="What is Node? How does Node work?">
                        Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.<br/>
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </Item>
                </div>
            </div>
        </div>
    );
};

export default Blog;