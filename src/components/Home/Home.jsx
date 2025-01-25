import heroSection from '../../assets/images/heroSection.webp'

export default function Home() {
  return (
    <>
      <section className="container grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div>
          <img src={heroSection} className='h-[450px]' alt="" />
        </div>
      </section>
    </>
  );
}
