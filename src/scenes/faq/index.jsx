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
        <AccordionDetails sx={{display:'flex', justifyContent:'space-between'}} >
					<Box	sx={{display:'flex', flexDirection:'column', gap:'10px', width:'45%'}}>
						<Typography>
						<ProblemsBox header='Description :' body="Broken part and dysfunctional electronic component." />
						</Typography>
						<Typography>
						<ProblemsBox header='Lider Name :' body='Name' />
						</Typography>
						<Typography>
						<ProblemsBox header="District :" body="02c10" />
						</Typography>
						<Typography>
						<ProblemsBox header='Work Place :' body="FD RH" />
						</Typography>
					</Box>
					<img  src={`../assets/hutchinson.png`} width="50%" alt="img"/>
        </AccordionDetails>
      </Accordion>
			<Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            <ProblemsBox header="Lorem ipsum dolor sit amet" priority="Low" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{display:'flex', justifyContent:'space-between'}} >
					<Box	sx={{display:'flex', flexDirection:'column', gap:'10px', width:'45%'}}>
						<Typography>
						<ProblemsBox header='Description :' body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
						</Typography>
						<Typography>
						<ProblemsBox header='Lider Name :' body='Lider Name' />
						</Typography>
						<Typography>
						<ProblemsBox header="District :" body="District" />
						</Typography>
						<Typography>
						<ProblemsBox header='Work Place :' body="Work Place" />
						</Typography>
					</Box>
					<img  src={`../assets/hutchinson.png`} width="50%" alt="img"/>
        </AccordionDetails>
      </Accordion>
			<Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            <ProblemsBox header="Sed do eiusmod tempor incididunt" priority="Critical" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{display:'flex', justifyContent:'space-between'}} >
					<Box	sx={{display:'flex', flexDirection:'column', gap:'10px', width:'45%'}}>
						<Typography>
						<ProblemsBox header='Description :' body="Consectetur adipiscing elit, sed do eiusmod tempor incididunt" />
						</Typography>
						<Typography>
						<ProblemsBox header='Lider Name :' body='Lider Name' />
						</Typography>
						<Typography>
						<ProblemsBox header="District :" body="District" />
						</Typography>
						<Typography>
						<ProblemsBox header='Work Place :' body="Work Place" />
						</Typography>
					</Box>
					<img  src={`../assets/hutchinson.png`} width="50%" alt="img"/>
        </AccordionDetails>
      </Accordion>
			<Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            <ProblemsBox header="Excepteur sint occaecat cupidatat non proident" priority="Medium" />
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{display:'flex', justifyContent:'space-between'}} >
					<Box	sx={{display:'flex', flexDirection:'column', gap:'10px', width:'45%'}}>
						<Typography>
						<ProblemsBox header='Description :' body="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
						</Typography>
						<Typography>
						<ProblemsBox header='Lider Name :' body='Lider Name' />
						</Typography>
						<Typography>
						<ProblemsBox header="District :" body="District" />
						</Typography>
						<Typography>
						<ProblemsBox header='Work Place :' body="Work Place" />
						</Typography>
					</Box>
					<img  src={`../assets/hutchinson.png`} width="50%" alt="img"/>
        </AccordionDetails>
      </Accordion>
			<Accordion sx={{position:'relative'}} >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            <ProblemsBox header="Scelerisque varius morbi" priority="Major" />
          </Typography>
        </AccordionSummary>
				<AccordionDetails sx={{display:'flex', justifyContent:'space-between'}} >
					<Box	sx={{display:'flex', flexDirection:'column', gap:'10px', width:'45%'}}>
						<Typography>
						<ProblemsBox header='Description :' body="Vitae semper quis lectus nulla at. Scelerisque varius morbi enim nunc faucibus a pellentesque sit amet. Sem viverra aliquet eget sit amet. Libero justo laoreet sit amet cursus sit. " />
						</Typography>
						<Typography>
						<ProblemsBox header='Lider Name :' body='Lider Name' />
						</Typography>
						<Typography>
						<ProblemsBox header="District :" body="District" />
						</Typography>
						<Typography>
						<ProblemsBox header='Work Place :' body="Work Place" />
						</Typography>
					</Box>
					<img  src={`../assets/hutchinson.png`} width="50%" alt="img"/>
        </AccordionDetails>      
      </Accordion>
    </Box>
  );
};

export default FAQ;
