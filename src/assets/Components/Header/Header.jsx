import PropTypes from 'prop-types';

const Header = ({hanldeIsActive,isActive,selected,hlndleClaimCredit,claimCredit}) => {
 


  return (
    <div>

      <div className="navbar bg-base-100">
        <div className="navbar-start ">
          <img src={"https://i.ibb.co.com/L6ZtHdV/logo.png"} alt="" />
        </div>

        <div className="navbar-end">
          <div className=" flex text-xl text-[rgba(19, 19, 19, 0.7)]">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="">Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedule</a>
              </li>
            </ul>
          </div>
          <a className="btn button"> {claimCredit} Coin
            <img
              className="h-6 w-6"
              src={"https://i.ibb.co.com/wdbjzYf/icons8-coin-48.png"}
            ></img>
          </a>
        </div>
      </div>

        <section >
            <div className="bg-[url('https://i.ibb.co.com/nRLQ0B3/bg-shadow.png')] w-full h-auto pb-5 rounded-md bg-cover bg-no-repeat bg-black">
                <div className="flex flex-col gap-5 justify-center items-center">
                    <img className="w-[200px] h-[250px] " src={"https://i.ibb.co.com/hLV6nrN/banner-main.png"} alt="" />
                    <h1 className="w-[1000px] text-center font-extrabold text-2xl text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                    <p className="w-[500px] text-center text-xl text-[#ffffffb3]">Beyond Boundaries Beyond Limits</p>
                    <button className="btn w-[200px] pb-5 p-3 bg-[#E7FE29] hover:bg-[#E7FE29] border border-yellow-600" onClick={hlndleClaimCredit}>Claim Free Credit</button>
                </div>
            </div>
            <div className="flex mt-14">
                <div className="flex justify-start"><h2 className="text-3xl font-extrabold">Available Players ({selected.length}/6)</h2></div>
                <div className="flex  ml-auto">
                    <button className={`${isActive.available?"btn bg-[#E7FE29]":"btn"}`} onClick={()=>{hanldeIsActive("available")}}>Available</button>
                    <button className={`${isActive.available?"btn":"btn bg-[#E7FE29]"}`} onClick={()=>{hanldeIsActive("selected")} }>Selected({selected.length})</button>
                </div>
            </div>
        </section>


    </div>
  );
};

export default Header;
Header.propTypes = {
  hanldeIsActive: PropTypes.func.isRequired,
  isActive: PropTypes.object.isRequired,
  handleSelectedPlayer: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
  hlndleClaimCredit: PropTypes.func,
  claimCredit: PropTypes.number
};