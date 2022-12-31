
/* import Image from 'next/image'; */
import { FC, memo } from 'react';

import { TimelineItem } from '../../../data/dataDef';


const TimelineItem: FC<{ item: TimelineItem; }> = memo(({ item }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { title, date, location, content } = item;
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center">
      {/*       <div className="col-3 text-end">
        <Image width="120px" height="40px" alt={location} src={image} /> 
      </div> */}

      <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
        <div className="flex flex-col pb-4">
          <h2 className="text-xl font-bold">{title}</h2>


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

