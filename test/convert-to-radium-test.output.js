import React from "react";
import radium from "react-wildcat-radium";
import styles from "styles/styles.js";

@radium
class Article extends React.Component {
    render() {
        return (
            <div>
                // string literal classNames stay as classNames
                <span className="icon-class"></span>
                <span className="icon-class"></span>
                <span className="icon-class"></span>
                <span style={{width: "10px"}} className="icon-class"></span>

                // js objects will get converted to style tags
                // and merged into one object
                // Calls to the classNames module will be stripped out
                <span style={styles.one}></span>
                <span style={styles.one}></span>
                <span style={{
                    ...styles.one,
                    ...styles.two
                }}></span>
                <span
                    style={{
                        ...styles.one,
                        ...{width: "10px"}
                    }}></span>
                <span
                    style={{
                        ...styles.one,
                        ...styles.two
                    }}
                    className="icon other-icon"></span>

                // nodes with interactive styles (hover state, media queries)
                // get a "key" attribute added to them
                <span style={styles.hover} key="hover"></span>
                <span style={styles.media1} key="media1"></span>
                <span style={styles.media2} key="media2"></span>
                <span style={styles.media3} key="media3"></span>
                <span style={styles.media4} key="media4"></span>

                // conditional styles in a classNames call cannot be
                // migrated programmatically, will stay unchanged
                <span className={classNames("icon", {"someStyle": booleanValue})}></span>
            </div>
        );
    }
}
