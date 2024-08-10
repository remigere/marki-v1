"use server"

import { createClient } from "@/libs/supabase/server"

export const insertSubscriptionData = async (subscriptionData: any) => {
  const supabase = createClient();
//   console.log("Inserting subscription data", subscriptionData);
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userId = user?.id;
  
//   const phoneNumber = subscriptionData.latest_invoice.customer_phone;

  const addressParts = [
    subscriptionData.latest_invoice.customer_address.line1,
    subscriptionData.latest_invoice.customer_address.line2,
    subscriptionData.latest_invoice.customer_address.city,
    subscriptionData.latest_invoice.customer_address.state,
    subscriptionData.latest_invoice.customer_address.postal_code,
    subscriptionData.latest_invoice.customer_address.country
  ];
  const deliveryAddress = addressParts.filter(part => part).join(', ');

  const phoneNumber = subscriptionData.latest_invoice.customer_phone;

  console.log(deliveryAddress)
  const mappedData = {
    // id: subscriptionData.id,
    user_id: userId,// Assuming this is the correct mapping and is a valid UUID
    status: subscriptionData.status,
    customer_id: subscriptionData.customer,
    latest_invoice_id: subscriptionData.latest_invoice?.id || null,
    plan_id: subscriptionData.plan?.id || null,
    quantity: subscriptionData.quantity || null,
    metadata: subscriptionData.metadata || null,
    livemode: subscriptionData.livemode || null,
    customer_name: subscriptionData.latest_invoice.customer_name,
    delivery_address: deliveryAddress,
    phoneNumber: phoneNumber
  };

  const { data, error } = await supabase
    .from("subscriptions")
    .insert([mappedData])
    .select("*");

  if (error) {
    console.error("Error inserting subscription data", error);
    return {
      ok: false,
      code: error.code,
      message: error.message,
    };
  }

  console.log("Subscription data inserted successfully", data);
  return {
    ok: true,
    data,
  };
};