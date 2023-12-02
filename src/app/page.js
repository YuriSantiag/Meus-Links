import ImageComp from "../components/Image.js";
import LinkedinComp from "@/components/Linkedin.js";
import GithubComp from "@/components/GitHub.js";
import PortComp from "@/components/Portifolio.js";
import ContactComp from "@/components/Contato.js";
export default function LinksHome() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <ImageComp />
      <LinkedinComp />
      <GithubComp />
      <ContactComp />
      <PortComp />
    </main>
  );
}
