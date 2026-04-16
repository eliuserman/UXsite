import img7DashboardAll1 from "figma:asset/418acd4ffba7074270c822e61977bb5208a3d670.png";

function Default() {
  return (
    <div className="absolute h-[2108px] left-[39px] top-[105px] w-[750px]" data-name="default">
      <div className="absolute h-[2108px] left-0 top-0 w-[750px]" data-name="7_Dashboard All 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img7DashboardAll1} />
      </div>
    </div>
  );
}

function Hovering() {
  return (
    <div className="absolute h-[2108px] left-[878px] top-[105px] w-[750px]" data-name="hovering">
      <div className="absolute h-[2108px] left-0 top-0 w-[750px]" data-name="7_Dashboard All 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img7DashboardAll1} />
      </div>
      <div className="absolute bg-[rgba(35,41,59,0.8)] h-[2108px] left-0 top-0 w-[750px]" />
      <div className="absolute font-['Open_Sans:SemiBold',sans-serif] font-semibold leading-[normal] left-[139px] text-[#d4db73] text-[64px] top-[918px] w-[471px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="mb-[10px]">1.</p>
        <p>Home status - all users</p>
      </div>
    </div>
  );
}

export default function Caption() {
  return (
    <div className="relative size-full" data-name="caption">
      <Default />
      <Hovering />
    </div>
  );
}