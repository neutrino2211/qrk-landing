import { Headshot } from "./Headshot";

export default function TeamPage() {
  return (
    <>
      <div className="my-auto mt-16 w-full">
        <div className="py-24 text-center">
          <h1 className="text-8xl font-light">OUR AMAZING TEAM</h1>
        </div>
        <div className="grid grid-cols-1 px-16 md:grid-cols-3">
          <Headshot
            imageSrc="/images/maleek-hs.jpg"
            name="Abdul-Maleek Mustapha"
          >
            <h2>Quality Assurance &amp; Librarian</h2>
          </Headshot>
          <Headshot imageSrc="/images/babangida-hs.png" name="Babangida Tsowa">
            <h2>AI Technology Advisor &amp; Rational Mind</h2>
          </Headshot>
          <Headshot imageSrc="/images/mainasara-hs.jpeg" name="Mainasara Tsowa">
            <h2>AI Reasearcher &amp; Code Nerd</h2>
          </Headshot>
        </div>
      </div>
    </>
  );
}
