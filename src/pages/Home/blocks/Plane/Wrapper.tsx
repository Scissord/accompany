import { FC, ReactNode } from 'react'

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
}

const Wrapper: FC<Props> = (props) => {
  const { title, children, className } = props;

  return (
    <div className={`flex flex-col gap-1 relative ${className}`}>
      <p className="text-sm text-gbg dark:text-white">{title}</p>
      {children}
    </div>
  );
};

export default Wrapper;
