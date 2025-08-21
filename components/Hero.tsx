import Text from './Text';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      className="bg-white text-[#131F28] flex flex-col items-center"
      style={{
        paddingBottom: 'clamp(40px, 7.34375vw, 141px)',
        paddingTop: 'clamp(60px, 5.78125vw, 111px)',
        paddingInline: 'max(6.25vw, 20px)',
        gap: 'clamp(40px, 3.125vw, 60px)',
      }}
    >
      <div>
        <Text
          className="leading-[0.958] font-medium text-center"
          style={{
            fontSize: 'clamp(62px, 11.979166667vw, 230px)',
          }}
        >
          MOBILE. Kind to you.
          <br /> Kind to the planet.
        </Text>

        <div
          className="flex flex-col"
          style={{
            gap: 'clamp(24px, 2.291666667vw, 44px)',
          }}
        >
          <div className="flex flex-col items-center mx-auto md:max-w-[49.84375vw]">
            <p
              className="text-center"
              style={{
                fontSize: 'clamp(16px, 1.736111111vw, 25px)',
              }}
            >
              We’ve built the UK’s first mobile network for businesses that
              removes ocean plastic every month. Plastic-free SIMs, zero
              packaging, and real tracked impact.
            </p>
          </div>

          <div className="flex justify-center">
            <button
              className="font-semibold bg-[#59D3FF] text-[#131F28] rounded-[50px] leading-[0.9]"
              style={{
                fontSize: 'clamp(14px, 1.04vw, 20px)',
                padding: 'clamp(16px, 1.25vw, 24px)',
              }}
            >
              Explore Kind SIMs
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1502px] mx-auto">
        <Image src={'/pngs/whale.png'} alt="whale" width={1502} height={349} />
      </div>
    </section>
  );
}
