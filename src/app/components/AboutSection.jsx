'use client';
import React, {useTransition, useState} from 'react'
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title:"Skills",
        id:"skills",
        content:(
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Sequelize</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        )
    },
    {
        title:"Education",
        id:"education",
        content:(
            <ul className='list-disc pl-2'>
                <li>Fullstack Academy of Code</li>
                <li>University of California, Santa Cruz</li>
            </ul>
        )
    },
    {
        title:"Certification",
        id:"certification",
        content:(
            <ul className='list-disc pl-2'>
                <li>AWS Cloud Practitioner</li>
                <li>Google Professional Cloud Developer</li>
            </ul>
        )
    }
]


function AboutSection() {
    const[tab,setTab] = useState("skills");
    const[isPending, startTransition] = useTransition();

    const handleTabChange = (id) =>{
        startTransition(() =>{
            setTab(id);
        })
    }
  return (
    <section class="text-white">
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src='/images/about-image.png' width={500} height={500} />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos odit quo, unde commodi, non repellendus nisi quisquam quibusdam ab laudantium voluptatum, alias sed odio accusamus corporis. Numquam magnam voluptatibus iure laboriosam adipisci repellendus, libero maiores doloremque distinctio temporibus optio amet ad blanditiis impedit sunt odio accusamus vero, accusantium labore?</p>
                <div className='flex flex-row mt-8'>
                    <TabButton 
                        selectTab={() => handleTabChange('skills')}
                        active={tab === 'skills'}
                    >
                            {''}
                            Skills{''}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange('education')}
                        active={tab === 'education'}
                    >
                            {''}
                            Education{''}
                    </TabButton>
                    <TabButton 
                        selectTab={() => handleTabChange('certification')}
                        active={tab === 'certification'}
                    >
                            {''}
                            Certification{''}
                    </TabButton>
                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id ===tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection