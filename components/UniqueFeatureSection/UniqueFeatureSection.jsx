import React from 'react'

import HeadSection from '../HeadSection/HeadSection';
import Tagline from '../Tagline/Tagline';
import UniqueFeatureCard from '../UniqueFeatureCard/UniqueFeatureCard'

import styles from './style.module.css'
const UniqueFeatureSection = () => {
    const featureSections = [
        {
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                <path d="M9.49841 16.6038C12.4239 16.6038 14.8274 14.2856 14.8274 11.3099C14.8274 10.5795 14.7895 9.79605 14.3849 8.57868C13.9804 7.36226 13.8989 7.20499 13.4707 6.45278C13.2879 7.98752 12.3093 8.62605 12.0601 8.81742C12.0601 8.61847 11.468 6.42057 10.5708 5.10563C9.68978 3.81436 8.49041 2.96742 7.78746 2.39331C7.78746 3.48373 7.48146 5.10563 7.04189 5.93173C6.60231 6.75784 6.52083 6.78815 5.97136 7.40299C5.42189 8.01784 5.17083 8.20731 4.71136 8.95289C4.25283 9.69942 4.16946 10.6932 4.16946 11.4236C4.16946 14.3984 6.57294 16.6038 9.49841 16.6038Z" stroke="#333333" strokeWidth="1.42105" strokeLinejoin="round" />
            </svg>),
            taglineText: "SOFTWARE FOR SOLAR",
            taglineColor: "#F8F9FA",
            title: "Effortlessly Manage Your Solar Business with Our ERP Software",
            description: "Our solar ERP grows with your business, handling CRM, project management, inventory, finance, HR and Daily Progress Report with ease."
        },

    ];
    return (
        <>
        <div className="container">
        <div className="row justify-content-center">
                <div className="col-xxl-8 col-md-8 col-sm-12">
                    <div className="feature-sections-container">
                        {featureSections.map((section, index) => (
                            <HeadSection key={index}
                                TaglineComponent={<Tagline text={section.taglineText} backgroundColor={section.taglineColor} icon={section.icon} />}
                                title={section.title}
                                description={section.description} 
                                />
                        ))}
                    </div>
                </div>
            </div>
        </div>
           
            <div className="cmn_Heading_padding">
            <div className="container">
                <div className="row gy-3">
                    <div className="col-xxl-4 col-md-4 col-sm-12">
                        <UniqueFeatureCard title="Manage Your Customers with Ease"
                            description="Keep track of leads, automate follow-ups, and build stronger customer relationships all in one place."
                            imageSrc='/images/dashBoard/piechart.png'
                            smallImageSrc='/images/dashBoard/piechart.png'
                            imageAlt="Customer Management Dashboard" 
                            fill={true }
                            style={{ objectFit: 'cover' }}
                          />
                    </div>
                    <div className="col-xxl-8 col-md-8 col-sm-12">
                        <UniqueFeatureCard title="Manage Your Customers with Ease"
                            description="Keep track of leads, automate follow-ups, and build stronger customer relationships all in one place."
                            imageSrc='/images/dashBoard/Dashbordgraph.png'
                            smallImageSrc="/images/dashBoard/Mobiledashboard.png" 
                            imageAlt="Customer Management Dashboard"
                            style={{ objectFit: 'contain' }}
                            />
                    </div>
                    <div className="col-xxl-4 col-md-4 col-sm-12">
                        <UniqueFeatureCard title="Manage Your Customers with Ease"
                            description="Easily track stock levels, automate orders, and ensure you never run out of essential Items"
                             imageSrc='/images/dashBoard/piechart.png'
                            smallImageSrc='/images/dashBoard/piechart.png'
                            imageAlt="Customer Management Dashboard" 
                            fill={true }
                            style={{ objectFit: 'cover' }}/>
                    </div>
                    <div className="col-xxl-4 col-md-4 col-sm-12">
                        <UniqueFeatureCard title="Manage Your Customers with Ease"
                            description="Manage budgets, invoices, and financial reporting to keep your business financiallyHealthy and organised."
                            imageSrc='/images/dashBoard/piechart.png'
                            smallImageSrc='/images/dashBoard/piechart.png'
                            imageAlt="Customer Management Dashboard"
                            fill={true }
                            style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="col-xxl-4 col-md-4 col-sm-12">
                        <UniqueFeatureCard title="Manage Your Customers with Ease"
                            description="Manage your assets through their entire lifecycle,ensuring optimal performance, compliance, and cost savings at every stage."
                           imageSrc='/images/dashBoard/piechart.png'
                            smallImageSrc='/images/dashBoard/piechart.png'
                            imageAlt="Customer Management Dashboard" 
                            fill={true }
                            style={{ objectFit: 'cover' }}/>
                    </div>
                    <div className="col-xxl-8 col-md-8 col-sm-12">
                        <UniqueFeatureCard title="Manage Your Customers with Ease"
                            description="Keep track of leads, automate follow-ups, and build stronger customer relationships all in one place."
                            imageSrc='/images/dashBoard/Dashbordgraph.png'
                            smallImageSrc="/images/dashBoard/Mobiledashboard.png" 
                            imageAlt="Customer Management Dashboard"
                            />
                    </div>
                    <div className="col-xxl-4 col-md-4 col-sm-12">
                        <UniqueFeatureCard title="Manage Your Customers with Ease"
                            description="Manage your assets through their entire lifecycle,ensuring optimal performance, compliance, and cost savings at every stage."
                            imageSrc='/images/dashBoard/piechart.png'
                            smallImageSrc='/images/dashBoard/piechart.png'
                            imageAlt="Customer Management Dashboard" 
                            fill={true }
                            style={{ objectFit: 'cover' }}/>
                    </div>
                </div>
            </div>
            </div>
         
        </>
    )
}

export default UniqueFeatureSection