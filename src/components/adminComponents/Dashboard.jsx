import EdDiv, { EdH1, EdButton_admin } from "../../pages/admin/EdStyled";
import Title from "../../pages/admin/Title";
import MainParticipants from "./MainParticipants";

const Dashboard = () => {
  const participant = [
    {
      name: "Teachers",
      quantity: "24 Active",
    },
    {
      name: "Students",
      quantity: "320 Enrolled",
    },
    {
      name: "Attendance",
      quantity: "92% Today",
    },
  ];

  return (
    <EdDiv width={"100vw"} height={"100vh"} padding={"0"} display={"flex"}>
      <EdDiv
        width={"300px"}
        boxShadow={"none"}
        backgroundColor={"#0082f5"}
        padding={"0"}
      >
        <EdH1 color={"#fff"} fontWeight={"900"}>
          EduConnect
        </EdH1>
        <EdDiv
          width={"calc(100% - 40px)"}
          backgroundColor={"#0082f5"}
          boxShadow={"none"}
        >
          <EdButton_admin>Dashboard</EdButton_admin>
          <EdButton_admin>Manage Teachers</EdButton_admin>
          <EdButton_admin>Manage Students</EdButton_admin>
          <EdButton_admin>Reports & Attendance</EdButton_admin>
          <EdButton_admin>Settings</EdButton_admin>
          <EdButton_admin>Logout</EdButton_admin>
        </EdDiv>
      </EdDiv>

      <EdDiv backgroundColor={"#ddd"} width={"calc(100% - 300px)"}>
        <Title />

        <EdH1 fontWeight={"700"} textAlign={"left"} padding={"0"}>
          Welcome, Adam
        </EdH1>
        <EdH1
          textAlign={"left"}
          padding={"0"}
          margin={"-15px 0 0 0"}
          fontSize={"1rem"}
        >
          Here's an overview of today's data.
        </EdH1>

        <EdDiv
          backgroundColor={"#ddd"}
          justifyContent={"space-between"}
          boxShadow={"none"}
          padding={"0"}
          margin={"10px 0"}
          height={"80px"}
          display={"flex"}
        >
          {participant.map((item, index) => (
            <MainParticipants
              key={index.toString()}
              name={item.name}
              quantity={item.quantity}
            />
          ))}
        </EdDiv>
      </EdDiv>
    </EdDiv>
  );
};

export default Dashboard;
