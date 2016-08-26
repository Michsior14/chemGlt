import React, {Component, PropTypes} from "react";
import AppBar from "material-ui/AppBar";
import NavigationMenu from "./NavigationMenu";
import UnloggedRightMenu from "./UnloggedRightMenu"

const propTypes = {
    styles: PropTypes.object.isRequired,
    tappedLeftNav: PropTypes.func.isRequired
};

const defaultProps = {
    styles: {
        title: {
            cursor: 'pointer'
        }
    }
};


class NavigationTop extends Component {
    constructor(props) {
        super(props);
        this.handleNavigationMenuTap = this.handleNavigationMenuTap.bind(this);
    }

    handleBarTouchTap() {

    }

    handleNavigationMenuTap() {
        this.navigationMenu.handleToggle();
        this.props.tappedLeftNav();
    }

    render() {
        const rightMenu = (
            <UnloggedRightMenu />
        );

        return (
            <div>
                <AppBar
                    title={<span style={this.props.styles.title}>ChemGit</span>}
                    onTouchTap={this.handleBarTouchTap}
                    onLeftIconButtonTouchTap={this.handleNavigationMenuTap}
                    iconElementRight={rightMenu}
                >
                    <NavigationMenu ref={ref => {
                        this.navigationMenu = ref;
                    }}
                    />
                </AppBar>
            </div>
        );
    }
}

NavigationTop.propTypes = propTypes;

NavigationTop.defaultProps = defaultProps;

export default NavigationTop;
