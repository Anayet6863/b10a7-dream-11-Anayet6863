import PropTypes from 'prop-types';
import Showplayer from "../Showplayer/Showplayer";




const Showplayes = ({show,handleSelectedPlayer,availablePlayers}) => {
   // console.log(show);

  return (
    <div className="">
        {/* Send data into the showplayer component for showing all data. */}
      <div className="bg-white grid grid-cols-3 gap-4 p-3 shadow-md rounded-md">
        {show.map((player, idx) => (
         <Showplayer handleSelectedPlayer={handleSelectedPlayer} key={idx} player={player} availablePlayers={availablePlayers} ></Showplayer>
        ))}
      </div>
    </div>
  );
};

export default Showplayes;
Showplayes.propTypes = {
    show: PropTypes.array.isRequired,
    handleSelectedPlayer: PropTypes.func,
    selected:PropTypes.array,
    availablePlayers:PropTypes.func
  };