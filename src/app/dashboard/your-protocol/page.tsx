"use client";

import React, { useState, useEffect } from 'react';
import { MdEdit } from 'react-icons/md';

interface MealData {
  mealsPerWeek: number;
  packagePrice: number;
  tax: number;
  orderTotal: number;
  // daysAmount: number;
}

interface DeliveryData {
  address: string;
  date: string;
}

interface UserData {
  id: string;
  email: string;
  name: string;
  phone: string;
  subscriptions: {
    id: string;
    status: string;
    items: {
      data: {
        price: {
          unit_amount: number;
          product: {
            name: string;
          };
        };
        quantity: number;
      }[];
    };
  }[];
  metadata: {
    [key: string]: string;
  };
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  };
}

const Index: React.FC = () => {
  const [mealData, setMealData] = useState<MealData>({
    mealsPerWeek: 0,
    packagePrice: 0,
    tax: 0,
    orderTotal: 0,
    // daysAmount: 0
  });
  const [deliveryData, setDeliveryData] = useState<DeliveryData>({
    address: '',
    date: '',
  });
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
    const fetchUserData = async () => {
      if (!customerId) return;

      try {
        const response = await fetch(`/api/subscriptions?customerId=${customerId}`);
        const data = await response.json();

        const customer = data.customer;
        const subscriptions = customer.subscriptions.data;

        if (subscriptions.length > 0) {
          const subscription = subscriptions[0];
          const items = subscription.items.data;

          const meals = items.map((item: { price: { product: { name: any; }; }; quantity: any; }) => ({
            name: item.price.product.name,
            count: item.quantity,
          }));

          const metadataMeals = Object.keys(customer.metadata)
            .filter(key => key.startsWith('meal_'))
            .map(key => ({
              name: customer.metadata[key],
              count: 1,
            }));

          const allMeals = [...meals, ...metadataMeals];

          const subtotal = allMeals.reduce((acc: number, meal) => acc + meal.count * 18, 0); // Assuming each meal is $18
          const deliveryFee = 19;
          const orderTotal = subtotal + deliveryFee;

          setMealData({
            mealsPerWeek: allMeals.reduce((acc, meal) => acc + meal.count, 0),
            packagePrice: subtotal,
            tax: 6, // Assuming a fixed tax value
            orderTotal: orderTotal,
            // daysAmount: daysAmount
          });

          const nextMonday = getNextMonday();

          setDeliveryData({
            address: `${customer.address.line1}, ${customer.address.line2}, ${customer.address.city}, ${customer.address.state}, ${customer.address.postal_code}, ${customer.address.country}`,
            date: nextMonday,
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
  }, [customerId]);

  const getNextMonday = () => {
    const today = new Date();
    const nextMonday = new Date();
    nextMonday.setDate(today.getDate() + ((1 + 7 - today.getDay()) % 7 || 7));
    return nextMonday.toDateString();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-8">
        {/* Meal Selection */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <h1 className="text-xl font-semibold">Meal Selection</h1>
            <button className="text-red-500"><MdEdit /></button>
          </div>
          <div className="mt-6">
            <div className="flex space-x-4 mb-4">
              {/* <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">Dietary Preferences</label>
                <input
                  type="text"
                  value=""
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  readOnly
                />
              </div> */}
              <div className="w-1/2">
                <label className="block text-sm font-medium text-gray-700">Meals per week</label>
                <input
                  type="text"
                  value={(mealData.mealsPerWeek - 1) * 3}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  readOnly
                />
              </div>
            </div>
            <h2 className="text-lg font-semibold mb-4">Order summary</h2>
            <div className="space-y-2">
              <p>{(mealData.mealsPerWeek) - 1} meals per day</p>
              <p>Package price: $19</p>
              <p>Price per serving: $18</p>
              {/* <p>Tax: ${mealData.tax}</p> */}
              <p>Order total: ${(((mealData.mealsPerWeek - 1) * 3) * 18 + 19)}</p>
            </div>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <h1 className="text-xl font-semibold">Delivery Information</h1>
            <button className="text-red-500"><MdEdit /></button>
          </div>
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-4">Delivery address</h2>
            <p>{deliveryData.address}</p>
            <h2 className="text-lg font-semibold mt-4 mb-4">Delivery date</h2>
            <p>{deliveryData.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
