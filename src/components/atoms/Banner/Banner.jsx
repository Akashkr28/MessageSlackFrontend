import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <>
    <div className="flex flex-col items-center justify-start min-h-screen p-4">

      {/* Main Banner */}
      <div className="relative w-full max-w-screen-2xl h-96 text-black p-5 rounded-2xl flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-md">
          <h1 
            className="text-2xl md:text-5xl font-bold">
            Streamline your connectivity and collaboration with your own <br/> {" "}
            <ReactTyped className="text-blue-500 md:text-6xl" strings={["Message Slack"]} typeSpeed={100} />
          </h1>
          <div className="mt-4 flex gap-3">
            <Button 
              className="bg-black text-white px-6 py-2 border border-white hover:bg-white hover:text-black"
              onClick={() => navigate('/auth/signup')}
              >Get Started</Button>
          </div>
        </div>
        <div className="w-64 md:w-96">
          <img src="https://kit.shadcnui.com/_next/image?url=%2Fassets%2Fimages%2Fnew-intro-landing%2Fbanner.png&w=1920&q=75" alt="Illustration" className="w-full" />
        </div>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

      {/*Video Section */}
      <div className="relative w-full max-w-screen-md md:h-96 h-50 p-5 md:mt-10 mt-4 rounded-xl flex flex-col md:flex-row items-center justify-center">
        <video src="https://a.slack-edge.com/0cedc3b/marketing/img/homepage/true-prospects/hero-revamp/animation/hero@2x.IN.mp4" className="rounded-xl"  autoPlay loop muted>
          <source type="video/mp4" src="../../assets/hero.mp4"/>
        </video>
      </div>
      
      <h1 className="w-screen md:w-1/2 flex justify-center items-center text-2xl md:text-5xl font-bold mt-1 md:mt-20 text-center">
        Your people, projects, apps and AI, all on the world's most beloved work operating system.
      </h1>
      
      {/* Inquiry Section */}
      <Card className="mt-10 w-full max-w-3xl bg-[#334155] text-white rounded-xl">
        <CardContent className="p-6 text-center">
          <h2 className="text-lg font-semibold">Have any questions? Feel free to reach out!</h2>
          <div className="mt-4 flex justify-center gap-2">
            <Button className="bg-white text-black px-6 py-2">Submit Ticket</Button>
            <Button className="bg-black text-white px-6 py-2 border border-white">Send an email</Button>
          </div>
        </CardContent>
      </Card>
      
    </div>
    
    </>
  );
}
