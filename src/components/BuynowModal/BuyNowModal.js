/* eslint-disable react/prop-types */
import {
    Button,
    Dialog,
    DialogBody,
} from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <>
            <Button
                type="button"
                onClick={handleOpen}
                className="w-full px-4 py-3 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 hover:border-pink-500 hover:text-pink-700 hover:bg-pink-100 rounded-xl"
            >
                CheckOut
            </Button>
            <Dialog open={open} handler={handleOpen} className="buy-modal py-4 bg-pink-50">
                <DialogBody className="mx-auto w-full max-w-[24rem]">
                    <div className="mb-3">

                       <h3 className="font-bold">Billing Details</h3>

                    <label>Name</label>
                        <input
                            type="text"
                            name="name"
                            value={addressInfo.name}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    name: e.target.value
                                })
                            }}
                            placeholder='Enter your name'
                            className='bg-pink-50 border border-pink-200 px-2 py-1 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
                        />
                    </div>
                  <div className="mb-3">
                    <label>City</label>
                        <input
                            type="text"
                            name="city"
                            value={addressInfo.city}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    city: e.target.value
                                })
                            }}
                            placeholder='Enter your city'
                            className='bg-pink-50 border border-pink-200 px-2 py-1 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
                        />
                    </div>
                    <div className="mb-3">
                    <label>Address</label>
                        <input
                            type="text"
                            name="address"
                            value={addressInfo.address}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    address: e.target.value
                                })
                            }}
                            placeholder='Enter your full address'
                            className='bg-pink-50 border border-pink-200 px-2 py-1 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
                        />
                    </div>

                    <div className="mb-3">
                    <label>Pincode</label>
                        <input
                            type="number"
                            name="pincode"
                            value={addressInfo.pincode}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    pincode: e.target.value
                                })
                            }}
                            placeholder='Enter your pincode'
                            className='bg-pink-50 border border-pink-200 px-2 py-1 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
                        />
                    </div>

                    <div className="mb-3">
                    <label>Phone</label>
                        <input
                            type="text"
                            name="mobileNumber"
                            value={addressInfo.mobileNumber}
                            onChange={(e) => {
                                setAddressInfo({
                                    ...addressInfo,
                                    mobileNumber: e.target.value
                                })
                            }}
                            placeholder='Enter your mobile Number'
                            className='bg-pink-50 border border-pink-200 px-2 py-1 w-full rounded-md outline-none text-pink-600 placeholder-pink-300'
                        />
                    </div>

                    <div className="">
                    {/* <a href='https://rzp.io/l/pUeeNLp'> */}
                        <Button

                            type="button"
                            onClick={() => {
                                handleOpen();
                                buyNowFunction();
                            }}
                            className="w-full text-lg px-4 py-1 text-center text-gray-100 bg-pink-600 border border-transparent dark:border-gray-700 rounded-lg"
                        >
                          Place Order
                        </Button>
                        {/* </a> */}
                    </div>

                      
                </DialogBody>
            </Dialog>
        </>
    );
}

export default BuyNowModal;
