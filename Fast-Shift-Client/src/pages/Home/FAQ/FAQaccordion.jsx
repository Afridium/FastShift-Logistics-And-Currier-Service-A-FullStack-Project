import React, { use } from 'react';

const FAQaccordion = ({FAQpromise}) => {
    const faq = use(FAQpromise)
    console.log(faq);
    return (
        <div>
            {
                faq.map(faqs => <div key={faqs.id} className="collapse collapse-arrow bg-base-100 border border-base-300 mb-3.5">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold text-(--color-title)">{faqs.faqTitle}</div>
                    <div className="collapse-content text-sm text-(--color-secondary)"><span className='border-t border-dashed'> </span>{faqs.faqDescription}</div>
                </div>)
            }
                
        </div>
    );
};

export default FAQaccordion;