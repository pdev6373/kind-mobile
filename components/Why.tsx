import Image from 'next/image';
import Text from './Text';

const content = [
  'Up to 11 million metric tonnes of plastic enter the ocean every year. That’s like dumping a garbage truck full of plastic into the sea every minute.',
  'More than 800 marine species are affected by plastic pollution from tiny plankton to whales through ingestion, entanglement, or habitat damage.',
  'Over 90% of seabirds have plastic in their stomachs, mistaking it for food, which can lead to starvation and internal injuries.',
  'Plastic breaks down into microplastics, which end up in the seafood we eat, drinking water, and even the air creating potential risks for human health.',
  'By 2050, plastic waste in our oceans could outweigh fish if current pollution rates continue, threatening ecosystems, marine life, and the balance.',
  'Around 80% of ocean plastic originates from land-based sources, carried by wind, rain, and rivers into the sea, where it accumulates.',
];

export default function Why() {
  return (
    <section
      className="bg-[#59D3FF] text-[#131F28] flex flex-col items-center"
      style={{
        paddingBottom: 'clamp(40px, 6.666666667vw, 128px)',
        paddingTop: 'clamp(60px, 7.083333333vw, 136px)',
        paddingInline: 'max(6.25vw, 20px)',
        gap: 'clamp(40px, 4.0625vw, 78px)',
      }}
    >
      <div className="max-w-[1556px] mx-auto">
        <Text
          className="leading-[0.958] font-medium text-center"
          style={{
            fontSize: 'clamp(48px, 6.25vw, 120px)',
          }}
        >
          The ocean makes over half the air we breathe. so why aren’t we looking
          after it?
        </Text>
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns:
            'repeat(auto-fit, minmax(min(19.5em, 100%), 1fr))',
          columnGap: 'clamp(24px, 3.697916667vw, 71px)',
          rowGap: 'clamp(24px, 3.125vw, 60px)',
        }}
      >
        {content.map((content, index) => (
          <p
            key={index}
            className="bg-white rounded-2xl md:rounded-3xl lg:rounded-[30px]"
            style={{
              fontSize: 'clamp(14px, 1.04vw, 20px)',
              padding: 'clamp(16px, 1.25vw, 24px)',
            }}
          >
            {content}
          </p>
        ))}
      </div>
    </section>
  );
}
