import { Headshot } from "./Headshot";

export default function TeamPage() {
  return (
    <>
      <div className="my-auto mt-16 w-full">
        <div className="py-24 text-center">
          <h1 className="text-8xl font-light">OUR AMAZING TEAM</h1>
        </div>
        <div className="grid grid-cols-1 px-16 md:grid-cols-2">
          <Headshot imageSrc="/images/mainasara-hs.jpeg" name="Mainasara Tsowa">
            <p>
              A seasoned Full-Stack Developer, Infrastructure Specialist, and
              Security Engineer with extensive experience spanning all stages of
              web development and cybersecurity. Having worked in industries
              like finance, education, social media, and social commerce then
              managing government security software contracts, and securing
              government assets, he founded QRK to awaken the Ummah.
            </p>
          </Headshot>
          <Headshot imageSrc="/images/babangida-hs.png" name="Babangida Tsowa">
            <p>
              As a technology professional with a proven track record as a
              leading frontend engineer, he has consistently driven
              transformative projects that optimize operational efficiency and
              enhance overall productivity. His expertise lie in effectively
              translating intricate technical specifications into practical
              solutions that harmoniously align with organizational objectives.
            </p>
          </Headshot>
          <Headshot
            imageSrc="/images/maleek-hs.jpg"
            name="Abdul-Maleek Mustapha"
          >
            <p>
              Experienced Software developer. Detests ugly user interfaces and
              passionate about crafting solid and scalable fronted products and
              user experiences. Very passionate about aesthetics and UI design.
            </p>
          </Headshot>
        </div>
      </div>
    </>
  );
}
