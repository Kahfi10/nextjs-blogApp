import { AnimatedGroup } from '@/components/motion-primitives/animated-group';

export function AnimatedGroupCustomVariants() {
  return (
    <AnimatedGroup
      className="p-8"
      variants={{
      container: {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.05,
        },
        },
      },
      item: {
        hidden: { opacity: 0, y: 40, filter: 'blur(4px)' },
        visible: {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
          duration: 1.2,
          type: 'spring',
          bounce: 0.3,
        },
        },
      },
      }}
    >
      <div className="bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 p-10 rounded-lg shadow-lg mb-10">
        <h2 className="heading-section text-8xl text-gray-700 font-bold mb-10 mt-10 text-center">RECENT PHOTOS</h2>
        <p className="text-gray-600 font-semibold text-2xl mb-10 text-center">
          Explore the latest photos from our community, showcasing the beauty of everyday life.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
      <img
        src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/222/2024/11/25/WhatsApp-Image-2024-11-22-at-110245-1797242786.jpeg"
        alt="impressionist painting, uploaded to Cosmos"
        className="aspect-square w-full w-max-[50vh] object-cover rounded-[5px]"
      />
      <img
        src="https://fajar.co.id/wp-content/uploads/2021/09/IMG_20210904_103123.jpg"
        alt="impressionist painting, uploaded to Cosmos"
        className="aspect-square w-full w-max-[50vh] object-cover rounded-[5px]"
      />
      <img
        src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/25/22/e4/awesome-view.jpg?w=1200&h=-1&s=1"
        alt="impressionist painting, uploaded to Cosmos"
        className="aspect-square w-full w-max-[50vh] object-cover rounded-[5px]"
      />
      <img
        src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/36/2023/12/30/a4bad470fe47931ba6f765a4d2589d24-2364291121.jpeg"
        alt="impressionist painting, uploaded to Cosmos"
        className="aspect-square w-full w-max-[50vh] object-cover rounded-[5px]"
      />
      </div>
    </AnimatedGroup>
  );
}

export default AnimatedGroupCustomVariants;
