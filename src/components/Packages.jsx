function Packages() {
  return (
    // <section className="px-10 py-16 bg-[#fff5f7]">
    <section className="bg-[#7a1f3d] text-white py-16 px-10">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">
        Our Packages
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Bridal */}

<div className="bg-[#fdf1e7] text-black p-6 rounded-xl shadow-xl border border-yellow-200 hover:scale-105 transition">  <h3 className="text-xl font-bold mb-2">Bridal Mehendi</h3>
  <p>₹3000 - ₹8000</p>
</div>

        {/* Arabic */}
<div className="bg-[#fdf1e7] text-black p-6 rounded-xl shadow-xl border border-yellow-200 hover:scale-105 transition">  <h3 className="text-xl font-bold mb-2">Groom Mehendi</h3>
  <p>₹500 +</p>
</div>


        {/* Baby Showr */}
<div className="bg-[#fdf1e7] text-black p-6 rounded-xl shadow-xl border border-yellow-200 hover:scale-105 transition">  <h3 className="text-xl font-bold mb-2">Baby Showr Mehendi</h3>
  <p>₹300+</p>
</div>


      </div>
    </section>
  );
}

export default Packages;