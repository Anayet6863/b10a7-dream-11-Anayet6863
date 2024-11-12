import PropTypes from 'prop-types';

const Selectedplayer = ({player,handleDeletePlayer}) => {
    const {name,title,image} = player;
    // console.log(handleDeletePlayer);
   // console.log(id);
    return (
        <div className="shadow-lg">
            <div>
        <div className="shadow-sm p-2">
            <div className="flex">
                <img src={image} alt="" className="w-16 h-16 rounded-md" />
                <div className="ml-5">
                    <h1>{name}</h1>
                    <p>{title}</p>
                   
                </div>
                <button className="btn ml-auto" onClick={()=>{handleDeletePlayer(name)}}><img className="h-12" src={"https://i.ibb.co.com/bLqqD4L/icons8-delete-100.png"} alt="" /></button>
            </div>
        </div>
        </div>
       
        </div>
    );
};

export default Selectedplayer;
Selectedplayer.propTypes = {
    player: PropTypes.object.isRequired,
    handleDeletePlayer: PropTypes.func.isRequired
  };