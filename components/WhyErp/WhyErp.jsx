import React from 'react';
import Card from '../Card/Card';
import HeadSection from '../HeadSection/HeadSection';
import Tagline from '../Tagline/Tagline';
import CounterSection from './CounterSection';


const WhyErp = () => {
    const FeaturesErp = [
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9.49841 1.99854H14.4984V7.66854L19.4084 4.83354L21.9084 9.16354L16.9984 11.9985L21.9084 14.8335L19.4084 19.1635L14.4984 16.3285V21.9985H9.49841V16.3285L4.58841 19.1635L2.08841 14.8335L6.99841 11.9985L2.08841 9.16354L4.58841 4.83354L9.49841 7.66854V1.99854Z" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>),
            title: 'Expert Guidance',
            description: 'You get expert insights from highly trained implementation consultants across all domains.'
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M5.99841 3.62554C5.51841 3.95886 5.12956 4.40713 4.86739 4.92941C4.60521 5.45169 4.47807 6.03133 4.49756 6.61539C4.51705 7.19946 4.68256 7.76933 4.97897 8.27297C5.27538 8.77661 5.69325 9.19795 6.19441 9.49854M17.9984 3.62554C18.4618 3.94777 18.8402 4.3774 19.1015 4.87771C19.3627 5.37802 19.4989 5.93414 19.4984 6.49854C19.4984 7.68754 18.9054 8.73853 17.9984 9.37053M21.9984 20.9985V20.3985C21.9984 18.1585 21.9984 17.0385 21.5624 16.1825C21.1791 15.4295 20.5672 14.8173 19.8144 14.4335M1.99841 20.9985V20.3985C1.99841 18.1585 1.99841 17.0385 2.43441 16.1825C2.81773 15.4295 3.42965 14.8173 4.18241 14.4335M11.9984 9.99854C12.458 9.99854 12.9132 9.90801 13.3378 9.73211C13.7624 9.55622 14.1483 9.29841 14.4733 8.97341C14.7983 8.6484 15.0561 8.26257 15.232 7.83793C15.4079 7.41329 15.4984 6.95816 15.4984 6.49854C15.4984 6.03891 15.4079 5.58378 15.232 5.15914C15.0561 4.7345 14.7983 4.34867 14.4733 4.02366C14.1483 3.69866 13.7624 3.44085 13.3378 3.26496C12.9132 3.08907 12.458 2.99854 11.9984 2.99854C11.0702 2.99854 10.1799 3.36728 9.52354 4.02366C8.86716 4.68004 8.49841 5.57028 8.49841 6.49854C8.49841 7.42679 8.86716 8.31703 9.52354 8.97341C10.1799 9.62979 11.0702 9.99854 11.9984 9.99854ZM5.99841 19.9985V20.9985H17.9984V19.9985C17.9984 18.1345 17.9984 17.2025 17.6934 16.4685C17.2877 15.4885 16.5093 14.7097 15.5294 14.3035C14.7944 13.9985 13.8624 13.9985 11.9984 13.9985C10.1344 13.9985 9.20241 13.9985 8.46841 14.3035C7.98296 14.5043 7.54181 14.7988 7.17017 15.1701C6.79852 15.5414 6.50366 15.9823 6.30241 16.4675C5.99841 17.2025 5.99841 18.1345 5.99841 19.9985Z" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>),
            title: 'Migration support',
            description: 'Get complete assistance with setup, migrating from your old software, and connecting to other applications.'
        },
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clipPath="url(#clip0_528_106598)">
                    <path d="M2.99841 4.62653L12.0024 1.99854L20.9984 4.62653V10.0155C20.9983 12.7774 20.1291 15.4693 18.514 17.7097C16.8989 19.9502 14.6197 21.6255 11.9994 22.4985C9.37841 21.6255 7.09862 19.9497 5.48312 17.7087C3.86761 15.4677 2.99831 12.7751 2.99841 10.0125V4.62653Z" stroke="#262626" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M7.49841 11.4985L10.9984 14.9985L16.9984 8.99854" stroke="#262626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_528_106598">
                        <rect width="24" height="24" fill="white" transform="translate(-0.00158691 -0.00146484)" />
                    </clipPath>
                </defs>
            </svg>),
            title: 'Data Security Assurance',
            description: 'We protect your data with encryption and access controls, keeping your information safe at all times.'
        },

    ];
    const HeadSections = [
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                <path d="M7.12341 1.99854H13.8734L9.74841 7.24854H15.3734L6.37341 16.9985L8.24841 9.87354H2.99841L7.12341 1.99854Z" stroke="#333333" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>),
            taglineText: "Why ERP",
            taglineColor: "#F8F9FA",
            title: "Go Beyond with Powerful Integrations",
            description: "Our advanced ERP software integrates smoothly with your website, financial systems, and third-party tools, ensuring quicker project delivery and improved closing rates."
        },

    ];
    return (
        <section className='whyErpSection cmn_Sectionpadding'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <div className="row ">
                            <div className="col-xxl-12 col-md-12 col-sm-12">
                                <div className="feature-sections-container ">
                                    {HeadSections.map((section, index) => (
                                        <HeadSection key={index}
                                            TaglineComponent={<Tagline text={section.taglineText} backgroundColor={section.taglineColor} icon={section.icon} />}
                                            title={section.title}
                                            description={section.description}
                                            textAlign="left"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <CounterSection/>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="row g-4">
                            {FeaturesErp.map((feature, index) => (
                                <div
                                    className={index === 0 ? "col-lg-12 col-sm-12" : "col-lg-6 col-sm-12"}
                                    key={index}
                                >
                                    <Card
                                        icon={feature.icon}
                                        title={feature.title}
                                        description={feature.description}
                                    />
                                </div>
                            ))}
                            
                        </div>
                       
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyErp;