import Link from 'next/link';
import Text from './Text';
import Image from 'next/image';

const TOS = [
  {
    title: 'Terms & Conditions',
    link: '/terms-and-conditions',
  },
  {
    title: 'Privacy Policy',
    link: 'privacy-policy',
  },
  {
    title: 'Cookie Policy',
    link: 'cookie-policy',
  },
];

export default function Footer() {
  return (
    <footer
      className="flex flex-col bg-[#59D3FF] text-[#131F28]"
      style={{
        paddingBottom: 'clamp(32px, 3.229vw, 62px)',
        paddingTop: 'clamp(60px, 5.677vw, 109px)',
        paddingInline: 'max(6.25vw, 20px)',
        gap: 'clamp(120px, 15.208vw, 292px)',
      }}
    >
      <div className="flex flex-col md:flex-row gap-10 justify-between w-full max-w-[1400px]">
        <div
          style={{
            width: 'clamp(300px, 33.6979vw, 647px)',
          }}
        >
          <Text
            className="leading-[0.89] font-medium"
            style={{
              fontSize: 'clamp(48px, 6.25vw, 120px)',
            }}
          >
            let’s make an impact, together
          </Text>
        </div>

        <div
          className="flex flex-col"
          style={{
            gap: 'clamp(20px 1.26875vw, 24.36px)',
          }}
        >
          <Text
            className="font-medium leading-[1]"
            style={{
              fontSize: 'clamp(28px, 2.21875vw, 42.6px)',
            }}
          >
            Get in touch
          </Text>
          <div className="flex flex-col gap-0.5 mt-3">
            <a
              href="mailto:wave@kindmobile.com"
              target="_blank"
              className="underline"
              style={{
                fontSize: 'clamp(18px. 1.302vw, 25px)',
              }}
            >
              wave@kindmobile.com
            </a>
            <p
              style={{
                fontSize: 'clamp(18px. 1.302vw, 25px)',
              }}
            >
              0800 000 000
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:items-end md:flex-row gap-6 justify-between max-w-[1436px]">
        <div className="flex flex-col gap-4">
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
          <p
            className="leading-[2.25]"
            style={{
              fontSize: 'clamp(12px, 0.83vw, 16px)',
            }}
          >
            © Kind Mobile Ltd. All Rights Reserved.
          </p>
        </div>

        <ul className="flex items-center gap-4 sm:gap-5">
          {TOS.map((tos, index) => (
            <li
              key={index}
              className="font-semibold leading-[2.25]"
              style={{
                fontSize: 'clamp(12px, 0.83vw, 16px)',
              }}
            >
              <Link href={tos.link}>{tos.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
