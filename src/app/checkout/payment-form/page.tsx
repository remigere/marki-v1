import PaymentFormComponent from "@/ui/components/checkout/payment-form/payment";
import { OrderSummary } from "@/ui/components/checkout/build-your-meal-plan/order-summary";
import { Steps } from "@/ui/components/checkout/steps";
import { Layout } from "@/ui/components/checkout/build-your-meal-plan/layout";
import { NextPage } from "next";

const PaymentForm: NextPage = () => (
  <main>
    <Steps />
    <Layout title="Payment Information" asideChildren={<OrderSummary />}>
      <PaymentFormComponent />
    </Layout>
  </main>
);

export default PaymentForm;