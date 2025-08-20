

import PropTypes from 'prop-types';

const ContactInfoCard = ({ icon, text, link }) => {
  return (
    <div className="flex items-center gap-5 rounded bg-orange-50 border-orange-100 px-4 py-3 mb-5">
      <div className="w-10 h-10 text-xl text-white flex items-center justify-center bg-gradient-primary rounded-lg">
        {icon}
      </div>
      <a
        href={link}
        target="_blank"
        className="text-secondary text-xs md:text-sm cursor-pointer "
      >
        {text}
      </a>
    </div>
  );
};

ContactInfoCard.propTypes = {
  icon: PropTypes.node,
  text: PropTypes.string.isRequired,
  link: PropTypes.string
};

export default ContactInfoCard;
