import './style.css';
import Header from '../../components/containers/header';
import Slots from './Slots';
import UserDetail from '../../components/containers/user-detail';

function SelectSlot() {
  return (
    <div className="selectSlot__container--area">
      <Header title="Please Select Your Next Interviews" subTitle="Select Time" />
      <UserDetail username="Hamid Tadayoni" />
      <Slots />
    </div>
  );
}

export default SelectSlot;
