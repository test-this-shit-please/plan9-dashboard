import React, {ReactNode} from 'react';
import * as Icon from "@heroicons/react/24/outline";

interface CardDataStatsProps {
  title: string;
  total: string;
  rate: string;
  levelUp?: boolean;
  levelDown?: boolean;
  children: ReactNode;
}

const CardDataStats: React.FC<CardDataStatsProps> = ({
                                                       title,
                                                       total,
                                                       rate,
                                                       levelUp,
                                                       levelDown,
                                                       children,
                                                     }) => {
  return (
    <div
      className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div
        className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4 text-primary dark:text-white">
        <div className={"w-5 h-5"}>{children}</div>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {total}
          </h4>
          <span className="text-sm font-medium">{title}</span>
        </div>

        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            levelUp && 'text-meta-3'
          } ${levelDown && 'text-meta-5'} `}
        >
          {rate}

          {levelUp && (
            <Icon.ArrowUpIcon className="fill-meta-3 w-3 h-3" strokeWidth={2.5} />
          )}
          {levelDown && (
            <Icon.ArrowDownIcon className={"fill-meta-5 w-3 h-3"} strokeWidth={2.5} />
          )}
        </span>
      </div>
    </div>
  );
};

export default CardDataStats;
