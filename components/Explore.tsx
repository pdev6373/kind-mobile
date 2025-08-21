import Text from './Text';
import Image from 'next/image';

export default function Explore() {
  return (
    <section
      className="bg-[#131F28] text-white flex flex-col items-center"
      style={{
        paddingBottom: 'clamp(40px, 7.34375vw, 141px)',
        paddingTop: 'clamp(60px, 5.78125vw, 111px)',
        paddingInline: 'max(6.25vw, 20px)',
        gap: 'clamp(48px, 5.5208vw, 106px)',
      }}
    >
      <Text
        className="leading-[0.958] font-medium text-center"
        style={{
          fontSize: 'clamp(48px, 6.25vw, 120px)',
        }}
      >
        ZERO PLASTIC, ZERO PACKAGING. KIND ESIMS.
      </Text>

      <div
        className="flex flex-col items-center text-center"
        style={{
          gap: 'clamp(40px, 4.84375vw, 93px)',
        }}
      >
        <div
          className="bg-[#59D3FF] w-full max-w-[337px] rounded-[30px] aspect-[1/1.32344] flex flex-col justify-between"
          style={{
            paddingTop: 'clamp(20px, 1.35vw, 26px)',
            paddingBottom: 'clamp(24px, 2.604166667vw, 50px)',
            paddingInline: 'clamp(20px, 1.71875vw, 33px)',
          }}
        >
          <p
            className="font-bold leading-[1] text-[#131F28] mr-auto"
            style={{
              fontSize: 'clamp(20px, 1.822916667vw, 35px)',
            }}
          >
            eSIM
          </p>

          <div className="mx-auto">
            <Image
              src={'/svgs/logo.svg'}
              alt="logo"
              width={100}
              height={38}
              className="aspect-[2.63157894737/1]"
              style={{
                width: 'clamp(60px, 5.208vw, 100px)',
              }}
            />
          </div>
        </div>

        <div
          className="flex flex-col"
          style={{
            gap: 'clamp(24px, 2.291666667vw, 44px)',
          }}
        >
          <div
            className="flex flex-col mx-auto"
            style={{
              fontSize: 'clamp(18px, 1.736111111vw, 25px)',
              gap: 'clamp(24px, 2.638888889vw, 38px)',
              maxWidth: 'max(724px, 37.71vw)',
            }}
          >
            <p
              style={{
                fontSize: 'clamp(16px. 1.302vw, 25px)',
              }}
            >
              Create a Kind eSIM for yourself, an employee, or your entire team,
              and select how long you need us. We’re available across the UK
              thanks to our partnerships with Three and Vodafone.
            </p>
          </div>

          <div>
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
    </section>
  );
}
