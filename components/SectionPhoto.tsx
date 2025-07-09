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
      <div className="mb-8">
      <h2 className="text-8xl font-bold mb-10 text-center">RECENT PHOTOS</h2>
      <p className="text-gray-600 font-semibold text-3xl mb-10 text-center">
        This section demonstrates a custom animation variant with staggered
        children and a spring effect.
      </p>
      </div>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
      <img
        src="https://images.beta.cosmos.so/4d02a1e7-d1f2-4575-86a9-bed243e59132?format=jpeg"
        alt="impressionist painting, uploaded to Cosmos"
        className="aspect-square w-full object-cover rounded-[5px]"
      />
      <img
        src="https://images.beta.cosmos.so/4d02a1e7-d1f2-4575-86a9-bed243e59132?format=jpeg"
        alt="impressionist painting, uploaded to Cosmos"
        className="aspect-square w-full object-cover rounded-[5px]"
      />
      <img
        src="https://images.beta.cosmos.so/4d02a1e7-d1f2-4575-86a9-bed243e59132?format=jpeg"
        alt="impressionist painting, uploaded to Cosmos"
        className="aspect-square w-full object-cover rounded-[5px]"
      />
      <img
        src="https://images.beta.cosmos.so/4d02a1e7-d1f2-4575-86a9-bed243e59132?format=jpeg"
        alt="impressionist painting, uploaded to Cosmos"
        className="aspect-square w-full object-cover rounded-[5px]"
      />
      </div>
    </AnimatedGroup>
  );
}

export default AnimatedGroupCustomVariants;
