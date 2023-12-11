import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';
import bestOfferSection from '../../mockApi/bestOffersSection'
import landingPageApiDataAtom from '../../recoil/atoms/landingPageApiDataAtom';
import { VITE_BASE_LINK_2 } from '../../../baseLink';

const BestOffersSection = () => {

    const [landingApiData, setLandingApiData] = useRecoilState(landingPageApiDataAtom);

    const [offerData, setOfferData] = useState();

    const [singleProductData, setSingleProductDetails] = useState();

    useEffect(() => {
        setOfferData(landingApiData?.small_carousal_images?.slice(0, 4));
        setSingleProductDetails(landingApiData?.small_carousal_images?.slice(0, 2));
    }, [landingApiData])
    


    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 px-5 lg:px-10 mb-8'>
            <div className='w-full col-start-1 col-end-2 bg-[color:var(--primary-color)] rounded-[15px] lg:pt-4'>
                <h1 className='poppins text-center py-3 text-[20px] lg:text-[25px] font-[500]'>{singleProductData?.title}</h1>
                <div className='w-full lg:my-5 lg:mt-10 flex justify-center items-center'>
                    <img src={VITE_BASE_LINK_2 + singleProductData?.image} alt="" />
                </div>
                <h1 className='poppins text-[15px] md:text-[20px] lg:text-[25px] font-[500] text-center lg:py-2 lg:mt-10'>{singleProductData?.offer}</h1>
                <h1 className='poppins text-[12px] md:text-[15px] lg:text-[20px] text-center py-2'>{singleProductData?.item}</h1>
            </div>
            <div className='w-full grid grid-cols-2 gap-4 lg:gap-8 lg:col-start-2 lg:col-end-4'>
                {
                    offerData?.map((data) => (
                        <div key={data?.id} className='w-full flex flex-col md:flex-row justify-between rounded-[15px] border bg-white shadow-md p-2 py-6'>
                            <div className='w-full flex flex-col justify-center items-center'>
                                <h1 className='text-[20px] md:text-[25px] lg:text-[30px] poppins'>20% off on</h1>
                                <h1 className='text-[16px] md:text-[11px] lg:text-[16px] poppins'>{data?.title}</h1>
                            </div>
                            <div className='lg:w-full flex justify-center items-center'>
                                <img src={VITE_BASE_LINK_2 + data?.image} className='w-[400px] rounded-md' alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BestOffersSection