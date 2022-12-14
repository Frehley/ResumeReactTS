
import Image from 'next/image';
import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';


const TimelineItem: FC<{item: TimelineItem;}> = memo(({item}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {title, date, location, content, image} = item;
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center text-neutral-300">
      <div className="col-3 text-end col-span-1 flex justify-center md:justify-start">
        <Image layout="fixed" width="160px" height="40px" alt={location} src={image!} />
      </div>

      <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
        <div className="flex flex-col pb-4">
          <h2 className="text-xl font-bold text-sky-300">{title}</h2>

          <div className="flex items-center justify-center gap-x-2 md:justify-start">
            <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
            <span>•</span>

            <span className="flex-1 text-sm sm:flex-none">{date}</span>
          </div>
        </div>
        {content}
      </div>
      <br />
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;

