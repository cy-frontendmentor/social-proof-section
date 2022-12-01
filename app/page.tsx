import Image from 'next/image';
import { comment } from 'postcss';
import Comment from '../components/comment/comment';
import Rating from '../components/rating/rating';

const DUMMY_RATING = [
  { star: 5, sentence: 'Rated 5 Stars in Reviews' },
  {
    star: 5,
    sentence: 'Rated 5 Stars in Report Guru',
  },
  { star: 5, sentence: 'Rated 5 Stars in BestTech' },
];
const DUMMY_USERS = [
  {
    name: 'Colton Smith',
    status: 'Verified Buyer',
    image: '/images/image-colton.jpg',
    comment:
      '"We needed the same printed design as the one we had ordered a week prior.Not only did they find the original order, but we also received it in time."',
  },
  {
    name: 'Irene Roberts',
    status: 'Verified Buyer',
    image: '/images/image-irene.jpg',
    comment:
      ' "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."',
  },
  {
    name: 'Anne Wallace',
    status: 'Verified Buyer',
    image: '/images/image-anne.jpg',
    comment:
      ' "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"',
  },
];

const page = () => {
  return (
    <div>
      <div className='relative max-w-[1440px] mx-6 pt-[82px] pb-[99px] lg:mx-auto lg:px-[165px] md:pt-[118px] md:pb-[100px] z-0'>
        <Image
          src='/images/bg-pattern-top-mobile.svg'
          alt=''
          width={374}
          height={232}
          className='absolute top-0 left-0 md:hidden'
        ></Image>
        <Image
          src='/images/bg-pattern-top-desktop.svg'
          alt=''
          width={584}
          height={362}
          className='absolute top-0 left-0 hidden md:inline-block'
        ></Image>

        <Image
          src='/images/bg-pattern-top-desktop.svg'
          alt=''
          width={1085}
          height={673}
          className='absolute bottom-0 left-1/2 -translate-x-1/2 md:hidden -z-10'
        ></Image>

        <Image
          src='/images/bg-pattern-bottom-desktop.svg'
          alt=''
          width={1085}
          height={673}
          className='absolute bottom-0 right-0 hidden md:inline-block -z-10'
        ></Image>

        <div className='grid gap-y-[37px] mb-[49px] md:grid-cols-2 '>
          <div className='text-center grid gap-y-[17px] md:text-left md:max-w-[445px] '>
            <h1 className=' text-[40px] leading-[32px] font-bold -tracking-[1.43px] text-magenta-very-dark md:text-[56px] md:leading-[48px] '>
              10,000+ of our users love our products.
            </h1>
            <p className='text-[19px] leading-[25px] -tracking-[0.63px] text-magenta-grayish-dark font-medium'>
              We only provide great products combined with excellent customer service. See what our satisfied customers
              are saying about our services.
            </p>
          </div>
          <div className='grid gap-y-4  odd:rotate-90  '>
            {DUMMY_RATING.map(({ star, sentence }, i) => {
              if (i == 0) {
                return <Rating className='md:-translate-x-[47px]' star={star} sentence={sentence} key={i}></Rating>;
              }
              if (i == 2) {
                return <Rating className='md:translate-x-[47px]' star={star} sentence={sentence} key={i}></Rating>;
              }
              return <Rating className='' star={star} sentence={sentence} key={i}></Rating>;
            })}
          </div>
        </div>
        <div className='flex  flex-col items-center gap-4 md:flex-row md:gap-[30px] md:justify-between '>
          {DUMMY_USERS.map(({ name, status, image, comment }, i) => {
            if (i == 0) {
              return (
                <Comment
                  className='md:-translate-y-4'
                  key={i}
                  name={name}
                  image={image}
                  comment={comment}
                  status={status}
                ></Comment>
              );
            }
            if (i == 2) {
              return (
                <Comment
                  className='md:translate-y-4'
                  key={i}
                  name={name}
                  image={image}
                  comment={comment}
                  status={status}
                ></Comment>
              );
            }
            return <Comment className='' key={i} name={name} image={image} comment={comment} status={status}></Comment>;
          })}
        </div>
        {/* <div className='flex  flex-col items-center gap-4 md:flex-row md:gap-[30px] md:justify-between'>
          {DUMMY_USERS.map(({ name, status, image, comment }, i) => {
            return (
              <Comment
                className=''
                marginTop={`${i * 2}rem`}
                key={i}
                name={name}
                image={image}
                comment={comment}
                status={status}
              ></Comment>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default page;
