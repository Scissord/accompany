import { FC, ReactNode } from 'react'

type Props = {
  title: string;
  children: ReactNode;
  bottom?: string;
}

const Wrapper: FC<Props> = (props) => {
  const { title, children, bottom } = props;

  return (
    <div className="flex flex-col gap-1 relative">
      <p className="text-sm">{title}</p>
      {children}
      <p className="text-sm">{bottom}</p>
    </div>
  );
};

export default Wrapper;
