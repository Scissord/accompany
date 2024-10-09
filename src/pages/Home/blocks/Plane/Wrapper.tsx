import { FC, ReactNode } from 'react'

type Props = {
  title: string;
  children: ReactNode;
  bottom?: string;
  className?: string;
}

const Wrapper: FC<Props> = (props) => {
  const { title, children, bottom, className } = props;

  return (
    <div className={`flex flex-col gap-1 relative ${className}`}>
      <p className="text-sm">{title}</p>
      {children}
      <p className="text-sm">{bottom}</p>
    </div>
  );
};

export default Wrapper;
