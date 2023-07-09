import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import Stack from "@/components/Stack";
import { Dashboards } from "@/utils/dashboard";
import Typography from "@/components/Typography";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Container>
        <div className="flex flex-col items-center">
          <div className="text-center">
            <div className="">
              <span className="text-white text-xl md:text-4xl lg:text-5xl font-black">
                All the Best
              </span>
              <span className="text-blue-600 text-xl md:text-4xl lg:text-5xl font-black ml-2">
                On-Chain tools
              </span>
            </div>
            <span className="text-white text-xl md:text-4xl lg:text-5xl font-black">
              in One Places
            </span>
            <div className="text-center text-white text-base md:text-lg lg:text-xl font-normal mt-8">
              Gain the Unfair advantage with our powerful set of DEX Automation
              & Transaction monitoring tools.
            </div>
            <div className="flex flex-col md:flex-row gap-4 mt-4 text-center justify-center mt-8">
              <span className="text-center text-white text-base md:text-lg lg:text-xl font-normal">
                Blockchain:
              </span>
              <div className="flex flex-row gap-2">
                <Image
                  className="h-6 w-6 rounded-full"
                  src="/eths.png"
                  alt="ETH"
                  width={0}
                  height={0}
                />
                <Image
                  className="h-6 w-6 rounded-full"
                  src="/poly.png"
                  alt="ETH"
                  width={0}
                  height={0}
                />
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/Bnb.png" alt="@shadcn" />
                </Avatar>
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/Arbitrum.png" alt="@shadcn" />
                </Avatar>
                <Avatar className="h-6 w-6">
                  <AvatarImage src="/avalanche.png" alt="@shadcn" />
                </Avatar>
              </div>
              <div className="text-center text-yellow-400 text-base md:text-lg lg:text-xl font-normal">
                +25 protocols integrated
              </div>
            </div>
            <div className="mt-6">
              <Button size="sm" className="my-10">
                Sign Up
              </Button>

              <h4 className="scroll-m-20 text-[35.29999923706055px] font-black tracking-tight">
                Explore Our Dashboards
              </h4>
              <p className="leading-7 text-[18px] font-normal">
                The tools you need to unlock
                <span className="mx-1 font-black">100X</span>
                profits are now at your finger tips
              </p>
            </div>
          </div>
        </div>
      </Container>
      {Dashboards?.map((dashboard, index) => (
        <Stack width="w-full" flexDirection="col" key={index} margin="mt-24">
          <Stack
            flexDirection={dashboard.direction === true ? "row-reverse" : "row"}
            gap={6}
          >
            <Stack width="w-1/2">
              <Image
                src={dashboard.src}
                alt="dashboard"
                width={650}
                height={650}
              />
            </Stack>
            <>
              <Stack flexDirection="col" width="w-1/2" gap={4}>
                <Typography
                  className="text-[18px]"
                  color="#FFC107"
                  variant="normal"
                >
                  {dashboard.title}
                </Typography>
                <Typography
                  variant="black"
                  className="text-[35.29999923706055px]"
                >
                  {dashboard.subTitle}
                </Typography>
                <Typography variant="normal" className="text-[18px]">
                  {dashboard.description}
                </Typography>
                <Stack>
                <Button variant={dashboard.action === "Get Started" ? "default" : "outline"}>
              <Link href={dashboard.link}>
              {dashboard.action}
              </Link>
            </Button>
                </Stack>

              </Stack>
            </>
          </Stack>
        </Stack>
      ))}
    </>
  );
}
