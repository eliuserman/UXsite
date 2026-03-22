import img7DashboardAll1 from "@/assets/418acd4ffba7074270c822e61977bb5208a3d670.png";
import img6Dashboard2 from "@/assets/c20ee02e009a7c2f87dba4291c1ae1984adc387f.png";
import img3DansPage1 from "@/assets/78a77931b6bc86153b352e6ee7e69c747831887d.png";
import img4NativeMen1 from "@/assets/3feaa759964b53942df4c091bab9013ef366fd15.png";
import img5DansPageNotification1 from "@/assets/bc3ffec910235d66d6c66d7e71f4958163d24a8f.png";

function Frame() {
  return (
    <div className="absolute h-[2163px] left-[100px] top-[196px] w-[750px]">
      <div className="absolute h-[2108px] left-0 top-[55px] w-[750px]" data-name="7_Dashboard All 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img7DashboardAll1} />
      </div>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[22px] left-0 text-[36px] text-black top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        1. Home status - all users
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[2102px] left-[910px] top-[196px] w-[750px]">
      <div className="absolute h-[1982px] left-0 top-[120px] w-[750px]" data-name="6_Dashboard 2">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img6Dashboard2} />
      </div>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[normal] left-0 text-[36px] text-black top-0 whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        2. Only active users
        <br aria-hidden="true" />
        {`"Why is Dan at home now?"`}
      </p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[3721px] left-[1720px] top-[196px] w-[750px]">
      <div className="absolute h-[3552px] left-0 top-[169px] w-[750px]" data-name="3_Dan's Page 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img3DansPage1} />
      </div>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[normal] left-0 text-[36px] text-black top-0 w-[750px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {`3. Focus on Dan's activity `}
        <br aria-hidden="true" />
        {`"He's playing Xbox instead of school time?! I'll give him a call..."`}
      </p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[1791px] left-[100px] top-[2475px] w-[750px]">
      <div className="absolute h-[1624px] left-0 top-[167px] w-[750px]" data-name="4_Native_Men 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img4NativeMen1} />
      </div>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[normal] left-0 text-[36px] text-black top-0 w-[750px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {`4. Postpone the limit notification `}
        <br aria-hidden="true" />
        {`"The teacher is sick, and he will be soon on homework, he promised!"`}
      </p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[3199px] left-[910px] top-[2438px] w-[750px]">
      <div className="absolute h-[3032px] left-0 top-[167px] w-[750px]" data-name="5_Dan's Page_Notification 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={img5DansPageNotification1} />
      </div>
      <p className="absolute font-['Open_Sans:Italic',sans-serif] font-normal italic leading-[normal] left-0 text-[36px] text-black top-0 w-[750px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {`5. All under control `}
        <br aria-hidden="true" />
        {`"Such a good boy :) I'll give him an extra 15 minutes..."`}
      </p>
    </div>
  );
}

export default function ImFreeAgain() {
  return (
    <div className="relative size-full" data-name="Im free again">
      <Frame />
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </div>
  );
}