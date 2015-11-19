injectTapEventPlugin();

let {
  FormsyText
} = FMUI;
var {
  AppBar,
  RaisedButton,
  FloatingActionButton,
  LeftNav, MenuItem
} = MUI;
var {
  ThemeManager,
  LightRawTheme
} = MUI.Styles;


Header = React.createClass({
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
    wordsError: "Your password is incorrect",
    urlError: "Please provide a valid email"
  },

  styles: {
    paperStyle: {
      width: 300,
      margin: 20,
      padding: 20
    },
    switchStyle: {
      marginBottom:16
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
    // items = Items.find({userId: Meteor.userId()}).fetch();
    result = Meteor.protyp_users.find({email:data.email}).fetch();

    console.log(result);
    open("/home", "_self");
  },

  notifyFormError: function (data) {
    console.error('Form error:', data);
  },

  login: function () {

  },

  toggleLeftNavbar: function (e) {
    this.refs.leftNav.toggle();
  },
  toggleRightNavbar: function (e) {
    this.refs.rightNav.toggle();
  },

  render: function () {
    let {paperStyle, switchStyle, submitStyle } = this.styles;
    let { wordsError, urlError } = this.errorMessages;

    leftMenuItems = [
      { type: MenuItem.Types.SUBHEADER, text: 'This is left side bar' },
      { route: 'get-started', text: 'First' },
      { route: 'customization', text: 'Second' },
      { route: 'components', text: 'Third' }
    ];
    rightMenuItems = [
      { type: MenuItem.Types.SUBHEADER, text: 'This is right side bar' },
      { route: 'get-started', text: 'First' },
      { route: 'customization', text: 'Second' },
      { route: 'components', text: 'Third' }
    ];
    return (
      <div className="top-appbar">
        <AppBar
          iconElementLeft={
            <div className="header-left-area">
              <FloatingActionButton
                title="Register"
                iconClassName="muidocs-icon-action-grade"
                secondary={true}
                mini={true}
                onClick={this.toggleLeftNavbar}/>
              <h3>Protyp</h3>
            </div>
          }
          iconElementRight={
            <div>

              <Formsy.Form
                onValid={this.enableButton}
                onInvalid={this.disableButton}
                onValidSubmit={this.submitForm}
                onInvalidSubmit={this.notifyFormError} >

                <FormsyText
                  name='email'
                  required
                  className="header-inputbox"
                  hintText="What is your email?"
                  floatingLabelText="Email Address" />&nbsp;

                <FormsyText
                  name='password'
                  type='password'
                  required
                  className="header-inputbox"
                  primary={true}
                  hintText="What is your password?"
                  floatingLabelText="Password" />

                <FloatingActionButton
                  title="Log In"
                  type="submit"
                  iconClassName="muidocs-icon-action-grade"
                  mini={true} />&nbsp;
                <FloatingActionButton
                  title="Register"
                  iconClassName="muidocs-icon-action-grade"
                  secondary={true}
                  linkButton={true}
                  href="/register"
                  mini={true} />&nbsp;
                <FloatingActionButton
                  title="Show right nav"
                  onClick={this.toggleRightNavbar}
                  iconClassName="muidocs-icon-action-grade"
                  secondary={true}
                  mini={true} />
              </Formsy.Form>

            </div>
          } />
        <LeftNav
          className="side-nav"
          ref="leftNav"
          docked={true}
          menuItems={leftMenuItems} />

        <LeftNav
          className="side-nav"
          ref="rightNav"
          docked={true}
          openRight={true}
          menuItems={rightMenuItems} />
      </div>
    );
  }
});
