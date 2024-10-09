export default function AboutUs () {
    return (
        <div className="h-[150vh] text-center font-serif bg-gray-100 px-3 md:px-8 lg:px-16">
            <h1 className="text-3xl text-center text-black  font-bold pt-11 ">where we believe in making financial dreams a reality </h1>
            <p className="text-lg py-4 ">With years of experience in the lending industry, our mission is to provide tailored financial solutions that empower individuals and businesses to achieve their goals. We pride ourselves on our commitment to transparency, customer satisfaction, and responsible lending.</p>

            <div>
                <h2 className="font-bold text-xl text-center">Our Services</h2>
                <div className="mt-3 justify-between gap-2 sm:block md:block lg:flex">
                    <div className="p-3" >
                       <div className="h-[250px] w-[250px] rounded-full bg-gradient-to-r from-blue-900 via-indigo-900  to-green-900 flex place-content-center mx-auto"><img className="h-[240px] w-[240px] rounded-full bg-white overflow-hidden my-auto object-fill" src="https://th.bing.com/th/id/OIP.FOJFlKnsBbOc2WWvYKN_XwHaE8?rs=1&pid=ImgDetMain"/></div>
                        <h3 className="font-bold pt-3 pb-3">Personal Loans</h3>
                        <p className="text-lg">Whether you’re looking to cover unexpected expenses, fund a dream vacation, or consolidate debt, our personal loan options are designed to meet your unique needs. We offer competitive interest rates and flexible repayment terms, making it easier for you to manage your finances</p>
                    </div>

                    <div className="p-3">
                       <div className="h-[250px] w-[250px] rounded-full bg-gradient-to-r from-blue-900 via to-green-900 flex place-content-center mx-auto"><img className="h-[240px] w-[240px] rounded-full bg-white overflow-hidden my-auto object-cover" src="https://th.bing.com/th/id/OIP.rBGvovVL2q_R9Ghd6gLuEgHaE7?rs=1&pid=ImgDetMain"></img></div>
                        <h3 className="font-bold pt-3 pb-3">Business Loans</h3>
                        <p className="text-lg"> we understand the challenges of running a business. Our business loans provide the capital you need to expand, invest in new equipment, or manage cash flow. With a quick approval process and customizable terms, we help you focus on what matters most—growing your business.</p>
                    </div>

                    <div className="p-3">
                       <div className="h-[250px] w-[250px] rounded-full bg-gradient-to-r from-blue-900 via-red-600 to-orange-600 flex place-content-center mx-auto"><img className="h-[240px] w-[240px] rounded-full bg-white overflow-hidden my-auto object-cover" src="https://th.bing.com/th/id/OIP.ROLtAOftXi6DlDugeyoOJAAAAA?rs=1&pid=ImgDetMain"></img></div>
                        <h3 className="font-bold pt-3 pb-3">Home Equity Loans</h3>
                        <p className="text-lg">Unlock the potential of your home with our home equity loans. Whether you want to renovate, pay for education, or consolidate debt, our home equity solutions allow you to leverage your property’s value. Enjoy competitive rates and flexible options tailored to your financial situation</p>
                    </div>

                </div>
                <div>
                        <h3 className="pb-5 font-bold text-xl">Why Choose Us</h3>
                        <div className=" flex gap-2 justify-between text-center mx-auto max-w-screen-sm:block max-w-screen-sm:place-content-center max-w-screen-md:block max-w-screen-md:mx-auto max-w-screen-md:gap-2 max-w-screen-lg:flex">
                            <div className=" p-2 w-[400px] h-[250px] bg-gray-600 text-center mt-2 rounded-lg text-white text-xl items-center flex place-content-center ">
                                <p>Proven Track Record: With a success rate of 96% in customer satisfaction, we are committed to delivering results that matter</p>
                            </div>

                            <div className="p-2 w-[400px] h-[250px] bg-gray-600 text-center mt-2 rounded-lg text-white text-xl items-center flex place-content-center ">
                                <p>Expert Support: Our knowledgeable team is always ready to provide guidance, ensuring you understand your options every step of the way</p>
                            </div>

                            <div className="p-2 w-[400px] h-[250px] bg-gray-600 text-center mt-2 rounded-lg text-white text-xl items-center flex place-content-center ">
                                <p>Streamlined Process: Our efficient application and approval process means you can receive funds quickly and easily</p>
                            </div>

                        </div>
                        <p className="pt-5 text-lg">we’re not just about numbers; we’re about people. Join the thousands of satisfied customers who have turned to us for their lending needs. Contact us today to find out how we can help you achieve your financial goals!</p>
                    </div>

            </div>
        </div>
    )

}