import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Spacer from "../../components/Spacer";
import Fragment from "react-dot-fragment";
import { coursesButton, enrollButton } from "../../style/homeStyle.mjs";
import dugaa from "../../style/coursesImage/Ellipse 4 (1).svg";
import group from "../../style/coursesImage/Group 1 (2).png";
import dartLogo from "../../style/coursesImage/dart-logo-for-shares.svg";
import flutterLogo from "../../style/coursesImage/Google-flutter-logo.svg";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import certificate from "../../style/coursesImage/61c36d569c399f1b1fd84928_sdet_certificate 1.png";

const steps = [
  {
    label: "Get started",
  },
  {
    label: "Dart language",
  },
  {
    label: "Introduction    Flutter",
  },
  {
    label: "Flutter Advanced",
  },
  {
    label: "Finish Course (Get Certificate)",
  },
];

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#CA0088",
  },
}));

const AppDevelopmentFirst = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <>
      <Box
        sx={{
          display: { lg: "block", sm: "none", xs: "none" },
        }}
      >
        <Spacer count={6} />
        <Container>
          <Grid container>
            <Grid item lg={6}>
              <Stack>
                <Typography
                  sx={{
                    color: "#f4f4f4",
                    fontSize: "36px",
                    fontFamily: "AppRegular",
                    fontWeight: "600",
                  }}
                >
                  App development
                </Typography>
                <Spacer count={1} />
                <Typography
                  sx={{
                    color: "#d8d8d8",
                    fontSize: "14px",
                    fontFamily: "AppRegular",
                    fontWeight: "400",
                  }}
                >
                  Learn how to create IOS and Android <br /> mobile applications
                  in Bootcamp <br /> with qualified teachers.
                </Typography>
                <Spacer count={3} />
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "18px",
                    fontFamily: "AppRegular",
                    fontWeight: "600",
                  }}
                >
                  Key Higlights:
                </Typography>
                <Fragment>
                  <li style={{ color: "#fff", lineHeight: "30px" }}>
                    Rigorous Instructor Led Training
                  </li>
                  <li style={{ color: "#fff", lineHeight: "30px" }}>
                    Projects and Exercises
                  </li>
                  <li style={{ color: "#fff", lineHeight: "30px" }}>
                    Job Assistance
                  </li>
                  <li style={{ color: "#fff", lineHeight: "30px" }}>
                    Remote Learning
                  </li>
                  <li style={{ color: "#fff", lineHeight: "30px" }}>
                    Certification
                  </li>
                  <li style={{ color: "#fff", lineHeight: "30px" }}>
                    Mentor Support
                  </li>
                </Fragment>
                <Spacer count={2} />
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" sx={enrollButton}>
                    Apply now
                  </Button>
                  <Button variant="outlined" sx={coursesButton}>
                    Courses detalis
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid item lg={6}>
              <img
                src={group}
                style={{
                  width: "100%",
                }}
                alt="group"
              />
            </Grid>
          </Grid>
        </Container>
        <Stack>
          <img
            src={dugaa}
            style={{ width: "30%", marginTop: "-43%" }}
            alt="duga"
          />
        </Stack>
      </Box>
      <Spacer count={2} />
      <Box
        sx={{
          display: { lg: "none", sm: "none", xs: "block" },
          overflowX: "hidden",
        }}
      >
        <Container>
          <Typography
            sx={{
              color: "#f4f4f4",
              fontSize: "30px",
              fontFamily: "AppRegular",
              fontWeight: "600",
            }}
          >
            App development
          </Typography>
          <Typography
            sx={{
              color: "#d8d8d8",
              fontSize: "14px",
              fontFamily: "AppRegular",
              fontWeight: "400",
            }}
          >
            Learn how to create IOS and Android <br /> mobile applications in
            Bootcamp <br /> with qualified teachers.
          </Typography>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "18px",
              fontFamily: "AppRegular",
              fontWeight: "600",
            }}
          >
            Key Higlights:
          </Typography>
          <Fragment>
            <li style={{ color: "#fff", lineHeight: "30px" }}>
              Rigorous Instructor Led Training
            </li>
            <li style={{ color: "#fff", lineHeight: "30px" }}>
              Projects and Exercises
            </li>
            <li style={{ color: "#fff", lineHeight: "30px" }}>
              Job Assistance
            </li>
            <li style={{ color: "#fff", lineHeight: "30px" }}>
              Remote Learning
            </li>
            <li style={{ color: "#fff", lineHeight: "30px" }}>Certification</li>
            <li style={{ color: "#fff", lineHeight: "30px" }}>
              Mentor Support
            </li>
          </Fragment>
          <Stack spacing={2} mt={2}>
            <Button variant="contained" sx={enrollButton}>
              Apply now
            </Button>
            <Button variant="outlined" sx={coursesButton}>
              Courses detalis
            </Button>
          </Stack>
        </Container>
        <Stack>
          <img
            src={group}
            style={{
              width: "100%",
              marginTop: "-45%",
              marginLeft: "35%",
            }}
            alt="group"
          />
        </Stack>
        <Container>
          <Spacer count={4} />
          <Typography
            id="about"
            sx={{
              color: "#F4F4F4",
              fontFamily: "AppRegular",
              fontWeight: "600",
              fontSize: "28px",
            }}
          >
            App development
          </Typography>
          <Spacer count={2} />
          <Typography
            sx={{
              color: "#D8D8D8",
              fontFamily: "AppRegular",
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            Learn how to create <b> IOS </b> and <b> Android </b> <br /> mobile
            applications in Bootcamp <br /> with qualified teachers.
          </Typography>
          <Spacer count={2} />
          <Typography
            sx={{
              color: "#D8D8D8",
              fontFamily: "AppRegular",
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            This Automation Testing course is designed to train people with no
            IT <br /> background to become software engineers that combine
            software testing <br /> and development to automate the testing of
            software, using tools based <br /> on Java and Selenium.
          </Typography>
          <Spacer count={2} />
          <Typography
            sx={{
              color: "#D8D8D8",
              fontFamily: "AppRegular",
              fontWeight: "400",
              fontSize: "14px",
            }}
          >
            SDET course duration is six months. During this time period,
            students will <br /> learn the basis of software non-technical as
            well as technical skills required <br /> to be a successful Software
            Developer Engineer in Testing (SDET). As part <br /> of the
            non-technical SDET training course, student will learn basis of
            <br /> software testing and software development models. Technical
            part of the <br /> SDET Automation Testing training is made of three
            parts: first students <br /> learn Java programming language. Next,
            they learn testing <br /> tools/frameworks such as Selenium
            WebDriver, TestNG, Cucumber, Junit, <br /> GIT, REST Assured, AWS
            and Jenkins. In this phase they will also learn SQL <br />
            (database) for backend testing. In the final phase of software
            testing <br /> training students will build different types of
            testing automation <br />
            frameworks.
          </Typography>
          <Spacer count={4} />
          <Typography
            id="curriculum"
            sx={{
              color: "#F4F4F4",
              fontFamily: "AppRegular",
              fontWeight: "600",
              fontSize: "28px",
            }}
          >
            App development course Curriculum
          </Typography>
          <Spacer count={2} />
          <BorderLinearProgress variant="determinate" value={50} />
          <Spacer count={1} />
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#f4f4f4",
                fontFamily: "AppRegular",
                borderRadius: "10px",
                border: "1px solid #1d4cf2",
                backdropFilter: "blur(15px)",
              }}
            >
              Dart
            </Button>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#f4f4f4",
                fontFamily: "AppRegular",
                borderRadius: "10px",
                backdropFilter: "blur(15px)",
                background: "rgba(19, 11, 52, 0.5)",

                "&:hover": {
                  background: "rgba(19, 11, 52, 0.5)",
                },
              }}
            >
              Flutter
            </Button>
          </Stack>
          <Spacer count={2} />
          <Typography
            id="programmingLg"
            sx={{
              color: "#d8d8d8",
              fontSize: "14px",
              fontFamily: "AppRegular",
              fontWeight: "400",
            }}
          >
            This Automation Testing course is designed to train people with no
            IT <br /> background to become software engineers that combine
            software testing <br /> and development to automate the testing of
            software, using tools based on <br /> Java and Selenium.
          </Typography>
          <Spacer count={3} />
          <Box id="programming">
            <Typography
              sx={{
                color: "#f4f4f4",
                fontSize: "30px",
                fontFamily: "AppRegular",
                fontWeight: "600",
              }}
            >
              Programming languages and Tools covered
            </Typography>
            <Spacer count={2} />
            <Stack direction="row" justifyContentent="center" spacing={2}>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#f4f4f4",
                  fontFamily: "AppRegular",
                  borderRadius: "10px",
                  border: "1px solid #1d4cf2",
                  backdropFilter: "blur(15px)",
                  width: "120px",
                }}
              >
                <img
                  src={dartLogo}
                  style={{
                    width: "20px",
                    height: "30px",
                    marginRight: "10px",
                  }}
                  alt="dart logo"
                />
                Dart
              </Button>
              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  color: "#f4f4f4",
                  fontFamily: "AppRegular",
                  borderRadius: "10px",
                  border: "1px solid #1d4cf2",
                  backdropFilter: "blur(15px)",
                  width: "140px",
                }}
              >
                <img
                  src={flutterLogo}
                  style={{
                    width: "20px",
                    height: "30px",
                    marginRight: "10px",
                  }}
                  alt="dart logo"
                />
                Flutter
              </Button>
            </Stack>
          </Box>
          <Spacer count={3} />
          <Box id="journey-map">
            <Typography
              sx={{
                color: "#f4f4f4",
                fontSize: "30px",
                fontFamily: "AppRegular",
                fontWeight: "600",
              }}
            >
              Course journey map
            </Typography>
            <Spacer count={2} />
            <Box sx={{ maxWidth: 400 }}>
              <Stepper
                activeStep={activeStep}
                orientation="vertical"
                sx={{
                  "& .MuiStepIcon-root.MuiStepIcon-active": {
                    backgroundColor: "green",
                  },
                }}
              >
                {steps.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                      sx={{
                        "& .MuiStepLabel-label": {
                          color: "blue",
                        },
                      }}
                      optional={
                        index === 4
                          ? //   <Stack direction="row" ml={"60%"}>
                            //     <img
                            //       src={journeyLine}
                            //       style={{ width: "200px", height: "2px" }}
                            //       alt="journey line"
                            //     />
                            //   </Stack>
                            null
                          : null
                      }
                    >
                      {step.label}
                    </StepLabel>
                    <StepContent>
                      <Box sx={{ mb: 2 }}>
                        <div>
                          <Button
                            variant="contained"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            {index === steps.length - 1 ? "Finish" : "Continue"}
                          </Button>
                          <Button
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            Back
                          </Button>
                        </div>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length && (
                <Stack
                  direction="row"
                  width="100%"
                  mt={3}
                  justifyContent="center"
                >
                  <img
                    src={certificate}
                    alt="certificate"
                    style={{ width: "100%" }}
                  />
                </Stack>
              )}
            </Box>
          </Box>
          <Spacer count={4} />
          <Box id="FAQ">
            <Typography
              sx={{
                color: "#f4f4f4",
                fontSize: "30px",
                fontFamily: "AppRegular",
                fontWeight: "600",
              }}
            >
              F.A.Q
            </Typography>
            <Spacer count={1} />
            <Accordion>
              <AccordionSummary
                sx={{
                  background: "#130b34",
                }}
                expandIcon={<ArrowDropDownIcon sx={{ color: "#d8d8d8" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    fontFamily: "AppRegular",
                    fontWeight: "400",
                    color: "#d8d8d8",
                    fontSize: "16px",
                  }}
                >
                  This Automation Testing course?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  background: "#130b34",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "AppRegular",
                    fontWeight: "400",
                    color: "#d8d8d8",
                    fontSize: "13px",
                  }}
                >
                  This Automation Testing course is designed to train people
                  with no IT background to become software engineers that
                  combine software testing and development to automate the
                  testing of software, using tools based on Java and Selenium.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Spacer count={1} />
            <Accordion>
              <AccordionSummary
                sx={{
                  background: "#130b34",
                }}
                expandIcon={<ArrowDropDownIcon sx={{ color: "#d8d8d8" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    fontFamily: "AppRegular",
                    fontWeight: "400",
                    color: "#d8d8d8",
                    fontSize: "16px",
                  }}
                >
                  This Automation Testing course?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  background: "#130b34",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "AppRegular",
                    fontWeight: "400",
                    color: "#d8d8d8",
                    fontSize: "13px",
                  }}
                >
                  This Automation Testing course is designed to train people
                  with no IT background to become software engineers that
                  combine software testing and development to automate the
                  testing of software, using tools based on Java and Selenium.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Spacer count={1} />
            <Accordion>
              <AccordionSummary
                sx={{
                  background: "#130b34",
                }}
                expandIcon={<ArrowDropDownIcon sx={{ color: "#d8d8d8" }} />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography
                  sx={{
                    fontFamily: "AppRegular",
                    fontWeight: "400",
                    color: "#d8d8d8",
                    fontSize: "16px",
                  }}
                >
                  This Automation Testing course?
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  background: "#130b34",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "AppRegular",
                    fontWeight: "400",
                    color: "#d8d8d8",
                    fontSize: "13px",
                  }}
                >
                  This Automation Testing course is designed to train people
                  with no IT background to become software engineers that
                  combine software testing and development to automate the
                  testing of software, using tools based on Java and Selenium.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default AppDevelopmentFirst;
