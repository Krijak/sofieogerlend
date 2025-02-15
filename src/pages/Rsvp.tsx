import FormfacadeEmbed from "@formfacade/embed-react";
import { useNavigate } from "react-router-dom";

const Rsvp = () => {
  const navigate = useNavigate();
  return (
    <FormfacadeEmbed
      formFacadeURL="https://formfacade.com/include/118216848014247750506/form/1FAIpQLSdBsYysWmlnovduxWR2RICMEsIk0uOwYEiuFoqTrgld8U3RZw/classic.js/?div=ff-compose"
      onSubmitForm={() => navigate("/submited")}
    />
  );
};

export default Rsvp;
