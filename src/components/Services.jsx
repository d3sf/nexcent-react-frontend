import React from 'react';
// import c1 from '../assets/icons/company1.png'
const Services = () => {


  const services = [
    { id: 1, title: "Membership Organisations", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/icons/company1.png" },

    { id: 2, title: "National Associations", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/icons/company1.png" },
    { id: 3, title: "Clubs And Groups", description: "Our membership management software provides full automation of membership renewals and payments", image: "/src/assets/icons/company1.png" },
  ]





  return (
    <div className='md:px-100 px-4 py-12 max-w-screen-2xl mx-auto'>
      <div className='text-center my-8'>

        <h2 className='text-4xl text-neutralDGray font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralDGray'>We have been working with some Fortune 500+ clients</p>

        {/* compnay logos */}


        <div className='my-12 flex flex-wrap justify-between items-center gap-8 '>

          <img src="/src/assets/icons/company1.png" alt="" />
          <img src="/src/assets/icons/company1.png" alt="" />
          <img src="/src/assets/icons/company1.png" alt="" />
          <img src="/src/assets/icons/company1.png" alt="" />
          <img src="/src/assets/icons/company1.png" alt="" />
          <img src="/src/assets/icons/company1.png" alt="" />
          <img src="/src/assets/icons/company1.png" alt="" />

        </div>

      </div>
      {/* services */}
      <div className='text-center my-8 py-4'>

        <h2 className='text-4xl text-neutralDGray font-semibold mb-2'>Manage your entire community <br /><span>in a single system</span></h2>
        <p className='text-neutralDGray'>Who is Nexcent suitable for?
        </p>

        {/*  card */}

        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
          {
            services.map(service =>
              <div key={service.id} className='px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-4 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full'>
                <div className=''>
                  <div className='mb-4 bg-[#E8F5E9] h-14 w-14 mx-auto rounded-tl-3xl'>
                    <img src={service.image} alt="" className='-ml-5' />
                  </div>
                  <h4 className='text-2xl font-bold text-neutralDGray mb-2 px-2'>{service.title}</h4>
                  <p className='text-sm text-neutralDGray'>{service.description}</p>

                </div>

              </div>
            )
          }
        </div>




      </div>


    </div>
  );
};

export default Services;