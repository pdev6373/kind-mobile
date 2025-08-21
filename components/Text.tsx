import localFont from 'next/font/local';

const smithee = localFont({
  src: [
    {
      path: '../app/font/smithee-light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../app/font/smithee-regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../app/font/smithee-medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../app/font/smithee-bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
});

type Text = React.ComponentProps<'h2'> & {
  children?: React.ReactNode;
};

export default function Text({ children, className, ...props }: Text) {
  return (
    <h2 className={`${smithee.className} uppercase ${className}`} {...props}>
      {children}
    </h2>
  );
}
