import { TbLoader3 } from 'react-icons/tb';

type loaderProps = React.HTMLAttributes<HTMLDivElement>;

export const Loader = (args: loaderProps) => {
  return (
    <figure className="Loader" {...args}>
      <TbLoader3 />
    </figure>
  );
};
