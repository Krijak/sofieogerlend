import FormfacadeEmbed from "@formfacade/embed-react";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../Components/PageWrapper";

const Rsvp = () => {
  const navigate = useNavigate();
  // onSubmitForm={() => navigate("/submited")
  return (
    <PageWrapper>
      <Box>
        <FormfacadeEmbed
          formFacadeURL="https://formfacade.com/include/118216848014247750506/form/1FAIpQLSdBsYysWmlnovduxWR2RICMEsIk0uOwYEiuFoqTrgld8U3RZw/classic.js/?div=ff-compose"
          onSubmitForm={() => console.log("Form submitted")}
        />

        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdBsYysWmlnovduxWR2RICMEsIk0uOwYEiuFoqTrgld8U3RZw/viewform?embedded=true"
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Laster inn …
        </iframe>
      </Box>
    </PageWrapper>
  );
};

export default Rsvp;
