import React from "react";
import MainContainer from "./MainContainer";
import qrcode from "img/qrcode.png";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class AuthPage extends React.Component {
  render() {
    return (
      <MainContainer>
        <Card>
          <CardContent>
            <img src={qrcode} style={{ width: "100%" }} />
            <Typography variant="headline" component="h2">
              이 링크는 8월 10일 까지만 유효합니다. <br />
              문제가 있으면 아래 이메일로 연락주세요. <br />
              <a href="mailto:qvil1127@gmail.com">qvil1127@gmail.com</a>
              <ul>
                <li>
                  링크 :{" "}
                  <a href="http://gofile.me/3s65s/dEpjdEiG7" target="_blank">
                    http://gofile.me/3s65s/dEpjdEiG7
                  </a>
                </li>
                <li>비밀번호 : tkfkdgkqslek</li>
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </MainContainer>
    );
  }
}

export default AuthPage;
