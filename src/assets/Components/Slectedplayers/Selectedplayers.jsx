import PropTypes from 'prop-types';
import Selectedplayer from '../Selectedplayer/Selectedplayer';
const Selectedplayers = ({selected,handleDeletePlayer,addMorePlayers}) => {
    return (
        <div >
        {/* Send data into the showplayer component for showing all data. */}
      <div className="bg-white grid grid-cols-1 gap-4 p-3 shadow-md rounded-md">
        {selected.map((player, idx) => (
        <Selectedplayer handleDeletePlayer={handleDeletePlayer} player={player} key={idx}></Selectedplayer>
        ))}
      </div>
      <div className='mt-10 mb-12 '><button className='btn bg-[#E7FE29]' onClick={addMorePlayers} >Add more Players.</button></div>
    </div>
    );
};

export default Selectedplayers;
Selectedplayers.propTypes = {
    handleSelectedPlayer: PropTypes.func,
    selected: PropTypes.array,
    handleDeletePlayer: PropTypes.func,
    addMorePlayers: PropTypes.func
  };