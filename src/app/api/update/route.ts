import { NextResponse } from 'next/server';

import {
  updateUserDeliveryAddress,
  updateUserDate,
  updateUserAllergies,
  updateUserPreferences,
  updateUserFeedback,
  updateUserPhoneNumber,
  updateUserEmailPreferences,
} from '@/actions/dataUpdate';

export async function PATCH(request: Request) {
  const { userId, deliveryAddress, date, allergies, preferences, feedback, phoneNumber, emailPreferences } = await request.json();

  try {
    const [deliveryResponse, deliveryError] = await updateUserDeliveryAddress(userId, deliveryAddress);
    const [dateResponse, dateError] = await updateUserDate(userId, date);
    const [allergiesResponse, allergiesError] = await updateUserAllergies(userId, allergies);
    const [preferencesResponse, preferencesError] = await updateUserPreferences(userId, preferences);
    const [feedbackResponse, feedbackError] = await updateUserFeedback(userId, feedback);
    const [phoneResponse, phoneError] = await updateUserPhoneNumber(userId, phoneNumber);
    const [emailPreferencesResponse, emailPreferencesError] = await updateUserEmailPreferences(userId, emailPreferences);

    if (
      deliveryError ||
      dateError ||
      allergiesError ||
      preferencesError ||
      feedbackError ||
      phoneError ||
      emailPreferencesError
    ) {
      return NextResponse.json(
        {
          error: 'Error updating user data',
          details: {
            deliveryError,
            dateError,
            allergiesError,
            preferencesError,
            feedbackError,
            phoneError,
            emailPreferencesError,
          },
        },
        { status: 500 }
      );
    }


    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.error('Error updating user data:', error);
    return NextResponse.json(
      { error: 'Error updating user data' },
      { status: 500 }
    );
  }
}