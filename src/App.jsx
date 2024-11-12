import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./assets/Components/Footer/Footer";
import Header from "./assets/Components/Header/Header";
import Newsletter from "./assets/Components/Newsletter/Newsletter";
import Showplayes from "./assets/Components/Showplayers/Showplayes";
import Selectedplayers from "./assets/Components/Slectedplayers/Selectedplayers";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  // Load All players:
  const [show, setShow] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setShow(data));
  }, []);
  // claimCredit
  const [claimCredit, setClaimCredit] = useState(0);

  // console.log(isActive.available);
  const hlndleClaimCredit = () => {
    setClaimCredit(claimCredit + 6000000);
    toast("Added 6000000 in your account.");
    // console.log(claimCredit);
  };

  // For Active button:
  const [isActive, setIsActive] = useState({
    available: true,
  });
 // console.log("isActive:"+isActive.available);
  const hanldeIsActive = (status) => {
    // console.log(status);
    if (status == "available") {
      setAdd({
        addMore: false,
      });
      setIsActive({
        available: true,
      });
    } else {
      setAdd({
        addMore: true,
      });
      setIsActive({
        available: false,
      });
    }
  };
  // Existant player
  const existPlayer = (player) => {
    if (selected.find((p) => p.id === player.id)) {
      toast(player.name + ": is already in your team.");
      return false;
    } else {
      return true;
    }
  };
  // Available coin check:
  const availableCoin = (selectPlayer) => {
    if (selectPlayer.price > claimCredit) {
      return false;
    } else {
      setClaimCredit(claimCredit - selectPlayer.price);
      return true;
    }
  };
  // Selected playr state
  const [selected, setSelected] = useState([]);

  const handleSelectedPlayer = (selectPlayer) => {
    const availableCoin2 = availableCoin(selectPlayer);

    if (selected.length < 6 && existPlayer(selectPlayer) && availableCoin2) {
      const updatePlayer = [...selected, selectPlayer];
      setSelected(updatePlayer);
      availablePlayers(selectPlayer);
      toast(
        "Wow! " + selectPlayer.name + " joins in your team.Congratulations."
      );
    } else {
      if (availableCoin2 || selected.length >= 6) {
        toast("Player slot is full.Can't sign a new player.");
      } else {
        toast("You dont have sufficient coin.At First claim coin.");
      }
    }
  };

  //console.log(selected);
  // Delete player form selected list:
  const handleDeletePlayer = (name) => {
    const remainingPlayer = selected.filter((player) => player.name !== name);
    setSelected(remainingPlayer);
  };
  // Available players

  const availablePlayers = (selectPlayer) => {
    const remaining = show.filter(
      (player) => player.name !== selectPlayer.name
    );
    //console.log(remaining);
    setShow(remaining);
    //console.log(show);
    if (show.length == 0) {
      toast("opps! Do not have any players remaining.");
    }
  };

  // Add more functionality::

  const [add, setAdd] = useState({
    addMore: false,
  });
 // console.log("addMOre:"+add.addMore);
  const addMorePlayers = () => {
    setAdd({
      addMore: false,
    });
  };

  return (
    <>
      <div className="container mx-auto">
        <Header
          hanldeIsActive={hanldeIsActive}
          isActive={isActive}
          handleSelectedPlayer={handleSelectedPlayer}
          selected={selected}
          hlndleClaimCredit={hlndleClaimCredit}
          claimCredit={claimCredit}
        />
        {
          // console.log("from add more",add.addMore)
          isActive.available ? (
            <Showplayes
              show={show}
              handleSelectedPlayer={handleSelectedPlayer}
              selected={selected}
              availablePlayers={availablePlayers}
            />
          ) : add.addMore ? (
            <Selectedplayers
              handleDeletePlayer={handleDeletePlayer}
              selected={selected}
              show={show}
              addMorePlayers={addMorePlayers}
            ></Selectedplayers>
           
          ) : (
            
            <Showplayes
            show={show}
            handleSelectedPlayer={handleSelectedPlayer}
            selected={selected}
            availablePlayers={availablePlayers}
          />
          )
        }

        {/* <Showplayer/> */}
        <ToastContainer />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
}

export default App;
