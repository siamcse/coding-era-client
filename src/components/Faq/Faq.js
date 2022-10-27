import React from 'react';
import { useState } from 'react';

const Faq = () => {
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
                    <Item title="Q. Who should take an Online Course?">
                        Students join our online courses for a variety of reasons and come from diverse backgrounds, professions, and age groups. With online courses, you can <br />
                        Advance your skill-set or begin a career change. <br />
                        Take the next step in your formal education. <br />
                        Ease the transition before entering a full-time academic program. <br />
                        Enjoy learning a new topic. <br />
                        Whatever the reason, our online courses are a flexible way of learning about the art world without disrupting your daily life.
                    </Item>
                    <Item title="Q. Are there prerequisites or language requirements?">
                        There are no prerequisites. Our courses are open to students of all backgrounds who are 18 years of age and older.
                    </Item>
                    <Item title="Q. I am a high school student, can I join?">
                        Courses are open to all students 18 years or older. If you are under 18 years old, please contact us ( siamcse01@gmail.com ) to discuss further.
                    </Item>
                    <Item title="Q. Can I take more than one course at a time?">
                        If you are new to online learning, we recommend that you begin with one course. As our courses are offered frequently throughout the year, you can always come back and continue your studies with one or more topics.
                    </Item>
                    <Item title="Q. What should I do if I need to start the course late?">
                        It is recommended that you begin your course promptly. If you do need to start the course a few days late, contact your instructor as soon as possible after the course has opened to discuss your options. Registration closes on the Friday after the course begins.
                    </Item>
                    <Item title="Q. My payment did not go through. What do I do?">
                        We apologize for this inconvenience. We encourage you to reach out to your financial institution as further permissions may be needed to complete the payment. You are also welcome to write to online@sothebysinstitute.com for further guidance.
                    </Item>
                    <Item title="Q. Who should I contact if I have additional questions?">
                        You can contact the Online Team at siamcse01@gmail.com or at +8801960112553.
                    </Item>
                </div>
            </div>
        </div >
    );
};

export default Faq;