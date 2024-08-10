import { Container } from "@/design-system/container"
import { Typography } from "@/design-system/typography"
import { SignupForm } from "@/ui/components/registration/signup-form"
import { twMerge } from "tailwind-merge"
import Image from "next/image"

export const SignupLayout = () => {
    return (
        <div className="grid md:grid-cols-2">
            <aside
                className="max-md:hidden bg-tory-blue-800 relative overflow-hidden"
                style={{
                    backgroundImage:
                        "url(/img/home/bg-vector-3.svg), url(/img/home/bg-vector-2.svg)",
                    backgroundPosition: "bottom right, top left",
                }}
            >
                <div
                    className={twMerge(
                        "aspect-[750/745] absolute right-0 top-0 w-44 md:w-96 -translate-y-1/4 translate-x-1/4",
                    )}
                >
                    <Image
                        src={"/img/menu/bowl-1.png"}
                        alt="bowl with strawberries illustration"
                        fill
                        sizes="(max-width: 768px) 16rem, 384px"
                    />
                </div>
                <div
                    className={twMerge(
                        "aspect-[750/756] absolute bottom-0 right-1/4 w-72 translate-y-1/3",
                    )}
                >
                    <Image
                        src={"/img/menu/bowl-2.png"}
                        alt="bowl with vegetables illustration"
                        fill
                        sizes="(max-width: 768px) 20rem, 448px"
                    />
                </div>
                <div
                    className={twMerge(
                        "aspect-[449/450] absolute inset-y-0 h-fit md:w-64 lg:w-80 m-auto left-8",
                    )}
                >
                    <Image
                        src={"/img/menu/bowl-3.png"}
                        alt="bowl with vegetables illustration"
                        fill
                        sizes="(max-width: 768px) 20rem, 448px"
                    />
                </div>
            </aside>

            <Container className="space-y-5 sm:space-y-10 grid place-items-center py-10 sm:py-28">
                <Typography as={"h1"}>Sign up</Typography>
                <SignupForm />
            </Container>
        </div>
    )
}
