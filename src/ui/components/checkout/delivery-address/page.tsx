"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { useDeliveryAddressStore } from '@/libs/zustand/deliveryAddressStore';

const DeliveryAddressForm: React.FC = () => {
    const router = useRouter();
    const {
        firstName,
        lastName,
        phoneNumber,
        address,
        addressLine2,
        city,
        state,
        zipCode,
        setDeliveryAddress
    } = useDeliveryAddressStore();

    const handleInputChange = (field: string) => (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setDeliveryAddress({ [field]: e.target.value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        router.push('/checkout/payment-form');
    };

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">
                            Delivery Address
                        </h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                                placeholder="First name"
                                value={firstName}
                                onChange={handleInputChange('firstName')}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                                placeholder="Last name"
                                value={lastName}
                                onChange={handleInputChange('lastName')}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                                placeholder="Phone number"
                                value={phoneNumber}
                                onChange={handleInputChange('phoneNumber')}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                                placeholder="Address"
                                value={address}
                                onChange={handleInputChange('address')}
                            />
                        </div>
                        <div className="md:col-span-2">
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                                placeholder="Address line 2"
                                value={addressLine2}
                                onChange={handleInputChange('addressLine2')}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                                placeholder="City"
                                value={city}
                                onChange={handleInputChange('city')}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                                placeholder="State"
                                value={state}
                                onChange={handleInputChange('state')}
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className="w-full px-4 py-3 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-500 focus:bg-white"
                                placeholder="Zip Code"
                                value={zipCode}
                                onChange={handleInputChange('zipCode')}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DeliveryAddressForm;
