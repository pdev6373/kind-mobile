import Text from './Text';

const content = [
  'We created Kind after working in the environmental and telecoms sector for a number of years.',
  'Why?',
  'We’ve had enough with mobile networks taking advantage.',
  'Hiking up prices every year, locking you into complicated contracts, and looking the other way when it comes to helping the planet.',
  'We knew there had to be a better way.',
  'So we launched Kind.',
  'Our mission is to build the kind of mobile network people deserve while helping the planet.',
  'It’s obvious that there is a real problem. ',
  'We don’t want to guilt trip you into being with us, we just want to make doing your bit easier.',
  'Besides wouldn’t it be nice to be with a network that really is kind?',
];

export default function CTA() {
  return (
    <section
      className="bg-white text-[#131F28] flex flex-col items-center"
      style={{
        paddingBottom: 'clamp(40px, 7.34375vw, 141px)',
        paddingTop: 'clamp(60px, 5.78125vw, 111px)',
        paddingInline: 'max(6.25vw, 20px)',
        gap: 'clamp(48px, 5vw, 96px)',
      }}
    >
      <div
        className="flex flex-col"
        style={{
          gap: 'clamp(24px, 1.979vw, 38px)',
        }}
      >
        <div
          className="mx-auto"
          style={{
            width: 'clamp(300px, 52.08vw, 1000px)',
          }}
        >
          <Text
            className="leading-[0.958] font-medium text-center"
            style={{
              fontSize: 'clamp(48px, 6.25vw, 120px)',
            }}
          >
            join a network you’ll be proud to be a part of
          </Text>
        </div>

        <div
          className="flex flex-col mx-auto"
          style={{
            fontSize: 'clamp(18px, 1.736111111vw, 25px)',
            gap: 'clamp(20px, 2.638888889vw, 38px)',
            maxWidth: 'max(724px, 37.71vw)',
          }}
        >
          {content.map((content, index) => (
            <p
              key={index}
              style={{
                fontSize: 'clamp(14px. 1.302vw, 25px)',
              }}
            >
              {content}
            </p>
          ))}
        </div>
      </div>

      <div>
        <button
          className="font-semibold bg-[#59D3FF] rounded-[50px] leading-[0.9]"
          style={{
            fontSize: 'clamp(14px, 1.04vw, 20px)',
            padding: 'clamp(16px, 1.25vw, 24px)',
          }}
        >
          Explore Kind SIMs
        </button>
      </div>
    </section>
  );
}
