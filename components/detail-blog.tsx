import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from '@/components/motion-primitives/morphing-dialog';
import { PlusIcon } from 'lucide-react';
import { DETAIL_BLOG } from '@/lib/data';

export function MorphingDialogBasicOne() {
  return (
    <>
      {DETAIL_BLOG.map((blog: any, index: number) => (
        <MorphingDialog
          key={index}
          transition={{
            type: 'spring',
            bounce: 0.05,
            duration: 0.25,
          }}
        >
          <MorphingDialogTrigger
            style={{
              borderRadius: '12px',
            }}
            className='flex max-w-[270px] flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900'
          >
            <MorphingDialogImage
              src={blog.image}
              alt={blog.alt}
              className='h-48 w-full object-cover'
            />
            <div className='flex grow flex-row items-end justify-between px-3 py-2'>
              <div>
                <MorphingDialogTitle className='text-zinc-950 dark:text-zinc-50'>
                  {blog.title}
                </MorphingDialogTitle>
                <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                  {blog.subtitle}
                </MorphingDialogSubtitle>
              </div>
              <span
                className='relative ml-1 flex h-6 w-6 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:bg-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-zinc-500'
                aria-label='Open dialog'
              >
                <PlusIcon size={12} />
              </span>
            </div>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
              <MorphingDialogContent
                style={{
                  borderRadius: '24px',
                }}
                className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
              >
                <MorphingDialogImage
                  src={blog.image}
                  alt={blog.alt}
                  className='h-full w-full'
                />
                <div className='p-6'>
                  <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                    {blog.title}
                  </MorphingDialogTitle>
                  <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                    {blog.subtitle}
                  </MorphingDialogSubtitle>
                  <MorphingDialogDescription
                    disableLayoutAnimation
                    variants={{
                      initial: { opacity: 0, scale: 0.8, y: 100 },
                      animate: { opacity: 1, scale: 1, y: 0 },
                      exit: { opacity: 0, scale: 0.8, y: 100 },
                    }}
                  >
                    <p className='mt-2 text-zinc-500 dark:text-zinc-500'>
                      {blog.content}
                    </p>
                    <p className='text-zinc-500'>
                      {blog.content}
                    </p>
                    <a
                      className='mt-2 inline-flex text-zinc-500 underline'
                      href='https://www.are.na/block/12759029'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {blog.desc}
                    </a>
                  </MorphingDialogDescription>
                </div>
                <MorphingDialogClose className='text-zinc-50' />
              </MorphingDialogContent>
              <MorphingDialogContent
                style={{
                  borderRadius: '24px',
                }}
                className='pointer-events-auto relative flex h-auto w-full flex-col overflow-hidden border border-zinc-950/10 bg-white dark:border-zinc-50/10 dark:bg-zinc-900 sm:w-[500px]'
              >
                <MorphingDialogImage
                  src='https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/222/2024/11/25/WhatsApp-Image-2024-11-22-at-110245-1797242786.jpeg'
                  alt='A desk lamp designed by Edouard Wilfrid Buquet in 1925. It features a double-arm design and is made from nickel-plated brass, aluminium and varnished wood.'
                  className='h-full w-full'
                />
                <div className='p-6'>
                  <MorphingDialogTitle className='text-2xl text-zinc-950 dark:text-zinc-50'>
                    {blog.title}
                  </MorphingDialogTitle>
                  <MorphingDialogSubtitle className='text-zinc-700 dark:text-zinc-400'>
                    {blog.subtitle}
                  </MorphingDialogSubtitle>
                  <MorphingDialogDescription
                    disableLayoutAnimation
                    variants={{
                      initial: { opacity: 0, scale: 0.8, y: 100 },
                      animate: { opacity: 1, scale: 1, y: 0 },
                      exit: { opacity: 0, scale: 0.8, y: 100 },
                    }}
                  >
                    <p className='mt-2 text-zinc-500 dark:text-zinc-500'>
                      {blog.content}
                    </p>
                    <p className='text-zinc-500'>
                      {blog.content}
                    </p>
                    <a
                      className='mt-2 inline-flex text-zinc-500 underline'
                      href='https://www.are.na/block/12759029'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {blog.desc}
                    </a>
                  </MorphingDialogDescription>
                </div>
                <MorphingDialogClose className='text-zinc-50' />
              </MorphingDialogContent>
            </div>
          </MorphingDialogContainer>
        </MorphingDialog>
      ))}
    </>
  );
}

export default MorphingDialogBasicOne;
