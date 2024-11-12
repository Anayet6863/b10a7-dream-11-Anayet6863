const Newsletter = () => {
  return (
    <div>
      <section className= "py-12 text-center pt-20">
        <div className="max-w-3xl mx-auto bg-white rounded-xl p-8 shadow-lg -mb-36 z-50 relative">
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-600 mt-4 text-center">
            Get the latest updates and news right in your inbox!
          </p>
          <form className="mt-6 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-2/3 md:w-1/2 p-3 border border-gray-300 rounded-l-lg outline-none focus:border-yellow-400"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400  text-white px-6 py-3 rounded-r-lg font-semibold transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
