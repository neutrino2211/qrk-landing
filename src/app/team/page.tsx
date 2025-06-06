import { Headshot } from './Headshot';

export default function TeamPage() {
  return (
    <>
      <div className="my-auto w-full mt-16">
        <div className="text-center py-24">
            <h1 className="text-8xl font-light">OUR AMAZING TEAM</h1>
        </div>
        <Headshot imageSrc='/images/mainasara-hs.jpeg' name='Mainasara Tsowa'>
            <p>
            A seasoned Full-Stack Developer, Infrastructure Specialist, and Security
            Engineer with extensive experience spanning all stages of web
            development and cybersecurity. Having worked in industries like finance,
            education, social media, and social commerce then managing government security software contracts, and
            securing government assets, he founded QRK to awaken the Ummah.
            </p>
        </Headshot>
      </div>
    </>
  );
}