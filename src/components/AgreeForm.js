// React
import React from "react";
// Material-UI
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import Icon from "@material-ui/core/Icon";

const styles = theme => ({
  card: {
    flex: 1,
    // display: "flex",
    // justifyContent: "center",
    maxWidth: 580
  },
  span: {
    cursor: "pointer"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

class AgreeForm extends React.Component {
  state = {
    checked: false,
    email: ""
  };

  _handleChecked = event => {
    this.setState({ checked: !this.state.checked });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleClick = () => {
    alert("준비 중 입니다.");
  };

  render() {
    const { classes } = this.props;
    const { checked, email } = this.state;
    const { _handleChecked, handleChange, handleClick } = this;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            포트폴리오 폐기 동의서
          </Typography>
          <Typography component="p">
            채용 과정 종료 후, 포트폴리오 폐기를 동의하시면 아래 체크박스를
            체크하시고 확인 버튼을 눌러주세요.<br />
          </Typography>
          <Typography variant="caption">
            포트폴리오를 채용 과정 외 다른 용도로 사용하시거나 복제, 배포 시
            법적 책임을 질 수 있습니다.
          </Typography>
          <TextField
            placeholder="Email"
            value={email}
            onChange={handleChange("email")}
            fullWidth
          />
          <div>
            <Checkbox checked={checked} onChange={_handleChecked} />
            <span className={classes.span} onClick={_handleChecked}>
              위 약관에 동의합니다.
            </span>
          </div>
          <CardActions>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              fullWidth
              onClick={handleClick}
            >
              동의 및 포트폴리오 확인
              <Icon className={classes.rightIcon}>send</Icon>
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(AgreeForm);
