import Image from 'next/image';
const Comment = ({
  image,
  name,
  status,
  comment,
  className,
}: // marginTop,
{
  image: string;
  name: string;
  status: string;
  comment: string;
  className: string;
  // marginTop: string;
}) => {
  return (
    <div
      className={`bg-magenta-very-dark max-w-[340px] px-8 pb-[35px] pt-10  rounded-lg ${className} `}
      // style={{ marginTop }}
    >
      <div className='flex items-center gap-[23px] mb-[23px]'>
        <Image src={image} alt='avator' height={40} width={40} className='w-10 h-10 rounded-full'></Image>
        <div>
          <h5 className='text-[17px] leading-normal text-white font-bold'>{name}</h5>
          <p className='text-[17px] leading-normal text-pink-soft'>{status}</p>
        </div>
      </div>
      <p className='text-[17px] font-medium leading-[22px] -tracking-[0.3px] text-white'>{comment}</p>
    </div>
  );
};

export default Comment;
