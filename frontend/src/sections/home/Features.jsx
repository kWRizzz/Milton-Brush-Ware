import React from 'react'
import {
    ShieldCheck,
    Settings,
    Factory,
    Globe,
} from "lucide-react";


const features = [
    {
        icon: ShieldCheck,
        title: "Premium content",
        description: "Manufactured using high-quality materials and precision engineering standards."
    },
    {
        icon: Settings,
        title: "Custom Solutions",
        description: "Customized industrial brushes designed according to your business needs. "
    },
    {
        icon: Factory,
        title: "Industrial Manufacturing",
        description:
            "Advanced production process ensuring durability and reliable performance.",
    },
    {
        icon: Globe,
        title: "Global Supply",
        description:
            "Serving industrial clients with efficient supply and trusted partnerships.",
    }
]




const Features = () => {
    return (
        <section
            className=' section-padding bg-white'
        >

            <div
                className='container-custom '
            >

                {/* heading */}
                <div
                    className=''
                >
                    <p className="text-primary uppercase tracking-widest text-sm font-semibold mb-3">
                        Why Choose Us
                    </p>

                    <h2 className="heading-secondary mb-4">
                        Trusted Industrial Brush Manufacturers
                    </h2>

                    <p className="paragraph max-w-2xl mx-auto">
                        We deliver precision-engineered brush solutions designed
                        for industrial durability, efficiency, and long-term performance.
                    </p>
                </div>

                <div
                    className='  flex justify-center items-center gap-5'
                >
                    {
                        features.map((feature,index)=>{
                            const Icon= feature.icon
                            return (

                                <div
                                    key={index}
                                    className=' flex flex-col  justify-center items-center  border border-border rounded-2xl px-8  hover:shadow-lg transition bg-background'
                                >

                                    <div
                                        className="w-14 h-14 rounded-xl bg-primary text-white flex items-center justify-center mb-6"
                                    >
                                        <Icon
                                            size={28}
                                        />
                                    </div>

                                    <div
                                        className=' w-full text-xl font-bold mb-4'
                                    >
                                        {feature.title}
                                    </div>

                                    <div
                                        className='paragraph'
                                    >
                                        {feature.description}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </section>
    )
}

export default Features