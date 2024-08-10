"use client";

import React, { useState, useEffect } from 'react';

interface SubscriptionItem {
  id: string;
  price: {
    unit_amount: number;
    currency: string;
    recurring: {
      interval: string;
      interval_count: number;
    };
    product: string;
  };
  quantity: number;
  plan: {
    amount: number;
    currency: string;
    interval: string;
    interval_count: number;
    metadata: {
      [key: string]: string;
    };
  };
}

interface Subscription {
  id: string;
  status: string;
  current_period_start: number;
  current_period_end: number;
  items: {
    data: SubscriptionItem[];
  };
  metadata: {
    [key: string]: string;
  };
}

interface UserData {
  id: string;
  email: string;
  name: string;
  phone: string;
  subscriptions: {
    data: Subscription[];
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
  const [userData, setUserData] = useState<UserData | null>(null);
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
        const response = await fetch(`/api/subscription?customerId=${customerId}`);
        const data = await response.json();
        console.log('Fetched user data:', data);  // Add this line
        setUserData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchUserData();
  }, [customerId]);

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-8">
        {/* User Details */}
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-xl font-semibold mb-4">User Details</h1>
          {userData ? (
            <div className="space-y-4">
              <p><strong>Name:</strong> {userData.name}</p>
              <p><strong>Email:</strong> {userData.email}</p>
              <p><strong>Phone:</strong> {userData.phone}</p>
              <p><strong>Billing Address:</strong> {`${userData.address.line1}, ${userData.address.line2}, ${userData.address.city}, ${userData.address.state}, ${userData.address.postal_code}, ${userData.address.country}`}</p>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {/* Subscription Details */}
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-xl font-semibold mb-4">Subscription Details</h1>
          {userData && userData.subscriptions && userData.subscriptions.data.length > 0 ? (
            userData.subscriptions.data.map((subscription) => (
              <div key={subscription.id} className="space-y-4">
                <p><strong>Status:</strong> {subscription.status}</p>
                <p><strong>Current Period Start:</strong> {new Date(subscription.current_period_start * 1000).toLocaleDateString()}</p>
                <p><strong>Current Period End:</strong> {new Date(subscription.current_period_end * 1000).toLocaleDateString()}</p>
                {subscription.items.data.map((item) => (
                  <div key={item.id}>
                    {/* <p><strong>Plan ID:</strong> {item.plan.id}</p> */}
                    <p><strong>Product:</strong> {item.plan.metadata.product}</p>
                    <p><strong>Quantity:</strong> {item.quantity}</p>
                    <p><strong>Unit Amount:</strong> {(item.plan.amount / 100).toFixed(2)} {item.plan.currency.toUpperCase()}</p>
                    <p><strong>Interval:</strong> {item.plan.interval} ({item.plan.interval_count})</p>
                    <p><strong>Meals:</strong></p>
                    <ul className="list-disc list-inside">
                      {Object.entries(item.plan.metadata).map(([key, value]) => key.startsWith('meal_') && <li key={key}>{value}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p>No subscriptions found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
