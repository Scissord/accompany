import { FC } from 'react'

const Title: FC = () => {
  return (
    <div className='h-[92vh] text-white'>
      <div className='h-[50%] bg-dbg'>
      </div>
      <div className='h-[50%] bg-hvr p-12'>
        <div className='w-full h-full container mx-auto flex flex-col justify-center gap-3'>
          <h1 className='text-3xl font-bold'>Часто задаваемые вопросы</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates labore aut quis voluptate aliquam consequuntur natus sunt velit, nobis esse modi dolor. Facere, asperiores nulla recusandae aspernatur culpa iure omnis!
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nesciunt, non inventore facere repudiandae ex molestiae repellat! Ea facere accusantium recusandae nulla rerum! Suscipit, inventore odio. Perspiciatis unde itaque earum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit saepe provident totam accusantium perspiciatis officia, ullam earum, ipsam quisquam doloribus, quam tempore facilis illum maiores reprehenderit vel dignissimos optio quo!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Title;
