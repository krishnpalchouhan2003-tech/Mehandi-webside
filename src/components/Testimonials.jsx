function Testimonials() {
  return (
    // <section className="px-10 py-16">
    <section className="bg-[#fdf1e7] py-16 px-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">
        What Clients Say
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="p-6 shadow-md rounded-xl">
          <p>"Amazing bridal mehendi! Highly recommended."</p>
          <h4 className="mt-4 font-bold">– Priya</h4>
        </div>

        <div className="p-6 shadow-md rounded-xl">
          <p>"Very quick and beautiful designs."</p>
          <h4 className="mt-4 font-bold">– Neha</h4>
        </div>

        <div className="p-6 shadow-md rounded-xl">
          <p>"Best mehendi artist in Khandwa!"</p>
          <h4 className="mt-4 font-bold">– Simran</h4>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;