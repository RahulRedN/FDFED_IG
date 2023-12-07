import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from ".././theme";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "./Header";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import StatBox from "./StatBox";
import ProgressCircle from "./ProgressCircle";
import PieChart from "./PieChart";
import {
  Money,
  MoneyOff,
  MoneyOffCsredSharp,
  MoneySharp,
  NotInterested,
  NotInterestedTwoTone,
} from "@mui/icons-material";
import { useSelector } from "react-redux";

const Dashboard = ({bgc}) => {
  const data = useSelector((state) => state.company);
  console.log(data);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box padding="20px" backgroundColor={bgc}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="900"
            subtitle="Jobs Posted"
            progress="0"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "50px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Applications Accepted"
            progress="0.50"
            increase="+21%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "50px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="Applications Rejected"
            progress="0.30"
            increase="+5%"
            icon={
              <NotInterestedTwoTone
                sx={{ color: colors.greenAccent[600], fontSize: "50px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="Rs.325,134"
            subtitle="Average Salary Offered"
            progress="0.80"
            increase="+43%"
            icon={
              <MoneySharp
                sx={{ color: colors.greenAccent[600], fontSize: "50px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Monthly Trend of Applications
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
          Geography Based Traffic
          </Typography>
          <Box height="200px">
          <GeographyChart isDashboard={true} />
          </Box>
        </Box> */}
        <Box //pie chart
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>

        <Box //pie chart
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Current State of Monthly Applications
          </Typography>
          <PieChart />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
