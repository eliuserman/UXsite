import img7DashboardAll1 from "@/assets/418acd4ffba7074270c822e61977bb5208a3d670.png";

export default function Hovering() {
  return (
    <div className="relative size-full" data-name="hovering">
      <div className="absolute h-[2108px] left-0 top-0 w-[750px]" data-name="7_Dashboard All 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img7DashboardAll1} />
      </div>
      <div className="absolute bg-[#23293b] h-[346px] left-0 shadow-[0px_8px_16px_0px_rgba(0,0,0,0.25)] top-0 w-[750px]" />
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal h-[234px] italic leading-[normal] left-[36px] text-[#c2bd7f] text-[48px] top-[48px] w-[673px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {`3. Focus on Dan's activity `}
        <br aria-hidden="true" />
        {`"He's playing Xbox instead of school time?! I'll give him a call..."`}
      </p>
    </div>
  );
}