import Breadcrumb from "../Breadcrumbs/Breadcrumb";

const DayOfTheWeek = ({day, dayAbbr, className = ""}: { day: string, dayAbbr: string, className?: string }) => (
  <th className={`flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5 ${className}`}>
    <span className="hidden lg:block"> {day} </span>
    <span className="block lg:hidden"> {dayAbbr} </span>
  </th>
)

const CalendarDate = ({date, task}: {
  date: number,
  task?: {
    title: string,
    duration: string,
    durationInDays?: number
  }
}) => (
  <td
    className="ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31">
                <span className="font-medium text-black dark:text-white">
                  {date}
                </span>
    {task &&
        <div className="group h-16 w-full flex-grow cursor-pointer py-1 md:h-30">
                  <span className="group-hover:text-primary md:hidden">
                    More
                  </span>
          <div
              style={{width: `calc(${task.durationInDays} * 100% - 10%)`}}
              className={`event invisible absolute left-2 z-99 mb-1 flex flex-col rounded-sm border-l-[3px] border-primary bg-gray px-3 py-1 text-left opacity-0 group-hover:visible group-hover:opacity-100 dark:bg-meta-4 md:visible md:opacity-100`}>
                    <span className="event-name text-sm font-semibold text-black dark:text-white">
                     {task.title}
                    </span>
            <span className="time text-sm font-medium text-black dark:text-white">
                      {task.duration}
                    </span>
          </div>
        </div>
    }
  </td>
)
const Calendar = () => {
  return (
    <>
      <Breadcrumb pageName="Calendar" />

      {/* <!-- ====== Calendar Section Start ====== --> */}
      <div
        className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <table className="w-full">
          <thead>
          <tr className="grid grid-cols-7 rounded-t-sm bg-primary text-white">
            <DayOfTheWeek day={"Sunday"} dayAbbr={"Sun"} className={"rounded-tl-sm"} />
            <DayOfTheWeek day={"Monday"} dayAbbr={"Mon"} />
            <DayOfTheWeek day={"Tuesday"} dayAbbr={"Tue"} />
            <DayOfTheWeek day={"Wednesday"} dayAbbr={"Wed"} />
            <DayOfTheWeek day={"Thursday"} dayAbbr={"Thur"} />
            <DayOfTheWeek day={"Friday"} dayAbbr={"Fri"} />
            <DayOfTheWeek day={"Saturday"} dayAbbr={"Sat"} className={"rounded-tr-sm"} />
          </tr>
          </thead>
          <tbody>
          {/* <!-- Line 1 --> */}
          <tr className="grid grid-cols-7">
            <CalendarDate date={1} task={{title: "Redesign Website", duration: "1 Dec - 2 Dec", durationInDays: 2}} />
            <CalendarDate date={2} />
            <CalendarDate date={3} />
            <CalendarDate date={4} />
            <CalendarDate date={5} />
            <CalendarDate date={6} />
            <CalendarDate date={7} />
          </tr>
          {/* <!-- Line 1 --> */}
          {/* <!-- Line 2 --> */}
          <tr className="grid grid-cols-7">
            <CalendarDate date={8} />
            <CalendarDate date={9} />
            <CalendarDate date={10} />
            <CalendarDate date={11} />
            <CalendarDate date={12} />
            <CalendarDate date={13} />
            <CalendarDate date={14} />
          </tr>
          {/* <!-- Line 2 --> */}
          {/* <!-- Line 3 --> */}
          <tr className="grid grid-cols-7">
            <CalendarDate date={15} />
            <CalendarDate date={16} />
            <CalendarDate date={17} />
            <CalendarDate date={18} />
            <CalendarDate date={19} />
            <CalendarDate date={20} />
            <CalendarDate date={21} />
          </tr>
          {/* <!-- Line 3 --> */}
          {/* <!-- Line 4 --> */}
          <tr className="grid grid-cols-7">
            <CalendarDate date={22} />
            <CalendarDate date={23} />
            <CalendarDate date={24} />
            <CalendarDate date={25} task={{title: "App Design", duration: "25 Dec - 27 Dec", durationInDays: 3}} />
            <CalendarDate date={26} />
            <CalendarDate date={27} />
            <CalendarDate date={28} />
          </tr>
          {/* <!-- Line 4 --> */}
          {/* <!-- Line 5 --> */}
          <tr className="grid grid-cols-7">
            <CalendarDate date={29} />
            <CalendarDate date={30} />
            <CalendarDate date={31} />
            <CalendarDate date={1} />
            <CalendarDate date={2} />
            <CalendarDate date={3} />
            <CalendarDate date={4} />
          </tr>
          {/* <!-- Line 5 --> */}
          </tbody>
        </table>
      </div>
      {/* <!-- ====== Calendar Section End ====== --> */}
    </>
  );
};

export default Calendar;
