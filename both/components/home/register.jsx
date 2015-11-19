injectTapEventPlugin();

let {
  FormsyCheckbox,
  FormsyDate,
  FormsyRadio,
  FormsyRadioGroup,
  FormsySelect,
  FormsyText,
  FormsyTime,
  FormsyToggle
} = FMUI;

Register = React.createClass({
  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext(){
    return {
      muiTheme: Styles.ThemeManager.getMuiTheme(Styles.LightRawTheme)
    }
  },

  getInitialState: function () {
    return {
      canSumbit: false
    };
  },

  errorMessages: {
    wordsError: "Please only use letters",
    numericError: "Please provide a number",
    urlError: "Please provide a valid URL"
  },

  selectFieldItems: [
    { payload: 'never', text: 'Never' },
    { payload: 'nightly', text: 'Every Night' },
    { payload: 'weeknights', text: 'Weeknights' },
    { payload: 'weekends', text: 'Weekends' },
    { payload: 'weekly', text: 'Weekly' }
  ],

  styles: {
    paperStyle: {
      width: 300,
      margin: 20,
      padding: 20
    },
    switchStyle: {
      marginBottom:16
    },
    submitStyle: {
      marginTop: 32
    }
  },

  enableButton: function () {
    this.setState({
      canSubmit: true
    });
  },

  disableButton: function () {
    this.setState({
      canSubmit: false
    });
  },

  submitForm: function (data) {
    if (data.userpwd == data.pwdcheck) {
      if (data.userpwd.length >= 6) {
        Meteor.protyp_users.insert({
          email: data.email,
          pwd: data.userpwd
        });
        console.log(Meteor.protyp_users)
        //console.log(Meteor.protyp_users.find({email:data.email}));
        //console.log(Meteor.users.find());
        alert("Information is registered successfully");
        //open("/home", "_self");
      //  alert(JSON.stringify(data, null, 4));
      } else {
        alert("Password length must be grater than 6 !!!");
      }
    } else {
      alert("Incorrect Password !!!");
    }
  },

  notifyFormError: function (data) {
    console.error('Form error:', data);
  },

  render: function () {
    let {paperStyle, switchStyle, submitStyle } = this.styles;
    let { wordsError, numericError, urlError } = this.errorMessages;

    return (
      <Paper style={paperStyle}>

        <Formsy.Form
          onValid={this.enableButton}
          onInvalid={this.disableButton}
          onValidSubmit={this.submitForm}
          onInvalidSubmit={this.notifyFormError} >

          <FormsyText
            name='useremail'
            validations='isWords'
            validationError={wordsError}
            required
            className="formsy-email"
            hintText="What is your email?"
            floatingLabelText="User Email" />

          <FormsyText
            name='userpwd'
            type="password"
            required
            hintText="Type password"
            floatingLabelText="Password" />

          <FormsyText
            name='pwdcheck'
            type="password"
            required
            hintText="Retype password"
            floatingLabelText="Retype" />

          <RaisedButton
            style={submitStyle}
            type="submit"
            label="Register" /> &nbsp;

          <RaisedButton
            style={submitStyle}
            type="submit"
            label="Cancel" />
        </Formsy.Form>
      </Paper>
    );
  }
});
