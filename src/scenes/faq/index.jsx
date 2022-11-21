import { Box, useTheme } from '@mui/material';
import Header from '../../components/Header';
import ProblemsBox from '../../components/ProblemsBox';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { tokens } from '../../theme';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header
        title="Problems and Issue"
        subtitle="Frequently Problems and Issue"
      />

      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            <ProblemsBox header="Equipment failure" priority="Critical" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ProblemsBox body="Broken part and dysfunctional electronic component." />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            <ProblemsBox body="Lider Name" />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            <ProblemsBox body="District" />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            <ProblemsBox body="Work Place" />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <img  src={`../assets/hutchinson.png`} alt="img"/>
        </AccordionDetails>
      </Accordion>
			<Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            <ProblemsBox header="Equipment failure" priority="Critical" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ProblemsBox body="Broken part and dysfunctional electronic component." />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            <ProblemsBox body="Lider Name" />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            <ProblemsBox body="District" />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            <ProblemsBox body="Work Place" />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <img  src={`../assets/hutchinson.png`} alt="img"/>
        </AccordionDetails>
      </Accordion>
			<Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            <ProblemsBox header="Equipment failure" priority="Critical" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ProblemsBox body="Broken part and dysfunctional electronic component." />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            <ProblemsBox body="Lider Name" />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            <ProblemsBox body="District" />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            <ProblemsBox body="Work Place" />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <img  src={`../assets/hutchinson.png`} alt="img"/>
        </AccordionDetails>
      </Accordion>
			<Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            <ProblemsBox header="Equipment failure" priority="Critical" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ProblemsBox body="Broken part and dysfunctional electronic component." />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            <ProblemsBox body="Lider Name" />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            <ProblemsBox body="District" />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            <ProblemsBox body="Work Place" />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <img  src={`../assets/hutchinson.png`} alt="img"/>
        </AccordionDetails>
      </Accordion>
			<Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            <ProblemsBox header="Equipment failure" priority="Critical" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <ProblemsBox body="Broken part and dysfunctional electronic component." />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            <ProblemsBox body="Lider Name" />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            <ProblemsBox body="District" />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>
            <ProblemsBox body="Work Place" />
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <img  src={`../assets/hutchinson.png`} alt="img"/>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
