"use client";
import React, { useEffect, useState } from 'react';
import { FaCcVisa, FaCcMastercard, FaCcAmex } from 'react-icons/fa'; // Import card icons
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/design-system/table";
import Layout from '../layout';

interface Card {
    brand: string;
    last4: string;
    exp_month: number;
    exp_year: number;
}

interface Charge {
    id: string;
    status: string;
    amount: number;
    payment_method_details: {
        card: Card;
    };
}

const Index: React.FC = () => {
    const [billingHistory, setBillingHistory] = useState<Charge[]>([]);
    const [cardDetails, setCardDetails] = useState<Card | null>(null);
    const [customerId, setCustomerId] = useState<string | null>(null);

    useEffect(() => {
        const fetchCustomerId = async () => {
            try {
                const res = await fetch('/api/getCustomerId');
                const data = await res.json();

                if (data.customer_id) {
                    setCustomerId(data.customer_id);
                }
            } catch (error) {
                console.error('Error fetching customer ID:', error);
            }
        };

        fetchCustomerId();
    }, []);

    useEffect(() => {
        const fetchBillingHistory = async () => {
            if (!customerId) return;

            try {
                const res = await fetch(`/api/billing-history?customerId=${customerId}`);
                const data = await res.json();
                setBillingHistory(data.charges.data);

                // Set the card details based on the first charge's card information
                if (data.charges.data.length > 0) {
                    const card = data.charges.data[0].payment_method_details.card;
                    setCardDetails(card);
                }
            } catch (error) {
                console.error('Error fetching billing history:', error);
            }
        };

        fetchBillingHistory();
    }, [customerId]);

    const cardIcons: { [key: string]: JSX.Element } = {
        visa: <FaCcVisa size={48} className="mr-4" />,
        mastercard: <FaCcMastercard size={48} className="mr-4" />,
        amex: <FaCcAmex size={48} className="mr-4" />,
    };

    return (
        <div className="p-6 bg-white shadow-md rounded-md">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-xl font-semibold">Payment Method</h1>
                {/* <button className="text-red-500">Edit</button> */}
            </div>
            {cardDetails && (
                <div className="bg-gray-100 p-4 rounded-md mb-6">
                    <div className="flex items-center">
                        {cardIcons[cardDetails.brand] || <FaCcVisa size={48} className="mr-4" />} {/* Default to Visa */}
                        <div>
                            <p className="font-semibold">
                                {cardDetails.brand.charAt(0).toUpperCase() + cardDetails.brand.slice(1)} ending in {cardDetails.last4}
                            </p>
                            <p className="text-gray-600">Expiry {cardDetails.exp_month}/{cardDetails.exp_year}</p>
                        </div>
                    </div>
                </div>
            )}
            <div>
                <h2 className="text-lg font-semibold mb-4">Past Charges</h2>
                <Table>
                    <TableCaption>A list of your recent invoices.</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Invoice</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Method</TableHead>
                            <TableHead className="text-right">Amount</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {billingHistory.map((charge) => (
                            <TableRow key={charge.id}>
                                <TableCell className="font-medium">{charge.id}</TableCell>
                                <TableCell>
                                    {charge.status === 'pending' ? (
                                        <span className="text-yellow-500">Pending</span>
                                    ) : (
                                        <span className="text-green-500">Complete</span>
                                    )}
                                </TableCell>
                                <TableCell>**** {charge.payment_method_details.card.last4}</TableCell>
                                <TableCell className="text-right">${(charge.amount / 100).toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default Index;
