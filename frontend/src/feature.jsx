import { useEffect, useState } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid'
import axios from 'axios';

// const features = [
//   {
//     name: 'Invite team members',
//     description: 'Rerum repellat labore necessitatibus reprehenderit molestiae praesentium.',
//   },
//   { name: 'List view', description: 'Corporis asperiores ea nulla temporibus asperiores non tempore assumenda aut.' },
//   {
//     name: 'Keyboard shortcuts',
//     description: 'In sit qui aliquid deleniti et. Ad nobis sunt omnis. Quo sapiente dicta laboriosam.',
//   },
//   {
//     name: 'Calendars',
//     description: 'Sed rerum sunt dignissimos ullam. Iusto iure occaecati voluptate eligendi fugiat sequi.',
//   },
//   { name: 'Notifications', description: 'Quos inventore harum enim nesciunt. Aut repellat rerum omnis adipisci.' },
//   { name: 'Boards', description: 'Quae sit sunt excepturi fugit veniam voluptatem ipsum commodi.' },
//   {
//     name: 'Reporting',
//     description: 'Eos laudantium repellat sed architecto earum unde incidunt. Illum sit dolores voluptatem.',
//   },
//   {
//     name: 'Mobile app',
//     description: 'Nulla est saepe accusamus nostrum est est. Fugit voluptatum omnis quidem voluptatem.',
//   },
// ]

export default function Feature() {

  const [features, setFeatures] = useState([]);

  const [page, setPage] = useState({});

  useEffect(() => {
    const getFeatures = async () => {
      const res = await axios.get(`http://localhost:1337/api/feature?populate=*&populate=feature_lists.image`);
      setFeatures(res.data.data.attributes.feature_lists.data)
      setPage(res.data.data.attributes);
      console.log('list', res.data.data.attributes.feature_lists.data);
    }
    getFeatures();
  }, [])
  // console.log('features', features)

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-indigo-600">{page.sub_title}</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{page.title}</p>
            <p className="mt-6 text-base leading-7 text-gray-600">{page.desc}
            </p>
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.id} className="relative pl-9">
                <dt className="font-semibold text-gray-900">
                  <img src={`http://localhost:1337${feature.attributes.image.data.attributes.url}`} className="absolute top-1 left-0 h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {feature.attributes.title}
                </dt>
                <dd className="mt-2">{feature.attributes.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
