injectTapEventPlugin();

var {
  FormsyText
} = FMUI;
var {
  AppBar,
  RaisedButton,
  FloatingActionButton,
  LeftNav,
  MenuItem,
  AppCanvas
} = MUI;
var {
  ThemeManager,
  LightRawTheme
} = Styles;


Header = React.createClass({

componentWillMount () {
        let newMuiTheme = this.state.muiTheme;
        newMuiTheme.appBar.color = Styles.Colors.blueGrey800;
        newMuiTheme.appBar.height = 44;
        this.setState({
            muiTheme: newMuiTheme,
        });
    },
    getChildContext () {
        return {
            muiTheme: this.state.muiTheme,
        };
    },
    contextTypes: {
        muiTheme: React.PropTypes.object,
    },
    childContextTypes : {
        muiTheme: React.PropTypes.object,
    },
    getInitialState () {
        return {
            muiTheme: this.context.muiTheme,
        };
    },

toggleLeftNavbar: function (e) {
    this.refs.leftNav.toggle();
  },
  toggleRightNavbar: function (e) {
    this.refs.rightNav.toggle();
  },

render: function () {
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
      <AppCanvas>
        <AppBar iconElementLeft=
          {
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

          iconElementRight=
          {
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
      </AppCanvas>
    );
  }
});
