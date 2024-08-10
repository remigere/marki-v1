"use client"
import React, { useEffect, useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import {
    Elements,
    CardElement,
    useStripe,
    useElements,
} from "@stripe/react-stripe-js"
import Image from "next/image"
import ClipLoader from "react-spinners/ClipLoader"
import { useMealPlanStore } from "@/libs/zustand/meal-plan.store"
import { useDeliveryAddressStore } from "@/libs/zustand/deliveryAddressStore";
import { createClient } from "@/libs/supabase/client"
import {useRouter} from "next/navigation"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "")
const supabase = createClient()
const PaymentForm: React.FC = () => {
    const stripe = useStripe()
    const elements = useElements()
    const [paymentMethod, setPaymentMethod] = useState("card")
    const [email, setEmail] = useState<string | null>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            setEmail(data?.session?.user?.email || null)
        })
    }, [])
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)
    const [loading, setLoading] = useState(false)
    const daysAmount = useMealPlanStore((state) => state.daysAmount)
    const meals = useMealPlanStore((state) => state.meals)

    const handlePaymentMethodChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setPaymentMethod(event.target.value)
    }
    const {
        firstName,
        lastName,
        phoneNumber,
        address,
        addressLine2,
        city,
        state,
        zipCode
    } = useDeliveryAddressStore();

    const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setLoading(true);
		setError(null);
		setSuccess(null);
	
		if (!stripe || !elements) {
			setError("Stripe has not loaded yet. Please try again later.");
			setLoading(false);
			return;
		}
	
		const cardElement = elements.getElement(CardElement);
	
		try {
			const { error: paymentError, paymentMethod } =
				await stripe.createPaymentMethod({
					type: "card",
					card: cardElement!,
				});
	
			if (paymentError) {
				setError(paymentError.message || "Error processing your payment");
				setLoading(false);
				return;
			}

            // Sort meals by slug or title before formatting metadata
            const sortedMeals = [...meals].sort((a, b) => a.slug.localeCompare(b.slug));

            interface MealsMetadata {
                [key: string]: string;
            }

            const mealsMetadata: MealsMetadata = sortedMeals.reduce((acc: MealsMetadata, meal, index) => {
                acc[`meal_${index + 1}`] = meal.title;
                return acc;
            }, {});
            const response = await fetch("/api/create-subscription", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: `${firstName} ${lastName}`,
                    email: email, // replace with actual customer email
                    phone: phoneNumber, // use the phone number from the store
                    productId: "prod_QIkzmbDhRSQ3Hy", // replace with actual product ID
                    duration: "week", // replace with actual duration
                    paymentMethodId: paymentMethod!.id,
                    daysAmount: daysAmount,
                    address: { // Use the address object from the store
                        line1: address,
                        line2: addressLine2,
                        city: city,
                        state: state,
                        postal_code: zipCode,
                        country: "US" // You might want to store this in the Zustand store as well
                    },
                    payment_intent_data: {
                        metadata: {
                            daysAmount: daysAmount.toString(), // Ensure it's a string
                            ...mealsMetadata, // Spread the formatted meals metadata
                        },
                    },
                }),
            });
			const data = await response.json();

			if (!response.ok) {
				setError(data.message);
				setLoading(false);
				return;
			}
			console.log(data);
			setSuccess(`Your subscription has been created successfully. 
				Subscription ID: ${data.subscriptionId}, 
				Subscription Status: ${data.subscriptionStatus}, 
				Current Period End: ${data.current_period_end}, 
				Customer Email: ${data.customer_email}`);
	
			setLoading(false);
			// Navigate to /checkout/confirmation when success is confirmed
			router.push('/checkout/confirmation');
	
		} catch (err: any) {
			setError(err.message);
			setLoading(false);
		}
	}
	const router = useRouter();

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-lg">
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                >
                    <h3 className="text-xl font-bold mb-2">Payment Method</h3>
                    <p className="text-gray-600 mb-4">
                        Please enter your payment details below to complete your
                        purchase.
                    </p>
                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-3">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="payment_method"
                                    value="card"
                                    className="form-radio text-red-600"
                                    checked={paymentMethod === "card"}
                                    onChange={handlePaymentMethodChange}
                                />
                                <span className="ml-2">
                                    Credit or Debit Card
                                </span>
                            </label>
                            <div className="flex space-x-2">
                                <Image
                                    src="/assets/svg/visa-logo.svg"
                                    alt="visa logo"
                                    width={30}
                                    height={20}
                                />
                                <Image
                                    src="/assets/svg/amex-logo.svg"
                                    alt="amex logo"
                                    width={30}
                                    height={20}
                                />
                                <Image
                                    src="/assets/svg/master-card-logo.svg"
                                    alt="master card logo"
                                    width={30}
                                    height={20}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Card Details
                            </label>
                            <CardElement
                                className="form-input p-3 mt-1 block w-full border rounded"
                                options={{
                                    style: {
                                        base: {
                                            fontSize: "16px",
                                            color: "#424770",
                                            "::placeholder": {
                                                color: "#aab7c4",
                                            },
                                        },
                                        invalid: {
                                            color: "#9e2146",
                                        },
                                    },
                                }}
                            />
                        </div>
                    </div>
                    {/* <div className="mb-4">
                        <div className="flex justify-between items-center mb-3">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    name="payment_method"
                                    value="paypal"
                                    className="form-radio text-red-600"
                                    checked={paymentMethod === "paypal"}
                                    onChange={handlePaymentMethodChange}
                                />
                                <span className="ml-2">Pay with PayPal</span>
                            </label>
                            <div className="flex space-x-2">
                                <Image
                                    src="/assets/svg/paypal-logo.svg"
                                    alt="paypal logo"
                                    width={30}
                                    height={20}
                                />
                            </div>
                        </div>
                    </div> */}
                    <div className="text-center mt-4">
					<button
    className="bg-red-600 text-white font-bold py-2 px-4 rounded flex items-center justify-center"
    disabled={!stripe || loading}
>
    {loading ? (
        <ClipLoader
            color="#ffffff"
            loading={loading}
            size={20}
        />
    ) : (
        "Place Order"
    )}
</button>
                    </div>
                    {error && <div className="text-red-500 mt-4">{error}</div>}
                    {success && (
                        <div className="text-green-500 mt-4">Payment successful</div>
                    )}
                </form>
            </div>
        </div>
    )
}

const WrappedPaymentForm: React.FC = () => (
    <Elements stripe={stripePromise}>
        <PaymentForm />
    </Elements>
)

export default WrappedPaymentForm
