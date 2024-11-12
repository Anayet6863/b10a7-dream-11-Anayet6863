import PropTypes from 'prop-types';

const Showplayer = ({player,handleSelectedPlayer,availablePlayers}) => {
   // console.log(player);
    const {name,country,title,image,user_image,flag_image,rating,price} = player;
    return (
        <div className="card w-96 shadow-xl bg-white p-4 mt-10">
        <figure>
          <img
            className="w-full h-[400px] rounded-lg"
            src={image}
            alt="Player Image" />
        </figure>
        <div className="flex items-center p-2">
            <img src={user_image} alt="User Image" className="mr-5 w-10 h-10"></img>
            <h3 className="text-xl font-bold">{name}</h3>
        </div>
        <div className="flex items-center p-2 mt-2">
            <img src={flag_image} alt="Flag"></img>
            <h4 className="ml-5">{country}</h4>
            <button className="btn ml-auto">{title}</button>
        </div>
        <hr/>
        <div className="flex mt-4">
            <h3 className="font-bold"> Rating:</h3>
            <h3 className="ml-auto">{rating}</h3>
        </div>
        <div className="flex items-center">
        <p>{title}</p>
       
        </div>
        <div className="flex items-center">
        <p className="font-bold">Price: $ {price}</p>
        <button className="btn ml-auto" onClick={()=>{handleSelectedPlayer(player)}}>Choose  player</button>
        </div>
      </div>



       
    );
};

export default Showplayer;
Showplayer.propTypes = {
    player: PropTypes.object.isRequired,
    handleSelectedPlayer: PropTypes.func,
    availablePlayers: PropTypes.func
  };