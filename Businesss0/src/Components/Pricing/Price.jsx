import React, { useState, useEffect } from 'react';
import './Price.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

const Price = () => {
  const [pricingPlans, setPricingPlans] = useState([]);
  const [activeTab, setActiveTab] = useState('monthly'); // State for managing the active tab

  // Simulate data fetching
  useEffect(() => {
    // Replace this with your actual data fetching logic
    const fetchPricingPlans = async () => {
      // Simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Example data
      const data = [
        {
          id: 1,
          name: 'Startup',
          price: '$9.99',
          period: '/ month',
          features: [
            { name: 'Feature 1', available: true },
            { name: 'Feature 2', available: false },
            { name: 'Feature 3', available: true },
          ],
        },
        {
          id: 2,
          name: 'Growth',
          price: '$12.99',
          period: '/ month',
          features: [
            { name: 'Feature 1', available: true },
            { name: 'Feature 2', available: true },
            { name: 'Feature 3', available: true },
          ],
        },
        {
          id: 3,
          name: 'Maturity',
          price: '$19.99',
          period: '/ month',
          features: [
            { name: 'Feature 1', available: true },
            { name: 'Feature 2', available: true },
            { name: 'Feature 3', available: true },
          ],
        },
      ];
      setPricingPlans(data);
    };

    fetchPricingPlans();
  }, []);

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='h-auto w-full'>
      <section className='pricing-area pt-120 pb-90'>
        <div className='container'>
          <div className="row">
            <div className="col-12">
              <div className="section-title title-center mb-50 aos-init aos-animate" data-aos="fade-up">
                <span className="subtitle text-center w-full text-red-500 mt-16">Build Your Relationship With Us</span>
                <h2 className="title mb-2 mt-0 w-full text-center">Choose Our Pricing Plan</h2>
                <p className="text w-full text-center">Curabitur non nulla sit amet nisl tempus lectus Nulla porttitor accumsan tincidunt.</p>
              </div>
            </div>
            <div className="col">
              <div className="nav-tabs-navigation text-center aos-init aos-animate mt-8" data-aos="fade-up">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'monthly' ? 'active' : ''}`}
                      onClick={() => handleTabChange('monthly')}
                      type="button"
                      role="tab"
                    >
                      Monthly
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'yearly' ? 'active' : ''}`}
                      onClick={() => handleTabChange('yearly')}
                      type="button"
                      role="tab"
                    >
                      Yearly
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'lifetime' ? 'active' : ''}`}
                      onClick={() => handleTabChange('lifetime')}
                      type="button"
                      role="tab"
                    >
                      Lifetime
                    </button>
                  </li>
                </ul>
              </div>
              <div className={`tab-pane p-12 ${activeTab === 'monthly' ? 'active' : ''}`} id='monthly' role='tabpanel'>
                <div className="row">
                  {pricingPlans.map(plan => (
                    <div key={plan.id} className="col-md-6 col-lg-4">
                      <div className="card mb-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <div className="d-flex align-items-center mb-20">
                          <div className="icon"><FontAwesomeIcon icon={faLayerGroup} /></div>
                          <div className="label">
                            <h4>{plan.name}</h4>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="price">
                            {plan.price}
                          </span>
                          <span className="period">{plan.period}</span>
                        </div>
                        <h5>What's Included</h5>
                        <ul className="pricing-list list-unstyled p-0" data-more="Show More" data-less="Show Less">
                          {plan.features.map((feature, index) => (
                            <li key={index}>
                              <FontAwesomeIcon icon={feature.available ? faCheck : faTimes} />
                              {' '}
                              {feature.name}
                            </li>
                          ))}
                        </ul>
                        <span className="show-more">Show More +</span>
                        <div className="btn-groups">
                          <a href="https://businesso.xyz/registration/step-1/trial/11" className="btn btn-lg btn-primary no-animation" target="_self">Trial</a>
                          <a href="https://businesso.xyz/registration/step-1/regular/11" className="btn btn-lg btn-outline no-animation" target="_self">Purchase</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`tab-pane p-12 ${activeTab === 'yearly' ? 'active' : ''}`} id='yearly' role='tabpanel'>
                <div className="row">
                  {pricingPlans.map(plan => (
                    <div key={plan.id} className="col-md-6 col-lg-4">
                      <div className="card mb-30 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <div className="d-flex align-items-center mb-20">
                          <div className="icon"><FontAwesomeIcon icon={faLayerGroup} /></div>
                          <div className="label">
                            <h4>{plan.name}</h4>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="price">
                            {plan.price}
                          </span>
                          <span className="period">{plan.period.replace('/ month', '/ year')}</span> {/* Adjust period for yearly */}
                        </div>
                        <h5>What's Included</h5>
                        <ul className="pricing-list list-unstyled p-0" data-more="Show More" data-less="Show Less">
                          {plan.features.map((feature, index) => (
                            <li key={index}>
                              <FontAwesomeIcon icon={feature.available ? faCheck : faTimes} />
                              {' '}
                              {feature.name}
                            </li>
                          ))}
                        </ul>
                        <span className="show-more">Show More +</span>
                        <div className="btn-groups">
                          <a href="https://businesso.xyz/registration/step-1/trial/11" className="btn btn-lg btn-primary no-animation" target="_self">Trial</a>
                          <a href="https://businesso.xyz/registration/step-1/regular/11" className="btn btn-lg btn-outline no-animation" target="_self">Purchase</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`tab-pane p-12 ${activeTab === 'lifetime' ? 'active' : ''}`} id='lifetime' role='tabpanel'>
                <div className="row">
                  {pricingPlans.map(plan => (
                    <div key={plan.id} className="col-md-6 col-lg-4">
                      <div className="card mb-30 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                        <div className="d-flex align-items-center mb-20">
                          <div className="icon"><FontAwesomeIcon icon={faLayerGroup} /></div>
                          <div className="label">
                            <h4>{plan.name}</h4>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <span className="price">
                            {plan.price}
                          </span>
                          <span className="period">{plan.period.replace('/ month', '/ lifetime')}</span> {/* Adjust period for lifetime */}
                        </div>
                        <h5>What's Included</h5>
                        <ul className="pricing-list list-unstyled p-0" data-more="Show More" data-less="Show Less">
                          {plan.features.map((feature, index) => (
                            <li key={index}>
                              <FontAwesomeIcon icon={feature.available ? faCheck : faTimes} />
                              {' '}
                              {feature.name}
                            </li>
                          ))}
                        </ul>
                        <span className="show-more">Show More +</span>
                        <div className="btn-groups">
                          <a href="https://businesso.xyz/registration/step-1/trial/11" className="btn btn-lg btn-primary no-animation" target="_self">Trial</a>
                          <a href="https://businesso.xyz/registration/step-1/regular/11" className="btn btn-lg btn-outline no-animation" target="_self">Purchase</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape">
                <img className="shape-1" src="https://businesso.xyz/assets/frontend/images/shape/shape-6.png" alt="Shape"/>
                <img className="shape-2" src="https://businesso.xyz/assets/frontend/images/shape/shape-7.png" alt="Shape"/>
                <img className="shape-3" src="https://businesso.xyz/assets/frontend/images/shape/shape-1.png" alt="Shape"/>
                <img className="shape-4" src="https://businesso.xyz/assets/frontend/images/shape/shape-4.png" alt="Shape"/>
                <img className="shape-5" src="https://businesso.xyz/assets/frontend/images/shape/shape-3.png" alt="Shape"/>
                <img className="shape-6" src="https://businesso.xyz/assets/frontend/images/shape/shape-9.png" alt="Shape"/>
            </div>
      </section>
    </div>
  );
}

export default Price;
