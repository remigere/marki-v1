import DeliveryAddressForm from "@/ui/components/checkout/delivery-address/page";
import { OrderSummary } from "@/ui/components/checkout/build-your-meal-plan/order-summary";
import { Steps } from "@/ui/components/checkout/steps";
import { Layout } from "@/ui/components/checkout/build-your-meal-plan/layout";
import { NextPage } from "next";

const DeliveryAddress: NextPage = () => (
  <main>
    <Steps />
    <Layout title="Delivery Address" asideChildren={<OrderSummary />}>
      <DeliveryAddressForm />
    </Layout>
  </main>
);

export default DeliveryAddress;