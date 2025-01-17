import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";

import RepositoryList from "./Repositories/RepositoryList.jsx";
import AppBar from "./AppBar/AppBar.jsx";
import SignIn from "./SignIn/SignIn.jsx";
import RepositorySingle from "./Repositories/RepositorySingle.jsx";
import CreateReview from "./Reviews/CreateReview.jsx";
import SignUp from "./SignUp/SignUp.jsx";
import MyReviewsList from './Reviews/MyReviewsList.jsx';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/sign-in" exact>
          <SignIn />
        </Route>
        <Route path="/sign-up" exact>
          <SignUp />
        </Route>
        <Route path="/create" exact>
          <CreateReview />
        </Route>
        <Route path="/my-reviews" exact>
          <MyReviewsList />
        </Route>
        <Route path="/:id" exact>
          <RepositorySingle />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;
