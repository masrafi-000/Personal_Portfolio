

const StatInfoCard = ({ count, label }) => {
  return (
    <div className=" flex-1 flex gap-3 md:gap-5 bg-gradient-to-b from-[#fcf4ec] to-[#ffffff] rounded-[14px] p-5 ">
      <h4 className="text-4xl md:text-5xl text-secondary">{count}</h4>
      <p className=" text-xs md:text-[16px] font-normal text-black leading-6 whitespace-pre-line ">{label}</p>
    </div>
  );
};

import PropTypes from 'prop-types';

StatInfoCard.propTypes = {
  count: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
};

export default StatInfoCard;
