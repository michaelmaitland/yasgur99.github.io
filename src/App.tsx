import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StyleSheet } from "./constants/Styles";
import { AnimatableStyles, AnimatedSwitch } from "react-router-transition";

import TopNavigation from "./components/view/navigation/TopNavigation";
import Footer from "./components/view/navigation/Footer";

import DownloadRoute from "./routes/home/Download";
import FeaturesRoute from "./routes/features/Features";
import AboutRoute from "./routes/about/About";
import SupportRoute from "./routes/support/Support";
import LegalRoute from "./routes/legal/Legal";
import TOSRoute from "./routes/legal/TOS";
import PrivacyPolicyRoute from "./routes/legal/PrivacyPolicy";
import DataPolicyRoute from "./routes/legal/DataPolicy";
import PostPreviewRoute from "./routes/app/post/PostPreview";
import NotFoundRoute from "./routes/home/NotFound";

function App() {
  return (
    <Router>
      <div className="app">
        <TopNavigation />
        <AnimatedApp />
        <Footer />
      </div>
    </Router>
  );
}

function mapTransitionStyles(styles: AnimatableStyles) {
  return {
    opacity: styles.opacity,
    transform: `translate(0px, ${styles.translate}px)`,
  };
}

function AnimatedApp() {
  return (
    <div style={styles.body}>
      <AnimatedSwitch
        atEnter={{ opacity: 0, translate: -32 }}
        atLeave={{ opacity: 0, translate: 32 }}
        atActive={{ opacity: 1, translate: 0 }}
        mapStyles={mapTransitionStyles}
        className="switch-wrapper"
        runOnMount
      >
        <Route exact path="/" component={DownloadRoute} />
        <Route exact path="/features" component={FeaturesRoute} />
        {/* <Route exact path="/about" component={AboutRoute} /> */}
        <Route exact path="/support" component={SupportRoute} />
        <Route exact path="/legal" component={LegalRoute} />
        <Route exact path="/TOS" component={TOSRoute} />
        <Route exact path="/privacypolicy" component={PrivacyPolicyRoute} />
        <Route exact path="/datapolicy" component={DataPolicyRoute} />
        <Route path={`/app/posts/:postId`} component={PostPreviewRoute} />
        <Route component={NotFoundRoute} />
      </AnimatedSwitch>
    </div>
  );
}

const styles: StyleSheet = {
  body: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    // height: "1vh",
    // height: "100%",
    marginTop: 128,
    marginBottom: 32,
  },
  particles: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
  },
};

export default App;
