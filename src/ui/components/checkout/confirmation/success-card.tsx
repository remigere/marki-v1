import { Button } from "@/design-system/button";
import { Container } from "@/design-system/container";
import { Icon } from "@/design-system/icons";
import { Typography } from "@/design-system/typography";
import Link from "next/link";
import { format } from 'date-fns';

export const SuccessCard = () => {
  // Function to calculate the next Monday's date
  const getNextMondayDate = () => {
    const today = new Date();
    const nextMonday = new Date();
    nextMonday.setDate(today.getDate() + ((1 + 7 - today.getDay()) % 7 || 7));
    return format(nextMonday, 'dd MMM yyyy');
  };

  const deliveryDate = getNextMondayDate();

  return (
    <section className="bg-black-haze-50">
      <Container className="max-md:py-10">
        <div className="bg-white shadow-lg rounded-md overflow-hidden py-10 md:py-14 px-4 md:px-24 w-fit mx-auto md:-translate-y-24 grid place-items-center">
          <Icon name="check-circle" size={80} />
          <div className="text-center space-y-4 md:space-y-6 mt-3 md:mt-8 mb-5 md:mb-10">
            <Typography as={"h1"} variant={"h2"}>
              Thanks for ordering
            </Typography>
            <Typography>
              We’ll send a shipment confirmation email as soon as your
              order ships.
            </Typography>
            <Typography as={"p"} variant={"h4"}>
              Estimated delivery date: {deliveryDate}
            </Typography>
          </div>
          <Button as={Link} href="/dashboard">
            Go to Dashboard
          </Button>
        </div>
      </Container>
    </section>
  );
};