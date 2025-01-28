import appPreview from "../../assets/images/app-preview.webp";
import { DownloadItem } from "../../constants/DownloadItem";
import appStore from "../../assets/images/icons/AppleStore.svg";
import googlePlay from "../../assets/images/icons/GoogleStore.svg";
export default function DownloadSection() {
  return (
    <section className="max-w-xl sm:max-w-3xl md:max-w-5xl mx-3 md:mx-auto bg-primary px-6 pt-6 rounded-3xl grid grid-cols-1 sm:grid-cols-2 items-center justify-between gap-4">
      <div className="space-y-8">
        <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-white">
          One app. <br />
          One banking.
        </h2>
        <p className="text-sm text-white/90 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {DownloadItem.map((Ditem) => {
            return (
              <div key={Ditem.id} className="flex items-center gap-2">
                <div className="size-5 rounded-full bg-white/90 text-primary backdrop-blur-sm flex items-center justify-center">
                  {Ditem.icon}
                </div>
                <p className="text-sm text-white">{Ditem.title}</p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <img src={appStore} alt="" />
          <img src={googlePlay} alt="" />
        </div>
      </div>
      <div>
        <img src={appPreview} alt="Mr Bank application" />
      </div>
    </section>
  );
}
