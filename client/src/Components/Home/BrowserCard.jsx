import React from 'react';

const BrowserCard = () => {
  return (
    <div className="lg:mx-5 mb-16">
      <div className="container mx-auto max-w-[1400px]">
        <div className="lg:mt-5 2xl:mt-10 bg-black rounded-lg lg:rounded-3xl overflow-hidden mx-auto relative">
          <div>
            <div
              className="h-[150%] absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 xl:-right-[49%] xl:-translate-x-1/2"
              style={{ aspectRatio: '40 / 27' }}
            >
              <picture>
                <source
                  srcSet="https://images.simchacard.com/assets/hero-bg.png?width=300&format=auto"
                  media="(max-width: 400px)"
                />
                <source
                  srcSet="https://images.simchacard.com/assets/hero-bg.png?width=600&format=auto"
                  media="(max-width: 800px)"
                />
                <source
                  srcSet="https://images.simchacard.com/assets/hero-bg.png?width=1200&format=auto"
                  media="(min-width: 800px)"
                />
                <img
                  src="https://images.simchacard.com/assets/hero-bg.png?width=1200&format=auto"
                  alt=""
                  className="object-cover w-full h-full"
                />
              </picture>
            </div>
            <div className="py-24 px-5 lg:py-32 lg:px-48 bg-black/80 xl:bg-transparent relative z-30">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-white text-3xl lg:text-4xl font-medium text-center lg:text-left leading-snug font-sc-poppins tracking-tight">
                    Spread the joy,<br />Share your Simcha <br />with friends and family.
                  </h3>
                  <div className="flex mt-20 lg:mt-10 gap-x-4 justify-center lg:justify-start">
                  <button
  style={{ backgroundColor: 'rgb(229, 180, 119)' }} // Using the RGBA color
  className="border-sc-gold2 border-2 py-1.5 px-4 md:px-6 text-sc-dark font-medium rounded-full text-center"
>
  Browse Cards
</button>
                    <a
                      className="border-white border-2 py-1.5 px-4 md:px-6 text-white font-medium rounded-full text-center"
                      href="/cards/%D7%97%D7%AA%D7%9F-%D7%91%D7%A8%D7%90%D7%A9%D7%99%D7%AA"
                    >
                      חתן בראשית
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrowserCard;
