const Footer = () => {
  return (
    <div className="bg-[#06091A] flex flex-col">
       <div className="mx-auto pt-4 pb-4 mt-[100px]">
          <img src={"https://i.ibb.co.com/6m36nTB/logo-footer.png"} alt="" />
        </div>
      <footer className="footer bg-[#06091A]   p-10 text-white flex justify-evenly">
       

        <nav>
          <h6 className="footer-title">About Us</h6>
            <h3>We are a passionate team <br/> dedicated to providing the best<br/> services to our customer. </h3>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Service</a>
          <a className="link link-hover">About</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <form>
          <h6 className="footer-title">Subscribe</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">Subscribe to our newsletter for the<br/> latest updates.</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="Enter your mail"
                className="input input-bordered join-item"
              />
              <button className="btn text-white join-item bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 " >Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
