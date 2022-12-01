import Image from 'next/image';

const Rating = ({ star, sentence, className }: { star: number; sentence: string; className: string }) => {
  return (
    <div
      className={`flex flex-col gap-[15px] items-center bg-magenta-grayish-light py-4 rounded-lg md:flex-row md:max-w-[445px] md:items-center md:gap-[32.45px] sm:pl-[32px] ${className} `}
    >
      <div className='flex'>
        {Array.from({ length: star }, (x, i) => (
          <Image src='/images/icon-star.svg' alt='star' width={16.55} height={15.77} key={i}></Image>
        ))}
      </div>
      <h5 className='text-[17px] font-bold text-magenta-very-dark sm:self-center'>{sentence}</h5>
    </div>
  );
};

export default Rating;
