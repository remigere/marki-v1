'use server';

import { createClient } from '../../utils/supabase/server';

// Function to update delivery address
const updateUserDeliveryAddress = async (userId: string, deliveryAddress: string) => {
  const supabase = await createClient();

  const { data: formResponse, error: formError } = await supabase.rpc(
    'update_delivery_address',
    {
      user_id: userId,
      new_address: deliveryAddress,
    }
  );

  return [formResponse, formError];
};

// Function to update date
const updateUserDate = async (userId: string, date: string) => {
  const supabase = await createClient();

  const { data: formResponse, error: formError } = await supabase.rpc(
    'update_date',
    {
      user_id: userId,
      new_date: date,
    }
  );

  return [formResponse, formError];
};

// Function to update allergies
const updateUserAllergies = async (userId: string, allergies: string) => {
  const supabase = await createClient();

  const { data: formResponse, error: formError } = await supabase.rpc(
    'update_allergies',
    {
      user_id: userId,
      new_allergies: allergies,
    }
  );

  return [formResponse, formError];
};

// Function to update preferences
const updateUserPreferences = async (userId: string, preferences: string) => {
  const supabase = await createClient();

  const { data: formResponse, error: formError } = await supabase.rpc(
    'update_preferences',
    {
      user_id: userId,
      new_preferences: preferences,
    }
  );

  return [formResponse, formError];
};

// Function to update feedback
const updateUserFeedback = async (userId: string, feedback: string) => {
  const supabase = await createClient();

  const { data: formResponse, error: formError } = await supabase.rpc(
    'update_feedback',
    {
      user_id: userId,
      new_feedback: feedback,
    }
  );

  return [formResponse, formError];
};

// Function to update phone number
const updateUserPhoneNumber = async (userId: string, phoneNumber: string) => {
  const supabase = await createClient();

  const { data: formResponse, error: formError } = await supabase.rpc(
    'update_phone_number',
    {
      user_id: userId,
      new_phone_number: phoneNumber,
    }
  );
console.log(formResponse, formError)
console.log(userId, phoneNumber)
  return [formResponse, formError];
};

// Function to update email preferences
const updateUserEmailPreferences = async (userId: string, emailPreferences: string) => {
  const supabase = await createClient();

  const { data: formResponse, error: formError } = await supabase.rpc(
    'update_email_preferences',
    {
      user_id: userId,
      new_email_preferences: emailPreferences,
    }
  );

  return [formResponse, formError];
};

export {
  updateUserDeliveryAddress,
  updateUserDate,
  updateUserAllergies,
  updateUserPreferences,
  updateUserFeedback,
  updateUserPhoneNumber,
  updateUserEmailPreferences,
};
