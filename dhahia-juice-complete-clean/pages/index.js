
import Head from 'next/head';
import '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dhahia Juice</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Image */}
      <div className="hero">
        <img src="/assets/hero.jpg" alt="Hero" />
      </div>

      {/* About Section */}
      <section className="about">
        <div className="about-left">
          <img src="/assets/about.jpg" alt="About Dhahia" />
        </div>
        <div className="about-right">
          <h2>Our Story</h2>
          <p><strong>IT ALL STARTED ON A TRUCK IN 1978.</strong></p>
          <p>From Dhahiat Abdullah A1 Salem in Kuwait to Saudi Arabia. Most of the juice recipes are created and named by anonymous customers, many of which are the best sellers today.</p>
        </div>
      </section>

      {/* Special Offers */}
      <section className="offer">
        <div className="offerContent">
          <img src="/assets/instagram/insta4.jpg" alt="Special Offer" />
          <div className="offerText">
            <h2>Limited-Time Eid Bucket</h2>
            <button onClick={() => window.location.href='https://amrk-cloud.vercel.app/?brnid=5DPT0Z1ahax00bcGOm1p'}>Order Now</button>
          </div>
        </div>
      </section>

      {/* Instagram Grid */}
      <section className="instagram">
        <h2 className="sectionTitle">Our Instagram</h2>
        <div className="instaGrid">
          <a href="https://www.instagram.com/p/DHRZNWvobCl/" target="_blank"><img src="/assets/instagram/insta1.jpg" alt="Instagram 1" /></a>
          <a href="https://www.instagram.com/p/DG3nL5Socm8/" target="_blank"><img src="/assets/instagram/insta2.jpg" alt="Instagram 2" /></a>
          <a href="https://www.instagram.com/p/DKZc99WoYbB/" target="_blank"><img src="/assets/instagram/insta3.jpg" alt="Instagram 3" /></a>
          <a href="https://www.instagram.com/p/DKbulYUIKj2/" target="_blank"><img src="/assets/instagram/insta4.jpg" alt="Instagram 4" /></a>
          <a href="https://www.instagram.com/p/C9b-eH2oDqt/" target="_blank"><img src="/assets/instagram/insta5.jpg" alt="Instagram 5" /></a>
        </div>
      </section>
    </div>
  );
}
